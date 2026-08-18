import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { media } from '../../data/media';
import { explorerHotspots } from '../../data/configurator';
import { ActionLink, WordReveal, Reveal } from '../ui/Primitives';
import { cn } from '../../utils/cn';

/**
 * ShowroomStage isolates the visual so a real WebGL scene can replace it later:
 * swap the <img> for a Three.js canvas and keep the hotspot overlay untouched.
 */
function ShowroomStage({ activeId, onSelect }: {activeId: string | null;onSelect: (id: string | null) => void;}) {
  const hotspots = explorerHotspots.filter((h) => ['motor', 'seal', 'impeller'].includes(h.id));

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-white sm:aspect-[16/11] lg:aspect-auto lg:h-[620px]">
      <img
        src={media.explorerUnit}
        alt="Interactive view of a complete industrial agitator unit"
        loading="lazy"
        className="h-full w-full object-contain" />
      

      {hotspots.map((h) => {
        const isActive = activeId === h.id;
        return (
          <button
            key={h.id}
            type="button"
            onClick={() => onSelect(isActive ? null : h.id)}
            aria-pressed={isActive}
            aria-label={`Inspect ${h.label}`}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${h.x}%`, top: `${h.y}%` }}>
            
            <span className="relative flex h-9 w-9 items-center justify-center">
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full border border-accent/40"
                animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', repeatDelay: 0.4 }} />
              
              <span
                className={cn(
                  'relative h-3 w-3 rounded-full border transition-colors duration-200',
                  isActive ? 'border-accent bg-accent' : 'border-accent bg-white'
                )} />
              
            </span>
          </button>);

      })}

      <AnimatePresence>
        {activeId &&
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-x-4 bottom-4 border border-line bg-white/95 p-5 backdrop-blur md:inset-x-auto md:right-6 md:w-[300px]">
          
            {(() => {
            const h = explorerHotspots.find((x) => x.id === activeId)!;
            return (
              <>
                  <p className="text-[10px] uppercase tracking-label text-accent">
                    {h.index} — {h.label}
                  </p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-graphite">{h.text}</p>
                </>);

          })()}
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}

export function VirtualShowroom() {
  const [activeId, setActiveId] = useState<string | null>('impeller');

  return (
    <section id="showroom" className="w-full bg-paper py-[50px] sm:py-[60px] md:py-[88px] lg:py-[140px]">
      <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10">
        <div className="flex items-center gap-4 border-t border-line pt-4">
          <span className="text-[11px] font-medium uppercase tracking-label text-steel">11 / Virtual showroom</span>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-16">
          <div className="order-2 lg:order-1">
            <ShowroomStage activeId={activeId} onSelect={setActiveId} />
          </div>

          <div className="order-1 lg:order-2 lg:pt-10">
            <WordReveal
              as="h2"
              text={'Explore the\ntechnology'}
              className="font-display text-section font-bold text-ink" />
            
            <Reveal>
              <p className="mt-7 text-[15.5px] leading-relaxed text-graphite">
                Walk through a complete agitator unit at your own pace. Select a marker to inspect how the drive train,
                sealing system and impeller work together — the same walkthrough our engineers use in a specification
                review.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ActionLink to="/products/top-entry-agitators">Explore product</ActionLink>
                <ActionLink to="/engineering" variant="outline" arrow={false}>
                  View technical details
                </ActionLink>
              </div>
              <p className="mt-8 border-t border-line pt-4 text-[10px] uppercase tracking-label text-steel">
                Interactive walkthrough · Photorealistic 3D showroom in preparation
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}