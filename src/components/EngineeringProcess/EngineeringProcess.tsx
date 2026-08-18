import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { processSteps } from '../../data/services';
import { WordReveal } from '../ui/Primitives';
import { cn } from '../../utils/cn';

export function EngineeringProcess() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], reduce ? ['0vw', '0vw'] : ['0vw', '-247vw']);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['4%', '100%']);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(processSteps.length - 1, Math.floor(v * processSteps.length + 0.15));
    setActive(next);
  });

  return (
    <section id="process" aria-label="How we engineer your solution" className="w-full bg-ink text-white">
      {/* Desktop: scroll-driven horizontal storytelling */}
      <div ref={wrapRef} className="relative hidden h-[500vh] lg:block">
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
          <div className="mx-auto w-full max-w-content px-10 pt-28">
            <div className="flex items-end justify-between gap-10 border-t border-white/15 pt-4">
              <span className="text-[11px] font-medium uppercase tracking-label text-white/50">
                07 / Engineering process
              </span>
              <span className="text-[11px] tabular-nums uppercase tracking-label text-white/50">
                {processSteps[active].index} / {processSteps.length}
              </span>
            </div>
            <h2 className="mt-8 max-w-2xl font-display text-[clamp(2rem,3.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.025em]">
              How we engineer<br />your solution
            </h2>
            <div className="mt-8 h-px w-full bg-white/15" aria-hidden>
              <motion.div style={{ width: lineWidth }} className="h-px bg-accent" />
            </div>
          </div>

          <motion.ol style={{ x }} className="mt-14 flex gap-8 pl-10">
            {processSteps.map((step, i) =>
            <li key={step.index} className="w-[42vw] shrink-0">
                <div
                className={cn(
                  'flex h-full flex-col border-t pt-6 transition-colors duration-300',
                  i === active ? 'border-accent' : 'border-white/15'
                )}>
                
                  <div className="flex items-baseline gap-4">
                    <span
                    className={cn(
                      'font-display text-[13px] font-medium tabular-nums transition-colors duration-300',
                      i === active ? 'text-accent' : 'text-white/40'
                    )}>
                    
                      {step.index}
                    </span>
                    <h3
                    className={cn(
                      'font-display text-[30px] font-semibold uppercase tracking-[-0.01em] transition-colors duration-300',
                      i === active ? 'text-white' : 'text-white/45'
                    )}>
                    
                      {step.name}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-white/65">{step.text}</p>
                  <div className="mt-7 aspect-[16/9] w-full overflow-hidden bg-white/5">
                    <img
                    src={step.image}
                    alt={`${step.name} — engineering process step`}
                    loading="lazy"
                    className={cn(
                      'h-full w-full object-cover transition-all duration-500 ease-expo',
                      i === active ? 'opacity-100 grayscale-0' : 'opacity-45 grayscale'
                    )} />
                  
                  </div>
                </div>
              </li>
            )}
          </motion.ol>
        </div>
      </div>

      {/* Mobile / tablet: vertical narrative */}
      <div className="px-6 py-[60px] md:px-10 md:py-[88px] lg:hidden">
        <div className="border-t border-white/15 pt-4">
          <span className="text-[11px] font-medium uppercase tracking-label text-white/50">07 / Engineering process</span>
        </div>
        <h2 className="mt-8 font-display text-[clamp(2rem,7vw,2.8rem)] font-semibold leading-[1.02] tracking-[-0.025em]">
          How we engineer<br />your solution
        </h2>
        <ol className="mt-10 space-y-10">
          {processSteps.map((step) =>
          <li key={step.index} className="border-t border-white/15 pt-5">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-[12px] font-medium tabular-nums text-accent">{step.index}</span>
                <h3 className="font-display text-[22px] font-semibold uppercase">{step.name}</h3>
              </div>
              <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">{step.text}</p>
              <div className="mt-5 aspect-[16/9] w-full overflow-hidden bg-white/5">
                <img src={step.image} alt={`${step.name} — engineering process step`} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </li>
          )}
        </ol>
      </div>
    </section>);

}