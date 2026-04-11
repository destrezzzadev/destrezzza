// src/app/hf/admin/AdminNav.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import { logoutAction } from './login/action';

export default function AdminNav() {
  return (
    <nav className="border-b border-gray-200 py-4 px-8 flex justify-between items-center bg-white">
      <Link href="/hf/admin" className="text-2xl font-bold uppercase tracking-tighter">
        Destrezza Admin
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/hf/admin" className="text-sm font-medium hover:underline">Dashboard</Link>
        <Link href="/product" className="text-sm font-medium hover:underline" target="_blank">View Site</Link>
        <Link href="/hf/admin/add" className="text-sm font-medium hover:underline">
          Add Product
        </Link>
        <button 
          onClick={() => {
            if (confirm('Are you sure you want to log out?')) {
              logoutAction();
            }
          }}
          className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold uppercase hover:bg-gray-800 transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
