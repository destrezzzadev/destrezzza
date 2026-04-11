// src/app/hf/admin/login/page.tsx
'use client'

import React, { useState, useTransition } from 'react';
import { loginAction } from './action';

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    setError(null);
    startTransition(async () => {
      const result = await loginAction(formData);
      if (result?.error) {
        setError(result.error);
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 text-black">
      <div className="w-full max-w-md bg-white p-8 border border-gray-200 shadow-sm">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tighter uppercase mb-2 text-black">Destrezza</h1>
          <p className="text-gray-500 uppercase text-xs font-bold tracking-widest">Admin Portal Access</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 text-sm font-medium rounded-sm border border-red-100">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="w-full px-4 py-3 border border-gray-200 focus:border-black outline-none transition-colors text-black bg-white"
              placeholder="ENTER USERNAME"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-3 border border-gray-200 focus:border-black outline-none transition-colors text-black bg-white"
              placeholder="ENTER PASSWORD"
            />
          </div>
          
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-zinc-900 transition-colors disabled:bg-zinc-400"
          >
            {isPending ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-8 text-center">
            <p className="text-gray-400 text-[10px] uppercase tracking-widest">
                Security Policy: Authorized Personnel Only
            </p>
        </div>
      </div>
    </div>
  );
}
