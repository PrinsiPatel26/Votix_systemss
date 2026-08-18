import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Breadcrumbs, WordReveal } from './Primitives';

const ease = [0.23, 1, 0.32, 1] as const;

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  trail,
  meta,
  tone = 'light'









}: {eyebrow: string;title: string;intro?: string;image?: string;imageAlt?: string;trail: Array<{label: string;to?: string;}>;meta?: Array<{label: string;value: string;}>;tone?: 'light' | 'image';}) {
  const reduce = useReducedMotion();

  if (tone === 'image' && image) {
    return (
      <header className="relative w-full overflow-hidden bg-ink pt-[68px]">
        <div className="relative h-[420px] w-full md:h-[520px] lg:h-[600px]">
          <motion.img
            src={image}
            alt={imageAlt ?? ''}
            initial={reduce ? undefined : { scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease }}
            className="absolute inset-0 h-full w-full object-cover" />
          
          <div aria-hidden className="absolute inset-0 bg-ink/50" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-content px-6 pb-12 md:px-10 md:pb-16">
              <div className="text-white/60">
                <Breadcrumbs trail={trail} />
              </div>
              <p className="mt-6 text-[11px] font-medium uppercase tracking-label text-white/70">{eyebrow}</p>
              <WordReveal
                as="h1"
                text={title}
                className="mt-4 max-w-3xl font-display text-[clamp(2.1rem,5vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-white" />
              
              {intro && <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-white/75">{intro}</p>}
            </div>
          </div>
        </div>
      </header>);

  }

  return (
    <header className="w-full bg-white pt-[104px] md:pt-[120px]">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Breadcrumbs trail={trail} />
        <div className="mt-10 grid gap-8 border-t border-line pt-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-label text-accent">{eyebrow}</p>
            <WordReveal
              as="h1"
              text={title}
              className="mt-5 font-display text-[clamp(2.1rem,5vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-ink" />
            
          </div>
          <div className="lg:pt-2">
            {intro && <p className="max-w-lg text-[16px] leading-relaxed text-graphite">{intro}</p>}
            {meta &&
            <dl className="mt-8 grid grid-cols-2 gap-6">
                {meta.map((m) =>
              <div key={m.label} className="border-t border-line pt-3">
                    <dt className="text-[10px] uppercase tracking-label text-steel">{m.label}</dt>
                    <dd className="mt-1 text-[14px] text-ink">{m.value}</dd>
                  </div>
              )}
              </dl>
            }
          </div>
        </div>

        {image &&
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="mt-12 aspect-[21/9] w-full overflow-hidden bg-paper lg:mt-16">
          
            <img src={image} alt={imageAlt ?? ''} className="h-full w-full object-cover" />
          </motion.div>
        }
      </div>
    </header>);

}