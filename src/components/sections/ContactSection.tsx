'use client'

import { motion } from 'framer-motion'
import { contactMethods } from '@/data/contact'

export default function ContactSection() {
  return (
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
            <span className="text-sm">Contact</span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="text-base text-neutral-300 max-w-2xl">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap gap-4">
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
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 text-neutral-300 hover:scale-105 transition-all duration-300 ${method.color}`}
                >
                  <method.icon className="w-5 h-5" />
                  <span>{method.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Let's Create Something Amazing</h3>
              <p className="text-neutral-300">
                Whether you have a project that needs technical expertise or just want to explore potential collaborations, I'm always excited to discuss new opportunities.
              </p>
              <div className="mt-4 text-neutral-400">
                <p>Based in: Nagpur, Maharashtra, India</p>
                <p>Available for: Freelance, Full-time opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
