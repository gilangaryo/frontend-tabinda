'use client';

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-transparent text-white z-50 relative">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <button onClick={() => setIsOpen(!isOpen)} className="text-3xl md:hidden" aria-label="Toggle menu">
          <Image src="/hamburger-icon.png" alt="Menu" width={40} height={40} />
        </button>
        <div className="w-8 md:hidden" />

        <div className="hidden md:grid grid-cols-5 gap-6 text-lg font-light text-center w-full px-6 mx-auto items-center">
          <Link href="/product" className="hover:underline decoration-2 underline-offset-5">Product</Link>
          <Link href="/article" className="hover:underline decoration-2 underline-offset-5">Article</Link>
          <Link href="/" className="flex justify-center">
            <Image
            src="/logo-tabinda.png"
            alt="Tabista Logo"
            width={70}
            height={100}
          />
          </Link>
          <Link href="/collaboration" className="hover:underline decoration-2 underline-offset-5">Collaboration</Link>
          <Link href="/about" className="hover:underline decoration-2 underline-offset-5">About</Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col bg-opacity-10 text-white px-6 py-4 space-y-4 text-lg font-light">
          <Link href="/product" onClick={() => setIsOpen(false)} className="hover:underline">Product</Link>
          <Link href="/article" onClick={() => setIsOpen(false)} className="hover:underline">Article</Link>
          <Link href="/collaboration" onClick={() => setIsOpen(false)} className="hover:underline">Collaboration</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:underline">About</Link>
        </div>
      )}
    </nav>

  )
}
