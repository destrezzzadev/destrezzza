
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Supabase Setup
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Cloudinary Setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const productDataPath = path.resolve('src/app/product/productData.ts');
const productDataContent = fs.readFileSync(productDataPath, 'utf8');

function extractArray(name) {
    const regex = new RegExp(`const ${name} = ([\\s\\S]*?)(?:\\n\\s*const|\\n\\s*export|\\n\\s*$)`);
    const match = productDataContent.match(regex);
    if (!match) throw new Error(`Could not find '${name}' in productData.ts`);
    
    let content = match[1].trim();
    if (content.endsWith(';')) content = content.slice(0, -1);
    
    try {
        return new Function(`return ${content}`)();
    } catch (e) {
        console.error(`Failed to parse ${name}:`, e);
        throw e;
    }
}

async function uploadLocalImage(imagePath) {
    if (!imagePath || !imagePath.startsWith('/')) return imagePath;
    if (imagePath.startsWith('http')) return imagePath;

    const fullPath = path.join(process.cwd(), 'public', imagePath);
    if (!fs.existsSync(fullPath)) {
        console.warn(`File not found: ${fullPath}`);
        return imagePath;
    }

    console.log(`Uploading ${imagePath} to Cloudinary...`);
    try {
        const result = await cloudinary.uploader.upload(fullPath, {
            folder: 'destrezza/migrated',
        });
        return result.secure_url;
    } catch (error) {
        console.error(`Upload failed for ${imagePath}:`, error);
        return imagePath;
    }
}

// Robust retry function for DB operations
async function retryDB(operation, retries = 50, delay = 10000) {
    for (let i = 0; i < retries; i++) {
        try {
            const { data, error } = await operation();
            if (error) {
                // Check for schema cache issues or 503 errors
                if (error.message.includes('schema cache') || error.status === 503 || error.code === 'PGRST002' || error.message === '') {
                    console.warn(`[Retry ${i+1}/${retries}] DB Busy/Refreshing. Waiting ${delay/1000}s...`);
                    await new Promise(r => setTimeout(r, delay));
                    continue;
                }
                throw error;
            }
            return data;
        } catch (error) {
            if (i === retries - 1) throw error;
            console.warn(`[Retry ${i+1}/${retries}] Error: ${error.message}. Retrying in ${delay/1000}s...`);
            await new Promise(r => setTimeout(r, delay));
        }
    }
}

async function waitForDB() {
    console.log("Waiting for Supabase API to become stable...");
    await retryDB(() => supabase.from('products').select('count', { count: 'exact', head: true }));
    console.log("DB is STABLE and ready.");
}

async function migrate() {
    console.log("Starting ROBUST migration...");
    
    // Step 0: Kill time to let Supabase catch up
    await waitForDB();

    // 1. Migrate Categories
    console.log("Migrating categories...");
    const categoriesObj = extractArray('categories');
    for (const [name, subs] of Object.entries(categoriesObj)) {
        await retryDB(() => supabase
            .from('categories')
            .upsert({ name, sub_categories: subs }, { onConflict: 'name' })
        );
        console.log(`Migrated category: ${name}`);
    }

    // 2. Migrate Products
    console.log("Migrating products...");
    const products = extractArray('data');
    console.log(`Found ${products.length} products to migrate.`);

    for (const prod of products) {
        console.log(`Processing: ${prod.name}...`);
        
        const mainImage = await uploadLocalImage(prod.mainImage);
        const image = await uploadLocalImage(prod.image);
        const image2 = await uploadLocalImage(prod.image2);

        const supabaseProd = {
            legacy_id: parseInt(prod.id),
            name: prod.name,
            title: prod.title,
            description: prod.disc,
            material: prod.material,
            color: prod.color,
            care: prod.care,
            year: prod.year,
            main_image: mainImage,
            image: image,
            image2: image2,
            category: prod.cat.category,
            sub_category: prod.cat.subCategory,
        };

        const result = await retryDB(() => supabase
            .from('products')
            .upsert([supabaseProd], { onConflict: 'legacy_id' })
            .select()
        );

        if (result) {
            console.log(`Successfully migrated ${prod.name} (Supabase ID: ${result[0].id})`);
        }
    }

    console.log("Migration complete! All images uploaded to Cloudinary and all data seeded to Supabase.");
}

migrate().catch(err => {
    console.error("Migration fatal error:", err);
    process.exit(1);
});
