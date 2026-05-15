import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0 = loading, 1 = done

  useEffect(() => {
    // Animate progress bar to 100 over ~1.6s
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase(1), 200);
          return 100;
        }
        // Ease-in-out progression
        const remaining = 100 - prev;
        return prev + Math.max(1, remaining * 0.06);
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {phase === 0 && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: 'rgba(var(--color-bg-rgb), 1)' }}
        >
          {/* Background ambient glow blobs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none"
            style={{ background: 'rgba(var(--color-accent-cyan-rgb), 1)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none"
            style={{ background: 'rgba(var(--color-accent-pink-rgb), 1)' }} />

          {/* ── Spinner assembly ── */}
          <div className="relative flex items-center justify-center mb-10">
            {/* Outermost slow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="absolute w-28 h-28 rounded-full"
              style={{
                border: '1px dashed rgba(var(--color-accent-cyan-rgb), 0.25)',
              }}
            />

            {/* Outer spinning arc */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              className="absolute w-24 h-24 rounded-full"
              style={{
                border: '2px solid transparent',
                borderTopColor: 'rgba(var(--color-accent-cyan-rgb), 1)',
                borderRightColor: 'rgba(var(--color-accent-cyan-rgb), 0.3)',
                boxShadow: '0 0 16px rgba(var(--color-accent-cyan-rgb), 0.5)',
              }}
            />

            {/* Middle counter-spin arc */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              className="absolute w-16 h-16 rounded-full"
              style={{
                border: '2px solid transparent',
                borderTopColor: 'rgba(var(--color-accent-pink-rgb), 1)',
                borderLeftColor: 'rgba(var(--color-accent-pink-rgb), 0.3)',
                boxShadow: '0 0 12px rgba(var(--color-accent-pink-rgb), 0.5)',
              }}
            />

            {/* Inner micro-spin */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
              className="absolute w-8 h-8 rounded-full"
              style={{
                border: '1.5px solid transparent',
                borderTopColor: 'rgba(var(--color-accent-purple-rgb), 1)',
                borderBottomColor: 'rgba(var(--color-accent-purple-rgb), 0.2)',
              }}
            />

            {/* Center pulsing core */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-3 h-3 rounded-full z-10"
              style={{
                background: 'rgba(var(--color-accent-cyan-rgb), 1)',
                boxShadow: '0 0 16px 6px rgba(var(--color-accent-cyan-rgb), 0.7)',
              }}
            />
          </div>

          {/* ── Name & tagline ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-center gap-2 mb-8"
          >
            <h1
              className="text-3xl font-extrabold tracking-widest uppercase"
              style={{
                background: 'linear-gradient(90deg, rgba(var(--color-accent-cyan-rgb),1), rgba(var(--color-text-rgb),1), rgba(var(--color-accent-pink-rgb),1))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Bhagavathi Raja S
            </h1>
            <p className="text-xs tracking-[0.25em] uppercase"
              style={{ color: 'rgba(var(--color-text-rgb), 0.4)' }}>
              Portfolio · Loading
            </p>
          </motion.div>

          {/* ── Progress bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-2 w-56"
          >
            {/* Track */}
            <div
              className="w-full h-[3px] rounded-full overflow-hidden"
              style={{ background: 'rgba(var(--color-accent-cyan-rgb), 0.12)' }}
            >
              {/* Fill */}
              <motion.div
                className="h-full rounded-full relative overflow-hidden"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, rgba(var(--color-accent-cyan-rgb),1), rgba(var(--color-accent-pink-rgb),1))',
                  boxShadow: '0 0 10px rgba(var(--color-accent-cyan-rgb), 0.8)',
                }}
              >
                {/* Shimmer sweep */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-y-0 w-1/3"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                  }}
                />
              </motion.div>
            </div>

            {/* Percentage */}
            <p
              className="text-xs font-mono tabular-nums"
              style={{ color: 'rgba(var(--color-accent-cyan-rgb), 0.8)' }}
            >
              {Math.round(progress)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
