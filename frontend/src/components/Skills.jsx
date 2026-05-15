import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPython, FaJs, FaDatabase, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGit, FaGithub } from 'react-icons/fa';
import { SiFlask, SiFastapi, SiNodedotjs, SiExpress, SiMongodb,  SiMysql, SiScikitlearn, SiNumpy, SiPandas, SiPostman, SiPycharm } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'SQL', icon: <FaDatabase />, color: '#4479A1' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
        { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Flask', icon: <SiFlask />, color: 'currentColor' },
        { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, color: 'currentColor' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
      ],
    },
    {
      title: 'AI/ML',
      skills: [
        { name: 'ML', icon: <SiScikitlearn />, color: '#F7931E' },
        { name: 'NLP', icon: <SiScikitlearn />, color: '#F7931E' },
        { name: 'Pandas', icon: <SiPandas />, color: 'currentColor' },
        { name: 'NumPy', icon: <SiNumpy />, color: '#4DABCF' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGit />, color: '#F05032' },
        { name: 'GitHub', icon: <FaGithub />, color: 'currentColor' },
        { name: 'VS Code', icon: <VscVscode />, color: '#007ACC' },
        { name: 'PyCharm', icon: <SiPycharm />, color: 'currentColor' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-accent-cyan">{category.title}</h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex items-center gap-2 bg-dark-bg/50 rounded-full px-3 py-2 border border-accent-cyan/20"
                    >
                      <span style={{ color: skill.color }} className="text-xl">
                        {skill.icon}
                      </span>
                      <span className="text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
