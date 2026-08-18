import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import type { Insight } from '../../types/content';
import { formatDate } from '../../utils/cn';

export function InsightCard({ article, featured = false }: {article: Insight;featured?: boolean;}) {
  return (
    <article className="group h-full">
      <Link to={`/insights/${article.slug}`} className="flex h-full flex-col">
        <div className={featured ? 'aspect-[16/9] w-full overflow-hidden bg-paper' : 'aspect-[4/3] w-full overflow-hidden bg-paper'}>
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.05]" />
          
        </div>
        <div className="mt-5 flex items-center gap-4 text-[10px] uppercase tracking-label text-steel">
          <span className="text-accent">{article.category}</span>
          <span aria-hidden className="h-px w-5 bg-line" />
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>
        <h3
          className={
          featured ?
          'mt-4 font-display text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[32px]' :
          'mt-4 font-display text-[20px] font-semibold leading-snug tracking-[-0.015em] text-ink'
          }>
          
          {article.title}
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-graphite">{article.excerpt}</p>
        <span className="mt-auto pt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink transition-colors group-hover:text-accent">
          Read article
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1" aria-hidden />
        </span>
      </Link>
    </article>);

}