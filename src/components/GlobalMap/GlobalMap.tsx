import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { globalRegions } from '../../data/testimonials';
import { WordReveal, Reveal } from '../ui/Primitives';
import { cn } from '../../utils/cn';

/**
 * Land mask as column ranges per latitude band — renders a subtle technical
 * dot-matrix world rather than a heavy vector map.
 */
const landRows: Array<Array<[number, number]>> = [
[[8, 16], [20, 23], [30, 45]],
[[6, 17], [20, 24], [26, 46]],
[[3, 18], [21, 23], [26, 46]],
[[2, 19], [25, 46]],
[[5, 19], [24, 46]],
[[6, 18], [24, 45]],
[[6, 17], [24, 28], [30, 45]],
[[7, 16], [23, 33], [34, 44]],
[[8, 13], [22, 30], [34, 43]],
[[10, 13], [22, 31], [34, 43]],
[[11, 13], [21, 31], [35, 44]],
[[14, 16], [22, 31], [41, 45]],
[[14, 18], [23, 30], [41, 45]],
[[14, 19], [24, 30], [42, 45]],
[[15, 19], [24, 29], [43, 45]],
[[15, 19], [25, 29], [42, 46]],
[[15, 18], [25, 28], [41, 46]],
[[15, 18], [25, 27], [41, 46]],
[[15, 17], [42, 45]],
[[15, 16], [46, 47]],
[[15, 16]],
[[15, 15]]];


const dots: Array<{x: number;y: number;}> = [];
landRows.forEach((ranges, row) => {
  ranges.forEach(([from, to]) => {
    for (let col = from; col <= to; col++) dots.push({ x: col * 10 + 5, y: row * 10 + 5 });
  });
});

export function GlobalMap() {
  const [activeId, setActiveId] = useState<string>('europe');
  const active = globalRegions.find((r) => r.id === activeId)!;

  return (
    <section id="global" className="w-full bg-white py-[50px] sm:py-[60px] md:py-[88px] lg:py-[130px]">
      <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10">
        <div className="flex items-center gap-4 border-t border-line pt-4">
          <span className="text-[11px] font-medium uppercase tracking-label text-steel">12 / Global presence</span>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-8 lg:mt-16 lg:flex-row lg:items-end">
          <WordReveal
            as="h2"
            text={'Engineered locally.\nTrusted globally.'}
            className="font-display text-section font-bold text-ink" />
          
          <Reveal className="max-w-sm">
            <p className="text-[15px] leading-relaxed text-graphite">
              Global engineering and support — regional teams for specification and commissioning, one engineering
              standard behind them.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:gap-14">
          <div className="relative">
            <svg viewBox="0 0 480 230" className="w-full" role="img" aria-label="World map showing HELICON regions">
              {dots.map((d, i) =>
              <circle key={i} cx={d.x} cy={d.y} r={1.7} fill="#111418" opacity={0.16} />
              )}
              {globalRegions.map((r) => {
                const cx = r.x / 100 * 480;
                const cy = r.y / 100 * 230;
                const isActive = r.id === activeId;
                return (
                  <g key={r.id} className="cursor-pointer" onClick={() => setActiveId(r.id)}>
                    {isActive &&
                    <motion.circle
                      cx={cx}
                      cy={cy}
                      r={5}
                      fill="none"
                      stroke="#0B3FD6"
                      strokeWidth={1}
                      initial={{ r: 5, opacity: 0.7 }}
                      animate={{ r: 16, opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />

                    }
                    <circle cx={cx} cy={cy} r={11} fill="transparent" />
                    <circle cx={cx} cy={cy} r={isActive ? 5 : 3.5} fill={isActive ? '#0B3FD6' : '#111418'} />
                  </g>);

              })}
            </svg>

            <ul className="no-scrollbar -mx-6 mt-6 flex gap-2 overflow-x-auto px-6 lg:mx-0 lg:flex-wrap lg:px-0">
              {globalRegions.map((r) =>
              <li key={r.id} className="shrink-0">
                  <button
                  type="button"
                  onClick={() => setActiveId(r.id)}
                  aria-pressed={r.id === activeId}
                  className={cn(
                    'border px-4 py-2.5 text-[11px] font-medium uppercase tracking-label transition-colors duration-200',
                    r.id === activeId ? 'border-accent text-accent' : 'border-line text-graphite hover:border-ink hover:text-ink'
                  )}>
                  
                    {r.name}
                  </button>
                </li>
              )}
            </ul>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                className="border-t border-ink pt-6">
                
                <p className="text-[10px] uppercase tracking-label text-accent">Region</p>
                <h3 className="mt-3 font-display text-[28px] font-semibold tracking-[-0.02em] text-ink">{active.name}</h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-graphite">{active.detail}</p>
                <ul className="mt-6 space-y-3">
                  {active.offices.map((o) =>
                  <li key={o} className="flex items-center gap-3 border-b border-line pb-3 text-[13.5px] text-ink">
                      <span aria-hidden className="h-px w-4 bg-accent" />
                      {o}
                    </li>
                  )}
                </ul>
                <p className="mt-6 text-[11px] uppercase tracking-label text-steel">Global engineering & support</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}