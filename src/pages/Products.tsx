import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { products, productFamilies } from '../data/products';
import { PageHero } from '../components/ui/PageHero';
import { Configurator } from '../components/Configurator/Configurator';
import { Reveal } from '../components/ui/Primitives';
import { useSeo } from '../hooks/useSeo';
import { cn } from '../utils/cn';
import { media } from '../data/media';

export function Products() {
  const [family, setFamily] = useState<(typeof productFamilies)[number]>('All');
  const visible = family === 'All' ? products : products.filter((p) => p.family === family);

  useSeo({
    title: 'Products — Agitators, mixers and mixing systems',
    description:
    'Top, side and bottom entry agitators, magnetic and inline mixers, high-shear systems, special agitators and complete custom mixing systems.',
    path: '/products',
    image: media.productTopEntry
  });

  return (
    <>
      <PageHero
        eyebrow="01 / Product technology"
        title={'Mixing technology\nfor every process'}
        intro="Eight technology families, each dimensioned from your process duty. Filter by type, or use the solution finder below to narrow the field from your application data."
        trail={[{ label: 'Home', to: '/' }, { label: 'Products' }]}
        meta={[
        { label: 'Technology families', value: '08' },
        { label: 'Power range', value: '0.1 – 315 kW' }]
        } />
      

      <section className="w-full bg-white py-[60px] md:py-[80px] lg:py-[110px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="flex flex-wrap items-center gap-2 border-t border-line pt-6">
            <span className="mr-4 text-[11px] uppercase tracking-label text-steel">Filter</span>
            {productFamilies.map((f) =>
            <button
              key={f}
              type="button"
              onClick={() => setFamily(f)}
              aria-pressed={family === f}
              className={cn(
                'border px-4 py-2.5 text-[11px] font-medium uppercase tracking-label transition-colors duration-200',
                family === f ? 'border-accent text-accent' : 'border-line text-graphite hover:border-ink hover:text-ink'
              )}>
              
                {f}
              </button>
            )}
            <span className="ml-auto text-[11px] tabular-nums uppercase tracking-label text-steel">
              {String(visible.length).padStart(2, '0')} products
            </span>
          </div>

          <ul className="mt-12">
            {visible.map((p, i) =>
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.26, delay: Math.min(i * 0.04, 0.2), ease: [0.23, 1, 0.32, 1] }}>
              
                <Link
                to={`/products/${p.slug}`}
                className="group grid gap-6 border-t border-line py-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-10">
                
                  <span className="hidden font-display text-[13px] font-medium tabular-nums text-steel lg:col-span-1 lg:block">
                    {p.index}
                  </span>
                  <div className="lg:col-span-3">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-paper">
                      <img
                      src={p.image}
                      alt={`${p.name} — industrial catalogue photograph`}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 ease-expo group-hover:scale-[1.05]" />
                    
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <h2 className="font-display text-[24px] font-semibold tracking-[-0.02em] text-ink md:text-[30px]">
                      {p.name}
                    </h2>
                    <p className="mt-2 text-[13px] uppercase tracking-label text-accent">{p.family}</p>
                    <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-graphite">{p.summary}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <dl className="space-y-2">
                      {p.specs.slice(0, 3).map((s) =>
                    <div key={s.label} className="flex justify-between gap-4 border-b border-line pb-2">
                          <dt className="text-[11px] uppercase tracking-label text-steel">{s.label}</dt>
                          <dd className="text-[12.5px] text-ink">{s.value}</dd>
                        </div>
                    )}
                    </dl>
                    <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-label text-ink transition-colors group-hover:text-accent">
                      View product
                      <ArrowRightIcon
                      className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1"
                      aria-hidden />
                    
                    </span>
                  </div>
                </Link>
              </motion.li>
            )}
          </ul>

          <Reveal className="mt-14 border-t border-line pt-10">
            <p className="max-w-xl text-[15px] leading-relaxed text-graphite">
              Not sure which family fits? The solution finder narrows the field from your industry, application, vessel,
              capacity and viscosity.
            </p>
          </Reveal>
        </div>
      </section>

      <Configurator />
    </>);

}