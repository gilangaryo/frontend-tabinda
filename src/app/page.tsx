'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
// import CarouselImage from './components/CarouselImage';
// import CarouselClient from './components/CarouselClient';
export default function LandingPage() {
  return (
    
    <div className="text-2xl text-primary">

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/hero-section.jpg')` }}>
        {/* Navbar */}
        <Navbar />
        <div className="absolute inset-0" />
        <div className="relative z-10 -top-30 flex flex-col items-center justify-center h-full text-white  px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 mb-8 text-center items-center">
            <div className=" text-center md:text-left italic">
              <h2>Abaya</h2>
            </div>
            <div className="col-span-2 text-center md:text-center mx-4">
              <h1 className=" text-4xl md:text-5xl font-light mb-4 mt-4  ">
                Unveiling the Modest Muslim
              </h1>
            </div>
            <div className="text-center md:text-right italic">
              <h2>Hijab</h2>
            </div>
          </div>
          <div className="absolute bottom-10 w-full z-10 flex flex-col md:flex-row justify-center md:justify-around items-center gap-4 md:gap-8 text-white px-4">
            {/* Hidden di mobile */}
            <h2 className="hidden md:block text-3xl font-light italic before:content-['•'] before:mr-2">
              Respecting Ethics
            </h2>

            <Link href="/products">
              <button className="border border-white text-white px-10 py-2 hover:bg-primary hover:border-primary hover:text-white transition-colors duration-300 text-2xl italic font-light">
                Shop Now
              </button>
            </Link>

            {/* Hidden di mobile */}
            <h2 className="hidden md:block text-3xl font-light italic before:content-['•'] before:mr-2">
              Honoring Values
            </h2>
          </div>

        </div>
      </section>

      {/* Hijrah Journey */}
      <section className="py-20 text-center px-4 max-w-full mx-auto text-primary">
        <h2 className="text-4xl mb-6 ">Your Hijrah Journey</h2>
        <Image src="/hero-section.jpg" alt="Journey" width={800} height={400} className="rounded-lg mx-auto mb-6" />

        <h1 className="italic text-center mx-auto font-light mb-10 max-w-5xl">
          Tabinda hadir menemani hijrah muslimah dengan busana anggun yang bermakna. Lebih dari sekadar pakaian, setiap karya membawa semangat kepedulian—mulai dari pemberdayaan perempuan lokal hingga komitmen tanpa plastik. Kami ingin menjadi teman dalam perjalanan hidup yang indah, penuh arti, dan keberkahan.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-full gap-6 mt-10">
          <div>
            <Image src="/journey1.png" alt="Journey" width={200} height={200} className="rounded-lg mx-auto mb-6" />
            <h3 className="font-semibold mb-2">Pemberdayaan Perempuan Lokal</h3>
            <p className="text-sm text-gray-600">Dukung pengrajin lokal dengan produksi busana bermakna.</p>
          </div>
          <div>
            <Image src="/journey2.png" alt="Journey" width={200} height={200} className="rounded-lg mx-auto mb-20" />
            <h3 className="font-semibold mb-2">Dukungan Sosial & Ekonomi</h3>
            <p className="text-sm text-gray-600">Komitmen untuk keberlanjutan dalam setiap langkah produksi.</p>
          </div>
          <div>
            <Image src="/journey3.png" alt="Journey" width={200} height={200} className="rounded-lg mx-auto mb-6" />
            <h3 className="font-semibold mb-2">Kepekaan yang Menggerakkan</h3>
            <p className="text-sm text-gray-600">Lebih dari tren, kami mengangkat nilai dan makna.</p>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="bg-gray-100 py-16 px-4">
        <h1 className="text-4xl font-semibold text-center mb-10">Past-Event Collaboration</h1>
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 md:max-w-xl gap-6 items-center ">
          {/* <CarouselImage/> */}
        </div>
      </section>

      {/* See What's New */}
      <section id="products" className="py-20 px-4 justify-center">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl text-left max-w-full mx-7">See Whats New</h1>
          <Link href="/products" >
          <h1 className="text-xl text-right max-w-full mx-7 italic hover:underline underline-offset-4 decoration-[0.1rem] ">
              View Collection
          </h1>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-full mx-7">
          {[1, 2, 3, 4].map((i) => (
            <Link
              href={`/products/product${i}`}
              className="hover:scale-102 transition-transform duration-200"
              key={i}
            >
              <div key={i} className="text-left">
                <Image src={`/products/product${i}.png`} alt={`Product ${i}`} width={420} height={1440}  />
                <h4 className="mt-2 text-sm font-semibold">SERI MUKENA TRAVEL</h4>
                <p className="text-xs text-gray-600">Aziza Mukena</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl text-center font-semibold mb-10">Transformative Client Experiences</h1>
        {/* <CarouselClient/> */}

      </section>

      {/* Explore Collection */}
      <section className="relative bg-cover bg-center h-[650]" style={{ backgroundImage: `url('/explore.png')` }}>
        <div className="relative z-10 flex flex-col h-full text-white text-left px-8 py-4">
          <h2 className="text-xl font-light mb-2 py-2">Your Hijab Journey</h2>
          <h1 className="text-6xl font-light mb-2 py-2">Explore Our Collection of</h1>
          <h1 className="text-4xl font-light mb-2 py-2 italic">Meaningful Modesty</h1>
        </div>

        <div className="absolute bottom-10 w-full z-10 flex flex-col md:flex-row justify-center md:justify-around items-center gap-4 md:gap-8 text-white px-4">
            <h2 className="">
              Untuk memperkenalkan brand ini dengan lebih jelas dan profesional, baik kepada calon mitra, klien, maupun komunitas yang lebih luas. Maka dibuatlah company profile untuk mendukung kebutuhan tersebut.
            </h2>

          </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10 text-left text-sm text-gray-600">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4 w-full">
          <div>
            <h3 className="font-light mb-2 italic">Your Hijab Journey</h3>
            <p>Tabinda is here to elevate the value of simplicity in dressing without sacrificing aesthetics.</p>
          </div>
          <div>
            <h3 className="font-light mb-2 italic">Discover</h3>
            <ul>
              <li><Link href="/article">Article</Link></li>
              <li><Link href="/collaboration">Collaboration</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-light mb-2 italic">Navigation</h3>
            <ul>
              <li><Link href="/product">Product</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-light mb-2 italic">Contact</h3>
            <p>Tabinda@gmail.com</p>
            <p>+62 0855-250-99</p>
          </div>
          <p className="mt-6">Copyright © 2025 Tabinda</p>
        </div>
      </footer>
    </div>
  );
}