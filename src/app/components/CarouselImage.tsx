'use client'

import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'

export default function CarouselImage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const images = [
    '/collaboration/collaboration1.png',
    '/collaboration/collaboration2.png',
    '/collaboration/collaboration3.png',
  ]

  return (
    <div className="relative w-full col-span-full">
      <div ref={sliderRef} className="keen-slider">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide">
            <Image
              src={src}
              alt={`Event ${idx + 1}`}
              width={600}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      {loaded && instanceRef.current && (
        <>
       <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute top-1/2 -left-20 -translate-y-1/2 text-primary text-6xl rounded-full p-2 z-10 hover:bg-opacity-90"
        >
        ❮
        </button>
        <button
        onClick={() => instanceRef.current?.next()}
        className="absolute top-1/2 -right-20 -translate-y-1/2 text-primary text-6xl rounded-full p-2 z-10 hover:bg-opacity-90"
        >
        ❯
        </button>


        </>
      )}

      {/* Dots */}
      {loaded && instanceRef.current && (
        <div className="flex justify-center mt-4 gap-2">
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
            <div
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? 'bg-gray-800 w-8' : 'bg-gray-200 w-8'
            }`}

            />
          ))}
        </div>
      )}
    </div>
  )
}
