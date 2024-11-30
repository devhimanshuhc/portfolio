'use client'

import InteractiveMap from '@/components/InteractiveMap'

export default function LocationSection() {
  return (
    <section id="location" className="relative w-full py-20 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative">
          <div className="relative">
            <div className="inline-flex items-center rounded-full px-4 py-1 text-white ring-1 ring-inset ring-white/10">
              <span className="text-sm">Location</span>
            </div>
            <div className="mt-6 max-w-2xl">
              <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
                Where Magic Happens
              </h1>
              <div className="mt-6 text-base leading-7 text-gray-300">
                <p>
                  Currently crafting digital experiences from the heart of Nagpur, India.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <InteractiveMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
