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

  const iconVariant = isTransparentFooter ? '' : '-white';

  return (
    <footer className={`${footerClass} py-6 text-center sm:text-left px-8 text-black`}>
      <div className="grid grid-cols-3 lg:grid-cols-4 md:grid-cols-3 ">

        {/* Logo */}
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

        {/* Section 1 */}
        <div className='col-span-3 md:col-span-3 lg:col-span-1 items-center text-center md:text-left mb-6 md:text-md text-lg'>
          <h3 className="mb-2 italic">Your Hijab Journey</h3>
          <p className="md:text-md text-sm md:max-w-70">Tabinda is here to elevate the value of simplicity in dressing without sacrificing aesthetics.</p>
        </div>





        {/* Section 3 */}
        <div className='col-span-1 items-center text-center md:text-left md:text-lg text-[12px] '>
          <h3 className="mb-2 italic">Discover</h3>
          <ul>
            <li><Link href="/article">Article</Link></li>
            <li><Link href="/collaboration">Collaboration</Link></li>
          </ul>
        </div>
        {/* Section 2 */}
        <div className='col-span-1 items-center text-center md:text-left md:text-lg text-[12px]'>
          <h3 className="mb-2 italic">Navigation</h3>
          <ul >
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
        {/* Section 4 */}
        <div className='col-span-1 items-center text-center md:text-left md:text-lg text-[12px]'>
          <h3 className="mb-2 italic">Contact</h3>
          <ul >
            <li>
              <a href="mailto:Tabinda@gmail.com" className="hover:underline">
                Tabinda@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+62085525099" className="hover:underline">
                +62 0855-250-99
              </a>
            </li>
          </ul>

        </div>

      </div>
      <div className="w-full flex flex-col md:flex-row md:justify-between items-center text-center md:text-left gap-3 mt-6">
        {/* Copyright - atas di mobile */}
        <div className="text-[11px] md:text-sm">
          <p>Copyright © 2025 Tabinda</p>
        </div>

        {/* Social Media Icons - bawah di mobile */}
        <div className="flex gap-4 justify-center md:justify-end items-center ">
          {/* Instagram */}
          <Link href="https://www.instagram.com/tabinda_official_id/" target="_blank" rel="noopener noreferrer">
            <div className="relative w-4 h-4 md:w-6 md:h-6">
              <Image
                src={`/social-icons/instagram${iconVariant}.png`}
                alt="Instagram"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Tokopedia */}
          <Link href="https://www.tokopedia.com/tabindaofficial" target="_blank" rel="noopener noreferrer">
            <div className="relative w-20 h-4 md:w-20 md:h-6">
              <Image
                src={`/social-icons/tokopedia${iconVariant}.png`}
                alt="Tokopedia"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Shopee */}
          <Link href="https://shopee.co.id/tabindaofficial" target="_blank" rel="noopener noreferrer">
            <div className="relative w-15 h-5 md:w-20 md:h-6">
              <Image
                src={`/social-icons/shopee${iconVariant}.png`}
                alt="Shopee"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>
      </div>



    </footer>
  );
}
