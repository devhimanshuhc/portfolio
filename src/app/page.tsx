'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import PhotoCarousel from '@/components/PhotoCarousel'
import Preloader from '@/components/Preloader'
import InteractiveMap from '@/components/InteractiveMap'
import { 
  SiNextdotjs, 
  SiReact, 
  SiSvelte, 
  SiTypescript, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiTauri,
  SiTailwindcss,
  SiChakraui,
  SiBootstrap,
  SiShadcnui,
  SiBlockchaindotcom,
  SiSolidity,
  SiUnrealengine,
  SiGoogleanalytics,
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiX,
  SiPostgresql,
  SiThreedotjs
} from 'react-icons/si'
import { MdEmail, MdWeb, MdDesktopMac, MdBrush, MdCode } from 'react-icons/md'

// Dynamically import the Scene component with no SSR
const Scene = dynamic(() => import('@/components/3d/Scene'), {
  ssr: false,
})

const skills = [
  {
    category: "Frontend",
    categoryIcon: MdWeb,
    description: "Building modern web applications with cutting-edge frameworks",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Svelte", icon: SiSvelte },
      { name: "Three.Js", icon: SiThreedotjs }
    ]
  },
  {
    category: "Backend & Desktop",
    categoryIcon: MdDesktopMac,
    description: "Developing robust server-side and desktop applications",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSql", icon: SiPostgresql },
      { name: "Electron/Tauri", icon: SiTauri }
    ]
  },
  {
    category: "UI Frameworks",
    categoryIcon: MdBrush,
    description: "Crafting beautiful user interfaces with modern CSS frameworks",
    items: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Shadcn UI", icon: SiShadcnui },
      { name: "Chakra UI", icon: SiChakraui },
      { name: "Bootstrap", icon: SiBootstrap }
    ]
  },
  {
    category: "Technologies",
    categoryIcon: MdCode,
    description: "Implementing advanced technical solutions",
    items: [
      { name: "Blockchain", icon: SiBlockchaindotcom },
      { name: "Smart Contracts", icon: SiSolidity },
      { name: "Unreal Engine", icon: SiUnrealengine },
    ]
  }
];

const projects = [
  {
    title: "Revio",
    description: "A comprehensive real estate platform built with Next.js, leveraging RapidAPI for property data. Features include advanced property search, detailed listings, and interactive maps.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    category: "Real Estate",
    tech: ["Next.js", "RapidAPI", "Axios", "TailwindCSS"],
    featured: true,
    link: "https://revio.vercel.app/",
    github: "https://github.com/devhimanshuhc/ReVio"
  },
  {
    title: "CryptoRealms",
    description: "Cryptocurrency tracking application providing real-time data on top cryptocurrencies. Built with React and RTK Query for efficient state management.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop",
    category: "Cryptocurrency",
    tech: ["React", "RTK Query", "RapidAPI", "Tailwind CSS"],
    link: "https://cryptorealms.vercel.app",
    github: "https://github.com/devhimanshuhc/cryptorealms"
  },
  {
    title: "Portfolio Website",
    description: "Interactive portfolio featuring 3D animations, custom terminal-like interactions, and smooth transitions. Built with Next.js and TypeScript.",
    image: "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2070&auto=format&fit=crop",
    category: "Personal",
    tech: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS"],
    featured: true,
    link: "#",
    github: "#"
  },
  {
    title: "Muchas",
    description: "Location-based application with interactive maps and real-time updates. Features a scalable backend built with Node.js and Appwrite.",
    image: "https://images.unsplash.com/photo-1577086664693-894d8405334a?q=80&w=2070&auto=format&fit=crop",
    category: "Maps",
    tech: ["React", "TypeScript", "Node.js", "Appwrite"],
    link: "#",
    github: "https://github.com/devhimanshuhc/Muchas"
  }
];

const contactMethods = [
  {
    name: 'GitHub',
    href: 'https://github.com/devhimanshuhc',
    icon: SiGithub,
    color: 'hover:text-[#2ea44f]'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/himanshu-chauhan-3b47a7220/',
    icon: SiLinkedin,
    color: 'hover:text-[#0077b5]'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/hiimanshu.chauhan/',
    icon: SiInstagram,
    color: 'hover:text-[#e4405f]'
  },
  {
    name: 'Twitter',
    href: 'https://x.com/devhimanshuhc',
    icon: SiX,
    color: 'hover:text-neutral-50'
  },
  {
    name: 'Email',
    href: 'mailto:devhimanshuhc@gmail.com',
    icon: MdEmail,
    color: 'hover:text-[#ea4335]'
  }
];

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="flex min-h-screen flex-col items-center justify-between">
        
        {/* Hero Section */}
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

        {/* About Section */}
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

        {/* Skills Section */}
        <section id="skills" className="relative w-full py-20 sm:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="relative">
              <div className="relative">
                <div className="inline-flex items-center rounded-full px-4 py-1 text-white ring-1 ring-inset ring-white/10">
                  <span className="text-sm">Skills</span>
                </div>
                <div className="mt-6 max-w-2xl">
                  <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
                    Technical Arsenal
                  </h1>
                </div>
                {/* Skills Grid */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="p-6 rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800"
                    >
                      <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                        <skill.categoryIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-semibold mb-2">{skill.category}</h2>
                      <p className="text-neutral-400">{skill.description}</p>
                      
                      {/* Skill Items */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <span
                            key={item.name}
                            className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-neutral-800/80 text-neutral-300"
                          >
                            <item.icon className="w-4 h-4" />
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
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

        {/* Projects Section */}
        <section id="projects" className="relative w-full py-20 sm:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 mb-8"
            >
              <div className="inline-flex items-center rounded-full px-4 py-1 text-white ring-1 ring-inset ring-white/10">
                <span className="text-sm">Projects</span>
              </div>
              <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
                Featured Projects
              </h1>
              <p className="text-base  text-neutral-300 max-w-2xl">
                A showcase of projects highlighting my web development expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-3 md:gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`group relative rounded-lg overflow-hidden bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 
                    ${project.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
                >
                  {/* Project Image with Overlay */}
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="relative h-full p-3 sm:p-4 flex flex-col justify-end transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                    {/* Category Tag */}
                    <div className="inline-flex mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-800/80 text-neutral-200">
                        {project.category}
                      </span>
                    </div>

                    {/* Title and Description */}
                    <h2 className="text-2xl font-bold mb-1 text-white">{project.title}</h2>
                    <p className="text-xs text-neutral-300 mb-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 py-0.5 text-[10px] rounded bg-neutral-800/80 text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-medium text-white hover:text-neutral-300 transition-colors duration-300 flex items-center gap-1"
                      >
                        View Project
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-medium text-white hover:text-neutral-300 transition-colors duration-300 flex items-center gap-1"
                      >
                        GitHub
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Photography Section */}
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

        {/* Contact Section */}
        <section id="contact" className="relative w-full py-20 sm:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 mb-8"
            >
              <div className="inline-flex items-center rounded-full px-4 py-1 text-white ring-1 ring-inset ring-white/10">
                <span className="text-sm">Get in touch</span>
              </div>
              <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
                Let&apos;s Connect
              </h1>
              <p className="text-base  text-neutral-300 max-w-2xl">
                Whether you have a project in mind or just want to chat, I&apos;d love to hear from you.
                Drop me a message and I&apos;ll get back to you as soon as possible.
              </p>
            </motion.div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.name}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group p-6 rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 transition-all duration-300 hover:bg-neutral-900 hover:border-neutral-700 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <method.icon className={`w-6 h-6 transition-colors duration-300 ${method.color}`} />
                  </div>
                  <h2 className="text-2xl font-semibold group-hover:text-neutral-50 transition-colors duration-300">
                    {method.name}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                    Connect with me on {method.name}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Additional Text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center text-neutral-400 mt-8"
            >
              <p>Available for freelance projects and full-time opportunities</p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative w-full py-8 border-t border-neutral-800/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex items-center justify-center">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-sm text-neutral-400"
              >
                Created with love by{' '}
                <a
                  href="https://github.com/devhimanshuhc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-neutral-200 underline underline-offset-4 hover:text-neutral-50 transition-colors"
                >
                  Himanshu Chauhan
                </a>
              </motion.p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
