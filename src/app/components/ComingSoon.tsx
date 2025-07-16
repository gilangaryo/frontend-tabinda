'use client'
import Link from 'next/link';

export default function ComingSoon() {
    return (
        <section className="flex flex-col items-center justify-center text-center px-4 mb-8 py-4">
            <h1 className="text-6xl md:text-9xl mb-6 tracking-wider text-primary">Coming Soon</h1>
            <p className="text-gray-600 text-sm max-w-xl mb-8">
                Kami sedang merampungkan sesuatu yang menarik. <br />
                Telusuri halaman lain untuk melihat informasi terkait Tabinda.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-9xl md:text-9xl ">
                <Link
                    href="/products"
                    className="bg-primary text-white px-4 py-2 text-sm tracking-wider hover:bg-emerald-950 transition-all"
                >
                    <h3 className='text-lg md:text-xl '>
                        Telusuri Produk Tabinda
                    </h3>
                </Link>
                <Link
                    href="/"
                    className="text-primary hover:underline underline-offset-4 text-sm hover:text-emerald-950 transition-all"
                >
                    <h3 className='text-lg md:text-xl '>
                        Balik ke Halaman Utama →
                    </h3>
                </Link>
            </div>
        </section>
    );
}
