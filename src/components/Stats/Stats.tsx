import React from 'react';
import { companyStats } from '../../data/testimonials';
import { Counter, Reveal } from '../ui/Primitives';

export function Stats() {
  return (
    <section aria-label="Company figures" className="w-full bg-white py-[60px] md:py-[88px] lg:py-[130px]">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
          <span className="text-[11px] font-medium uppercase tracking-label text-steel">08 / By the numbers</span>
          <span className="text-[10px] uppercase tracking-label text-steel">
            Bracketed figures are placeholders for verified company data
          </span>
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-y-2 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {companyStats.map((stat, i) =>
          <Reveal
            key={stat.label}
            delay={i * 0.05}
            className="flex items-baseline justify-between gap-6 border-b border-line py-7 lg:flex-col lg:items-start lg:border-b-0 lg:border-t lg:pt-6">
            
              <dt className="font-display text-[clamp(2.6rem,5.4vw,4.6rem)] font-semibold leading-none tabular-nums tracking-[-0.035em] text-ink">
                <Counter value={stat.value} />
              </dt>
              <dd className="text-right text-[11px] uppercase tracking-label text-steel lg:mt-4 lg:text-left">
                {stat.label}
              </dd>
            </Reveal>
          )}
          <Reveal delay={0.25} className="hidden lg:block lg:border-t lg:border-line lg:pt-6">
            <p className="max-w-[240px] text-[13.5px] leading-relaxed text-graphite">
              Four decades of installed base means our design decisions are informed by equipment still running, not
              only by simulation.
            </p>
          </Reveal>
        </dl>
      </div>
    </section>);

}