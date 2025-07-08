'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import dynamic from 'next/dynamic';

const CarouselClient = dynamic(() => import('./components/CarouselClient'), { ssr: false });
const CarouselPastEvent = dynamic(() => import('./components/CarouselPastEvent'), { ssr: false });

import QuoteCarousel from './components/CarouselQuote';
import Footer from './components/Footer';
import Mission from './components/Mission';
import Explore from './components/Explore';
import { VideoPlayer } from './components/VideoPlayer';
import WhatsNew from './components/WhatsNew';
export default function LandingPage() {
  return (

    <div className="text-2xl text-primary">

      {/* Hero Section */}
      <section className="relative h-screen ">
        {/* Navbar */}
        <Navbar />
        <Image
          src="https://res.cloudinary.com/dla5fna8n/image/upload/v1751886997/hero-section3_pvyjam.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center -z-10"
        />

        {/* Overlay hitam transparan */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 -top-30 flex flex-col items-center justify-center h-full text-white  tracking-wider px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 mb-8 text-center items-center">
            <div className="text-lg md:text-2xl text-center md:text-left italic tracking-widest">
              <h2>Abaya</h2>
            </div>
            <div className="col-span-2 text-center md:text-center mx-4">
              <h1 className=" text-2xl md:text-6xl mb-4 mt-4 tracking-widest">
                Unveiling the Modest Muslim
              </h1>
            </div>
            <div className="text-lg md:text-2xl text-center md:text-right italic tracking-widest">
              <h2>Hijab</h2>
            </div>
          </div>
          <div className="absolute bottom-10 w-full z-10 flex flex-col md:flex-row justify-center md:justify-around items-center gap-4 md:gap-8 text-white px-4">
            {/* Hidden di mobile */}
            <h2 className="hidden md:block text-3xl italic before:content-['•'] before:mr-2">
              Respecting Ethics
            </h2>

            <Link href="/products">
              <button className="border border-white text-white px-20 py-4 hover:bg-primary hover:border-primary hover:text-white transition-colors duration-300 text-4xl italic font-light">
                <h2>
                  Shop Now
                </h2>
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
      <section className="py-10 text-center px-4 max-w-full mx-auto text-primary">
        <h2 className="text-6xl my-10 ">Your Hijrah Journey</h2>
        <div className="aspect-video w-full max-w-4xl mx-auto mb-6 rounded-lg overflow-hidden">
          <VideoPlayer src="https://res.cloudinary.com/dla5fna8n/video/upload/v1751886783/tabinda-campaign-fix_eilzds.mp4" />
        </div>
        <h1 className="text-3xl text-center leading-10 mx-auto mb-10 max-w-6xl tracking-wider">
          Tabinda hadir menemani hijrah muslimah dengan busana anggun yang bermakna. Lebih dari sekadar pakaian, setiap karya membawa semangat kepedulian—mulai dari pemberdayaan perempuan lokal hingga komitmen tanpa plastik. Kami ingin menjadi teman dalam perjalanan hidup yang indah, penuh arti, dan keberkahan.
        </h1>

        <Mission />
      </section>

      {/* Collaboration */}
      <section className=" py-10 px-10 my-10">
        <h1 className="text-6xl text-center text-primary mb-10">
          Past-Event Collaboration
        </h1>
        <div className="max-w-full mx-auto">
          <CarouselPastEvent />
        </div>
      </section>

      {/* Whats new  */}
      <WhatsNew />

      {/* Quotes */}
      <QuoteCarousel />

      {/* Transformative Client */}
      <CarouselClient />

      {/* Explore Collection */}
      <Explore />
      <Footer />



    </div>
  );
}