import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { media } from '../../data/media';
import { WordReveal, Reveal, TextLink } from '../ui/Primitives';

const gallery = [
{ image: media.cncMachining, label: 'CNC machining', text: '5-axis machining of drive housings from solid stock.' },
{ image: media.welding, label: 'Welding', text: 'Certified TIG welding with documented weld procedures.' },
{ image: media.assemblyHall, label: 'Assembly', text: 'Complete units assembled and aligned in-house.' },
{ image: media.qualityInspection, label: 'Quality inspection', text: 'Dimensional verification on every critical surface.' },
{ image: media.testingRig, label: 'Testing', text: 'Run-in and performance testing before shipment.' },
{ image: media.cfdEngineering, label: 'Engineering', text: 'Design and simulation under one roof with production.' }];


export function Manufacturing() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['2%', '-22%']);

  return (
    <section ref={ref} className="w-full overflow-hidden bg-paper py-[60px] md:py-[88px] lg:py-[130px]">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex items-center gap-4 border-t border-line pt-4">
          <span className="text-[11px] font-medium uppercase tracking-label text-steel">09 / Quality & manufacturing</span>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-8 lg:mt-16 lg:flex-row lg:items-end">
          <WordReveal
            as="h2"
            text={'Engineered in detail.\nBuilt to last.'}
            className="font-display text-section font-semibold text-ink" />
          
          <Reveal className="max-w-sm">
            <p className="text-[15px] leading-relaxed text-graphite">
              Machining, welding, assembly and testing happen under one quality system, so the engineer who calculated a
              shaft can inspect it before it ships.
            </p>
            <TextLink to="/about" className="mt-6">
              Quality & certification
            </TextLink>
          </Reveal>
        </div>
      </div>

      {/* Scroll-linked image rail */}
      <motion.ul style={{ x }} className="mt-12 flex gap-4 lg:mt-16 lg:gap-6">
        {gallery.map((item) =>
        <li key={item.label} className="w-[72vw] shrink-0 sm:w-[46vw] lg:w-[30vw]">
            <div className="aspect-[4/3] w-full overflow-hidden bg-white">
              <img
              src={item.image}
              alt={`${item.label} — ${item.text}`}
              loading="lazy"
              className="h-full w-full object-cover" />
            
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-line pt-3">
              <span className="text-[11px] font-medium uppercase tracking-label text-ink">{item.label}</span>
            </div>
            <p className="mt-2 max-w-xs text-[13.5px] leading-snug text-steel">{item.text}</p>
          </li>
        )}
      </motion.ul>
    </section>);

}