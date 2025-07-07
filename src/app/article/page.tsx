'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Explore from '../components/Explore';

const articles = [
    {
        slug: 'loving-scandinavian-style',
        title: 'Loving Scandinavian Style',
        date: 'Mar 6, 2025',
        category: 'Article',
        image: '/article/article-1.png',
        excerpt:
            'Embracing Japanese Aesthetics involves appreciating nature and craftsmanship. The philosophy of Wabi-Sabi teaches us to find...',
    },
    {
        slug: 'embracing-japanese-styles',
        title: 'Embracing Japanese Styles',
        date: 'Mar 16, 2025',
        category: 'Article',
        image: '/article/article-2.png',
        excerpt:
            'Wabi-sabi, handmade fabrics, and the elegance of imperfection in style.',
    },
    {
        slug: 'the-art-of-minimalism',
        title: 'The Art of Minimalism',
        date: 'Mar 8, 2025',
        category: 'Article',
        image: '/article/article-3.png',
        excerpt:
            'Minimal wardrobe and conscious elegance—less is more with meaning.',
    },
];

export default function Article() {
    return (
        <div className="text-primary">
            <section className="relative h-120 bg-cover bg-center">
                <div>
                    <Navbar />
                    <Image
                        src="/article-page/hero-article.png"
                        alt="Hero background"
                        layout="fill"
                        priority
                        className="z-0 object-cover"
                    />
                </div>
            </section>

            <section className="px-6 md:px-10 py-10 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {articles.slice(0, 2).map((article, index) => (
                        <Link key={index} href={`/article/${article.slug}`} className="flex flex-col hover:opacity-90">
                            <div className="relative w-full aspect-[1/1] mb-4 overflow-hidden ">
                                <Image src={article.image} alt={article.title} fill className="object-cover" />
                            </div>
                            <p className="text-xs text-green-900 italic mb-1">
                                {article.category} / {article.date}
                            </p>
                            <h3 className="text-2xl mb-2">{article.title}</h3>
                            <p className="text-sm text-gray-700">{article.excerpt}</p>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="px-6 md:px-10 pb-20">
                <h2 className="text-2xl font-semibold mb-8">Latest Article</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <Link key={index} href={`/article/${article.slug}`} className="flex flex-col hover:opacity-90">
                            <div className="relative w-full aspect-[1/1] mb-4 overflow-hidden ">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    loading="lazy"
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-xs text-green-900 italic mb-1">
                                {article.category} / {article.date}
                            </p>
                            <h3 className="text-xl italic mb-2">{article.title}</h3>
                            <p className="text-sm text-gray-600">{article.excerpt}</p>
                        </Link>
                    ))}
                </div>
            </section>

            <section>
                <Explore />
            </section>

            <Footer />
        </div>
    );
}
