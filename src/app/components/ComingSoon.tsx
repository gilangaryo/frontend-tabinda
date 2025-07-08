import Link from 'next/link';

export default function ComingSoon() {
    return (
        <section className="flex flex-col items-center justify-center text-center px-4 py-20">
            <h1 className="text-6xl md:text-8xl font-semibold mb-6 tracking-wider">Coming Soon</h1>
            <p className="text-gray-600 text-sm max-w-xl mb-8">
                Kami sedang merampungkan sesuatu yang menarik. <br />
                Telusuri halaman lain untuk melihat informasi terkait Tabinda.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                    href="/products"
                    className="bg-primary text-white px-4 py-2 text-sm tracking-wider hover:bg-emerald-950 transition-all"
                >
                    <h3>
                        Telusuri Produk Tabinda
                    </h3>
                </Link>
                <Link
                    href="/"
                    className="text-primary hover:underline underline-offset-4 text-sm hover:text-emerald-950 transition-all"
                >
                    <h3>
                        Balik ke Halaman Utama →
                    </h3>
                </Link>
            </div>
        </section>
    );
}
