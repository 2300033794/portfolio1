import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiReact, SiTailwindcss } from 'react-icons/si';

/* ---------------- Project Card ---------------- */

const ProgressProjectCard = ({
  title,
  description,
  stack,
  githubUrl,
  delay = 0,
}) => {
  const isGithubAvailable = Boolean(githubUrl);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ delay, duration: 0.3 }}
      className="bg-card rounded-xl border border-dashed border-yellow-500/50 p-6 relative overflow-hidden group hover:border-yellow-500 transition-colors duration-300 flex flex-col"
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4 flex items-center space-x-2 bg-yellow-500/10 px-3 py-1 rounded-full">
        <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
        <span className="text-xs text-yellow-500 font-medium">
          On Progress
        </span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-textPrimary mt-6 mb-2">
        {title}
      </h3>

      <p className="text-textMuted text-sm mb-6">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto">
        {/* Stack Icons */}
        <div className="flex items-center space-x-3 text-textMuted">
          {stack.map((Icon, index) => (
            <Icon
              key={index}
              size={20}
              title={Icon.displayName || 'Tech'}
              className="hover:text-yellow-500 transition-colors"
            />
          ))}
        </div>

        {/* GitHub Icon */}
        {isGithubAvailable ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
            className="text-textMuted hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </a>
        ) : (
          <FaGithub
            size={20}
            className="text-textMuted opacity-40 cursor-not-allowed"
            title="Repository not available"
          />
        )}
      </div>
    </motion.div>
  );
};

/* ---------------- Projects Section ---------------- */

const ProgressProjects = () => {
  const projects = [
    {
      title: 'Research Journal Management System',
      description:
        'A full-stack web application for submitting, managing, and tracking journal articles with role-based access, review workflows, and a modern responsive UI.',
      stack: [SiReact, SiTailwindcss],
      githubUrl:
        'https://github.com/2300033794/Research-journal-management-system',
    },
    {
      title: 'F1RACE LIST',
      description:
        'A responsive web application that displays Formula 1 race schedules and standings, with an integrated AI bot to provide race insights, driver stats, and quick summaries.',
      stack: [SiReact, SiTailwindcss],
      githubUrl:
        'https://github.com/2300033794/F1RACE-REPO',
    },
  ];

  return (
    <section id="on-progress" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
            Work in Progress
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProgressProjectCard
              key={index}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressProjects;
