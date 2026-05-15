import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHackerrank, FaPhoneAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Bypass-Tunnel-Reminder': 'true',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError('Failed to connect to the server. Is it running?');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { icon: <FaGithub />, link: 'https://github.com/BHAGAVATHIRAJA26', label: 'GitHub' },
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/bhagavathi-raja-s-014aa0296/', label: 'LinkedIn' },
    { icon: <FaEnvelope />, link: 'mailto:bhagavathiraja.s26@gmail.com', label: 'Email' },
    { icon: <SiLeetcode />, link: 'https://leetcode.com/u/bhagavathi-/', label: 'LeetCode' },
    { icon: <FaHackerrank />, link: 'https://www.hackerrank.com/profile/bhagavathiraja_1', label: 'HackerRank' },
  ];

  return (
    <section id="contact" className="pt-20 pb-0">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1, margin: "100px" }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-text-primary mb-6">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about tech. Feel free to reach out!
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-bg/50 border border-accent-cyan/20 text-accent-cyan hover:bg-accent-cyan hover:text-dark-bg transition-all"
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="glass p-4 rounded-xl flex items-center gap-4 border border-accent-cyan/10 hover:border-accent-cyan/50 hover:shadow-[0_0_20px_rgba(var(--color-accent-cyan-rgb),0.15)] transition-all"
                >
                  <div className="min-w-12 w-12 h-12 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan text-xl">
                    <FaEnvelope />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-gray-400 text-sm font-semibold">Email</h4>
                    <a href="mailto:bhagavathiraja.s26@gmail.com" className="text-text-primary font-medium truncate sm:break-all hover:text-accent-cyan transition-colors">
                      bhagavathiraja.s26@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="glass p-4 rounded-xl flex items-center gap-4 border border-accent-pink/10 hover:border-accent-pink/50 hover:shadow-[0_0_20px_rgba(var(--color-accent-pink-rgb),0.15)] transition-all"
                >
                  <div className="min-w-12 w-12 h-12 rounded-full bg-accent-pink/10 flex items-center justify-center text-accent-pink text-xl">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-semibold">Phone</h4>
                    <a href="tel:9443278330" className="text-text-primary font-medium hover:text-accent-pink transition-colors">
                      +91 9443278330
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark-bg/60 border border-accent-cyan/20 text-text-primary focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_15px_rgba(var(--color-accent-cyan-rgb),0.3)] transition-all placeholder-gray-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark-bg/60 border border-accent-cyan/20 text-text-primary focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_15px_rgba(var(--color-accent-cyan-rgb),0.3)] transition-all placeholder-gray-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark-bg/60 border border-accent-cyan/20 text-text-primary focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_15px_rgba(var(--color-accent-cyan-rgb),0.3)] transition-all placeholder-gray-500 resize-none"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${isSubmitting ? 'bg-gray-600 cursor-not-allowed text-gray-400' : 'bg-gradient-to-r from-accent-cyan to-accent-pink text-dark-bg'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              {submitted && (
                <p className="text-green-400 text-center font-medium">Message sent successfully!</p>
              )}
              {submitError && (
                <p className="text-red-400 text-center font-medium">{submitError}</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
