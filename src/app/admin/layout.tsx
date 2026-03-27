// src/app/admin/layout.tsx
import React from 'react';
import Link from 'next/link';
import UtilsHeader from '@/components/utils/Header';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="border-b border-gray-200 py-4 px-8 flex justify-between items-center">
        <Link href="/admin" className="text-2xl font-bold uppercase tracking-tighter">
          Destrezza Admin
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/admin" className="text-sm font-medium hover:underline">Dashboard</Link>
          <Link href="/product" className="text-sm font-medium hover:underline" target="_blank">View Site</Link>
          <Link href="/admin/add" className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold uppercase hover:bg-gray-800 transition-colors">
            Add Product
          </Link>
        </div>
      </nav>
      <main className="p-8">
        {children}
      </main>
    </div>
  );
}
