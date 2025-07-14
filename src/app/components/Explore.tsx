'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import products from '../data/produk_tabinda';

export default function Explore() {
    const [randomProduct, setRandomProduct] = useState<typeof products[0] | null>(null);

    useEffect(() => {
        const index = Math.floor(Math.random() * products.length);
        setRandomProduct(products[index]);
    }, []);

    if (!randomProduct) return null;

    return (
        <div className="relative text-white px-4 md:px-12 py-16 overflow-hidden">
            <Image
                src="/explore.png"
                alt="Explore Background"
                fill
                priority
                className="object-cover object-center -z-10"
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 h-full items-stretch">
                {/* Text Section */}
                <div className="md:col-span-3 flex flex-col justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-sm mb-2">Your Hijab Journey</p>
                        <p className="text-3xl sm:text-5xl lg:text-6xl mb-5">
                            Explore Our Collection of
                        </p>
                        <p className="text-3xl sm:text-5xl lg:text-6xl italic">
                            Meaningful Modesty.
                        </p>
                    </div>

                    <div className="mt-8 md:mt-0 max-w-3xl">
                        <h2 className="text-base md:text-xl font-light leading-relaxed">
                            Untuk memperkenalkan brand ini dengan lebih jelas dan profesional, baik kepada calon mitra, klien, maupun komunitas yang lebih luas. Maka dibuatlah company profile untuk mendukung kebutuhan tersebut.
                        </h2>
                    </div>
                </div>

                {/* Random Product Card */}
                <div className="md:col-span-1 flex justify-center items-center text-gray-700">
                    <div className="bg-white p-4 max-w-xs w-full rounded-xl shadow-lg">
                        <div className="aspect-square w-full overflow-hidden rounded-lg relative mb-4">
                            <Image
                                src={`/products/showcase/${randomProduct.image.replace('/', '')}`}
                                alt={randomProduct.slug}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h1 className="tracking-wider my-4 text-3xl text-center">
                            {randomProduct.name}
                        </h1>
                        <Link href={`/products/${randomProduct.slug}`}>
                            <button className="w-full py-2 bg-primary text-white hover:bg-opacity-90 transition-colors duration-300 text-lg rounded-full">
                                View Detail
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
