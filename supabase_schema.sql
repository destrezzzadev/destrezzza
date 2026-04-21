-- SQL Schema for Destrezza Product Migration

-- 1. Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create products table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  legacy_id INTEGER UNIQUE, -- Added UNIQUE for upsert conflict handling
  name TEXT NOT NULL,
  title TEXT,
  description TEXT,
  material TEXT,
  color TEXT,
  care TEXT,
  year TEXT,
  main_image TEXT,
  image TEXT,
  image2 TEXT,
  category TEXT,
  sub_category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 3. Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  sub_categories TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 4. Create indices for performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products (category);
CREATE INDEX IF NOT EXISTS idx_products_sub_category ON products (sub_category);

-- 5. Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- 6. Create Policies (Allow public read access)
CREATE POLICY "Allow public read access on products" ON products
  FOR SELECT USING (true);
CREATE POLICY "Allow public read access on categories" ON categories
  FOR SELECT USING (true);
