import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { media } from '../../data/media';
import { explorerHotspots } from '../../data/configurator';
import { WordReveal, Reveal, TextLink } from '../ui/Primitives';
import { cn } from '../../utils/cn';

const ease = [0.23, 1, 0.32, 1] as const;

export function ProductExplorer() {
  const [activeId, setActiveId] = useState(explorerHotspots[4].id);
  const active = explorerHotspots.find((h) => h.id === activeId)!;

  return (
    <section id="explorer" className="w-full bg-paper py-[50px] sm:py-[60px] md:py-[88px] lg:py-[140px]">
      <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10">
        <div className="flex items-center gap-4 border-t border-line pt-4">
          <span className="text-[11px] font-medium uppercase tracking-label text-steel">04 / Technical explorer</span>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-8 lg:mt-16 lg:flex-row lg:items-end">
          <WordReveal
            as="h2"
            text={'Every component\nis a design decision'}
            className="max-w-xl font-display text-section font-bold text-ink" />
          
          <Reveal>
            <p className="max-w-sm text-[15px] leading-relaxed text-graphite">
              Select a component to see how it is dimensioned. Nothing here is a catalogue default — each element is
              calculated against your duty.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
          {/* Interactive visual */}
          <div className="relative">
            <div className="relative mx-auto h-[440px] w-full max-w-[420px] bg-white md:h-[560px] lg:h-[640px] lg:max-w-none">
              <img
                src={media.explorerUnit}
                alt="Complete top-entry agitator unit showing motor, gearbox, seal, shaft, impeller and mounting flange"
                loading="lazy"
                className="h-full w-full object-contain" />
              
              {explorerHotspots.map((h) => {
                const isActive = h.id === activeId;
                return (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => setActiveId(h.id)}
                    aria-pressed={isActive}
                    aria-label={`Show details for ${h.label}`}
                    className="absolute hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 md:flex"
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}>
                    
                    <span
                      className={cn(
                        'flex h-7 w-7 items-center justify-center border transition-colors duration-200',
                        isActive ? 'border-accent bg-accent text-white' : 'border-ink/25 bg-white/90 text-ink hover:border-ink'
                      )}>
                      
                      <PlusIcon className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span
                      className={cn(
                        'whitespace-nowrap border bg-white/95 px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-label transition-colors duration-200',
                        isActive ? 'border-accent text-accent' : 'border-line text-graphite'
                      )}>
                      
                      {h.index} {h.label}
                    </span>
                  </button>);

              })}
            </div>

            {/* Mobile selector */}
            <div className="no-scrollbar -mx-6 mt-6 flex gap-2 overflow-x-auto px-6 md:hidden">
              {explorerHotspots.map((h) =>
              <button
                key={h.id}
                type="button"
                onClick={() => setActiveId(h.id)}
                aria-pressed={h.id === activeId}
                className={cn(
                  'shrink-0 border px-4 py-3 text-[11px] font-medium uppercase tracking-label transition-colors duration-200 min-h-[44px] flex items-center',
                  h.id === activeId ? 'border-accent bg-white text-accent' : 'border-line bg-white text-graphite'
                )}>
                
                  {h.label}
                </button>
              )}
            </div>
          </div>

          {/* Panel */}
          <div className="lg:pt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24, ease }}
                className="border-t border-ink pt-6">
                
                <p className="text-[11px] font-medium uppercase tracking-label text-accent">
                  {active.index} — Component
                </p>
                <h3 className="mt-4 font-display text-[30px] font-semibold tracking-[-0.02em] text-ink md:text-[38px]">
                  {active.label}
                </h3>
                <p className="mt-5 text-[15.5px] leading-relaxed text-graphite">{active.text}</p>
                <dl className="mt-8 space-y-3">
                  {active.specs.map((s) =>
                  <div key={s} className="flex items-center gap-3 border-b border-line pb-3">
                      <span aria-hidden className="h-px w-4 bg-accent" />
                      <dt className="text-[13.5px] text-ink">{s}</dt>
                    </div>
                  )}
                </dl>
                <TextLink to="/products/top-entry-agitators" className="mt-8">
                  Full technical data
                </TextLink>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}