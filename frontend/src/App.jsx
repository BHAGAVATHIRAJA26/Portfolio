// App.jsx
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative selection:bg-accent-pink/30 selection:text-white transition-colors duration-300">
      {/* Custom cursor — overlays everything */}
      <CustomCursor />

      {/* Decorative Glowing Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-cyan/20 blur-[120px] -z-30 pointer-events-none animate-blob"></div>
      <div className="fixed top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-pink/20 blur-[120px] -z-30 pointer-events-none animate-blob [animation-delay:2000ms]"></div>
      <div className="fixed bottom-[-20%] left-[20%] w-[500px] h-[500px] rounded-full bg-accent-purple/20 blur-[120px] -z-30 pointer-events-none animate-blob [animation-delay:4000ms]"></div>
      
      <BackgroundAnimation />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
