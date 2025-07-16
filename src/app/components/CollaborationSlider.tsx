'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function CollaborationSlider() {

    const slides = [
        {
            image: '/collaboration/head/1.jpg',
            title: 'Event Medan Bershalawat Ustadzah Ayu Naylul Muna Al Munawwar',
            date: 'March, 2025',
        },
        {
            image: '/collaboration/head/2.jpg',
            title: 'Merayakan Hari Kemerdekaan bersama anak-anak penyandang kanker Yayasan Ayah Sarah',
            date: 'Aug, 2024',
        },
        {
            image: '/collaboration/head/3.jpg',
            title: 'Event Palembang acara Ustadzah Halimah Alaydrus',
            date: 'May, 2024',
        },

    ]

    return (
        <div className="w-full">

            {/* Swiper Carousel */}
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 7000 }}
                loop
                className="!pb-12"
                spaceBetween={30}
                slidesPerView={1.2}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="flex flex-col text-center items-center">
                            {/* Gambar 1:1 */}
                            <div className="relative aspect-square w-full mb-4 overflow-hidden ">
                                <Image
                                    src={slide.image}
                                    alt={`Slide ${i + 1}`}
                                    fill
                                    className="object-cover"
                                    draggable={false}
                                />
                            </div>

                            {/* Text */}
                            <h2 className="text-2xl mb-1 ">{slide.title}</h2>
                            <p className="text-md">{slide.date}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
