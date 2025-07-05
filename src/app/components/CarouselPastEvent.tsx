'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function CarouselImage() {
  const slides = [
    {
      image: '/collaboration/collaboration1.png',
      date: 'March, 2025',
      title: 'Event Medan Bershalawat Ustadzah Ayu Nahlul Muna Al Munawwar',
      linkText: 'See More Event',
    },
    {
      image: '/collaboration/collaboration2.png',
      date: 'April, 2025',
      title: 'Event Jakarta Hijrah Fest Bersama Ustadzah Sarah',
      linkText: 'See More Event',
    },
    {
      image: '/collaboration/collaboration3.png',
      date: 'May, 2025',
      title: 'Event Bandung Kajian Akhwat Muslimah Hijab Fest',
      linkText: 'See More Event',
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)

  const isDragging = useRef(false)
  const startX = useRef(0)
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)

    autoSlideRef.current = timeout

    return () => {
      clearTimeout(timeout)
    }
  }, [currentSlide])


  const [dragging, setDragging] = useState(false)

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const handleStart = (clientX: number) => {
    isDragging.current = true
    setDragging(true)
    startX.current = clientX
    setDragOffset(0)
  }


  const handleMove = (clientX: number) => {
    if (!isDragging.current) return
    const offset = clientX - startX.current
    setDragOffset(offset)
  }

  const handleEnd = () => {
    if (!isDragging.current) return
    isDragging.current = false
    setDragging(false)

    const threshold = 80
    if (dragOffset > threshold) prevSlide()
    else if (dragOffset < -threshold) nextSlide()

    setDragOffset(0)
  }


  const totalTranslate =
    viewportWidth > 0
      ? -currentSlide * 100 + (dragOffset / viewportWidth) * 200
      : -currentSlide * 100

  return (
    <div
      className="relative w-full max-w-5xl mx-auto overflow-hidden select-none"
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-primary text-4xl z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-primary text-4xl z-10"
      >
        ❯
      </button>

      {/* Slides */}
      <div
        className={`flex ${dragging ? '' : 'transition-transform duration-600 ease-in-out'}`}
        style={{ transform: `translateX(${totalTranslate}%)` }}
      >

        {slides.map((slide, idx) => (
          <div key={idx} className="min-w-full flex items-center">
            <div className="grid md:grid-cols-2 w-full items-center">
              <Image
                src={slide.image}
                alt={`Event ${idx + 1}`}
                width={600}
                height={400}
                draggable={false}
                className="w-full h-auto object-cover"
              />
              <div className="bg-primary text-white h-full w-full font-[var(--font-avenir)] bg-[url('/bg-texture.png')] bg-cover p-6 content-center tracking-wide">
                <p className="mb-2 text-sm">{slide.date}</p>
                <h2 className="text-lg font-medium leading-relaxed mb-4">{slide.title}</h2>
                <a href="#" className="text-sm fontlight underline italic hover:opacity-80">
                  {slide.linkText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 rounded-full cursor-pointer transition-all duration-300 ${currentSlide === idx ? 'bg-primary w-8' : 'bg-gray-300 w-4'
              }`}
          />
        ))}
      </div>
    </div>
  )
}
