import React from 'react';
import { insights } from '../../data/insights';
import { InsightCard } from './InsightCard';
import { WordReveal, Reveal, TextLink } from '../ui/Primitives';

export function InsightsSection() {
  const [featured, ...rest] = insights.slice(0, 4);

  return (
    <section id="insights" className="w-full bg-white py-[50px] sm:py-[60px] md:py-[88px] lg:py-[130px]">
      <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10">
        <div className="flex items-center gap-4 border-t border-line pt-4">
          <span className="text-[11px] font-medium uppercase tracking-label text-steel">14 / Insights</span>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-8 lg:mt-16 lg:flex-row lg:items-end">
          <WordReveal as="h2" text="Engineering insights" className="font-display text-section font-bold text-ink" />
          <Reveal>
            <TextLink to="/insights">All insights</TextLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-14">
          <Reveal>
            <InsightCard article={featured} featured />
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            {rest.map((article, i) =>
            <Reveal key={article.slug} delay={0.05 + i * 0.05} className="border-t border-line pt-6 lg:pt-5">
                <InsightCard article={article} />
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>);

}