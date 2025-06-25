'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'

export default function CarouselClient() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    breakpoints: {
      '(min-width: 0px)': {
        slides: { perView: 1, spacing: 16 },
      },
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 16 },
      },
    },
    slides: {
      perView: 1,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const data = [
    'Rima',
    'Aulia',
    'Intan',
    'Gilang',
    'Aryo',
    'Pamungkas',
    'Novia',
    'Haikal',
    'Jamal',
  ]

  return (
    <div className="relative w-full col-span-full text-[--color-primary]">
      <div ref={sliderRef} className="keen-slider">
        {data.map((name, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bg-gray-100 shadow p-6 rounded-lg mx-auto w-full "
          >
            <p className="text-sm mb-4">
              Produk Tabista sangat nyaman dan desainnya sesuai syari. Saya merasa lebih percaya diri dalam menjalani hijrah
            </p>
            <p className="text-sm text-right">- {name}</p>
          </div>
        ))}
      </div>

      {/* Dots */}
      {loaded && instanceRef.current && (
        <div className="flex justify-center mt-4 gap-2">
          {[
            ...Array(
              Math.ceil(
                instanceRef.current.track.details.slides.length /
                  (instanceRef.current.options.slides?.perView || 1)
              )
            ).keys(),
          ].map((idx) => {
            const perView = instanceRef.current?.options.slides?.perView || 1
            const isActive =
              currentSlide >= idx * perView &&
              currentSlide < (idx + 1) * perView

            return (
              <div
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx * perView)}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive ? 'bg-gray-800 w-8' : 'bg-gray-200 w-8'
                }`}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
