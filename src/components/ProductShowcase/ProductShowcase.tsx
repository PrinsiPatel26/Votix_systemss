import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { products } from '../../data/products';
import { useDragScroll } from '../../hooks/useDragScroll';
import { WordReveal, Reveal, TextLink } from '../ui/Primitives';

const featured = products.filter((p) =>
['top-entry-agitators', 'side-entry-agitators', 'bottom-entry-agitators', 'special-agitators', 'magnetic-mixers', 'inline-mixers'].includes(
  p.slug
)
);

export function ProductShowcase() {
  const { ref, progress, scrollByPanel } = useDragScroll<HTMLDivElement>();

  return (
    <section id="technology" className="w-full bg-white py-[50px] sm:py-[60px] md:py-[88px] lg:py-[140px]">
      <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10">
        <div className="flex items-center gap-2 sm:gap-4 border-t border-line pt-3 sm:pt-4">
          <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-label text-steel">03 / Product technology</span>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-8 lg:mt-16 lg:flex-row lg:items-end">
          <WordReveal
            as="h2"
            text={'Mixing technology\nfor every process'}
            className="max-w-xl font-display text-section font-semibold text-ink" />
          
          <Reveal className="flex items-center justify-between gap-6 lg:justify-end">
            <TextLink to="/products">All products</TextLink>
            <div className="hidden gap-2 lg:flex">
              <button
                type="button"
                onClick={() => scrollByPanel(-1)}
                aria-label="Previous product"
                className="border border-line p-3.5 text-ink transition-colors duration-200 hover:border-ink min-h-[44px] min-w-[44px] flex items-center justify-center">
                
                <ArrowLeftIcon className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => scrollByPanel(1)}
                aria-label="Next product"
                className="border border-line p-3.5 text-ink transition-colors duration-200 hover:border-ink min-h-[44px] min-w-[44px] flex items-center justify-center">
                
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Rail */}
      <div
        ref={ref}
        className="no-scrollbar drag-region mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 md:px-10 lg:mt-16 lg:gap-8">
        
        <div aria-hidden className="hidden shrink-0 lg:block lg:w-[max(0px,calc((100vw-1320px)/2))]" />
        {featured.map((p) =>
        <article
          key={p.slug}
          data-panel
          className="group w-[82vw] shrink-0 snap-start sm:w-[58vw] lg:w-[440px] xl:w-[480px]">
          
            <Link to={`/products/${p.slug}`} className="block">
              <div className="relative overflow-hidden border border-line bg-paper">
                <div className="aspect-[4/3] w-full overflow-hidden bg-white">
                  <img
                  src={p.image}
                  alt={`${p.name} — industrial catalogue photograph`}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 ease-expo group-hover:scale-[1.04]" />
                
                </div>
                <span className="absolute left-5 top-5 font-display text-[13px] font-medium tabular-nums text-steel">
                  {p.index}
                </span>
                <span className="pointer-events-none absolute bottom-5 left-5 translate-y-2 border border-line bg-white/95 px-3 py-2 text-[10px] uppercase tracking-label text-graphite opacity-0 transition-all duration-300 ease-expo group-hover:translate-y-0 group-hover:opacity-100">
                  {p.family} · {p.specs[0].value}
                </span>
              </div>

              <div className="mt-6 flex items-baseline justify-between gap-4 border-t border-line pt-5">
                <h3 className="font-display text-[24px] font-semibold tracking-[-0.02em] text-ink md:text-[28px]">
                  {p.shortName}
                </h3>
                <span className="text-[10px] uppercase tracking-label text-steel">{p.family}</span>
              </div>
              <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-graphite">{p.summary}</p>
              <span className="group/link mt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink transition-colors group-hover:text-accent">
                Explore {p.shortName}
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          </article>
        )}
        <div aria-hidden className="shrink-0 w-2 lg:w-16" />
      </div>

      {/* Rail progress */}
      <div className="mx-auto mt-8 max-w-content px-6 md:px-10">
        <div className="h-px w-full bg-line" aria-hidden>
          <div
            className="h-px bg-accent transition-[width] duration-150 ease-linear"
            style={{ width: `${Math.max(12, progress * 100)}%` }} />
          
        </div>
        <p className="mt-3 text-[10px] uppercase tracking-label text-steel lg:hidden">Swipe to explore</p>
        <p className="mt-3 hidden text-[10px] uppercase tracking-label text-steel lg:block">Drag or use arrows to explore</p>
      </div>
    </section>);

}