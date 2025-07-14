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
      <section className="mt-10 py-10 px-4 max-w-6xl mx-auto space-y-8">

        <div className="grid grid-cols-3 items-center text-md md:text-2xl text-primary ">
          <div className="text-left italic">Tabinda</div>
          <div className="text-center ">{currentSlide + 1}</div>
          <div className="text-right italic ">Your Hijrah Journey</div>
        </div>

        <div className="max-w-full mx-auto text-center ">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            className="!pb-10"
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          >
            {quotes.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="px-4 ">
                  <h2 className="text-lg md:text-4xl text-primary mb-5">{item.quote}</h2>
                  <p className="text-sm md:text-lg text-primary my-2 ">{item.sub}</p>
                  <p className="text-sm text-primary italic">{item.source}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

    </>
  );
}