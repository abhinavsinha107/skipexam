'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

export default function WhatWeCoverSection() {
  const subjects = [
    "Statistics & Probability",
    "Finance & Accounting", 
    "Marketing & Business Strategy",
    "Management & Operations",
    "Research & Case Studies",
    "Data Analytics"
  ];

  const tools = [
    "Excel & Google Sheets",
    "SQL, Python, R",
    "Power BI, Tableau, SPSS", 
    "MATLAB, Stata & more"
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
          What We Cover
        </motion.h2>
        
        <Tabs defaultValue="subjects" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-slate-700">
            <TabsTrigger value="subjects" className="text-lg">📊 Subjects</TabsTrigger>
            <TabsTrigger value="tools" className="text-lg">💻 Tools</TabsTrigger>
          </TabsList>
          
          <TabsContent value="subjects" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="outline" className="text-lg p-4 w-full justify-center border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-colors">
                    {subject}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tools" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="outline" className="text-lg p-4 w-full justify-center border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-colors">
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-xl text-gray-300 mt-12"
        >
          👉 If it&apos;s academic and stressful → we&apos;ve got your back.
        </motion.p>
      </div>
    </section>
  );
}
