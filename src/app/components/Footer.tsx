'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isTransparentFooter = pathname === '/' || pathname.startsWith('/article');
  const footerClass = isTransparentFooter
    ? 'bg-white'
    : "bg-[url('/bg-footer.png')] bg-cover bg-center text-white";

  return (
    <footer className={`${footerClass} py-10 text-left text-sm px-8`}>
      <div className="grid grid-cols-3 lg:grid-cols-4 md:grid-cols-3">

        <div className='col-span-3 lg:col-span-4 justify-center'>
          <div className="flex justify-center md:justify-start mb-6">
            <Image
              src="/logo-tabinda-gold.png"
              alt="Tabinda Logo"
              width={100}
              height={50}
              className="mb-4 text-center content-center items-center justify-center"
            />
          </div>
        </div>

        <div className='col-span-3 md:col-span-3 lg:col-span-1 items-center text-center md:text-left mb-4'>
          <h3 className="mb-2 italic">Your Hijab Journey</h3>
          <p>Tabinda is here to elevate the value of simplicity in dressing without sacrificing aesthetics.</p>
        </div>

        <div className='col-span-1 items-center text-center md:text-left'>
          <p className="mb-2 font-semibold">Discover</p>
          <ul className='text-xs'>
            <li><Link href="/article">Article</Link></li>
            <li><Link href="/collaboration">Collaboration</Link></li>
          </ul>
        </div>

        <div className='col-span-1 items-center text-center md:text-left'>
          <p className="mb-2 font-semibold">Navigation</p>
          <ul className='text-xs'>
            <li><Link href="/products">Product</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>

        <div className='col-span-1 items-center text-center md:text-left'>
          <p className="mb-2 font-semibold">Contact</p>
          <ul className='text-xs'>
            <li><Link href="/contact">Tabinda@gmail.com</Link></li>
            <li><Link href="/faq">+62 0855-250-99</Link></li>
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-3 items-center text-center md:text-left mt-6">
          <p>Copyright © 2025 Tabinda</p>
        </div>

        <div className="col-span-1 lg:col-span-1 flex justify-center md:justify-end items-center gap-4 mt-6">
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/social-icons/instagram.png" alt="Instagram" width={24} height={24} />
          </Link>
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/social-icons/facebook.png" alt="Facebook" width={24} height={24} />
          </Link>
          <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/social-icons/linkedin.png" alt="Twitter" width={24} height={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
