'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { contactMethods } from '@/data/contact'

// Dynamically import the Scene component with no SSR
const Scene = dynamic(() => import('@/components/3d/Scene'), {
  ssr: false,
})

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12">
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
      
      <div className="z-10 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-400 text-lg font-medium"
          >
            Hi there, I'm
          </motion.p>

          {/* Name */}
          <motion.div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
                Himanshu Chauhan
              </span>
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-500">
              I build things for the web
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl text-neutral-400 max-w-xl"
          >
            I'm a full-stack developer with a passion for 3D and design animation, creating immersive digital experiences that blend technology and creativity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              asChild
              className="px-8 py-6 rounded-lg bg-neutral-50 text-neutral-900 font-medium hover:bg-neutral-200 transition-all duration-300 hover:scale-105"
            >
              <a href="#contact" className="scroll-smooth text-lg">
                Get in Touch
              </a>
            </Button>
            <Button
              asChild
              className="px-8 py-6 rounded-lg bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 text-neutral-50 font-medium hover:bg-neutral-800 transition-all duration-300 hover:scale-105"
            >
              <a href="#projects" className="scroll-smooth text-lg">
                View My Work
              </a>
            </Button>
            <Button
              asChild
              className="px-8 py-6 rounded-lg bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 text-neutral-50 font-medium hover:bg-neutral-800 transition-all duration-300 hover:scale-105 group"
            >
              <a
                href="/resume-hc.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="scroll-smooth text-lg flex items-center gap-2"
              >
                <span>View Resume</span>
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </a>
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center gap-6 pt-8"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className={`text-neutral-400 hover:scale-110 transition-all duration-300 ${method.color}`}
              >
                <method.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20 sm:bottom-12"
      >
        <span className="text-sm text-neutral-500 hidden sm:block">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-neutral-500 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ height: ["20%", "80%", "20%"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 bg-neutral-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
