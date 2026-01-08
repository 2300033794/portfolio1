import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';

import project1 from '../assets/projects/project1.jpg';   // ✅ Image import

const ProjectCard = ({ title, description, stack, githubUrl, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ delay, duration: 0.3 }}
    className="bg-card rounded-xl overflow-hidden border border-border 
               group hover:shadow-xl hover:shadow-primary/10 
               transition-all duration-300 w-full max-w-xl"
  >
    <div className="h-48 relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute inset-0 bg-primary/20 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300 
                      flex items-center justify-center">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-card rounded-full text-primary 
                     hover:bg-primary hover:text-background 
                     transition-colors duration-300"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold text-textPrimary mb-2 
                     group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-textMuted text-sm mb-4 line-clamp-3">
        {description}
      </p>

      <div className="flex items-center space-x-3 text-textMuted">
        {stack.map((Icon, index) => (
          <Icon
            key={index}
            size={20}
            className="hover:text-primary transition-colors"
          />
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: 'Research Journal Management System',
      description:
        'A full-stack web platform with an integrated AI bot that assists in journal submission, review tracking, smart recommendations, and workflow automation through a clean, responsive interface.',
      stack: [SiReact, SiTailwindcss, SiNodedotjs, SiMongodb],
      githubUrl:
        'https://github.com/2300033794/Research-journal-management-system',
      image: project1,   // ✅ FIXED HERE
    },

  // {
  // title: 'AI Resume Analyzer',
  // description:
  //   'A web application that analyzes resumes using NLP techniques, extracts key skills, matches them against job descriptions, and provides ATS-friendly improvement suggestions.',
  // stack: [SiReact, SiTailwindcss, SiNodedotjs, SiMongodb],
  // githubUrl: 'https://github.com/yourusername/ai-resume-analyzer',
  // image: '/project2.jpg',
  // },

  // {
  // title: 'Smart Attendance Management System',
  // description:
  //   'A role-based attendance system with secure authentication, real-time tracking, and automated report generation designed for academic institutions.',
  // stack: [SiReact, SiTailwindcss, SiNodedotjs, SiMongodb],
  // githubUrl: 'https://github.com/yourusername/smart-attendance-system',
  // image: '/project3.jpg',
  // },

  // {
  // title: 'Online Code Judge Platform',
  // description:
  //   'A full-stack coding platform that allows users to solve programming problems, submit solutions, and receive instant verdicts using server-side code execution.',
  // stack: [SiReact, SiTailwindcss, SiNodedotjs, SiMongodb],
  // githubUrl: 'https://github.com/yourusername/online-code-judge',
  // image: '/project4.jpg',
  // },

  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div
          className={`grid gap-8 ${
            projects.length === 1
              ? 'grid-cols-1 place-items-center'
              : 'grid-cols-1 md:grid-cols-2 place-items-center'
          }`}
        >
          {projects.map((project, index) => (
            <ProjectCard
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

export default Projects;
