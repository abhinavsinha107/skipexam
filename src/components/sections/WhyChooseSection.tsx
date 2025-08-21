'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Target, Eye, Clock, Laptop } from 'lucide-react';

export default function WhyChooseSection() {
  const features = [
    { icon: <Zap className="w-8 h-8" />, title: "Zero Stress", desc: "You chill, we guide.", delay: 0.1 },
    { icon: <Target className="w-8 h-8" />, title: "Success-Driven", desc: "Clear solutions, better grades.", delay: 0.2 },
    { icon: <Eye className="w-8 h-8" />, title: "Confidential AF", desc: "Nobody will ever know.", delay: 0.3 },
    { icon: <Clock className="w-8 h-8" />, title: "Last-Minute Friendly", desc: "Even overnight deadlines.", delay: 0.4 },
    { icon: <Laptop className="w-8 h-8" />, title: "Any Subject, Any Tool", desc: "Broadest coverage out there.", delay: 0.5 }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text"
        >
          Why Choose SkipExam
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <Card className="bg-slate-700 border-slate-600 hover:border-green-400 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="text-green-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
