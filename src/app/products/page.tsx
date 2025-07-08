'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import products from '../data/produk_tabinda';

export default function ProductPage() {
  const categories = ['Sawda Abaya', 'Aziza Mukena', 'Alhawa Collection', 'Hijab Series', 'Pashmina Series'];
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleFilter = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category)); // toggle on/off
  };

  const filteredProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

  return (
    <div className="text-2xl text-primary">
      <Navbar />

      <section className="py-16 px-4 text-center text-primary">
        <h2 className="text-5xl mb-8">Your Hijab Journey</h2>
        <h2 className="text-3xl max-w-5xl mx-auto italic mb-10">
          Tabinda ingin menjadi teman bagi setiap wanita muslim yang sedang menjalani
          <br className="hidden md:block" />
          proses hijrah—melalui busana yang elegan, nyaman, dan sesuai syariat.
        </h2>

        <div className="flex justify-center flex-wrap gap-4">
          {categories.map((label) => (
            <button
              key={label}
              onClick={() => handleFilter(label)}
              className={`border px-6 py-4 text-sm transition-colors 
                ${activeCategory === label
                  ? 'bg-primary text-white border-primary'
                  : 'border-primary hover:bg-primary hover:text-white text-primary'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <section id="products" className="py-10 justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 max-w-full mx-auto px-6 place-items-center">
          {filteredProducts.map((product, index) => (
            <Link
              key={index}
              href={`/products/product${index + 1}`}
              className="hover:scale-102 transition-transform duration-300 mb-5"
            >
              <div className="text-left">
                <Image
                  src={`/products/${product.image.replace('/', '')}`}
                  alt={product.name}
                  width={420}
                  height={600}
                  className="object-cover mt-4"
                  loading="lazy"
                />
                <h1 className="mt-2 tracking-widest text-xl uppercase">{product.name}</h1>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                {/* <p className="text-sm text-gray-700 mt-1">IDR {product.price.toLocaleString()}</p> */}
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">Tidak ada produk untuk kategori ini.</p>
        )}
      </section>

      <Footer />
    </div>
  );
}
