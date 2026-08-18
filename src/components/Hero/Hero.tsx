import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { media } from '../../data/media';

const annotations = [
{ index: '01', label: 'Drive system', top: '13%' },
{ index: '02', label: 'Mixing shaft', top: '46%' },
{ index: '03', label: 'Impeller', top: '74%' },
{ index: '04', label: 'Process vessel', top: '90%' }];


const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const headline = ['Engineered', 'to', 'mix.', '\n', 'Built', 'to', 'perform.'];

  return (
    <section className="relative isolate w-full overflow-hidden bg-white pt-[104px] lg:min-h-[100svh] lg:pt-[92px]">
      {/* Right-hand technical field */}
      <motion.div
        aria-hidden
        initial={reduce ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease }}
        className="absolute inset-y-0 right-0 hidden w-[46%] bg-paper eng-grid lg:block" />
      

      <div className="relative mx-auto grid max-w-content items-center gap-10 px-6 pb-16 md:px-10 lg:min-h-[calc(100svh-92px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-6 lg:pb-0">
        {/* Copy */}
        <div className="relative z-10 max-w-2xl lg:py-24">
          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.15 }}
            className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-label text-graphite">
            
            <span aria-hidden className="h-px w-8 bg-accent" />
            Advanced mixing technology
          </motion.p>

          <h1 className="mt-7 font-display text-display font-semibold text-ink">
            {headline.map((word, i) =>
            word === '\n' ?
            <br key={i} /> :

            <span key={i} className="inline-block overflow-hidden align-bottom">
                  <motion.span
                className="inline-block"
                initial={reduce ? undefined : { y: '108%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.5, ease, delay: 0.24 + i * 0.055 }}>
                
                    {word}
                    {'\u00A0'}
                  </motion.span>
                </span>

            )}
          </h1>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.62 }}
            className="mt-8 max-w-md text-[16px] leading-relaxed text-graphite md:text-[17px]">
            
            Precision-engineered agitators and mixing systems designed for demanding industrial processes.
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.74 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            
            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-3 bg-ink px-7 py-4 text-[13px] font-medium uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-accent">
              
              Explore solutions
              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1"
                aria-hidden />
              
            </Link>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center border border-line px-7 py-4 text-[13px] font-medium uppercase tracking-[0.12em] text-ink transition-colors duration-200 hover:border-ink">
              
              Request a quote
            </Link>
          </motion.div>

          <motion.dl
            initial={reduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.9 }}
            className="mt-14 hidden max-w-md grid-cols-3 gap-6 border-t border-line pt-6 lg:grid">
            
            {[
            { v: '[40+]', l: 'Years' },
            { v: '[50+]', l: 'Countries' },
            { v: '[10K+]', l: 'Systems' }].
            map((s) =>
            <div key={s.l}>
                <dt className="font-display text-[22px] font-semibold tabular-nums text-ink">{s.v}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-label text-steel">{s.l}</dd>
              </div>
            )}
          </motion.dl>
        </div>

        {/* Equipment */}
        <div className="relative lg:h-full">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.05, ease, delay: 0.1 }}
            className="relative mx-auto h-[420px] w-full max-w-[420px] sm:h-[520px] lg:h-[calc(100svh-40px)] lg:max-w-none lg:-mr-24 lg:w-[118%]">
            
            <img
              src={media.heroAgitator}
              alt="Stainless steel top-entry industrial agitator with gearbox drive, mixing shaft and hydrofoil impellers"
              className="h-full w-full object-contain object-bottom" />
            
          </motion.div>

          {/* Technical annotations */}
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
            {annotations.map((a, i) =>
            <div key={a.index} className="absolute left-[6%] right-[10%] flex items-center" style={{ top: a.top }}>
                <motion.span
                className="h-px flex-1 origin-left bg-ink/25"
                initial={reduce ? undefined : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease, delay: 1.0 + i * 0.14 }} />
              
                <motion.span
                className="ml-3 flex items-baseline gap-2 whitespace-nowrap"
                initial={reduce ? undefined : { opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease, delay: 1.18 + i * 0.14 }}>
                
                  <span className="text-[10px] font-medium tabular-nums text-accent">{a.index}</span>
                  <span className="text-[10px] font-medium uppercase tracking-label text-graphite">{a.label}</span>
                </motion.span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Base metadata rail */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease, delay: 1.1 }}
        className="relative z-10 hidden border-t border-line lg:block">
        
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 text-[10px] uppercase tracking-label text-steel md:px-10">
          <span>00 / Advanced mixing technology</span>
          <span className="hidden md:inline">Agitators · Mixers · Mixing systems · Process engineering</span>
          <span>Scroll to explore</span>
        </div>
      </motion.div>
    </section>);

}