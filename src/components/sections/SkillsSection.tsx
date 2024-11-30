'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/skills'

export default function SkillsSection() {
  return (
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
    
  )
}
