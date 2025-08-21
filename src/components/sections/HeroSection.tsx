'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 text-4xl opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          📚
        </motion.div>
        <motion.div 
          className="absolute top-40 right-32 text-3xl opacity-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          😈
        </motion.div>
        <motion.div 
          className="absolute bottom-32 left-1/4 text-5xl opacity-20"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        >
          🚀
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">
            SkipExam
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Why stress it, when you can skip it?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <div className="text-3xl md:text-5xl font-bold mb-4">
            <motion.span
              key="stress"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-red-400"
            >
              Stress
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="text-green-400 ml-4"
            >
              → Skipped
            </motion.span>
          </div>
          <div className="text-3xl md:text-5xl font-bold mb-4">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="text-red-400"
            >
              Confusion
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
              className="text-green-400 ml-4"
            >
              → Skipped
            </motion.span>
          </div>
          <div className="text-3xl md:text-5xl font-bold mb-8">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 3.4 }}
              className="text-green-400"
            >
              Grades
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 4.2 }}
              className="text-green-400 ml-4 neon-text"
            >
              → Secured
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.5 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Assignments, projects, exam prep — simplified.<br />
            From Finance to Marketing, Statistics to Business Cases, Excel to Python — we&apos;ve got you covered with model solutions & expert coaching.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-6 pulse-glow">
            Skip My Stress 🚀
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
