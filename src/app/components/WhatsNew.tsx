'use client';

import Image from 'next/image';
import Link from 'next/link';
import products from '../data/produk_tabinda';

export default function WhatsNew() {
    const featuredProducts = products.slice(0, 4);

    return (
        <section id="products" className="py-10 px-4 justify-center text-primary">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-3xl md:text-5xl text-left max-w-full mx-7">See What&apos;s New</h1>
                <Link href="/products">
                    <h1 className="text-xl text-right max-w-full mx-7 italic hover:underline underline-offset-4 decoration-[0.1rem]">
                        View Collection
                    </h1>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-6 mx-auto max-w-full justify-items-center">
                {featuredProducts.map((product, i) => (
                    <Link
                        key={i}
                        href={`/products/${product.slug}`}
                        className="group relative mb-5 w-full"
                    >
                        <div className="text-left relative">
                            {/* Gambar Produk */}
                            <Image
                                src={`/products/showcase/${product.image.replace('/', '')}`}
                                alt={product.name}
                                width={420}
                                height={600}
                                className="object-cover mt-2"
                                loading="lazy"
                            />

                            {/* Nama, kategori, dan ikon cart */}
                            <div className="flex justify-between items-center px-2 mt-4">
                                <div>
                                    <h1 className="tracking-widest text-xl uppercase">{product.name}</h1>
                                    <p className="text-sm text-gray-500">{product.category}</p>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Image
                                        src="/products/cart.png"
                                        alt="Add to cart"
                                        width={24}
                                        height={24}
                                        className="h-6 w-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
