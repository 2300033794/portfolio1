import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaFileAlt, 
  FaStar, 
  FaUserCircle 
} from 'react-icons/fa';

const SocialLink = ({ icon: Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -3 }}
    className="p-3 bg-card border border-border rounded-full text-textMuted hover:text-primary hover:border-primary transition-all duration-300"
    aria-label={label}
  >
    <Icon size={20} />
  </motion.a>
);

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Profile Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <FaUserCircle className="text-6xl text-textMuted" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-3xl font-bold text-textPrimary mb-2">
            K.VIJAY
          </h2>

          <p className="text-textMuted mb-8 max-w-md">
            Building end-to-end web solutions with CI/CD and machine learning.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 mb-10">
            <SocialLink 
              icon={FaLinkedin} 
              href="https://www.linkedin.com/in/vijay-sai-kalivarapu/" 
              label="LinkedIn" 
            />
            <SocialLink 
              icon={FaGithub} 
              href="https://github.com/2300033794" 
              label="GitHub" 
            />
            <SocialLink 
              icon={FaEnvelope} 
              href="mailto:vijaysaikalivarapu@gmail.com" 
              label="Email" 
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            
            {/* Resume Button (Disabled) */}
            <button 
              disabled 
              className="flex items-center justify-center px-6 py-3 bg-card border border-border rounded-full text-textMuted cursor-not-allowed opacity-70"
            >
              <FaFileAlt className="mr-2" />
              Resume
            </button>

            {/* ⭐ Star Me on GitHub Button (WORKING) */}
            <a
              href="https://github.com/2300033794/CI-CD-FILES"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 
                         bg-gradient-to-r from-primary to-secondary 
                         text-background font-bold rounded-full shadow-lg 
                         hover:shadow-cyan-500/50 transition-shadow"
            >
              <FaStar className="mr-2" />
              Star Me on GitHub
            </a>

          </div>

          <div className="w-full border-t border-border/30 pt-8 mt-8">
            <p className="text-sm text-textMuted">
              © {new Date().getFullYear()} K.VIJAY. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
