import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUpPkg from 'react-countup';
const CountUp = typeof CountUpPkg === 'function' ? CountUpPkg : CountUpPkg.default;

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "100px" });

  const achievements = [
    { value: 500, label: 'DSA Problems Solved', suffix: '+' },
    { value: 5, label: 'HackerRank Rating', suffix: '⭐' },
    { value: 2, label: 'First Prize - National Symposium', suffix: '' },
    { value: 1, label: 'Patent Filed', suffix: '' },
    { value: 2, label: 'Journal Publication', suffix: '' },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">
            Achievements
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-cyan mb-2">
                  {isInView ? (
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={2.5}
                      suffix={item.suffix}
                    />
                  ) : (
                    `0${item.suffix}`
                  )}
                </div>
                <div className="text-text-primary text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
