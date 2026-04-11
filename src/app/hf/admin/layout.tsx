// src/app/hf/admin/layout.tsx
import React from 'react';
import AdminNav from './AdminNav';
import { verifySession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = await verifySession();

  return (
    <div className="min-h-screen bg-white text-black">
      {isAuthenticated && <AdminNav />}
      <main className={isAuthenticated ? "p-8" : ""}>
        {children}
      </main>
    </div>
  );
}
