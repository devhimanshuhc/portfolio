'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-20 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative">
          <div className="relative">
            <div className="inline-flex items-center rounded-full px-4 py-1 text-white ring-1 ring-inset ring-white/10">
              <span className="text-sm">About</span>
            </div>
            <div className="mt-6 max-w-2xl">
              <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
                About Me
              </h1>
              <div className="mt-6 text-base leading-7 text-gray-300">
                <p>
                  Hello! I&apos;m Himanshu, a passionate Full Stack Developer 
                  originally from Dehradun, the picturesque capital of Uttarakhand 
                  nestled in the Himalayan foothills. Currently pursuing my graduation 
                  in Nagpur, Maharashtra, where I&apos;m turning my tech dreams into reality.
                </p>
                <p className="mt-4">
                  Coming from the &quot;Queen of Hills&quot; to the &quot;Orange City,&quot; 
                  my journey reflects my adaptability and drive. I focus on developing 
                  elegant solutions that balance form and function, bringing together 
                  the serenity of my hometown and the vibrancy of my university city 
                  in every project I create.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
