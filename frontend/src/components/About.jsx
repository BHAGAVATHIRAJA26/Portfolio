import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    { label: 'B.E. CSE (2023–2027)', value: 'CGPA: 8.2' },
    { label: 'LeetCode', value: '500+ Problems' },
    { label: 'HackerRank', value: '5⭐ in Python & DSA' },
    { label: 'Expertise', value: 'DSA' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-text-primary text-lg leading-relaxed mb-6 text-justify">
                I am a Computer Science Engineering student with strong skills in Full Stack Development, Data Structures & Algorithms, and Machine Learning.
              </p>
              <p className="text-text-primary text-lg leading-relaxed text-justify">
                I have hands-on experience in building production-ready applications using the MERN stack and Python-based frameworks like Flask and FastAPI. I enjoy designing efficient systems, optimizing performance, and developing scalable solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-bg/50 rounded-lg p-4 text-center border border-accent-cyan/20"
                >
                  <div className="text-accent-cyan font-semibold mb-2">{item.label}</div>
                  <div className="text-text-primary">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
