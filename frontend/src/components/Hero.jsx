import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaArrowRight, FaEnvelope, FaEye, FaDownload } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

const Hero = () => {
  const scrollToSection = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 md:px-8 z-10 pb-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Left Side Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-[55%] text-center md:text-left"
          >
            {/* Greeting Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-cyan/10 to-accent-pink/10 border border-accent-cyan/30 text-accent-cyan mb-6 text-sm font-medium tracking-wide shadow-[0_0_20px_rgba(var(--color-accent-cyan-rgb),0.15)] backdrop-blur-md hover:shadow-[0_0_30px_rgba(var(--color-accent-pink-rgb),0.2)] transition-all cursor-default"
            >
              <HiSparkles className="text-accent-pink animate-pulse text-lg" />
              <span className="bg-gradient-to-r from-text-primary to-gray-400 bg-clip-text text-transparent font-semibold">Welcome to my universe</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-text-primary via-accent-cyan to-accent-purple bg-clip-text text-transparent leading-tight py-2 drop-shadow-lg">
              Bhagavathi Raja S
            </h1>

            <div className="text-2xl md:text-3xl text-accent-cyan mb-4 h-20">
              <Typewriter
                options={{
                  strings: ['Full Stack Developer', 'Python Developer', 'MERN Stack Developer', 'AI Enthusiast', 'Problem Solver'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                }}
              />
            </div>

            <p className="text-lg md:text-xl text-text-primary max-w-2xl mx-auto md:mx-0 mb-8">
              I build scalable web applications and intelligent systems using modern technologies like MERN, Python and ML.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-accent-cyan to-accent-pink text-dark-bg font-bold shadow-[0_0_20px_rgba(var(--color-accent-cyan-rgb),0.4)] hover:shadow-[0_0_30px_rgba(var(--color-accent-pink-rgb),0.6)] transition-all"
                onClick={() => scrollToSection('projects')}
                data-cursor-label="View"
              >
                <span>View Projects</span>
                <FaArrowRight />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-accent-cyan/50 text-accent-cyan hover:bg-accent-cyan hover:text-dark-bg hover:shadow-[0_0_25px_rgba(var(--color-accent-cyan-rgb),0.4)] transition-all glass-card"
                onClick={() => scrollToSection('contact')}
                data-cursor-label="Mail"
              >
                <span>Contact Me</span>
                <FaEnvelope />
              </motion.button>
            </div>
            
            {/* Resume Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-accent-pink/50 text-accent-pink hover:bg-accent-pink hover:text-dark-bg hover:shadow-[0_0_25px_rgba(var(--color-accent-pink-rgb),0.4)] transition-all glass-card"
                data-cursor-label="CV"
              >
                <span>View Resume</span>
                <FaEye />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download="Bhagavathi_Raja_Resume.pdf"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-accent-purple/50 text-accent-purple hover:bg-accent-purple hover:text-dark-bg hover:shadow-[0_0_25px_rgba(var(--color-accent-purple-rgb),0.4)] transition-all glass-card"
              >
                <span>Download Resume</span>
                <FaDownload />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-[45%] flex justify-center md:justify-end relative mt-10 md:mt-0"
          >
            {/* Glowing background orbs */}
            <div className="absolute inset-0 bg-gradient-to-tl from-accent-cyan/40 via-accent-purple/30 to-accent-pink/40 blur-[80px] rounded-full scale-[0.8] -z-10 animate-pulse-slow"></div>
            <div className="absolute top-1/4 left-1/4 bg-accent-cyan/30 w-40 h-40 blur-[60px] rounded-full mix-blend-screen animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 bg-accent-pink/30 w-40 h-40 blur-[60px] rounded-full mix-blend-screen animate-blob" style={{ animationDelay: '2s' }}></div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative rounded-[2rem] overflow-hidden glass-card p-2 border border-accent-cyan/30 hover:border-accent-pink/60 shadow-[0_0_40px_rgba(var(--color-accent-cyan-rgb),0.15)] hover:shadow-[0_0_60px_rgba(var(--color-accent-pink-rgb),0.3)] transition-all duration-700 group backdrop-blur-xl bg-dark-bg/40"
            >
              {/* Animated decorative corner borders */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-cyan/50 rounded-[2rem] scale-105 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100 mix-blend-screen"></div>

              <div className="w-[280px] h-[350px] md:w-[360px] md:h-[480px] rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-dark-bg to-card-bg relative z-10">
                <img 
                  src="/profile.jpg" 
                  alt="Bhagavathi Raja S" 
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -left-6 md:-left-16 z-20 glass-card px-4 py-2.5 rounded-xl border border-accent-cyan/30 flex items-center gap-3 shadow-[0_8px_32px_rgba(var(--color-accent-cyan-rgb),0.15)] backdrop-blur-md"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-cyan"></span>
              </span>
              <span className="text-sm font-bold bg-gradient-to-r from-text-primary to-gray-400 bg-clip-text text-transparent">MERN Stack</span>
            </motion.div>

            <motion.div
              animate={{ y: [15, -15, 15] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-12 -right-6 md:-right-10 z-20 glass-card px-4 py-2.5 rounded-xl border border-accent-pink/30 flex items-center gap-3 shadow-[0_8px_32px_rgba(var(--color-accent-pink-rgb),0.15)] backdrop-blur-md"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-pink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-pink"></span>
              </span>
              <span className="text-sm font-bold bg-gradient-to-r from-text-primary to-gray-400 bg-clip-text text-transparent">AI & Python</span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-accent-cyan rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-accent-cyan rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
