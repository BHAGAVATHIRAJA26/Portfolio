import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const observerRef = useRef(null);

  // Load initial theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'certifications', 'contact'];

  // ── IntersectionObserver: auto-highlight active section on scroll ──
  useEffect(() => {
    // Keep track of which sections are visible and how much
    const visibilityMap = {};

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap[entry.target.id] = entry.intersectionRatio;
        });

        // Pick the section with the highest visibility ratio
        const mostVisible = Object.entries(visibilityMap).reduce(
          (best, [id, ratio]) => (ratio > best.ratio ? { id, ratio } : best),
          { id: '', ratio: 0 }
        );

        if (mostVisible.id) {
          setActive(mostVisible.id);
        }
      },
      {
        // Fire at multiple thresholds for smoother tracking
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        // -80px top offset accounts for the fixed navbar height
        rootMargin: '-80px 0px -20% 0px',
      }
    );

    // Observe every section
    navItems.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActive(section);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent cursor-pointer"
          data-cursor-label="Home"
          onClick={() => scrollToSection('home')}
        >
          Bhagavathi
        </motion.div>

        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer capitalize transition-colors"
              onClick={() => scrollToSection(item)}
            >
              {/* Label */}
              <span
                className={`transition-colors duration-300 ${
                  active === item
                    ? 'text-accent-cyan'
                    : 'text-text-primary hover:text-accent-cyan'
                }`}
              >
                {item}
              </span>

              {/* Active underline indicator */}
              {active === item && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-accent-cyan to-accent-pink"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-dark-bg transition-all"
            onClick={() => scrollToSection('contact')}
            data-cursor-label="Hire"
          >
            Hire Me
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
