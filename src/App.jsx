import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import ProgressProjects from './components/ProgressProjects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-textPrimary overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
        <Projects />
        <ProgressProjects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
