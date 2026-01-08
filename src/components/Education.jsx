import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const EducationCard = ({ institution, degree, duration, score, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 bg-primary/10 rounded-lg">
        <FaUniversity className="text-2xl text-primary" />
      </div>
      <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
        {duration}
      </span>
    </div>
    <h3 className="text-xl font-bold text-textPrimary mb-2">{institution}</h3>
    <p className="text-lg text-textMuted mb-2">{degree}</p>
    <div className="flex items-center text-sm font-medium text-primary">
      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
      {score}
    </div>
  </motion.div>
);

const Education = () => {
  const educationData = [
  {
    institution: 'KL University, Vijayawada',
    degree: 'Bachelor’s Degree (3rd Year)',
    duration: '2023 - Present',
    score: '8.8 CGPA',
  },
  {
    institution: 'Tirumula Junior College, Vizag',
    degree: 'Intermediate (MPC)',
    duration: '2021 - 2023',
    score: '83.33%',
  },
  {
    institution: 'Sri Chaitanya School, Kommadhi',
    degree: 'SSC (High School)',
    duration: '2021',
    score: '98%',
  },
];


  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full flex items-center justify-center animate-pulse">
              <FaGraduationCap className="text-9xl text-textPrimary/80" />
            </div>
          </motion.div>

          {/* Right Column - Cards */}
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <EducationCard key={index} {...edu} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
