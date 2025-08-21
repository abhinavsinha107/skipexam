'use client';

import { motion } from 'framer-motion';

export default function HowItWorksSection() {
  const steps = [
    { 
      icon: "📤", 
      title: "Upload Your Brief", 
      desc: "Share your task or prep needs with our secure platform.",
      step: 1,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-400/30"
    },
    { 
      icon: "⚡", 
      title: "Get a Quote (2h max)", 
      desc: "Instant clarity, no waiting. Fair pricing, transparent process.",
      step: 2,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-400/30"
    },
    { 
      icon: "🔬", 
      title: "We Build Your Model Solution", 
      desc: "Crafted by subject experts with step-by-step explanations.",
      step: 3,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-400/30"
    },
    { 
      icon: "🎯", 
      title: "You Learn & Apply", 
      desc: "Stress skipped, grades secured. Master the concepts for future success.",
      step: 4,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-400/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-green-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 text-4xl opacity-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          ⚙️
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-16 text-5xl opacity-20"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          🚀
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="text-6xl">🔄</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process ensures you get expert help quickly and efficiently
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative"
              >
                <div className={`${item.bgColor} ${item.borderColor} border backdrop-blur-sm rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10`}>
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-slate-800 to-slate-700 border-2 border-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>

                  {/* Icon with Animation */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                    className="text-6xl mb-6 inline-block"
                  >
                    {item.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors">
                    {item.desc}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full blur-xl`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Flow Arrows (Desktop) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 0.3, pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <svg width="400" height="300" viewBox="0 0 400 300" className="text-green-400">
                <defs>
                  <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
                <path
                  d="M50 50 Q200 20 350 50 Q380 150 350 250 Q200 280 50 250 Q20 150 50 50"
                  stroke="url(#arrowGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-full px-8 py-4">
            <span className="text-2xl">⏱️</span>
            <span className="text-green-400 font-medium text-lg">Average turnaround: 24-48 hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
