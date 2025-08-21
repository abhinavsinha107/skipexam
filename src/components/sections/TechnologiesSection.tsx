'use client';

import { motion } from 'framer-motion';

export default function TechnologiesSection() {
  const technologies = [
    { name: "Excel", icon: "📊", category: "Spreadsheet" },
    { name: "Python", icon: "🐍", category: "Programming" },
    { name: "R", icon: "📈", category: "Statistics" },
    { name: "SQL", icon: "🗃️", category: "Database" },
    { name: "Power BI", icon: "📊", category: "Visualization" },
    { name: "Tableau", icon: "📊", category: "Visualization" },
    { name: "SPSS", icon: "📊", category: "Statistics" },
    { name: "MATLAB", icon: "🔬", category: "Engineering" },
    { name: "Stata", icon: "📊", category: "Statistics" },
    { name: "SAS", icon: "📊", category: "Analytics" },
    { name: "Jupyter", icon: "📓", category: "Notebook" },
    { name: "GitHub", icon: "🐙", category: "Version Control" },
    { name: "Looker", icon: "👀", category: "BI" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "MySQL", icon: "🗃️", category: "Database" },
    { name: "VS Code", icon: "💻", category: "IDE" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">🛠️</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
            Technologies We Master
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From data analysis to web development, we&apos;ve got you covered with expert help across all major tools and platforms
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 max-w-7xl mx-auto"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 text-center hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-green-400 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3">
            <span className="text-green-400 font-medium">✨ And many more tools as per your course requirements!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
