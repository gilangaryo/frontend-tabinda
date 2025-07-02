'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isTransparentNavbar = pathname === '/' || pathname.startsWith('/article');

  const bgColor = isTransparentNavbar ? 'bg-transparent' : 'bg-white';
  const textColor = isTransparentNavbar ? 'text-white' : 'text-[#014228]';
  const logoSrc = isTransparentNavbar ? '/logo-tabinda.png' : '/logo-tabinda-gold.png';
  const hoverUnderline = isTransparentNavbar
    ? 'hover:underline'
    : 'hover:underline decoration-[#014228]';

  const getLinkClass = (href: string) => {
    const isActive = pathname === href || pathname.startsWith(href + '/');
    const underlineClass = isActive ? 'underline decoration-2 underline-offset-4' : '';
    return `${hoverUnderline} ${underlineClass}`;
  };

  return (
    <nav className={`w-full ${bgColor} ${textColor} z-50 relative`}>
      {!isTransparentNavbar && (
        <div className="bg-[#014228] text-white text-sm py-1 text-center">
          Save 20%. Use code: <span className="italic">Tabinda</span>
        </div>
      )}

      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl md:hidden"
          aria-label="Toggle menu"
        >
          <Image src="/hamburger-icon.png" alt="Menu" width={40} height={40} />
        </button>
        <div className="w-8 md:hidden" />

        <div className="hidden md:grid grid-cols-5 gap-6 text-lg font-light text-center w-full px-6 mx-auto items-center">
          <Link href="/products" className={getLinkClass('/products')}>Products</Link>
          <Link href="/article" className={getLinkClass('/article')}>Article</Link>
          <Link href="/" className="flex justify-center">
            <Image src={logoSrc} alt="Tabinda Logo" width={70} height={100} />
          </Link>
          <Link href="/collaboration" className={getLinkClass('/collaboration')}>Collaboration</Link>
          <Link href="/about" className={getLinkClass('/about')}>About</Link>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:hidden flex flex-col px-6 py-4 space-y-4 text-lg font-light ${bgColor} ${textColor}`}
        >
          <Link href="/products" onClick={() => setIsOpen(false)} className={getLinkClass('/products')}>Products</Link>
          <Link href="/article" onClick={() => setIsOpen(false)} className={getLinkClass('/article')}>Article</Link>
          <Link href="/collaboration" onClick={() => setIsOpen(false)} className={getLinkClass('/collaboration')}>Collaboration</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className={getLinkClass('/about')}>About</Link>
        </div>
      )}
    </nav>
  );
}