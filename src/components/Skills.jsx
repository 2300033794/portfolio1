import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiFramer,
  SiVite,
  SiRedux
} from 'react-icons/si';

const SkillItem = ({ icon: Icon, name }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="
      flex flex-col items-center justify-center
      p-4 bg-card
      rounded-xl
      hover:shadow-lg hover:shadow-primary/20
      transition-all duration-300
      group
    "
  >
    <Icon className="text-4xl text-textMuted group-hover:text-primary transition-colors duration-300 mb-2" />
    <span className="text-sm font-medium text-textMuted group-hover:text-textPrimary">
      {name}
    </span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center text-secondary mb-8">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <SkillItem icon={FaJs} name="JavaScript" />
              <SkillItem icon={SiTypescript} name="TypeScript" />
              <SkillItem icon={FaPython} name="Python" />
              <SkillItem icon={FaHtml5} name="HTML5" />
              <SkillItem icon={FaCss3Alt} name="CSS" />
              <SkillItem icon={FaJs} name="[LANG 1]" />
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center text-secondary mb-8">
              Frameworks & Libraries
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <SkillItem icon={FaReact} name="React" />
              <SkillItem icon={SiNextdotjs} name="Next.js" />
              <SkillItem icon={SiTailwindcss} name="Tailwind" />
              <SkillItem icon={FaNodeJs} name="Node.js" />
              <SkillItem icon={SiFramer} name="Framer Motion" />
              <SkillItem icon={SiRedux} name="Redux" />
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center text-secondary mb-8">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <SkillItem icon={FaGitAlt} name="Git" />
              <SkillItem icon={FaDocker} name="Docker" />
              <SkillItem icon={FaAws} name="AWS" />
              <SkillItem icon={SiVite} name="Vite" />
              <SkillItem icon={SiMongodb} name="MongoDB" />
              <SkillItem icon={SiPostgresql} name="PostgreSQL" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
