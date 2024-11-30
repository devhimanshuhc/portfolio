'use client'

import dynamic from 'next/dynamic'
import Preloader from '@/components/Preloader'
import HeroSection from '@/components/sections/HeroSection'
import Footer from '@/components/Footer'

// Lazy load other sections
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {
  loading: () => <div className="w-full h-screen animate-pulse bg-neutral-900/50" />
})
const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection'), {
  loading: () => <div className="w-full h-screen animate-pulse bg-neutral-900/50" />
})
const LocationSection = dynamic(() => import('@/components/sections/LocationSection'), {
  loading: () => <div className="w-full h-screen animate-pulse bg-neutral-900/50" />
})
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), {
  loading: () => <div className="w-full h-screen animate-pulse bg-neutral-900/50" />
})
const PhotographySection = dynamic(() => import('@/components/sections/PhotographySection'), {
  loading: () => <div className="w-full h-screen animate-pulse bg-neutral-900/50" />
})
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  loading: () => <div className="w-full h-[50vh] animate-pulse bg-neutral-900/50" />
})

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <LocationSection />
        <ProjectsSection />
        <PhotographySection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}