import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLightbulb } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb } from 'react-icons/si';

import researchhub from '../assets/projects/researchhub.png';

/* ---------------- Project Card ---------------- */

const ProgressProjectCard = ({
  title,
  description,
  stack,
  githubUrl,
  image,
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
      className="bg-card rounded-xl border border-dashed border-amber-500/60 p-6 relative overflow-hidden group hover:border-amber-600 transition-colors duration-300 flex flex-col w-full max-w-2xl"
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4 flex items-center space-x-2 bg-amber-500/15 px-3 py-1 rounded-full">
        <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
        <span className="text-xs text-amber-700 font-medium">
          On Progress
        </span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-textPrimary mt-6 mb-2">
        {title}
      </h3>

      {/* Startup Idea Tag */}
      <div className="flex items-center mb-3">
        <span className="inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider rounded-full">
          <FaLightbulb className="mr-2" />
          Startup Idea
        </span>
      </div>

      {image && (
        <div className="mb-4 rounded-lg overflow-hidden border border-border">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

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
              className="hover:text-amber-600 transition-colors"
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
            className="text-textMuted hover:text-primary transition-colors"
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
      title: 'ResearchHub',
      description:
        'A modern research-paper community platform for discovering, sharing, and discussing academic papers. Built with a responsive React frontend and designed to later integrate with a Node.js, Express.js, and MongoDB backend.',
      stack: [SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb],
      githubUrl: 'https://github.com/2300033794/pixel-perfect-view-9131',
      image: researchhub,
    },
  ];

  return (
    <section id="on-progress" className="py-20 bg-surface">
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
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col items-center gap-8">
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
