import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const experiences = [
    {
      title: 'Backend Developer Intern',
      company: 'DDATA Technologies',
      period: '2025 Jun - 2025 Jul',
      description: [
        'Built REST APIs handling 100+ concurrent users with optimized query performance',
        'Improved database performance by 30% through indexing and query optimization',
        'Contributed to backend architecture design and microservices implementation',
      ],
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Innomatics Research Labs',
      period: '2023 - 2024',
      description: [
        'Built responsive UI components using React.js with 99% cross-browser compatibility',
        'Improved UX by implementing lazy loading and code splitting, reducing load time by 40%',
        'Integrated REST APIs and managed state efficiently using Context API',
      ],
    },
    {
      title: 'Coding Competition Organizer',
      company: 'Student Tech Community',
      period: '2026',
      description: [
        'Organized and successfully conducted a comprehensive coding competition for students',
        'Designed algorithmic problem statements and evaluated participant submissions',
        'Managed event logistics, technical platforms, and fostered a competitive programming culture',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent-cyan to-accent-pink hidden md:block"></div>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.3 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12`}
              >
                <div className="md:w-1/2"></div>
                <div className="md:w-1/2">
                  <div className={`glass-card rounded-xl p-6 relative ${index % 2 === 0 ? 'ml-0 md:ml-8' : 'mr-0 md:mr-8'}`}>
                    <div className={`absolute top-6 ${index % 2 === 0 ? '-left-8 transform -translate-x-1/2' : '-right-8 transform translate-x-1/2'} w-4 h-4 rounded-full bg-accent-cyan hidden md:block`}></div>
                    <div className="flex items-center gap-3 mb-3">
                      <FaBriefcase className="text-accent-cyan text-xl" />
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                    </div>
                    <p className="text-accent-cyan mb-2">{exp.company} | {exp.period}</p>
                    <ul className="list-disc list-inside space-y-2 text-text-primary/80">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm">{item}</li>
                      ))}
                    </ul>
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

export default Experience;
