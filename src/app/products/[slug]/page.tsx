import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import products from '../../data/produk_tabinda'; // Assuming produk_tabinda.ts is in the src directory
import { formatPrice } from '../../utils/formatPrice';

export default async function ProductDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);
    if (!product) return notFound();

    const relatedProducts = products.filter(p => p.slug !== slug).slice(0, 3);


    return (
        <div className="text-primary">

            {/* Detail Section */}
            <section className="max-w-full mx-auto grid md:grid-cols-2 gap-4 px-10 pb-10">
                <div className='w-full max-w-lg mx-auto relative'>
                    <Link href="/products" className="hover:underline">Collection</Link> / Mukena
                </div>
                <div className='max-w-lg px-10 mx-auto'>
                </div>

                <div className="w-full aspect-[3/4] max-w-lg mx-auto relative overflow-hidden">
                    <Image
                        src={`/products/showcase/${product.image.replace('/', '')}`}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Informasi Produk */}
                <div className="flex flex-col">
                    <h1 className="text-4xl md:text-5xl tracking-wider py-2">{product.name}</h1>
                    <h4 className="text-xl tracking-wider leading-loose text-gray-500 mb-2 whitespace-pre-line">
                        {product.description}
                    </h4>
                    <p className="text-4xl my-4">IDR {formatPrice(product.price)}</p>

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

                    <a
                        href={product.link_tokopedia}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-6 py-3 mt-4 w-full rounded hover:opacity-90 transition text-center block"
                    >
                        Checkout Now!
                    </a>
                </div>

            </section>

            {/* You May Also Like */}
            <section className="max-w-full mx-auto px-10 pb-16 mt-4">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Kiri: Judul dan Link */}
                    <div className="md:w-1/4 w-full">
                        <h3 className="text-4xl mb-2">You May Also Like</h3>
                        <Link href="/products" className="text-sm italic text-primary underline">
                            View Collection
                        </Link>
                    </div>

                    {/* Kanan: Produk */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                        {relatedProducts.map((product) => (
                            <Link key={product.id} href={`/products/${product.slug}`}>
                                <div className="text-left">
                                    <Image
                                        src={`/products/showcase/${product.image.replace('/', '')}`}
                                        alt={product.name}
                                        width={300}
                                        height={400}
                                        loading="lazy"
                                        className="object-cover w-full h-auto mb-2"
                                    />

                                    {/* Grid Text Bawah */}
                                    <div className="grid grid-cols-2">
                                        <p className="font-semibold text-lg text-primary uppercase">{product.name}</p>
                                        <p className="text-md text-primary text-right">{formatPrice(product.price)}</p>

                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>




        </div>
    );
}
