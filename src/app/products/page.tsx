'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    
    <div className="text-2xl text-primary">
      <Navbar />
      <section className="py-16 px-4 text-center text-primary">
        <h2 className="text-5xl mb-4 ">Your Hijab Journey</h2>
        <h2 className="max-w-2xl mx-auto italic mb-6 ">
          Tabinda ingin menjadi teman bagi setiap wanita muslim yang sedang menjalani<br className="hidden md:block" />
          proses hijrah—melalui busana yang elegan, nyaman, dan sesuai syariat.
        </h2>
        <div className="flex justify-center flex-wrap gap-4">
          {['Sawda Abaya', 'Mukena', 'Scrunchie', 'Pashmina'].map((label) => (
            <button
              key={label}
              className="border border-primary px-4 py-2 text-sm hover:bg-primary hover:text-white transition-colors font-[var(--font-avenir)]"
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <section id="products" className="py-10 justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-5 max-w-8xl mx-auto px-4 place-items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Link
              href={`/products/product${i}`}
              className="hover:scale-103 transition-transform duration-200"
              key={i}
            >
              <div key={i} className="text-left">
                <Image
                  src={`/products/product${i}.png`}
                  alt={`Product ${i}`}
                  width={420}
                  height={1440}
                />
                <h1 className="mt-2 text-sm">SERI MUKENA TRAVEL</h1>
                <p className="text-xs text-gray-600">Aziza Mukena</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    <Footer/>

    </div>
  );
}