import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "100px" });

  const certs = [
    'NPTEL Data Structures and Algorithms',
    'NPTEL Object Oriented Programming',
    'Advanced Diploma in Computer Programming (A++)',
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certs.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 bg-dark-bg/50 rounded-xl p-4 border border-accent-cyan/20"
              >
                <FaCertificate className="text-accent-cyan text-3xl" />
                <p className="text-text-primary">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
