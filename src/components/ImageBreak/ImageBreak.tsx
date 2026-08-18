import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { media } from '../../data/media';

export function ImageBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-8%', '8%']);
  const overlayY = useTransform(scrollYProgress, [0, 1], reduce ? ['0px', '0px'] : ['40px', '-40px']);

  return (
    <section ref={ref} aria-label="Precision in every detail" className="relative w-full overflow-hidden bg-ink">
      <div className="relative h-[380px] w-full overflow-hidden md:h-[520px] lg:h-[660px]">
        <motion.img
          src={media.factoryWide}
          alt="Process hall with rows of stainless steel mixing vessels and top-mounted agitators"
          loading="lazy"
          style={{ y }}
          className="absolute inset-0 h-[118%] w-full object-cover" />
        
        <div aria-hidden className="absolute inset-0 bg-ink/35" />

        <motion.div style={{ y: overlayY }} className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-content px-6 md:px-10">
            <p className="text-[11px] font-medium uppercase tracking-label text-white/70">02 / In production</p>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,5vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-white">
              Precision in every detail
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/75">
              Tolerances, surface finishes and weld quality are not cosmetic concerns. They decide whether a vessel can
              be cleaned, validated and trusted for the next twenty years of production.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}