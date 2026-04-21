
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

function escapeCSV(val) {
    if (val === null || val === undefined) return '';
    const str = String(val).replace(/"/g, '""');
    return `"${str}"`;
}

async function generateCSVs() {
    console.log("Generating CSVs (uploading images to Cloudinary)...");

    // 1. Categories CSV
    console.log("Processing categories...");
    const categoriesObj = extractArray('categories');
    let categoriesCSV = "name,sub_categories\n";
    for (const [name, subs] of Object.entries(categoriesObj)) {
        // PG Array format for CSV: "{val1,val2}"
        const pgArray = `{${subs.map(s => `"${s.replace(/"/g, '\\"')}"`).join(',')}}`;
        categoriesCSV += `${escapeCSV(name)},${escapeCSV(pgArray)}\n`;
    }
    fs.writeFileSync('categories_migration.csv', categoriesCSV);
    console.log("Created categories_migration.csv");

    // 2. Products CSV
    console.log("Processing products...");
    const products = extractArray('data');
    let productsCSV = "legacy_id,name,title,description,material,color,care,year,main_image,image,image2,category,sub_category\n";
    
    for (const prod of products) {
        console.log(`Processing ${prod.name}...`);
        const mainImage = await uploadLocalImage(prod.mainImage);
        const image = await uploadLocalImage(prod.image);
        const image2 = await uploadLocalImage(prod.image2);

        const row = [
            prod.id,
            prod.name,
            prod.title,
            prod.disc,
            prod.material,
            prod.color,
            prod.care,
            prod.year,
            mainImage,
            image,
            image2,
            prod.cat.category,
            prod.cat.subCategory
        ];
        
        productsCSV += row.map(escapeCSV).join(',') + '\n';
    }
    fs.writeFileSync('products_migration.csv', productsCSV);
    console.log("Created products_migration.csv");

    console.log("\nFINISHED! You can now import these files into Supabase.");
}

generateCSVs().catch(err => {
    console.error("CSV Generation failed:", err);
    process.exit(1);
});
