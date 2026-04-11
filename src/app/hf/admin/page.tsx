// src/app/hf/admin/page.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts, deleteProduct, Product } from '../../product/productService';

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | number | null>(null);

  async function loadProducts() {
    setLoading(true);
    try {
      const response = await getProducts(1, 1000);
      setProducts(response.products);
    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id: string | number) => {
    if (typeof id === 'number') {
      alert('Cannot delete static products from the dashboard. Please remove them from productData.ts instead.');
      return;
    }

    if (confirm('Are you sure you want to delete this product?')) {
      setDeletingId(id);
      try {
        await deleteProduct(id);
        setProducts(products.filter(p => p.id !== id));
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product.');
      } finally {
        setDeletingId(null);
      }
    }
  };

  if (loading) return <div>Loading products...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 uppercase">Product Management</h1>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-left">
              <th className="py-4 font-bold uppercase text-xs text-gray-400">Image</th>
              <th className="py-4 font-bold uppercase text-xs text-gray-400">Name</th>
              <th className="py-4 font-bold uppercase text-xs text-gray-400">Category</th>
              <th className="py-4 font-bold uppercase text-xs text-gray-400">Source</th>
              <th className="py-4 font-bold uppercase text-xs text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4">
                  <div className="relative w-16 h-16 rounded overflow-hidden">
                    <Image 
                      src={product.mainImage} 
                      alt={product.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="py-4 font-medium">{product.name}</td>
                <td className="py-4 text-sm text-gray-600">
                  {product.cat?.category} / {product.cat?.subCategory}
                </td>
                <td className="py-4 text-xs font-bold">
                  <span className={typeof product.id === 'string' ? 'text-blue-600' : 'text-gray-400'}>
                    {typeof product.id === 'string' ? 'FIRESTORE' : 'STATIC'}
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex gap-3">
                    {typeof product.id === 'string' && (
                      <Link 
                        href={`/hf/admin/edit/${product.id}`}
                        className="text-xs font-bold uppercase hover:underline"
                      >
                        Edit
                      </Link>
                    )}
                    <button 
                      onClick={() => handleDelete(product.id)}
                      disabled={deletingId === product.id}
                      className={`text-xs font-bold uppercase ${deletingId === product.id ? 'text-gray-400' : 'text-red-600 hover:underline'}`}
                    >
                      {deletingId === product.id ? 'Deleting...' : 'Delete'}
                    </button>
                    <Link 
                      href={`/product/${product.id}`} 
                      target="_blank"
                      className="text-xs font-bold uppercase text-gray-400 hover:underline"
                    >
                      View
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
