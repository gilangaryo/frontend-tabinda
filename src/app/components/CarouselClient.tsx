'use client'

import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'

export default function CarouselClient() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [perView, setPerView] = useState(1)

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
    created(slider) {
      setLoaded(true)
      updatePerView(slider)
    },
    updated(slider) {
      updatePerView(slider)
    },
  })

  const updatePerView = (slider: KeenSliderInstance) => {
    const options = slider.options.slides
    if (
      typeof options === 'object' &&
      options !== null &&
      'perView' in options &&
      typeof options.perView === 'number'
    ) {
      setPerView(options.perView)
    } else {
      setPerView(1)
    }
  }

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

  const totalDots = Math.ceil(data.length / perView)

  return (
    <div className="relative w-full col-span-full text-[--color-primary]">
      <div ref={sliderRef} className="keen-slider">
        {data.map((name, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bg-gray-100 shadow p-8 rounded-lg mx-auto w-full"
          >
            <p className="text-base mb-4">
              Produk Tabista sangat nyaman dan desainnya sesuai syari. Saya merasa lebih percaya diri dalam menjalani hijrah
            </p>
            <p className="text-sm text-right">- {name}</p>
          </div>
        ))}
      </div>

      {/* Dots */}
      {loaded && (
        <div className="flex justify-center mt-6 gap-2">
          {[...Array(totalDots).keys()].map((idx) => {
            const isActive =
              currentSlide >= idx * perView &&
              currentSlide < (idx + 1) * perView

            return (
              <div
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx * perView)}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive ? 'bg-primary w-8' : 'bg-gray-300 w-4'
                }`}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
