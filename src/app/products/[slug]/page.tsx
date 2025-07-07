// 'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

const products = [
    {
        slug: 'product1',
        name: 'Aziza Mukena',
        series: 'SENANTIASA TRAVEL',
        description: `Senantiasa Travel adalah mukena terusan berlengan yang manis dan tetap sesuai syariat, memastikan aurat tertutup sempurna. Dilengkapi finger loop di jari, kerutan di pergelangan tangan, dan lapisan ganda di bagian kepala untuk kenyamanan saat salat. Resleting di dagu memudahkan saat bepergian. Terbuat dari parasut premium yang halus, ringan, dan tidak berisik, dengan jahitan rapi dan detail, disertai tas kecil praktis yang mudah dibawa ke mana saja.`,
        image: '/products/product1.png',
        price: 'IDR 320.000',
        colors: ['Nusaindah/Mint', 'Kinantran/Nude', 'Gandarisa Lilac', 'Turangga/Sands', 'Kebalu Teleng'],
    },
];

export default async function ProductDetail(props: { params: { slug: string } }) {
    const { slug } = await props.params;
    const product = products.find((p) => p.slug === slug);
    if (!product) return notFound();

    return (
        <div className=" text-primary">
            <Navbar />

            {/* Breadcrumb */}
            <div className="max-w-full mx-auto px-10 py-2 text-2xl text-primary">
                <Link href="/products" className="hover:underline">
                    Collection
                </Link>{' '}
                / Mukena
            </div>

            {/* Detail Section */}
            <section className="max-w-full mx-auto grid md:grid-cols-2 gap-10 px-10 pb-10">
                {/* Gambar */}
                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={700}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                />

                {/* Informasi Produk */}
                <div className="flex flex-col ">
                    <h1 className="text-5xl tracking-wider py-4">{product.name}</h1>
                    <h4 className="text-2xl tracking-wider leading-loose text-gray-500 mb-6 whitespace-pre-line">{product.description}</h4>
                    <p className="text-4xl font-semibold my-4">{product.price}</p>

                    <div className="mb-6">
                        <p className="text-sm mb-2">Color:</p>
                        <div className="flex flex-wrap gap-2">
                            {product.colors.map((color) => (
                                <button
                                    key={color}
                                    className="px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-100 transition"
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="bg-primary text-white px-6 py-3 mt-4 w-full rounded hover:opacity-90 transition">
                        Checkout Now!
                    </button>
                </div>
            </section>

            {/* You May Also Like */}
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl">Your May Also Like</h3>
                    <Link href="/products" className="text-sm underline">
                        View Collection
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[2, 3, 4, 5].map((i) => (
                        <Link key={i} href={`/products/product${i}`}>
                            <div className="text-left">
                                <Image
                                    src={`/products/product${i}.png`}
                                    alt={`Product ${i}`}
                                    width={300}
                                    height={400}
                                    loading="lazy"
                                    className="object-cover w-full h-auto mb-2"
                                />
                                <p className="text-sm font-semibold">SENANTIASA TRAVEL</p>
                                <p className="text-xs text-gray-600">Aziza Mukena</p>
                                <p className="text-sm mt-1">IDR 350.000</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
