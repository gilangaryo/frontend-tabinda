'use client'

import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function QuoteCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const quotes = [
    {
      quote: "Sesungguhnya Allah Maha Indah dan Mencintai Keindahan",
      sub: "Maka Persembahkanlah yang terindah darimu kepada yang maha Indah",
      source: "HR. Muslim dari Ibnu Mas’ud radhiyallahu’anhu",
    },
    {
      quote: "اَتٰىٓ اَمْرُ اللّٰهِ فَلَا تَسْتَعْجِلُوْهُۗ سُبْحٰنَهٗ وَتَعٰلٰى عَمَّا يُشْرِكُوْنَ",
      sub: "Ketetapan Allah pasti datang. Maka, janganlah kamu meminta agar dipercepat (kedatangan)-nya. Mahasuci dan Mahatinggi Dia dari apa yang mereka persekutukan.",
      source: "Qur’an Surat An nahl 1",
    },
    {
      quote: "الدُّنْيَا مَتَاعٌ وَخَيْرُ مَتَاعِ الدُّنْيَا الْمَرْأَةُ الصَّالِحَةُ",
      sub: "Sesungguhnya dunia itu adalah perhiasan dan sebaik-baik perhiasan dunia adalah wanita salehah.",
      source: "HR. Muslim, no. 1467",
    }
  ];

  return (
    <>
      <div className="grid grid-cols-3 items-center text-sm text-[#014228]">
        <div className="text-left italic">Tabinda</div>
        <div className="text-center">{currentSlide + 1}</div>
        <div className="text-right italic">Your Hijrah Journey</div>
      </div>

      <div className="max-w-full mx-auto text-center">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 8000 }}
          loop
          className="!pb-10"
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        >
          {quotes.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="px-4">
                <p className="font-[var(--font-heading)] text-lg md:text-xl text-gray-800 mb-2">{item.quote}</p>
                <p className="text-sm md:text-base text-gray-600 mb-1 font-[var(--font-avenir)]">{item.sub}</p>
                <p className="text-xs text-gray-500 italic font-[var(--font-avenir)]">{item.source}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}