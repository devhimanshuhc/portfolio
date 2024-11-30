'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/data/projects'

export default function ProjectsSection() {
  return (
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
  )
}
