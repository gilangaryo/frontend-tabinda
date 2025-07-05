'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import CarouselPastEvent from './components/CarouselPastEvent';
import CarouselClient from './components/CarouselClient';
import QuoteCarousel from './components/CarouselQuote';
import Footer from './components/Footer';
import Mission from './components/Mission';
import Explore from './components/Explore';

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

        <Mission />
      </section>

      {/* Collaboration */}
      <section className=" py-16 px-4">
        <h1 className="text-4xl text-center text-primary mb-10">
          Past-Event Collaboration
        </h1>
        <div className="max-w-full md:max-w-3xl mx-auto">
          <CarouselPastEvent />
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
                <Image src={`/products/product${i}.png`} alt={`Product ${i}`} width={420} height={1440} />
                <h1 className="mt-2 text-sm">SERI MUKENA TRAVEL</h1>
                <p className="text-xs text-gray-600">Aziza Mukena</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quotes */}
      <section className="py-20 px-4 max-w-6xl mx-auto space-y-8">
        <QuoteCarousel />
      </section>

      {/* Transformative Client */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl text-center mb-10">Transformative Client Experiences</h1>
        <CarouselClient />

      </section>

      {/* Explore Collection */}

      <Explore />
      <Footer />
    </div>
  );
}