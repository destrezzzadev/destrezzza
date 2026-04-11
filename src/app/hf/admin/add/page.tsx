// src/app/hf/admin/add/page.tsx
import React from 'react';
import ProductForm from '../ProductForm';

export default function AddProductPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 uppercase">Add New Product</h1>
      <ProductForm mode="add" />
    </div>
  );
}
