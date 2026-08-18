import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const ease = [0.23, 1, 0.32, 1] as const;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const item = testimonials[index];

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section aria-label="Client testimonials" className="w-full bg-ink py-[50px] sm:py-[60px] text-white md:py-[88px] lg:py-[130px]">
      <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10">
        <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-4">
          <span className="text-[11px] font-medium uppercase tracking-label text-white/50">13 / Clients</span>
          <span className="text-[11px] tabular-nums uppercase tracking-label text-white/50">
            {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16">
          <div className="relative">
            <span aria-hidden className="block font-display text-[86px] font-semibold leading-[0.6] text-accent">
              “
            </span>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={index}
                custom={direction}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.26, ease }}
                className="mt-6">
                
                <p className="max-w-2xl font-display text-[clamp(1.5rem,3vw,2.6rem)] font-medium leading-[1.18] tracking-[-0.02em]">
                  {item.quote}
                </p>
                <footer className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-5 border-t border-white/15 pt-6">
                  <div>
                    <p className="text-[15px] font-medium">{item.name}</p>
                    <p className="mt-1 text-[13px] text-white/55">
                      {item.role}, {item.company}
                    </p>
                  </div>
                  <dl className="flex gap-10">
                    <div>
                      <dt className="text-[10px] uppercase tracking-label text-white/40">Industry</dt>
                      <dd className="mt-1 text-[13px] text-white/80">{item.industry}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-label text-white/40">Country</dt>
                      <dd className="mt-1 text-[13px] text-white/80">{item.country}</dd>
                    </div>
                  </dl>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-10 flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="border border-white/20 p-3.5 text-white transition-colors duration-200 hover:border-white/60 min-h-[44px] min-w-[44px] flex items-center justify-center">
                
                <ArrowLeftIcon className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="border border-white/20 p-3.5 text-white transition-colors duration-200 hover:border-white/60 min-h-[44px] min-w-[44px] flex items-center justify-center">
                
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5 lg:aspect-[4/5]">
            <AnimatePresence mode="wait">
              <motion.img
                key={item.image + index}
                src={item.image}
                alt={`${item.industry} production environment`}
                loading="lazy"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease }}
                className="absolute inset-0 h-full w-full object-cover" />
              
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}