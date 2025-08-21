'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function FinalCTASection() {
  const floatingElements = [
    { emoji: "🎯", position: "top-10 left-10", size: "text-4xl", delay: 0 },
    { emoji: "⚡", position: "top-20 right-20", size: "text-5xl", delay: 1 },
    { emoji: "🚀", position: "bottom-20 left-1/4", size: "text-6xl", delay: 2 },
    { emoji: "✨", position: "bottom-32 right-1/3", size: "text-4xl", delay: 3 },
    { emoji: "🎉", position: "top-1/2 left-20", size: "text-3xl", delay: 4 },
    { emoji: "💡", position: "top-1/3 right-10", size: "text-4xl", delay: 5 }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        
        {/* Floating elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} ${element.size} opacity-20`}
            animate={{ 
              y: [0, -30, 0], 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8 + index, 
              repeat: Infinity, 
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            {element.emoji}
          </motion.div>
        ))}
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/30 rotate-45 rounded-lg"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-white/20 rotate-12 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Main headline with enhanced typography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 text-white leading-tight">
              <span className="block">Exams don&apos;t have to</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                equal stress.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl mb-12 text-white/90 font-light leading-relaxed"
          >
            Grades don&apos;t have to mean <span className="font-bold text-yellow-300">panic.</span>
          </motion.p>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className="mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
                className="bg-white text-green-700 hover:bg-yellow-100 font-black text-2xl md:text-3xl px-16 py-10 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 border-4 border-white/20 hover:border-yellow-300/50"
                size="lg"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="mr-3"
                >
                  🎯
                </motion.span>
                Skip My Stress Now
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-3"
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social proof and hashtag */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-yellow-300 text-xl">⭐⭐⭐⭐⭐</span>
                <span className="font-medium">Trusted by 10,000+ students</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-xl">✅</span>
                <span className="font-medium">24/7 Expert Support</span>
              </div>
            </div>
            
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4"
            >
              <span className="text-2xl">🚀</span>
              <span className="text-2xl font-bold text-white">#SkipExam</span>
              <span className="text-white/80">- Join the movement!</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
