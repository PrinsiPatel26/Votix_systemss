import React from 'react';
import { useParams } from 'react-router-dom';
import { getInsight, insights } from '../data/insights';
import { InsightCard } from '../components/Insights/InsightCard';
import { PageHero } from '../components/ui/PageHero';
import { ActionLink, Reveal } from '../components/ui/Primitives';
import { NotFound } from './NotFound';
import { useSeo } from '../hooks/useSeo';
import { formatDate } from '../utils/cn';

export function InsightDetail() {
  const { slug } = useParams();
  const article = getInsight(slug);

  useSeo({
    title: article ? article.title : 'Article not found',
    description: article?.excerpt ?? 'Article not found',
    path: `/insights/${slug}`,
    image: article?.image,
    type: 'article',
    structuredData: article ?
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      datePublished: article.date,
      description: article.excerpt,
      author: { '@type': 'Organization', name: 'HELICON Mixing Technology' }
    } :
    undefined
  });

  if (!article) return <NotFound />;

  const related = insights.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);
  const fallback = insights.filter((a) => a.slug !== article.slug).slice(0, 3);
  const more = related.length > 0 ? related : fallback;

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        intro={article.excerpt}
        image={article.image}
        imageAlt={article.title}
        trail={[{ label: 'Home', to: '/' }, { label: 'Insights', to: '/insights' }, { label: article.category }]}
        meta={[
        { label: 'Published', value: formatDate(article.date) },
        { label: 'Reading time', value: article.readingTime }]
        } />
      

      <article className="w-full bg-white py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="mx-auto max-w-[720px]">
            {article.body.map((para, i) =>
            <Reveal key={i} delay={0.03 * i}>
                <p
                className={
                i === 0 ?
                'text-[19px] leading-relaxed text-ink md:text-[21px]' :
                'mt-7 text-[16px] leading-relaxed text-graphite md:text-[17px]'
                }>
                
                  {para}
                </p>
              </Reveal>
            )}

            <div className="mt-14 border-t border-line pt-8">
              <p className="text-[15px] leading-relaxed text-graphite">
                Have a process question this raises? Our engineers answer technical enquiries directly.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ActionLink to="/contact">Ask an engineer</ActionLink>
                <ActionLink to="/quote" variant="outline" arrow={false}>
                  Request a quote
                </ActionLink>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="w-full bg-paper py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <h2 className="border-t border-line pt-6 font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-semibold tracking-[-0.02em] text-ink">
            Related reading
          </h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-3">
            {more.map((a) =>
            <li key={a.slug}>
                <InsightCard article={a} />
              </li>
            )}
          </ul>
        </div>
      </section>
    </>);

}