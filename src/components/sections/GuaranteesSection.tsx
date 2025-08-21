'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, CheckCircle, RefreshCw, Timer } from 'lucide-react';

export default function GuaranteesSection() {
  const guarantees = [
    { icon: <Shield className="w-8 h-8" />, title: "Privacy First", desc: "100% confidential.", detail: "Your identity stays protected" },
    { icon: <CheckCircle className="w-8 h-8" />, title: "Original Work", desc: "Freshly built model answers.", detail: "Custom solutions every time" },
    { icon: <RefreshCw className="w-8 h-8" />, title: "Satisfaction Guarantee", desc: "Not happy? Refund.", detail: "Refund within 48h" },
    { icon: <Timer className="w-8 h-8" />, title: "Deadline Proof", desc: "On time, every time.", detail: "Never miss a deadline" }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text"
        >
          Our Guarantees
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group perspective-1000"
            >
              <div className="relative w-full h-48 preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <Card className="absolute inset-0 bg-slate-700 border-slate-600 backface-hidden">
                  <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                    <div className="text-green-400 mb-4 flex justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </CardContent>
                </Card>
                <Card className="absolute inset-0 bg-green-400 border-green-400 backface-hidden rotate-y-180">
                  <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                    <p className="text-black font-bold text-lg">{item.detail}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
