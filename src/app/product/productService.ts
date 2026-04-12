import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc, query, orderBy, limit as firestoreLimit, startAfter } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import productData from './productData'

const { data: staticData, categories } = productData

export interface Product {
  id: string | number;
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

const PRODUCTS_COLLECTION = 'products';

// Simple in-memory cache
let cachedProducts: Product[] | null = null;

export async function getProducts(page: number = 1, limit: number = 12): Promise<PaginatedProducts> {
  const start = (page - 1) * limit
  const end = start + limit
  
  let allProducts: Product[];

  if (cachedProducts) {
    allProducts = cachedProducts;
  } else {
    // Fetch from Firestore
    console.log("Fetching products from Firestore...");
    const q = query(collection(db, PRODUCTS_COLLECTION), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const firestoreProducts = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Product[];

    allProducts = [...firestoreProducts, ...staticData];
    cachedProducts = allProducts;
  }
  
  return {
    products: allProducts.slice(start, end),
    hasMore: end < allProducts.length,
    total: allProducts.length,
    page
  }
}

export async function getProductById(id: string | number) {
  const idNum = Number(id);
  const staticProduct = staticData.find(product => product.id === idNum);
  if (staticProduct) return staticProduct;

  const docRef = doc(db, PRODUCTS_COLLECTION, String(id));
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Product;
  }
  return null;
}

function sanitizeData(data: any) {
  const clean: any = {};
  Object.keys(data).forEach(key => {
    if (data[key] !== undefined) {
      if (typeof data[key] === 'object' && data[key] !== null && !Array.isArray(data[key])) {
        clean[key] = sanitizeData(data[key]);
      } else {
        clean[key] = data[key];
      }
    }
  });
  return clean;
}

export async function addProduct(product: Omit<Product, 'id'>) {
  const cleanData = sanitizeData(product);
  const docRef = await addDoc(collection(db, PRODUCTS_COLLECTION), {
    ...cleanData,
    createdAt: new Date().toISOString()
  });
  return docRef.id;
}

export async function updateProduct(id: string, product: Partial<Product>) {
  const cleanData = sanitizeData(product);
  const docRef = doc(db, PRODUCTS_COLLECTION, id);
  await updateDoc(docRef, cleanData);
}

export async function deleteProduct(id: string) {
  const docRef = doc(db, PRODUCTS_COLLECTION, id);
  await deleteDoc(docRef);
}

export async function getFilteredProducts(filters: string[], page: number = 1, limit: number = 12): Promise<PaginatedProducts> {
  if (filters.length === 0) return getProducts(page, limit)
  
  const allProductsResponse = await getProducts(1, 1000); // Fetch all for filtering
  const allProducts = allProductsResponse.products;

  const filtered = allProducts.filter((item) => {
    const text = `${item.name} ${item.title} ${item.disc}`.toLowerCase()
    const catCategory = item.cat?.category?.toLowerCase() || ""
    const catSub = item.cat?.subCategory?.toLowerCase() || ""
    
    return filters.some((filter) => {
      const f = filter.toLowerCase()
      return text.includes(f) || catCategory.includes(f) || catSub.includes(f)
    })
  })
  
  const start = (page - 1) * limit
  const end = start + limit
  
  return {
    products: filtered.slice(start, end),
    hasMore: end < filtered.length,
    total: filtered.length,
    page
  }
}

export { categories }