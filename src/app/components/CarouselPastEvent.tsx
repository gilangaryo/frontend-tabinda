'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function CarouselPastEvent() {
  const slides = [
    {
      image: '/collaboration/collaboration-1.png',
      date: 'May, 2025',
      title: 'Event Palembang acara Ustadzah Halimah Alaydrus',
      linkText: 'See More Event',
    },
    {
      image: '/collaboration/collaboration-2.png',
      date: 'March, 2025',
      title: 'Event Medan Bershalawat Ustadzah Ayu Naylul Muna Al Munawwar',
      linkText: 'See More Event',
    },
    {
      image: '/collaboration/collaboration-3.png',
      date: 'May, 2025',
      title: 'Merayakan Hari Kemerdekaan bersama anak-anak penyandang kanker Yayasan Ayah Sarah',
      linkText: 'See More Event',
    },
  ]

  return (
    <div className="relative max-w-full md:max-w-8xl mx-0 md:mx-20 px-4">
      <button
        id="prevBtn"
        className="absolute -left-10 top-1/2 z-50 -translate-y-1/2 text-primary text-4xl px-2 py-1 hidden md:block"
      >
        ❮
      </button>

      <button
        id="nextBtn"
        className="absolute -right-10 top-1/2 z-50 -translate-y-1/2 text-primary text-4xl px-2 py-1 hidden md:block"
      >
        ❯
      </button>


      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: '#prevBtn',
          nextEl: '#nextBtn',
        }}
        pagination={{ el: '#custom-pagination', clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        spaceBetween={0}
        className="w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid md:grid-cols-2 items-center ">
              <div className="relative w-full pb-[66.66%]">
                <Image
                  src={slide.image}
                  alt={`Slide ${idx + 1}`}
                  width={600}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center bg-primary text-white h-full w-full font-[var(--font-avenir)] bg-[url('/bg-texture.png')] bg-cover p-6 tracking-wide">
                <div className='mb-10'>
                  <p className="mb-2 text-sm">{slide.date}</p>
                  <h2 className="text-2xl md:text-5xl mb-6">{slide.title}</h2>
                  <a href="/collaboration" className="text-lg  underline italic hover:opacity-80">
                    {slide.linkText}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        id="custom-pagination"
        className="flex justify-center mt-6 "
      ></div>
    </div>

  )
}
