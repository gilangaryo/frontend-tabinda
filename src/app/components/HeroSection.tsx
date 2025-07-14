'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative h-screen pt-24">
            <Image
                src="https://res.cloudinary.com/dla5fna8n/image/upload/v1751886997/hero-section3_pvyjam.jpg"
                alt="Hero background"
                fill
                priority
                className="object-cover object-center -z-10"
            />

            <div className="absolute inset-0 bg-black/20 z-0" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white tracking-wider px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 mb-8 text-center items-center">
                    <div className="text-3xl md:text-2xl text-center md:text-left italic tracking-widest">
                        <h2>Abaya</h2>
                    </div>
                    <div className="col-span-2 text-center md:mx-20">
                        <h1 className="text-3xl md:text-5xl mb-2 mt-2 tracking-wider">
                            Unveiling the Modest Muslim
                        </h1>
                    </div>
                    <div className="text-3xl md:text-2xl text-center md:text-right italic tracking-widest">
                        <h2>Hijab</h2>
                    </div>
                </div>

                <div className="absolute bottom-10 w-full z-10 flex flex-col md:flex-row justify-center md:justify-around items-center gap-4 md:gap-8 text-white px-4">
                    <h2 className="hidden md:block text-3xl italic before:content-['•'] before:mr-2">
                        Respecting Ethics
                    </h2>

                    <Link href="/products">
                        <button className="border border-white text-white px-18 py-3 hover:bg-primary hover:border-primary hover:text-white transition-colors duration-300 text-2xl md:text-4xl italic font-light">
                            <h2>Shop Now</h2>
                        </button>
                    </Link>

                    <h2 className="hidden md:block text-3xl italic before:content-['•'] before:mr-2">
                        Honoring Values
                    </h2>
                </div>
            </div>
        </section>
    );
}
