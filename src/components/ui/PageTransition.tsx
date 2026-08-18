import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { LogoMark } from './Logo';

/** White curtain with a brief brand mark between route changes. */
export function RouteCurtain() {
  const { pathname } = useLocation();
  const [active, setActive] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    setActive(true);
    const t = window.setTimeout(() => setActive(false), 420);
    return () => window.clearTimeout(t);
  }, [pathname, reduce]);

  return (
    <AnimatePresence>
      {active &&
      <motion.div
        key={pathname}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}>
        
          <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center gap-3 text-ink">
          
            <LogoMark className="h-8 w-8" accent />
            <span className="font-display text-[15px] font-semibold tracking-[0.22em]">HELICON</span>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}

export function PageShell({ children }: {children: React.ReactNode;}) {
  const reduce = useReducedMotion();
  return (
    <motion.main
      initial={reduce ? undefined : { opacity: 0, y: 10 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}>
      
      {children}
    </motion.main>);

}