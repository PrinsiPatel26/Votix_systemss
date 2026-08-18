import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { insights, insightCategories } from '../data/insights';
import { InsightCard } from '../components/Insights/InsightCard';
import { PageHero } from '../components/ui/PageHero';
import { useSeo } from '../hooks/useSeo';
import { cn } from '../utils/cn';
import { media } from '../data/media';

export function Insights() {
  const [category, setCategory] = useState<(typeof insightCategories)[number]>('All');
  const visible = category === 'All' ? insights : insights.filter((a) => a.category === category);

  useSeo({
    title: 'Engineering insights — Articles, guides and updates',
    description:
    'Technical articles, engineering guides, tutorials, case studies and product updates on industrial mixing, agitator selection and process optimisation.',
    path: '/insights',
    image: media.engineerInspecting
  });

  return (
    <>
      <PageHero
        eyebrow="07 / Insights"
        title="Engineering insights"
        intro="Practical engineering writing from the people who specify, simulate and test mixing equipment every day."
        trail={[{ label: 'Home', to: '/' }, { label: 'Insights' }]} />
      

      <section className="w-full bg-white py-[60px] md:py-[80px] lg:py-[110px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto border-t border-line px-6 pt-6 md:mx-0 md:flex-wrap md:px-0">
            {insightCategories.map((c) =>
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={cn(
                'shrink-0 border px-4 py-2.5 text-[11px] font-medium uppercase tracking-label transition-colors duration-200',
                category === c ? 'border-accent text-accent' : 'border-line text-graphite hover:border-ink hover:text-ink'
              )}>
              
                {c}
              </button>
            )}
          </div>

          <ul className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
            {visible.map((article, i) =>
            <motion.li
              key={article.slug}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.26, delay: Math.min(i * 0.04, 0.2), ease: [0.23, 1, 0.32, 1] }}
              className="border-t border-line pt-6">
              
                <InsightCard article={article} />
              </motion.li>
            )}
          </ul>

          {visible.length === 0 && <p className="mt-10 text-[15px] text-graphite">No articles in this category yet.</p>}
        </div>
      </section>
    </>);

}