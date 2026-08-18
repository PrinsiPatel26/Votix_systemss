import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { engineeringServices } from '../../data/services';
import { WordReveal, Reveal } from '../ui/Primitives';
import { cn } from '../../utils/cn';

export function EngineeringSection() {
  const [active, setActive] = useState(0);
  const service = engineeringServices[active];

  return (
    <section id="engineering" className="w-full bg-white py-[60px] md:py-[88px] lg:py-[140px]">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex items-center gap-4 border-t border-line pt-4">
          <span className="text-[11px] font-medium uppercase tracking-label text-steel">06 / Engineering</span>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <WordReveal
              as="h2"
              text={'From process\nto performance'}
              className="font-display text-section font-semibold text-ink" />
            
            <Reveal>
              <p className="mt-8 max-w-md text-[16px] leading-relaxed text-graphite">
                Engineering is not a service we attach to equipment — it is the product. Measurement, simulation and
                physical testing decide what gets manufactured.
              </p>
            </Reveal>

            <div className="relative mt-10 hidden aspect-[3/2] w-full overflow-hidden bg-paper lg:block">
              <AnimatePresence mode="wait">
                <motion.img
                  key={service.image + active}
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0 h-full w-full object-cover" />
                
              </AnimatePresence>
              <span className="absolute bottom-4 left-4 border border-white/25 bg-ink/70 px-3 py-2 text-[10px] uppercase tracking-label text-white">
                {service.index} — {service.name}
              </span>
            </div>
          </div>

          <ul>
            {engineeringServices.map((s, i) =>
            <li key={s.index}>
                <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={active === i}
                className="group w-full border-b border-line py-7 text-left">
                
                  <div className="flex items-baseline gap-5">
                    <span
                    className={cn(
                      'font-display text-[13px] font-medium tabular-nums transition-colors duration-200',
                      active === i ? 'text-accent' : 'text-steel'
                    )}>
                    
                      {s.index}
                    </span>
                    <span className="flex-1">
                      <span
                      className={cn(
                        'block font-display text-[26px] font-semibold tracking-[-0.02em] transition-colors duration-200 md:text-[34px]',
                        active === i ? 'text-ink' : 'text-ink/55 group-hover:text-ink'
                      )}>
                      
                        {s.name}
                      </span>
                    </span>
                    <ArrowRightIcon
                    className={cn(
                      'mt-2 h-5 w-5 shrink-0 transition-all duration-200 ease-expo',
                      active === i ? 'translate-x-0 text-accent' : '-translate-x-2 text-steel opacity-0'
                    )}
                    aria-hidden />
                  
                  </div>

                  <AnimatePresence initial={false}>
                    {active === i &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden">
                    
                        <div className="pl-0 pt-5 md:pl-[52px]">
                          <div className="aspect-[3/2] w-full overflow-hidden bg-paper lg:hidden">
                            <img src={s.image} alt={s.name} loading="lazy" className="h-full w-full object-cover" />
                          </div>
                          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-graphite lg:mt-0">{s.summary}</p>
                          <ul className="mt-5 flex flex-wrap gap-2">
                            {s.deliverables.map((d) =>
                        <li
                          key={d}
                          className="border border-line px-3 py-1.5 text-[11px] uppercase tracking-label text-steel">
                          
                                {d}
                              </li>
                        )}
                          </ul>
                        </div>
                      </motion.div>
                  }
                  </AnimatePresence>
                </button>
              </li>
            )}
            <li className="pt-8">
              <Link
                to="/engineering"
                className="group inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:text-accent">
                
                Engineering capabilities
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1" aria-hidden />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>);

}