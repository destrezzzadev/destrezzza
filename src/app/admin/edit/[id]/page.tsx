// src/app/admin/edit/[id]/page.tsx
'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductForm from '../../ProductForm';
import { getProductById, Product } from '../../../product/productService';

export default function EditProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      if (!id) return;
      try {
        const p = await getProductById(String(id));
        setProduct(p);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading product...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 uppercase">Edit Product</h1>
      <ProductForm mode="edit" initialProduct={product} />
    </div>
  );
}
