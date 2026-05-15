import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

/**
 * Professional custom cursor:
 *  - Tiny 4px sharp dot  — tracks mouse exactly
 *  - 40px ring           — spring-lags behind with blend mode
 *  - Hover state         — ring expands + shows label (View / Click / etc.)
 *  - Click state         — ring snaps small, dot flashes
 *  - Text inputs         — cursor becomes a blinking caret style
 *  - Hidden off-window
 */
const CustomCursor = () => {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const smoothX = useSpring(cursorX, { damping: 20, stiffness: 180, mass: 0.6 });
  const smoothY = useSpring(cursorY, { damping: 20, stiffness: 180, mass: 0.6 });

  const [state, setState] = useState('default'); // default | hover | clicking | text | hidden
  const [label, setLabel] = useState('');
  const stateRef = useRef('default');

  const setS = useCallback((s, lbl = '') => {
    stateRef.current = s;
    setState(s);
    setLabel(lbl);
  }, []);

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onDown = () => {
      setS('clicking', label);
    };
    const onUp = () => {
      setS(stateRef.current === 'clicking' ? 'default' : stateRef.current);
    };

    const onEnter = (e) => {
      const el = e.target.closest(
        'a, button, [role="button"], [data-cursor]'
      );
      const inputEl = e.target.closest('input, textarea, select');

      if (inputEl) {
        setS('text');
        return;
      }
      if (el) {
        const lbl = el.getAttribute('data-cursor-label') || '';
        setS('hover', lbl);
      }
    };

    const onLeave = (e) => {
      const el = e.target.closest(
        'a, button, [role="button"], [data-cursor], input, textarea, select'
      );
      if (el) setS('default');
    };

    const onWindowLeave = () => setS('hidden');
    const onWindowEnter = () => setS('default');

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onWindowLeave);
    document.addEventListener('mouseenter', onWindowEnter);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onWindowLeave);
      document.removeEventListener('mouseenter', onWindowEnter);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
    };
  }, [cursorX, cursorY, setS, label]);

  // ── Ring variants ──
  const ringSize = {
    default:  { width: 38, height: 38, borderRadius: '50%' },
    hover:    { width: 64, height: 64, borderRadius: '50%' },
    clicking: { width: 28, height: 28, borderRadius: '50%' },
    text:     { width: 4,  height: 28, borderRadius: '2px' },
    hidden:   { width: 38, height: 38, borderRadius: '50%' },
  };

  const ringBorder = {
    default:  '1.5px solid rgba(var(--color-accent-cyan-rgb), 0.8)',
    hover:    '1.5px solid rgba(var(--color-accent-pink-rgb), 0.9)',
    clicking: '1.5px solid rgba(var(--color-accent-cyan-rgb), 1)',
    text:     '2px solid rgba(var(--color-accent-cyan-rgb), 0.9)',
    hidden:   '1.5px solid rgba(var(--color-accent-cyan-rgb), 0.8)',
  };

  const ringBg = {
    default:  'rgba(var(--color-accent-cyan-rgb), 0.04)',
    hover:    'rgba(var(--color-accent-pink-rgb), 0.08)',
    clicking: 'rgba(var(--color-accent-cyan-rgb), 0.15)',
    text:     'rgba(var(--color-accent-cyan-rgb), 0.9)',
    hidden:   'rgba(var(--color-accent-cyan-rgb), 0.04)',
  };

  const ringGlow = {
    default:  '0 0 10px rgba(var(--color-accent-cyan-rgb), 0.25)',
    hover:    '0 0 20px rgba(var(--color-accent-pink-rgb), 0.4)',
    clicking: '0 0 14px rgba(var(--color-accent-cyan-rgb), 0.6)',
    text:     '0 0 8px rgba(var(--color-accent-cyan-rgb), 0.5)',
    hidden:   'none',
  };

  const dotSize = {
    default:  4,
    hover:    0,
    clicking: 6,
    text:     0,
    hidden:   0,
  };

  const isHidden = state === 'hidden';

  return (
    <>
      {/* ── Outer morphing ring ── */}
      <motion.div
        style={{
          left: smoothX,
          top:  smoothY,
          translateX: '-50%',
          translateY: '-50%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 99998,
          mixBlendMode: 'exclusion',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isHidden ? 0 : 1,
          border: ringBorder[state],
          background: ringBg[state],
          boxShadow: ringGlow[state],
          ...ringSize[state],
        }}
        animate={{
          ...ringSize[state],
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          width:    { type: 'spring', damping: 18, stiffness: 220 },
          height:   { type: 'spring', damping: 18, stiffness: 220 },
          opacity:  { duration: 0.2 },
          borderRadius: { duration: 0.2 },
        }}
        aria-hidden="true"
      >
        {/* Label inside ring on hover */}
        <AnimatePresence>
          {state === 'hover' && label && (
            <motion.span
              key="lbl"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
              style={{
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(var(--color-accent-pink-rgb), 1)',
                userSelect: 'none',
                mixBlendMode: 'normal',
                lineHeight: 1,
              }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Inner precision dot ── */}
      <motion.div
        style={{
          left: cursorX,
          top:  cursorY,
          translateX: '-50%',
          translateY: '-50%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 99999,
          borderRadius: '50%',
          background: 'rgba(var(--color-accent-cyan-rgb), 1)',
          boxShadow: '0 0 6px 2px rgba(var(--color-accent-cyan-rgb), 0.7)',
        }}
        animate={{
          width:   dotSize[state],
          height:  dotSize[state],
          opacity: isHidden || state === 'hover' || state === 'text' ? 0 : 1,
          scale:   state === 'clicking' ? 1.4 : 1,
        }}
        transition={{
          width:   { type: 'spring', damping: 20, stiffness: 400 },
          height:  { type: 'spring', damping: 20, stiffness: 400 },
          opacity: { duration: 0.15 },
          scale:   { type: 'spring', damping: 12, stiffness: 500 },
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
