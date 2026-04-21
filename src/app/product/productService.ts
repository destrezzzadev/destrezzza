import { supabase } from '@/lib/supabase';

export interface Product {
  id: string | number;
  legacy_id?: number;
  mainImage: string;
  image: string;
  image2: string;
  name: string;
  title: string;
  disc: string;
  material: string;
  color: string;
  care: string;
  year: string;
  cat: {
    category: string;
    subCategory: string;
  };
  createdAt?: any;
}

export interface PaginatedProducts {
  products: Product[]
  hasMore: boolean
  total: number
  page: number
}

// Map Supabase DB record to Product interface
function mapProduct(dbProduct: any): Product {
  return {
    id: dbProduct.id,
    legacy_id: dbProduct.legacy_id,
    name: dbProduct.name,
    title: dbProduct.title,
    disc: dbProduct.description,
    material: dbProduct.material,
    color: dbProduct.color,
    care: dbProduct.care,
    year: dbProduct.year,
    mainImage: dbProduct.main_image,
    image: dbProduct.image,
    image2: dbProduct.image2,
    cat: {
      category: dbProduct.category,
      subCategory: dbProduct.sub_category,
    },
    createdAt: dbProduct.created_at,
  };
}

export async function getProducts(page: number = 1, limit: number = 12): Promise<PaginatedProducts> {
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  const { data, count, error } = await supabase
    .from('products')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(start, end);

  if (error) {
    console.error("Error fetching products from Supabase:", error);
    return { products: [], hasMore: false, total: 0, page };
  }

  return {
    products: data.map(mapProduct),
    hasMore: count ? end < count - 1 : false,
    total: count || 0,
    page
  };
}

export async function getProductById(id: string | number) {
  // Check if it's a UUID or a legacy numeric ID
  const isUUID = String(id).length > 20; // Basic check for UUID vs short numeric string

  let query = supabase.from('products').select('*');
  
  if (isUUID) {
    query = query.eq('id', id);
  } else {
    query = query.eq('legacy_id', Number(id));
  }

  const { data, error } = await query.single();

  if (error || !data) {
    console.error("Error fetching product by ID:", error);
    return null;
  }

  return mapProduct(data);
}

export async function addProduct(product: Omit<Product, 'id'>) {
  const { data, error } = await supabase
    .from('products')
    .insert([{
      name: product.name,
      title: product.title,
      description: product.disc,
      material: product.material,
      color: product.color,
      care: product.care,
      year: product.year,
      main_image: product.mainImage,
      image: product.image,
      image2: product.image2,
      category: product.cat.category,
      sub_category: product.cat.subCategory,
    }])
    .select()
    .single();

  if (error) throw error;
  return data.id;
}

export async function updateProduct(id: string, product: Partial<Product>) {
  const updateData: any = {};
  if (product.name) updateData.name = product.name;
  if (product.title) updateData.title = product.title;
  if (product.disc) updateData.description = product.disc;
  if (product.material) updateData.material = product.material;
  if (product.color) updateData.color = product.color;
  if (product.care) updateData.care = product.care;
  if (product.year) updateData.year = product.year;
  if (product.mainImage) updateData.main_image = product.mainImage;
  if (product.image) updateData.image = product.image;
  if (product.image2) updateData.image2 = product.image2;
  if (product.cat?.category) updateData.category = product.cat.category;
  if (product.cat?.subCategory) updateData.sub_category = product.cat.subCategory;

  const { error } = await supabase
    .from('products')
    .update(updateData)
    .eq('id', id);

  if (error) throw error;
}

export async function deleteProduct(id: string) {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

export async function getFilteredProducts(filters: string[], page: number = 1, limit: number = 12): Promise<PaginatedProducts> {
  if (filters.length === 0) return getProducts(page, limit);
  
  // For filtering, we stick to a simple strategy for now:
  // Fetch all products (or a large batch) and filter client-side, 
  // or use Supabase's full-text search / or filters if complexity grows.
  // Given the small number of products (~100), client-side filtering is efficient.
  
  const { data, error } = await supabase
    .from('products')
    .select('*');

  if (error || !data) return { products: [], hasMore: false, total: 0, page };

  const allProducts = data.map(mapProduct);

  const filtered = allProducts.filter((item) => {
    const text = `${item.name} ${item.title} ${item.disc}`.toLowerCase();
    const catCategory = item.cat?.category?.toLowerCase() || "";
    const catSub = item.cat?.subCategory?.toLowerCase() || "";
    
    return filters.some((filter) => {
      const f = filter.toLowerCase();
      return text.includes(f) || catCategory.includes(f) || catSub.includes(f);
    });
  });
  
  const start = (page - 1) * limit;
  const end = start + limit;
  
  return {
    products: filtered.slice(start, end),
    hasMore: end < filtered.length,
    total: filtered.length,
    page
  };
}

// Fetch categories dynamically from the DB
export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*');
  
  if (error || !data) return {};
  
  // Convert back to the expected object format: { "Living": ["Sofa", ...], ... }
  const catObj: any = {};
  data.forEach(cat => {
    catObj[cat.name] = cat.sub_categories;
  });
  return catObj;
}