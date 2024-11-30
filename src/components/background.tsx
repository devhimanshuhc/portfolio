'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Background = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0d1420_0%,#000000_50%)] opacity-90" />

      {/* Star field effect */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        opacity: 0.1
      }} />

      {/* Main animated gradient sphere */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px]"
      >
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#00000000,#1a1a1a,#333333,#1a1a1a,#00000000)] blur-[100px] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,#14141450,transparent_70%)] blur-[60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,#18181850,transparent_70%)] blur-[60px]" />
      </motion.div>

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-(i * 30), (i * 30), -(i * 30)],
            x: [-(i * 30), (i * 30), -(i * 30)],
            scale: [1, 1.2, 1],
            rotate: [0, i % 2 === 0 ? 180 : -180, 0],
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3,
          }}
          className="absolute opacity-20"
          style={{
            top: `${20 + i * 15}%`,
            left: `${15 + i * 15}%`,
            width: '800px',
            height: '800px',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10,#00000000_70%)] blur-[60px]" />
        </motion.div>
      ))}

      {/* Animated aurora effects */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#00000000,#ffffff05,#00000000)] blur-[80px]" />
      </motion.div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      {/* Deep vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.9)_100%)]" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>
    </div>
  )
}

export default Background
