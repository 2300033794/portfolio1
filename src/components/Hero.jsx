import React from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-xl text-primary font-medium">Hi there!</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-textPrimary">
            I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              K VIJAY
            </span>
          </h1>
          <p className="text-textMuted text-lg max-w-lg leading-relaxed">
            a developer who enjoys learning and building with code. <br />
            especially interested in machine learning and love exploring how technology can solve real problems.
          </p>
          
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-background font-bold rounded-full shadow-lg hover:shadow-cyan-500/50 transition-shadow cursor-pointer"
            >
              Let's Connect
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Column - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center relative"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse" />
            <div className="relative z-10 w-full h-full bg-card/50 backdrop-blur-sm border border-border rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <FaCode className="text-9xl text-primary opacity-80" />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 p-4 bg-card border border-border rounded-xl shadow-xl"
            >
              <div className="w-4 h-4 bg-red-500 rounded-full mb-2" />
              <div className="w-12 h-2 bg-textMuted/30 rounded" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 p-4 bg-card border border-border rounded-xl shadow-xl"
            >
              <div className="w-4 h-4 bg-green-500 rounded-full mb-2" />
              <div className="w-12 h-2 bg-textMuted/30 rounded" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
