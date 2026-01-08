import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const AchievementCard = ({ icon: Icon, title, badge, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -10, scale: 1.03 }}
    className="bg-card p-8 rounded-2xl border border-border hover:border-primary hover:shadow-[0_0_20px_rgba(79,209,197,0.2)] transition-all duration-300 flex flex-col items-center text-center group"
  >
    <div className="p-4 bg-background rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
      <Icon className="text-4xl text-primary" />
    </div>
    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider rounded-full mb-4">
      {badge}
    </span>
    <h3 className="text-xl font-bold text-textPrimary mb-3">{title}</h3>
    <p className="text-textMuted leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const Achievements = () => {
  const achievements = [
    {
      icon: FaTrophy,
      title: 'Deep Learning By NVIDA',
      badge: '2025',
      description: 'Awarded an NVIDIA Certificate of Competency for successfully completing **Fundamentals of Deep Learning**, demonstrating a strong understanding of core deep learning concepts and practical skills.',
    },
    {
      icon: FaMedal,
      title: 'Artificial Intelligence By NVIDA',
      badge: '2025',
      description: 'Artificial Intelligence by NVIDIA Successfully completed an NVIDIA-certified program in Artificial Intelligence, demonstrating foundational knowledge of AI and deep learning concepts.',
    },
    // {
    //   icon: FaStar,
    //   title: '[ACHIEVEMENT TITLE 3]',
    //   badge: '[LEVEL/YEAR]',
    //   description: '[Brief description of the achievement. Mention the competition name, rank secured, or the significance of the award.]',
    // },
  ];

  return (
    <section id="achievements" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
