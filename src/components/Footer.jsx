import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile/vijay1.jpg';

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileAlt,
  FaStar,
  FaInstagram,
  FaBriefcase,

  // FaUserCircle
  // FaUserTie
} from 'react-icons/fa';

const SocialLink = ({ icon: Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.1, y: -3 }}
    className="p-3 bg-card border border-border rounded-full 
               text-textMuted hover:text-primary 
               hover:border-primary transition-all duration-300"
  >
    <Icon size={20} />
  </motion.a>
);

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* MAIN CONTAINER */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-12">

          {/* LEFT SIDE CONTENT */}
          <div className="flex-1 text-center md:text-left">

            <h2 className="text-3xl font-bold text-textPrimary mb-2">
              K.VIJAY
            </h2>

            <p className="text-textMuted mb-8 max-w-md">
              Building end-to-end web solutions with CI/CD & Machine Learning.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6 mb-10">
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

              <SocialLink
                icon={FaInstagram}
                href="https://www.instagram.com/vijay.kalivarapu/?hl=en"
                label="Instagram"
              />

              <SocialLink
                icon={FaBriefcase}
                href="https://www.naukri.com/"
                label="Naukri"
              />


            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">

              {/*  Resume Button (WORKING) */}
              <motion.a
                href="/portfolio1/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center justify-center px-6 py-3
                           bg-card border border-border rounded-full
                           text-textPrimary hover:text-primary
                           hover:border-primary transition-all"
              >
                <FaFileAlt className="mr-2" />
                Resume
              </motion.a>

              {/* ⭐ Star Me on GitHub */}
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

          </div> {/* LEFT SIDE CONTENT END */}

          {/* RIGHT SIDE IMAGE */}
          <div className="flex-shrink-0">

            {/* Profile Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full 
                              bg-gradient-to-r from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-background overflow-hidden">

                  {/* Old icon options (not used) */}
                  {/* <FaUserCircle className="text-6xl text-textMuted" /> */}
                  {/* <FaUserTie className="text-6xl text-textMuted" /> */}

                  <img
                    src={profileImg}
                    alt="K Vijay"
                    className="w-full h-full rounded-full object-cover"
                  />

                </div>
              </div>
            </motion.div>

          </div> {/* RIGHT SIDE IMAGE END */}

        </div>

        {/* Footer Bottom */}
        <div className="w-full border-t border-border/30 pt-8 mt-8 text-center">
          <p className="text-sm text-textMuted">
            © {new Date().getFullYear()} K.VIJAY. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
