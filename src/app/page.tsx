'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import CarouselImage from './components/CarouselImage';
import CarouselClient from './components/CarouselClient';
export default function LandingPage() {
  return (
    
    <div className="text-2xl text-primary">

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center">
        {/* Navbar */}
        <Navbar />
        <Image
          src="/hero-section.jpg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
        <div className="relative z-10 -top-30 flex flex-col items-center justify-center h-full text-white  px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 mb-8 text-center items-center">
            <div className=" text-center md:text-left italic">
              <h2>Abaya</h2>
            </div>
            <div className="col-span-2 text-center md:text-center mx-4">
              <h1 className=" text-4xl md:text-5xl mb-4 mt-4  ">
                Unveiling the Modest Muslim
              </h1>
            </div>
            <div className="text-center md:text-right italic">
              <h2>Hijab</h2>
            </div>
          </div>
          <div className="absolute bottom-10 w-full z-10 flex flex-col md:flex-row justify-center md:justify-around items-center gap-4 md:gap-8 text-white px-4">
            {/* Hidden di mobile */}
            <h2 className="hidden md:block text-3xl italic before:content-['•'] before:mr-2">
              Respecting Ethics
            </h2>

            <Link href="/products">
              <button className="border border-white text-white px-10 py-2 hover:bg-primary hover:border-primary hover:text-white transition-colors duration-300 text-2xl italic font-light">
                Shop Now
              </button>
            </Link>

            {/* Hidden di mobile */}
            <h2 className="hidden md:block text-3xl italic before:content-['•'] before:mr-2">
              Honoring Values
            </h2>
          </div>

        </div>
      </section>

      {/* Hijrah Journey */}
      <section className="py-20 text-center px-4 max-w-full mx-auto text-primary">
        <h2 className="text-4xl mb-6 ">Your Hijrah Journey</h2>
        <Image src="/hero-section.jpg" alt="Journey" width={800} height={400} className="rounded-lg mx-auto mb-6" />

        <h1 className="text-center leading-10 mx-auto mb-10 max-w-5xl">
          Tabinda hadir menemani hijrah muslimah dengan busana anggun yang bermakna. Lebih dari sekadar pakaian, setiap karya membawa semangat kepedulian—mulai dari pemberdayaan perempuan lokal hingga komitmen tanpa plastik. Kami ingin menjadi teman dalam perjalanan hidup yang indah, penuh arti, dan keberkahan.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-full gap-6 mt-10">
          <div>
            <Image src="/journey1.png" alt="Journey" width={200} height={200} className="rounded-lg mx-auto mb-6" />
            <h3 className="mb-2">Pemberdayaan Perempuan Lokal</h3>
            <p className="text-sm text-gray-600">Dukung pengrajin lokal dengan produksi busana bermakna.</p>
          </div>
          <div>
            <Image src="/journey2.png" alt="Journey" width={200} height={200} className="rounded-lg mx-auto mb-20" />
            <h3 className="mb-2">Dukungan Sosial & Ekonomi</h3>
            <p className="text-sm text-gray-600">Komitmen untuk keberlanjutan dalam setiap langkah produksi.</p>
          </div>
          <div>
            <Image src="/journey3.png" alt="Journey" width={200} height={200} className="rounded-lg mx-auto mb-6" />
            <h3 className="mb-2">Kepekaan yang Menggerakkan</h3>
            <p className="text-sm text-gray-600">Lebih dari tren, kami mengangkat nilai dan makna.</p>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="bg-gray-100 py-16 px-4">
        <h1 className="text-4xl text-center font-[var(--font-heading)] text-primary mb-10">
          Past-Event Collaboration
        </h1>
        <div className="max-w-full md:max-w-3xl mx-auto">
          <CarouselImage />
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
              className="hover:scale-103 transition-transform duration-200"
              key={i}
            >
              <div key={i} className="text-left">
                <Image src={`/products/product${i}.png`} alt={`Product ${i}`} width={420} height={1440}  />
                <h1 className="mt-2 text-sm">SERI MUKENA TRAVEL</h1>
                <p className="text-xs text-gray-600">Aziza Mukena</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl text-center mb-10">Transformative Client Experiences</h1>
        <CarouselClient/>

      </section>

      {/* Explore Collection */}
      <section className="relative bg-cover bg-center h-[860] md:h-[500px] text-center md:text-left" style={{ backgroundImage: `url('/explore.png')` }}>
        <div className="relative z-10 flex flex-col h-full text-white px-3 md:px-8 py-5">
          <p className=" py-2">Your Hijab Journey</p>
          <p className="text-3xl font-bold md:text-6xl py-2">Explore Our Collection of</p>
          <p className="text-3xl font-bold md:text-6xl py-2 italic">Meaningful Modesty</p>
        </div>

        <div className="absolute bottom-10 w-full z-10 flex flex-col md:flex-row justify-center md:justify-around items-center text-white px-8 mt-20">
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
              <div className='col-span-1 md:col-span-3 content-end'>
                <h2 className="text-2xl font-light mb-4">
                  Untuk memperkenalkan brand ini dengan lebih jelas dan profesional, baik kepada calon mitra, klien, maupun komunitas yang lebih luas. Maka dibuatlah company profile untuk mendukung kebutuhan tersebut.
                </h2>
              </div>
              <div className='col-span-1 md:col-span-1'>

              </div>
              <div className='col-span-1 md:col-span-1  rounded shadow text-gray-600 text-center '>
                <div className='card bg-white p-3 max-w-xs mx-auto rounded-xl'>
                  <Image src="/explore-collection.jpg" alt="Girlie Mukena" width={300} height={300} className="mx-auto mb-4 rounded-lg" />
                  <p className='font-semibold my-4'>Girlie Mukena Edition</p>
                  <Link href="/products">
                    <button className="w-full py-1 bg-primary text-white hover:bg-opacity-90 transition-colors duration-300 text-lg rounded-full">

                      View Detail
                    </button>
                  </Link>
                </div>
              </div>
            </div>


          </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10 text-left text-sm text-gray-600 px-8">
        <div className="grid grid-cols-3 lg:grid-cols-4 md:grid-cols-3">

          <div className='col-span-3 lg:col-span-4 justify-center'>
            <div className="flex justify-center md:justify-start mb-6">
              <Image src="/logo-tabinda-gold.png" alt="Tabinda Logo" width={100} height={50} className="mb-4 text-center content-center items-center justify-center" />
            </div>
          </div>
          
          <div className='col-span-3 md:col-span-3 lg:col-span-1 items-center text-center md:text-left mb-4'>
            <h3 className="mb-2 italic">Your Hijab Journey</h3>
            <p>Tabinda is here to elevate the value of simplicity in dressing without sacrificing aesthetics.</p>
          </div>

          <div className='col-span-1 items-center text-center md:text-left'>
            <p className="mb-2 ">Discover</p>
            <ul className='text-xs '>
              <li><Link href="/article">Article</Link></li>
              <li><Link href="/collaboration">Collaboration</Link></li>
            </ul>
          </div>

          <div className='col-span-1 items-center text-center md:text-left'>
            <p className="mb-2 ">Navigation</p>
            <ul className='text-xs '>
              <li><Link href="/product">Product</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>

          <div className='col-span-1 items-center text-center md:text-left'>
            <p className=" mb-2 ">Contact</p>
            <ul className='text-xs '>
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
    </div>
  );
}