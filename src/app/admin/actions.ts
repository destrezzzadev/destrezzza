// src/app/admin/actions.ts
'use server'

import { v2 as cloudinary } from 'cloudinary';
import { addProduct, updateProduct, deleteProduct, Product } from '../product/productService';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function uploadToCloudinary(formData: FormData) {
  const file = formData.get('file') as File;
  if (!file) throw new Error('No file provided');

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return new Promise<string>((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: 'destrezza' },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          reject(error);
          return;
        }
        resolve(result!.secure_url);
      }
    ).end(buffer);
  });
}

export async function saveProductAction(product: Omit<Product, 'id'>, id?: string) {
  if (id) {
    await updateProduct(id, product);
    return id;
  } else {
    return await addProduct(product);
  }
}

export async function deleteProductAction(id: string) {
    await deleteProduct(id);
}
