'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import products from '../data/produk_tabinda';

export default function ProductPage() {
  const categories = ['Sawda Abaya', 'Aziza Mukena', 'Alhawa Collection', 'Hijab Series', 'Pashmina Series'];
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [fade, setFade] = useState(true);

  const handleFilter = (category: string) => {
    setFade(false);
    setTimeout(() => {
      setActiveCategory((prev) => (prev === category ? null : category));
      setFade(true);
    }, 200);
  };

  const filteredProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

  return (
    <div className="text-2xl text-primary">

      <section className="pt-14 px-4 text-center text-primary">
        <h2 className="text-5xl mb-8">Your Hijab Journey</h2>
        <h2 className="text-2xl md:text-3xl max-w-5xl mx-auto italic mb-10">
          Tabinda ingin menjadi teman bagi setiap wanita muslim yang sedang menjalani proses hijrah—melalui busana yang elegan, nyaman, dan sesuai syariat.
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

      <section id="products" className="py-10">
        <div
          className={`px-6 mx-auto max-w-screen-xl transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}
      ${filteredProducts.length <= 3
              ? 'flex justify-center flex-wrap gap-8'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center'}
    `}
        >
          {filteredProducts.map((product, index) => (
            <Link
              key={index}
              href={`/products/${product.slug}`}
              className={`group relative mb-5 w-full max-w-sm transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="text-left relative pb-4">
                <Image
                  src={`/products/showcase/${product.image.replace('/', '')}`}
                  alt={product.name}
                  width={420}
                  height={600}
                  className="object-cover mt-4"
                  loading="lazy"
                />
                <div className="flex justify-between items-center px-2 mt-4">
                  <div>
                    <h1 className="tracking-widest md:text-xl uppercase">{product.name}</h1>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src="/products/cart.png"
                      alt="Add to cart"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">Tidak ada produk untuk kategori ini.</p>
        )}
      </section>


    </div>
  );
}