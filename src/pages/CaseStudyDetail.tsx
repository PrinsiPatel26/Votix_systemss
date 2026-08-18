import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { getCaseStudy, caseStudies } from '../data/caseStudies';
import { products } from '../data/products';
import { PageHero } from '../components/ui/PageHero';
import { ActionLink, Reveal } from '../components/ui/Primitives';
import { NotFound } from './NotFound';
import { useSeo } from '../hooks/useSeo';

export function CaseStudyDetail() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  useSeo({
    title: study ? study.title : 'Case study not found',
    description: study?.challenge ?? 'Case study not found',
    path: `/case-studies/${slug}`,
    image: study?.image,
    type: 'article'
  });

  if (!study) return <NotFound />;

  const used = study.products.map((p) => products.find((x) => x.slug === p)!).filter(Boolean);
  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 2);

  const sections = [
  { index: '01', title: 'Challenge', text: study.challenge },
  { index: '02', title: 'Solution', text: study.solution },
  { index: '03', title: 'Result', text: study.result }];


  return (
    <>
      <PageHero
        tone="image"
        eyebrow={`${study.industry} · ${study.location} · ${study.year}`}
        title={study.title}
        image={study.image}
        imageAlt={study.title}
        trail={[{ label: 'Home', to: '/' }, { label: 'Case studies', to: '/case-studies' }, { label: study.industry }]} />
      

      <section className="w-full bg-white py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <dl className="grid gap-8 border-b border-line pb-10 sm:grid-cols-3">
            {study.metrics.map((m) =>
            <Reveal key={m.label}>
                <dt className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold leading-none tabular-nums tracking-[-0.03em] text-ink">
                  {m.value}
                </dt>
                <dd className="mt-3 text-[11px] uppercase tracking-label text-steel">{m.label}</dd>
              </Reveal>
            )}
          </dl>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-20">
            <div>
              {sections.map((s) =>
              <Reveal key={s.index} className="border-t border-line py-8 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-4">
                    <span className="text-[11px] tabular-nums text-accent">{s.index}</span>
                    <h2 className="font-display text-[24px] font-semibold tracking-[-0.02em] text-ink md:text-[30px]">
                      {s.title}
                    </h2>
                  </div>
                  <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-graphite">{s.text}</p>
                </Reveal>
              )}
            </div>

            <aside>
              <h2 className="text-[11px] font-medium uppercase tracking-label text-steel">Technical information</h2>
              <dl className="mt-5">
                {study.technical.map((t) =>
                <div key={t.label} className="border-t border-line py-4">
                    <dt className="text-[10px] uppercase tracking-label text-steel">{t.label}</dt>
                    <dd className="mt-1.5 text-[14.5px] text-ink">{t.value}</dd>
                  </div>
                )}
              </dl>

              <h2 className="mt-10 text-[11px] font-medium uppercase tracking-label text-steel">Technology applied</h2>
              <ul className="mt-5">
                {used.map((p) =>
                <li key={p.slug}>
                    <Link
                    to={`/products/${p.slug}`}
                    className="group flex items-center justify-between gap-4 border-t border-line py-4">
                    
                      <span className="text-[15px] text-ink">{p.name}</span>
                      <ArrowRightIcon
                      className="h-4 w-4 text-steel transition-all duration-200 ease-expo group-hover:translate-x-1 group-hover:text-accent"
                      aria-hidden />
                    
                    </Link>
                  </li>
                )}
              </ul>

              <div className="mt-10">
                <ActionLink to="/quote">Discuss a similar project</ActionLink>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="w-full bg-paper py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="flex items-end justify-between gap-6 border-t border-line pt-6">
            <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-semibold tracking-[-0.02em] text-ink">
              More case studies
            </h2>
            <Link
              to="/case-studies"
              className="group inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:text-accent">
              
              All case studies
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2">
            {others.map((cs) =>
            <li key={cs.slug}>
                <Link to={`/case-studies/${cs.slug}`} className="group block">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-white">
                    <img
                    src={cs.image}
                    alt={cs.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.05]" />
                  
                  </div>
                  <p className="mt-4 text-[10px] uppercase tracking-label text-accent">{cs.industry}</p>
                  <h3 className="mt-3 font-display text-[21px] font-semibold leading-snug tracking-[-0.02em] text-ink">
                    {cs.title}
                  </h3>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>
    </>);

}