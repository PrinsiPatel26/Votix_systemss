import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import { PageHero } from '../components/ui/PageHero';
import { useSeo } from '../hooks/useSeo';
import { cn } from '../utils/cn';
import { media } from '../data/media';

export function CaseStudiesPage() {
  const industriesList = ['All', ...Array.from(new Set(caseStudies.map((c) => c.industry)))];
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? caseStudies : caseStudies.filter((c) => c.industry === filter);

  useSeo({
    title: 'Case studies — Results measured in production',
    description:
    'Documented mixing improvements in pharmaceutical, chemical, food and biogas production: challenge, engineering solution and measured result.',
    path: '/case-studies',
    image: media.industryChemical
  });

  return (
    <>
      <PageHero
        eyebrow="06 / Case studies"
        title={'Results, measured\nin production'}
        intro="Every project below started with a measurement and ended with a verified figure. Bracketed numbers are placeholders for client-approved data."
        trail={[{ label: 'Home', to: '/' }, { label: 'Case studies' }]} />
      

      <section className="w-full bg-white py-[60px] md:py-[80px] lg:py-[110px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="flex flex-wrap items-center gap-2 border-t border-line pt-6">
            <span className="mr-4 text-[11px] uppercase tracking-label text-steel">Filter</span>
            {industriesList.map((f) =>
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                'border px-4 py-2.5 text-[11px] font-medium uppercase tracking-label transition-colors duration-200',
                filter === f ? 'border-accent text-accent' : 'border-line text-graphite hover:border-ink hover:text-ink'
              )}>
              
                {f}
              </button>
            )}
          </div>

          <ul className="mt-12 grid gap-10 md:grid-cols-2 lg:gap-14">
            {visible.map((cs, i) =>
            <motion.li
              key={cs.slug}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.26, delay: Math.min(i * 0.05, 0.2), ease: [0.23, 1, 0.32, 1] }}>
              
                <Link to={`/case-studies/${cs.slug}`} className="group block">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-paper">
                    <img
                    src={cs.image}
                    alt={cs.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.05]" />
                  
                  </div>
                  <div className="mt-5 flex items-center gap-4 text-[10px] uppercase tracking-label text-steel">
                    <span className="text-accent">{cs.industry}</span>
                    <span aria-hidden className="h-px w-5 bg-line" />
                    <span>
                      {cs.location} · {cs.year}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-[23px] font-semibold leading-snug tracking-[-0.02em] text-ink md:text-[27px]">
                    {cs.title}
                  </h2>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-graphite">{cs.result}</p>
                  <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                    {cs.metrics.map((m) =>
                  <div key={m.label}>
                        <dt className="font-display text-[20px] font-semibold tabular-nums text-ink">{m.value}</dt>
                        <dd className="mt-1 text-[10px] uppercase tracking-label text-steel">{m.label}</dd>
                      </div>
                  )}
                  </dl>
                  <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink transition-colors group-hover:text-accent">
                    Read case study
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </motion.li>
            )}
          </ul>
        </div>
      </section>
    </>);

}