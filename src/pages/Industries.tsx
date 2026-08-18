import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { industries } from '../data/industries';
import { products } from '../data/products';
import { PageHero } from '../components/ui/PageHero';
import { useSeo } from '../hooks/useSeo';
import { cn } from '../utils/cn';
import { media } from '../data/media';

const layout: Record<string, string> = {
  pharmaceutical: 'lg:col-span-7 lg:h-[520px]',
  chemical: 'lg:col-span-5 lg:h-[520px]',
  'food-beverage': 'lg:col-span-5 lg:h-[400px]',
  dairy: 'lg:col-span-3 lg:h-[400px]',
  biotechnology: 'lg:col-span-4 lg:h-[400px]',
  energy: 'lg:col-span-6 lg:h-[380px]',
  cosmetics: 'lg:col-span-3 lg:h-[380px]',
  petrochemical: 'lg:col-span-3 lg:h-[380px]',
  environmental: 'lg:col-span-12 lg:h-[320px]'
};

export function Industries() {
  const [tech, setTech] = useState<string>('all');
  const visible = tech === 'all' ? industries : industries.filter((i) => i.technologies.includes(tech));

  useSeo({
    title: 'Industries — Process knowledge sector by sector',
    description:
    'Mixing technology engineered for pharmaceutical, chemical, food, dairy, biotechnology, cosmetics, petrochemical, energy and environmental processes.',
    path: '/industries',
    image: media.industryPharma
  });

  return (
    <>
      <PageHero
        eyebrow="02 / Industries"
        title={'Engineered for\nyour industry'}
        intro="Hygiene, containment, abrasion and code compliance mean different things in each sector. Filter by technology to see where each family is applied."
        trail={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
        meta={[
        { label: 'Sectors served', value: '09' },
        { label: 'Countries', value: '[50+]' }]
        } />
      

      <section className="w-full bg-white py-[50px] sm:py-[60px] md:py-[80px] lg:py-[110px]">
        <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10">
          <div className="flex flex-wrap items-center gap-2 border-t border-line pt-4 sm:pt-6">
            <span className="mr-2 sm:mr-4 text-[10px] sm:text-[11px] uppercase tracking-label text-steel">Filter</span>
            <button
              type="button"
              onClick={() => setTech('all')}
              aria-pressed={tech === 'all'}
              className={cn(
                'border px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-label transition-colors duration-200',
                tech === 'all' ? 'border-accent text-accent' : 'border-line text-graphite hover:border-ink hover:text-ink'
              )}>
              
              All
            </button>
            {products.map((p) =>
            <button
              key={p.slug}
              type="button"
              onClick={() => setTech(p.slug)}
              aria-pressed={tech === p.slug}
              className={cn(
                'border px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-label transition-colors duration-200 min-h-[44px]',
                tech === p.slug ? 'border-accent text-accent' : 'border-line text-graphite hover:border-ink hover:text-ink'
              )}>
              
                {p.shortName}
              </button>
            )}
          </div>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
            {visible.map((ind, i) =>
            <motion.article
              key={ind.slug}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.26, delay: Math.min(i * 0.04, 0.2), ease: [0.23, 1, 0.32, 1] }}
              className={cn('h-[280px] sm:h-[300px] md:h-[380px]', layout[ind.slug], tech !== 'all' && 'lg:col-span-4 lg:h-[380px]')}>
              
                <Link
                to={`/industries/${ind.slug}`}
                className="group relative block h-full w-full overflow-hidden bg-ink"
                aria-label={`${ind.name} industry`}>
                
                  <img
                  src={ind.image}
                  alt={`${ind.name} processing facility`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.06]" />
                
                  <span aria-hidden className="absolute inset-0 bg-ink/40 transition-colors duration-300 group-hover:bg-ink/60" />
                  <span className="absolute left-4 top-4 sm:left-6 sm:top-6 text-[9px] sm:text-[10px] tabular-nums tracking-label text-white/70 font-medium">{ind.index}</span>
                  <span className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                    <span className="block font-display text-[18px] sm:text-[24px] font-semibold tracking-[-0.02em] text-white md:text-[28px]">
                      {ind.name}
                    </span>
                    <span className="mt-1 sm:mt-2 block max-w-sm text-[12px] sm:text-[13.5px] leading-snug text-white/75">{ind.summary}</span>
                    <span className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-medium uppercase tracking-label text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      View
                      <ArrowRightIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                    </span>
                  </span>
                </Link>
              </motion.article>
            )}
          </div>

          {visible.length === 0 &&
          <p className="mt-10 text-[15px] text-graphite">
              No industries are mapped to this technology yet — contact us to discuss your application.
            </p>
          }
        </div>
      </section>
    </>);

}