'use client'

import { motion } from 'framer-motion'
import PhotoCarousel from '@/components/PhotoCarousel'

export default function PhotographySection() {
  return (
    <section id="photography" className="relative w-full py-20 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-12"
        >
          <div className="inline-flex items-center rounded-full px-4 py-1 text-white ring-1 ring-inset ring-white/10">
            <span className="text-sm">Photography</span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Through My Lens
          </h1>
          <p className="text-base  text-neutral-300 max-w-2xl">
            Where code meets creativity in capturing life's moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <PhotoCarousel />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 p-6"
          >
            <blockquote className="text-2xl font-semibold italic text-neutral-200">
              "Photography is the story I fail to put into words."
              <span className="block text-lg mt-2 text-neutral-400">— Destin Sparks</span>
            </blockquote>

            <p className="text-neutral-300">
              When I'm not coding, you'll find me with a camera in hand, capturing the play of light and shadow. It's a creative outlet that mirrors my approach to coding—paying attention to the details, finding innovative solutions, and always striving for perfection.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full text-sm bg-neutral-800/80 text-neutral-300">Street Photography</span>
              <span className="px-3 py-1 rounded-full text-sm bg-neutral-800/80 text-neutral-300">Urban Landscapes</span>
              <span className="px-3 py-1 rounded-full text-sm bg-neutral-800/80 text-neutral-300">Nature</span>
              <span className="px-3 py-1 rounded-full text-sm bg-neutral-800/80 text-neutral-300">Portraits</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
