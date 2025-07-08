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
    {
      name: 'Rima',
      message:
        'Aku suka banget model bagian kepalanya strech dan fleksibel. Tadinya udah order satu akhirnya jadi nambah warna hitam sama peach.',
    },
    {
      name: 'Wiwin',
      message:
        'Mamahku suka banget habis selesai dipakai buat sholat ied mukenanya ga dilepas-lepas sampai halal bi halal keliling dan nerima tamu di rumah mukenanya masih tetap dipakai.',
    },
    {
      name: 'Ima',
      message:
        'Bahan yang nggak pernah aku temuin di mukena lain. Ringan, adem, Stretchy. Bahannya enteng tapi kelihatan banget eleganya. packaging juga cakep cocok untuk jadi exclusive gift.',
    },
    {
      name: 'Rima',
      message:
        'Aku suka banget model bagian kepalanya strech dan fleksibel. Tadinya udah order satu akhirnya jadi nambah warna hitam sama peach.',
    },
    {
      name: 'Wiwin',
      message:
        'Mamahku suka banget habis selesai dipakai buat sholat ied mukenanya ga dilepas-lepas sampai halal bi halal keliling dan nerima tamu di rumah mukenanya masih tetap dipakai.',
    },
    {
      name: 'Ima',
      message:
        'Bahan yang nggak pernah aku temuin di mukena lain. Ringan, adem, Stretchy. Bahannya enteng tapi kelihatan banget eleganya. packaging juga cakep cocok untuk jadi exclusive gift.',
    }

  ]

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-5xl text-center mb-10 tracking-wider">
        Transformative Client Experiences
      </h1>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={perView}
        spaceBetween={16}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="!pb-12"
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-gray-100 rounded-lg h-full flex flex-col justify-between min-h-[300px] mx-2">
              <div className="p-5">
                <Image
                  src={'/quote.png'}
                  alt={`Quote`}
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <p className="text-lg tracking-wide mb-4">{item.message}</p>
              </div>
              <div className="bg-white rounded-bl-lg rounded-tr-2xl w-30 px-6 py-3">
                <p className="text-sm text-left">{item.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
