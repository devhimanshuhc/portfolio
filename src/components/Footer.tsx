'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
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
  )
}
