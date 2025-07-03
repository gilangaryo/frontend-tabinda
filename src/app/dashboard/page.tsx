// src/app/dashboard/page.tsx
'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import DashboardStats from './components/DashboardStats';
export default function DashboardHome() {
  return (
    <>
      <h1 className="text-3xl italic mb-1">Good Morning, Moni!</h1>
      <p className="text-sm text-gray-500 mb-6">Start your daily by checking today’s tasks and updates.</p>

      {/* Stats */}
     <DashboardStats />

      {/* Last 30 days */}
      <div className="mb-8">
        <div className="flex gap-3 justify-between items-center">
          <button className="border border-gray-300 px-4 py-2 rounded">Last 30 days</button>
          <button className="text-sm text-primary flex items-center gap-1">View Report Snapshot <ArrowRight size={14} /></button>
        </div>
      </div>

      {/* Quick Action */}
      <div className="mb-8">
        <h2 className="font-semibold text-lg mb-2">Quick Action</h2>
        <div className="flex gap-3">
          <button className="border border-gray-300 px-4 py-2 rounded">Edit Product</button>
          <button className="border border-gray-300 px-4 py-2 rounded">Edit Collaboration</button>
        </div>
      </div>

      {/* Article Post */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-lg">Article Post</h2>
          <button className="text-sm text-primary flex items-center gap-1">View Article <ArrowRight size={14} /></button>
        </div>
        <p className="text-sm text-gray-500 mb-4">Managing/Editing Article Section</p>

        <div className="grid grid-cols-1 gap-6">
          {[1, 2].map((item) => (
            <div key={item} className="flex gap-4">
              <div className="w-50 aspect-square flex-shrink-0 rounded-2xl overflow-hidden">
                <Image
                  src={`/article/article-${item}.png`}
                  alt="Article"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-2">
                <h3 className="text-2xl italic mb-1">Tabinda Hadir dengan Modest Fashion Muslim</h3>
                <p className="text-sm text-gray-600 mb-2">Tabinda hadir untuk mengangkat nilai kesederhanaan dalam berpakaian tanpa mengorbankan estetika. Kami percaya bahwa tampil tertutup bisa tetap anggun, elegan, dan sesuai dengan gaya masa kini.</p>
                <p className="text-xs text-gray-500 italic">Frenkie Sulivan
                  <span className="not-italic">
                  • 20 Sept 2025
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
