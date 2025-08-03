"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      onAnimationComplete={() => setIsLoading(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, neutral-500 2%, transparent 0%), radial-gradient(circle at 75px 75px, neutral-500 2%, transparent 0%)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          {/* Pulse Effect */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-xl bg-neutral-800 blur-xl"
          />

          {/* <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
              HC
            </span>
          </div> */}
        </motion.div>

        {/* Progress Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-sm text-neutral-400 flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-2">
            <span className="font-mono">{progress}%</span>
            <span>Loading</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              ...
            </motion.span>
          </div>
        </motion.div>

        {/* Loading Bar Container */}
        <div className="relative mt-4 h-0.5 w-48 overflow-hidden rounded-full bg-neutral-800">
          {/* Animated Loading Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute h-full bg-gradient-to-r from-neutral-500 via-neutral-300 to-neutral-500"
          />
          {/* Glow Effect */}
          <motion.div
            animate={{ x: [-100, 200] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-neutral-100/10 to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}
