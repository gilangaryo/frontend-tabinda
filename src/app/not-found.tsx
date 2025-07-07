import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function NotFound() {
    return (
        <div className="text-primary font-[var(--font-avenir)]">
            <Navbar />

            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20">
                <p> 404 </p>
                <h1 className="text-4xl font-bold mb-2">
                    <span>
                        <p>
                            404
                        </p>
                    </span>
                    - Halaman Tidak Ditemukan
                </h1>
                <p className="text-gray-600 max-w-xl mb-6">
                    Sepertinya produk atau halaman yang kamu cari tidak tersedia.
                    Mungkin sudah tidak dijual, atau URL-nya salah.
                </p>

                <Link
                    href="/products"
                    className="inline-block px-6 py-3 bg-primary text-white rounded hover:opacity-90 transition"
                >
                    Kembali ke Katalog
                </Link>
            </div>

            <Footer />
        </div>
    );
}
