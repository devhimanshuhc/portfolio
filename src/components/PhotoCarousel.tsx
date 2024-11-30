'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const photos = [
  {
    url: "/pic1.jpg",
    caption: "City Lifes"
  },
  {
    url: "/pic2.jpeg",
    caption: "Travel"
  },
  {
    url: "/pic3.jpeg",
    caption: "Skyline Views"
  },
  {
    url: "/pic4.jpeg",
    caption: "Temples"
  },
  {
    url: "/pic5.jpeg",
    caption: "Urban Landscapes"
  },
  {
    url: "/pic6.jpeg",
    caption: "Sky Scenes"
  },
  {
    url: "/pic7.jpg",
    caption: "Mountain Views"
  },
  {
    url: "/pic8.jpg",
    caption: "City Lights"
  },
  {
    url: "/pic9.jpeg",
    caption: "Lost Forest"
  }
]

export default function PhotoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-10" />
      
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0 h-[500px] transform transition-transform duration-300"
            >
              <Image
                src={photo.url}
                alt={photo.caption}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-colors"
        onClick={scrollPrev}
      >
        ←
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-colors"
        onClick={scrollNext}
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
