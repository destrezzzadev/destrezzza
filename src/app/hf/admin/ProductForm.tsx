// src/app/hf/admin/ProductForm.tsx
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { categories, Product } from '../../product/productService';
import { uploadToCloudinary, saveProductAction } from './actions';
import Image from 'next/image';

interface ProductFormProps {
  initialProduct?: Product;
  mode: 'add' | 'edit';
}

export default function ProductForm({ initialProduct, mode }: ProductFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState({
    mainImage: false,
    image: false,
    image2: false,
  });

  const isDev = process.env.NODE_ENV === 'development';

  const [formData, setFormData] = useState<Omit<Product, 'id' | 'createdAt'>>({
    name: initialProduct?.name || (isDev && mode === 'add' ? 'Sample Chair' : ''),
    title: initialProduct?.title || (isDev && mode === 'add' ? 'Elegant Design' : ''),
    disc: initialProduct?.disc || (isDev && mode === 'add' ? 'A beautifully crafted chair for any space.' : ''),
    material: initialProduct?.material || (isDev && mode === 'add' ? 'Oak Wood' : ''),
    color: initialProduct?.color || (isDev && mode === 'add' ? 'Walnut' : ''),
    care: initialProduct?.care || (isDev && mode === 'add' ? 'Dry wipe only' : ''),
    year: initialProduct?.year || '2024 Collection',
    mainImage: initialProduct?.mainImage || '',
    image: initialProduct?.image || '',
    image2: initialProduct?.image2 || '',
    cat: {
      category: initialProduct?.cat?.category || (Object.keys(categories) as Array<keyof typeof categories>)[0],
      subCategory: initialProduct?.cat?.subCategory || categories[(Object.keys(categories) as Array<keyof typeof categories>)[0]][0],
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.includes('cat.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        cat: {
          ...prev.cat,
          [field]: value,
        },
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: 'mainImage' | 'image' | 'image2') => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(prev => ({ ...prev, [field]: true }));
    const uploadFormData = new FormData();
    uploadFormData.append('file', file);

    try {
      const url = await uploadToCloudinary(uploadFormData);
      setFormData(prev => ({ ...prev, [field]: url }));
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed');
    } finally {
      setUploading(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const id = mode === 'edit' ? String(initialProduct?.id) : undefined;
      await saveProductAction(formData, id);
      router.refresh();
      setTimeout(() => {
        router.push('/hf/admin');
      }, 100);
    } catch (error) {
      console.error('Save failed:', error);
      alert('Failed to save product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Product Name</label>
          <input 
            type="text" name="name" value={formData.name} onChange={handleChange} required
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-black outline-none"
            placeholder="e.g. Arthene"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Title / Short Type</label>
          <input 
            type="text" name="title" value={formData.title} onChange={handleChange} required
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-black outline-none"
            placeholder="e.g. Single Seater"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Description</label>
          <textarea 
            name="disc" value={formData.disc} onChange={handleChange} required
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-black outline-none" rows={4}
            placeholder="Describe the product..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Category</label>
            <select 
              name="cat.category" value={formData.cat.category} onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-black outline-none bg-white"
            >
              {Object.keys(categories).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Sub Category</label>
            <select 
              name="cat.subCategory" value={formData.cat.subCategory} onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-black outline-none bg-white"
            >
              {categories[formData.cat.category as keyof typeof categories]?.map((sub: string) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Material</label>
            <input 
              type="text" name="material" value={formData.material} onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-black outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Color</label>
            <input 
              type="text" name="color" value={formData.color} onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-black outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Care</label>
            <input 
              type="text" name="care" value={formData.care} onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-black outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Year / Collection</label>
            <input 
              type="text" name="year" value={formData.year} onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-black outline-none"
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Main Image (Primary Showcase)</label>
          <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-3">
            {formData.mainImage ? (
              <Image unoptimized src={formData.mainImage} alt="Preview" fill className="object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400 text-sm">No image selected</div>
            )}
            {uploading.mainImage && <div className="absolute inset-0 bg-white/50 flex items-center justify-center">Uploading...</div>}
          </div>
          <label className="inline-block cursor-pointer bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-gray-800 transition-colors">
            Browse...
            <input type="file" onChange={(e) => handleImageUpload(e, 'mainImage')} className="hidden" accept="image/*" />
          </label>
          <span className="ml-3 text-[10px] text-gray-400 italic">
            {formData.mainImage ? 'Image Selected' : 'No file selected.'}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Secondary Image</label>
            <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden mb-2">
              {formData.image ? (
                <Image unoptimized src={formData.image} alt="Preview" fill className="object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-xs">No image</div>
              )}
              {uploading.image && <div className="absolute inset-0 bg-white/50 flex items-center justify-center">...</div>}
            </div>
            <label className="inline-block cursor-pointer bg-black text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase hover:bg-gray-800 transition-colors">
              Browse...
              <input type="file" onChange={(e) => handleImageUpload(e, 'image')} className="hidden" accept="image/*" />
            </label>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Tertiary Image</label>
            <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden mb-2">
              {formData.image2 ? (
                <Image unoptimized src={formData.image2} alt="Preview" fill className="object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-xs">No image</div>
              )}
              {uploading.image2 && <div className="absolute inset-0 bg-white/50 flex items-center justify-center">...</div>}
            </div>
            <label className="inline-block cursor-pointer bg-black text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase hover:bg-gray-800 transition-colors">
              Browse...
              <input type="file" onChange={(e) => handleImageUpload(e, 'image2')} className="hidden" accept="image/*" />
            </label>
          </div>
        </div>

        <div className="pt-8">
          <button 
            type="submit" 
            disabled={loading || uploading.mainImage || uploading.image || uploading.image2}
            className="w-full bg-black text-white py-4 rounded-full font-bold uppercase hover:bg-gray-800 disabled:bg-gray-400 transition-colors"
          >
            {loading ? 'Saving...' : 'Save Product'}
          </button>
        </div>
      </div>
    </form>
  );
}
