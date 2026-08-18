import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { industries } from '../../data/industries';
import { WordReveal, Reveal, TextLink } from '../ui/Primitives';
import { cn } from '../../utils/cn';

/** Asymmetric editorial layout — deliberately not a 3×3 grid. */
const layout: Record<string, string> = {
  pharmaceutical: 'lg:col-span-7 lg:h-[560px]',
  chemical: 'lg:col-span-5 lg:h-[560px]',
  'food-beverage': 'lg:col-span-5 lg:h-[420px]',
  dairy: 'lg:col-span-3 lg:h-[420px]',
  biotechnology: 'lg:col-span-4 lg:h-[420px]',
  energy: 'lg:col-span-6 lg:h-[380px]',
  cosmetics: 'lg:col-span-3 lg:h-[380px]',
  petrochemical: 'lg:col-span-3 lg:h-[380px]',
  environmental: 'lg:col-span-12 lg:h-[340px]'
};

export function IndustryShowcase() {
  return (
    <section id="industries" className="w-full bg-white py-[60px] md:py-[88px] lg:py-[140px]">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex items-center gap-4 border-t border-line pt-4">
          <span className="text-[11px] font-medium uppercase tracking-label text-steel">05 / Industries</span>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-8 lg:mt-16 lg:flex-row lg:items-end">
          <WordReveal
            as="h2"
            text={'Engineered for\nyour industry'}
            className="font-display text-section font-semibold text-ink" />
          
          <Reveal className="max-w-sm">
            <p className="text-[15px] leading-relaxed text-graphite">
              Hygiene, containment, abrasion and code compliance mean different things in each sector. Our specification
              starts from those differences.
            </p>
            <TextLink to="/industries" className="mt-6">
              All industries
            </TextLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-12 lg:gap-5">
          {industries.map((ind, i) =>
          <Reveal key={ind.slug} delay={Math.min(i * 0.04, 0.2)} className={cn('h-[300px] md:h-[380px]', layout[ind.slug])}>
              <Link
              to={`/industries/${ind.slug}`}
              className="group relative block h-full w-full overflow-hidden bg-ink"
              aria-label={`${ind.name} industry`}>
              
                <img
                src={ind.image}
                alt={`${ind.name} processing facility`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.06]" />
              
                <span
                aria-hidden
                className="absolute inset-0 bg-ink/35 transition-colors duration-300 group-hover:bg-ink/55" />
              
                <span className="absolute left-6 top-6 text-[10px] font-medium tabular-nums tracking-label text-white/70">
                  {ind.index}
                </span>
                <span className="absolute inset-x-6 bottom-6">
                  <span className="block font-display text-[24px] font-semibold tracking-[-0.02em] text-white md:text-[30px]">
                    {ind.name}
                  </span>
                  <span className="mt-2 block max-w-sm translate-y-2 text-[13.5px] leading-snug text-white/0 transition-all duration-300 ease-expo group-hover:translate-y-0 group-hover:text-white/80">
                    {ind.summary}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-label text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View industry
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1" aria-hidden />
                  </span>
                </span>
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}