'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
      <div className="grid grid-cols-5 items-center px-8 py-8 max-w-8xl mx-auto text-xl font-light text-center">
        <Link href="/product" className="hover:underline">Product</Link>
        <Link href="/article" className="hover:underline">Article</Link>
        <Link href="/" className="flex justify-center">
          <Image
            src="/logo-tabinda.png"
            alt="Tabista Logo"
            width={70}
            height={100}
          />
        </Link>
        <Link href="/collaboration" className="hover:underline">Collaboration</Link>
        <Link href="/about" className="hover:underline">About</Link>
      
      </div>
    </nav>
  );
}
