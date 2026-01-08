import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiReact, SiTailwindcss } from 'react-icons/si';

const ProgressProjectCard = ({ title, description, stack, githubUrl, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ delay, duration: 0.3 }}
    className="bg-card rounded-xl border border-dashed border-yellow-500/50 p-6 relative overflow-hidden group hover:border-yellow-500 transition-colors duration-300"
  >
    <div className="absolute top-4 right-4 flex items-center space-x-2 bg-yellow-500/10 px-3 py-1 rounded-full">
      <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
      <span className="text-xs text-yellow-500 font-medium">On Progress</span>
    </div>

    <h3 className="text-xl font-bold text-textPrimary mt-4 mb-2">{title}</h3>
    <p className="text-textMuted text-sm mb-4">
      {description}
    </p>

    <div className="flex items-center justify-between mt-auto">
      <div className="flex items-center space-x-3 text-textMuted">
        {stack.map((Icon, index) => (
          <Icon key={index} className="hover:text-yellow-500 transition-colors" size={20} />
        ))}
      </div>
      <FaGithub className="text-textMuted hover:text-white cursor-not-allowed opacity-50" size={20} />
    </div>
  </motion.div>
);

const ProgressProjects = () => {
  const projects = [
    {
  title: 'Research Journal Management System',
  description: 'A full-stack web application for submitting, managing, and tracking journal articles with role-based access, review workflows, and a modern responsive UI.',
  stack: [SiReact, SiTailwindcss],
  githubUrl: 'https://github.com/yourusername/research-journal',
    },

    {
      title: '[UPCOMING PROJECT 2]',
      description: '[Description of the project currently under development. Highlight the planned features and tech stack.]',
      stack: [SiReact, SiTailwindcss],
      githubUrl: 'https://github.com/yourusername/upcoming-project2',   
    },
  ];

  return (
    <section id="on-progress" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">Work in Progress</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProgressProjectCard key={index} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressProjects;
