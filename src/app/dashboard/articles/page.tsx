'use client';

import Image from 'next/image';
import { MoreVertical, Plus } from 'lucide-react';

export default function ArticleManagePage() {
  const articles = [
    {
      title: 'Tabinda Hadir dengan Modest Fashion Muslim',
      excerpt: 'Tabinda hadir untuk mengangkat nilai kesederhanaan dalam berpakaian tanpa mengorbankan estetika. Kami percaya bahwa tampil tertutup bisa tetap anggun, elegan, dan sesuai dengan gaya masa kini.',
      date: '6 Sept, 2024',
      image: '/products/product1.png',
    },
    {
      title: 'Zara Nabila menginspirasi melalui Busana Kasual',
      excerpt: 'Zara Nabila memberikan pilihan busana kasual yang nyaman namun tetap stylish. Dengan koleksi yang bervariasi, setiap orang dapat menemukan gaya yang cocok untuk berbagai kesempatan.',
      date: '12 Sept, 2024',
      image: '/products/product2.png',
    },
    {
      title: 'Rizki Prabowo dan Keberanian Fashion Pria',
      excerpt: 'Rizki Prabowo menghadirkan koleksi fashion pria yang berani dan inovatif. Menggabungkan elemen tradisional dengan tren modern, setiap potongan memberikan karakter tersendiri.',
      date: '15 Sept, 2024',
      image: '/products/product3.png',
    },
    {
      title: 'Mira Santoso Merayakan Budaya Lewat Busana',
      excerpt: 'Mira Santoso mengangkat keindahan budaya lokal ke dalam desain busananya. Dengan memadukan motif tradisional dan teknik modern, koleksinya menawarkan keunikan dan keanggunan.',
      date: '20 Sept, 2024',
      image: '/products/product4.png',
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-serif italic">Article Post</h1>
        <button className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded text-sm hover:bg-primary">
          <Plus size={16} /> Add New Article
        </button>
      </div>
      <p className="text-sm text-gray-500 mb-6">Managing/Editing Article Section</p>

      <div className="space-y-6">
        {articles.map((article, idx) => (
          <div key={idx} className="flex items-start gap-4 bg-white p-4 border rounded">
            <Image
              src={article.image}
              alt={article.title}
              width={100}
              height={100}
              className="rounded object-cover"
            />
            <div className="flex-1">
              <h2 className="italic font-medium text-lg mb-1">{article.title}</h2>
              <p className="text-sm text-gray-600 mb-1">{article.excerpt}</p>
              <p className="text-sm text-gray-400">{article.date}</p>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
              <MoreVertical size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
