'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const isLanding = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  const logoSrc = isLanding ? '/logo-tabinda.png' : '/logo-tabinda-gold.png';
  const bgColor = isLanding ? 'bg-transparent' : 'bg-white';
  const textColor = isLanding ? 'text-white' : 'text-[#014228]';
  const hoverUnderline = isLanding
    ? 'hover:underline underline-offset-6'
    : 'hover:underline decoration-[#014228]';

  const getLinkClass = (href: string) => {
    const isActive = pathname === href || pathname.startsWith(href + '/');
    const underlineClass = isActive
      ? 'underline decoration-2 underline-offset-4'
      : '';
    return `${hoverUnderline} ${underlineClass}`;
  };

  return (
    <nav className={`w-full ${bgColor} ${textColor} tracking-wider ${isLanding ? 'absolute top-0 left-0 z-30' : 'relative z-20'}`}>

      {/* Mobile & Tablet Layout */}
      <div className="flex items-center justify-between py-6 px-6 md:hidden">
        {/* Logo kiri */}
        <Link href="/" className="flex items-center">
          <Image src={logoSrc} alt="Tabinda Logo" width={70} height={100} />
        </Link>

        {/* Hamburger kanan */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl"
          aria-label="Toggle menu"
        >
          <Image
            src={isLanding ? '/hamburger-icon.png' : '/hamburger-icon-green.png'}
            alt="Menu"
            width={40}
            height={40}
          />
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-5 gap-6 text-xl font-light text-center items-center max-w-full mx-auto py-6">
        <Link href="/products" className={getLinkClass('/products')}>Products</Link>
        <Link href="/article" className={getLinkClass('/article')}>Article</Link>
        <Link href="/" className="flex justify-center">
          <Image src={logoSrc} alt="Tabinda Logo" width={70} height={100} />
        </Link>
        <Link href="/collaboration" className={getLinkClass('/collaboration')}>Collaboration</Link>
        <Link href="/about" className={getLinkClass('/about')}>About</Link>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className={`md:hidden flex flex-col px-6 pb-4 space-y-2 text-lg font-light ${bgColor} ${textColor}`}>
          <Link href="/products" onClick={() => setIsOpen(false)} className={getLinkClass('/products')}>Products</Link>
          <Link href="/article" onClick={() => setIsOpen(false)} className={getLinkClass('/article')}>Article</Link>
          <Link href="/collaboration" onClick={() => setIsOpen(false)} className={getLinkClass('/collaboration')}>Collaboration</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className={getLinkClass('/about')}>About</Link>
        </div>
      )}
    </nav>
  );
}
