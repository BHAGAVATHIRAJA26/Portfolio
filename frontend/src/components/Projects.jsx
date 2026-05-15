import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'MoneyMind – Finance Management System',
      description: 'Comprehensive finance management platform with interest calculation, due-date tracking, and Razorpay integration for real-time updates.',
      tech: ['React', 'Flask', 'Razorpay API', 'MySQL'],
      github: 'https://github.com/BHAGAVATHIRAJA26/finance-management-system-MoneyMind-',
      live: '#',
      gradient: 'from-accent-cyan to-blue-500',
    },
    {
      title: 'BS Traders – E-Commerce Platform',
      description: 'Full-featured e-commerce platform with Google authentication, payment integration, and optimized backend APIs for seamless shopping experience.',
      tech: ['MERN', 'JWT', 'Stripe', 'Tailwind'],
      github: 'https://github.com/BHAGAVATHIRAJA26/Ecommerce-BS-Traders-',
      live: '#',
      gradient: 'from-accent-pink to-purple-500',
    },
    {
      title: 'SmartMentor – AI Placement Mentor',
      description: 'AI-powered platform featuring NLP chatbot for career guidance, OCR for schedule parsing, and ML algorithms for personalized mentorship.',
      tech: ['Python', 'Flask', 'TensorFlow', 'NLTK', 'OCR'],
      github: 'https://github.com/BHAGAVATHIRAJA26/Smart-Mentor-AI-SMA-',
      live: '#',
      gradient: 'from-green-400 to-accent-cyan',
    },
    {
      title: 'Personal Portfolio',
      description: 'An immersive and highly interactive personal portfolio website built with modern web technologies, featuring sleek animations, a dynamic 3D background, and a responsive glassmorphism UI.',
      tech: ['React', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
      github: 'https://github.com/BHAGAVATHIRAJA26/portfolio',
      live: '#',
      gradient: 'from-accent-purple to-accent-pink',
    },
    {
      title: 'Innomatics Clone Website',
      description: 'A responsive and visually accurate clone of the Innomatics Research Labs homepage, built to master front-end fundamentals and structural design.',
      tech: ['HTML', 'CSS'],
      github: 'https://github.com/BHAGAVATHIRAJA26/innomaticswebsite',
      live: '#',
      gradient: 'from-blue-400 to-indigo-500',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-xl overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-text-primary">{project.title}</h3>
                  <p className="text-text-primary/70 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent-cyan hover:text-accent-pink transition-colors"
                    >
                      <FaGithub /> GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
