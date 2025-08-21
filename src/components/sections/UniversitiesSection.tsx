'use client';

import { motion } from 'framer-motion';

export default function UniversitiesSection() {
  const universities1 = ["Harvard", "MIT", "Stanford", "Oxford", "Cambridge", "Yale", "Princeton", "Columbia"];
  const universities2 = ["Berkeley", "UCLA", "NYU", "LSE", "Imperial", "ETH", "NUS", "Toronto"];

  return (
    <section className="py-20 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Trusted by Students Worldwide 🌍
          </h2>
          <p className="text-xl text-gray-300">Because the struggle is universal.</p>
        </motion.div>
      </div>
      
      <div className="space-y-8">
        <div className="flex overflow-hidden">
          <div className="flex marquee whitespace-nowrap">
            {universities1.map((uni, index) => (
              <div key={index} className="mx-8 text-2xl font-bold text-gray-400 hover:text-green-400 transition-colors">
                {uni}
              </div>
            ))}
          </div>
          <div className="flex marquee whitespace-nowrap">
            {universities1.map((uni, index) => (
              <div key={index} className="mx-8 text-2xl font-bold text-gray-400 hover:text-green-400 transition-colors">
                {uni}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex overflow-hidden">
          <div className="flex marquee-reverse whitespace-nowrap">
            {universities2.map((uni, index) => (
              <div key={index} className="mx-8 text-2xl font-bold text-gray-400 hover:text-green-400 transition-colors">
                {uni}
              </div>
            ))}
          </div>
          <div className="flex marquee-reverse whitespace-nowrap">
            {universities2.map((uni, index) => (
              <div key={index} className="mx-8 text-2xl font-bold text-gray-400 hover:text-green-400 transition-colors">
                {uni}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-center text-sm text-gray-500 mt-8">
        (Disclaimer: Logos shown are for illustration only. No affiliation implied.)
      </p>
    </section>
  );
}
