import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';
import { WordReveal, Reveal, TextLink } from '../ui/Primitives';
import { cn } from '../../utils/cn';

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="w-full bg-white py-[50px] sm:py-[60px] md:py-[88px] lg:py-[140px]">
      <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10">
        <div className="flex items-center gap-4 border-t border-line pt-4">
          <span className="text-[11px] font-medium uppercase tracking-label text-steel">10 / Case studies</span>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-8 lg:mt-16 lg:flex-row lg:items-end">
          <WordReveal
            as="h2"
            text={'Results, measured\nin production'}
            className="font-display text-section font-bold text-ink" />
          
          <Reveal>
            <TextLink to="/case-studies">All case studies</TextLink>
          </Reveal>
        </div>

        <ul className="mt-14 lg:mt-20">
          {caseStudies.map((cs, i) =>
          <li key={cs.slug}>
              <Reveal delay={0.04}>
                <Link
                to={`/case-studies/${cs.slug}`}
                className="group grid gap-6 border-t border-line py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-14">
                
                  <div className={cn('lg:col-span-5', i % 2 === 1 && 'lg:order-2')}>
                    <div className="aspect-[16/10] w-full overflow-hidden bg-paper">
                      <img
                      src={cs.image}
                      alt={`${cs.industry} — ${cs.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.05]" />
                    
                    </div>
                  </div>

                  <div className={cn('lg:col-span-6 lg:col-start-7', i % 2 === 1 && 'lg:order-1 lg:col-start-1')}>
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-label text-steel">
                      <span className="text-accent">{cs.industry}</span>
                      <span aria-hidden className="h-px w-6 bg-line" />
                      <span>
                        {cs.location} · {cs.year}
                      </span>
                    </div>
                    <h3 className="mt-5 max-w-xl font-display text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[34px]">
                      {cs.title}
                    </h3>
                    <p className="mt-5 max-w-lg text-[14.5px] leading-relaxed text-graphite">{cs.challenge}</p>
                    <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
                      {cs.metrics.map((m) =>
                    <div key={m.label}>
                          <dt className="font-display text-[24px] font-semibold tabular-nums text-ink">{m.value}</dt>
                          <dd className="mt-1 text-[10px] uppercase tracking-label text-steel">{m.label}</dd>
                        </div>
                    )}
                    </dl>
                    <span className="mt-7 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink transition-colors group-hover:text-accent">
                      Read case study
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          )}
        </ul>
      </div>
    </section>);

}