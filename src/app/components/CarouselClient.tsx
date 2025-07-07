'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CarouselClient() {
  const [perView, setPerView] = useState(1)

  useEffect(() => {
    const updatePerView = () => {
      const width = window.innerWidth
      if (width >= 1024) setPerView(3)
      else if (width >= 640) setPerView(2)
      else setPerView(1)
    }

    updatePerView()
    window.addEventListener('resize', updatePerView)
    return () => window.removeEventListener('resize', updatePerView)
  }, [])

  const data = [
    'Rima',
    'Aulia',
    'Intan',
    'Gilang',
    'Aryo',
    'Pamungkas',
    'Haikal',
    'Jamal',
  ]

  return (
    <div className="relative w-full col-span-full text-[--color-primary]">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={perView}
        spaceBetween={16}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="!pb-8"
      >
        {data.map((name, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-gray-100 shadow rounded-lg mx-auto w-full h-full mb-4">
              <div className='p-5 '>
                <Image
                  src={'/quote.png'}
                  alt={`Quote`}
                  width={40}
                  height={40}
                  className=" mb-4"
                />
                <p className="text-sm mb-4">
                  Produk Tabinda sangat nyaman dan desainnya sesuai syari. Saya merasa lebih percaya diri dalam menjalani hijrah
                </p>
              </div>
              <div className='bg-white rounded-bl-lg rounded-tr-2xl w-30 p-4'>
                <p className="text-sm text-left ">{name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}
