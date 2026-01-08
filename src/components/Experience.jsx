import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const ExperienceCard = ({ role, club, company, duration, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="relative pl-8 pb-12 border-l-2 border-border last:border-l-0 last:pb-0"
  >
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(79,209,197,0.5)]" />
    <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-textPrimary">{role}</h3>
          <h4 className="text-lg text-primary font-medium">{company}</h4>
          <h5 className="text-lg text-primary font-medium">{club}</h5>

        </div>
        <div className="flex items-center text-textMuted text-sm mt-2 sm:mt-0">
          <FaCalendarAlt className="mr-2" />
          {duration}
        </div>
      </div>
      <ul className="list-disc list-inside space-y-2 text-textMuted">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    
    {
      role: 'Internal Relations Chair',
      club: 'Kognitiv Club',
      duration: '2023 - Present',
      description: [
        'Worked on technical tasks related to Full stack and machine learning projects',
        'Coordinated internal communication and collaboration within the club team',
        'Managed project timelines and resources to ensure smooth operations',
        'Contributed to marketing activities and promotional initiatives of the club',
      ],
    },
  
  {
      role: 'Social Intern',
      company: 'KL UNIVERSITY',
      duration: 'MAY 2024',
      description: [
        'Participated in KLU Social Internship Program contributing to 8+ social impact projects reaching 300+ community members.',
        'Organized 15+ awareness campaigns, 40+ surveys across 10+ local communities, achieving 90% participant satisfaction.',
        'Collaborated with cross-functional teams to develop effective social impact strategies.',
      ],
    },
    
    ];

  return (
    <section id="experience" className="py-20 bg-background/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
