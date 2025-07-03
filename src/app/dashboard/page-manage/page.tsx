'use client';

import Image from 'next/image';
import { CalendarDays, Clock } from 'lucide-react';

export default function PageManage() {
  const pages = [
    {
      title: 'Collaboration',
      image: '/hero-section.jpg',
      description:
        'Tabinda berkolaborasi dengan banyak individu dan organisasi untuk memperluas pengaruh brand melalui nilai-nilai modesty dan estetika modern.',
      date: '14 Feb, 2025',
      time: '4h',
    },
    {
      title: 'Product',
      image: '/hero-section.jpg',
      description:
        'Menampilkan koleksi terbaru produk hijab Tabinda dengan desain eksklusif dan tampilan yang elegan.',
      date: '14 Feb, 2025',
      time: '4h',
    },
  ];

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-serif italic mb-1">Page Editor</h1>
      <p className="text-sm text-gray-500 mb-6">Start your daily by checking today’s tasks and updates.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pages.map((page) => (
          <div key={page.title} className="bg-white rounded border  p-4 flex flex-col gap-4">
            <Image src={page.image} alt={page.title} width={500} height={300} className="rounded w-full h-auto object-cover" />

            <div>
              <h2 className="text-2xl italic mb-1">{page.title}</h2>
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                <span className="flex items-center gap-1">
                  <CalendarDays size={14} /> {page.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {page.time}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{page.description}</p>

              <div className="flex gap-2">
                <button className="px-4 py-2 rounded bg-gray-100 text-gray-700 text-sm">View Page</button>
                <button className="px-4 py-2 rounded bg-primary text-white text-sm">Edit Page</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
