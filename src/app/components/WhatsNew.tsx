import Image from 'next/image';
import Link from 'next/link';
import products from '../data/produk_tabinda.json'; // Pastikan file ini .ts atau dalam /app

export default function WhatsNew() {
    // Ambil 4 produk pertama (atau bisa filter by kategori, dsb)
    const featuredProducts = products.slice(0, 4);

    return (
        <section id="products" className="py-10 px-4 justify-center">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-6xl text-left max-w-full mx-7">See What&apos;s New</h1>
                <Link href="/products">
                    <h1 className="text-xl text-right max-w-full mx-7 italic hover:underline underline-offset-4 decoration-[0.1rem]">
                        View Collection
                    </h1>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-full mx-7">
                {featuredProducts.map((product, i) => (
                    <Link
                        key={i}
                        href={`/products/product${i + 1}`}
                        className="hover:scale-103 transition-transform duration-200"
                    >
                        <div className="text-left">
                            <Image
                                src={`/products/${product.image.replace('/', '')}`}
                                alt={product.name}
                                width={420}
                                height={600}
                                loading="lazy"
                                className="object-cover"
                            />
                            <h1 className="mt-3 text-2xl tracking-wider">{product.name}</h1>
                            <p className="mt-2 text-lg text-gray-600">{product.category}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
