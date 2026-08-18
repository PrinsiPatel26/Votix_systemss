import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { getIndustry } from '../data/industries';
import { products } from '../data/products';
import { caseStudies } from '../data/caseStudies';
import { PageHero } from '../components/ui/PageHero';
import { Reveal, ActionLink, WordReveal } from '../components/ui/Primitives';
import { NotFound } from './NotFound';
import { useSeo } from '../hooks/useSeo';

export function IndustryDetail() {
  const { slug } = useParams();
  const industry = getIndustry(slug);

  useSeo({
    title: industry ? `${industry.name} mixing technology` : 'Industry not found',
    description: industry?.summary ?? 'Industry not found',
    path: `/industries/${slug}`,
    image: industry?.image
  });

  if (!industry) return <NotFound />;

  const technologies = industry.technologies.map((t) => products.find((p) => p.slug === t)!).filter(Boolean);
  const study = caseStudies.find((c) => c.slug === industry.caseStudy);

  return (
    <>
      <PageHero
        tone="image"
        eyebrow={`${industry.index} / Industry`}
        title={industry.name}
        intro={industry.summary}
        image={industry.image}
        imageAlt={`${industry.name} processing facility`}
        trail={[{ label: 'Home', to: '/' }, { label: 'Industries', to: '/industries' }, { label: industry.name }]} />
      

      {/* Challenges + requirements */}
      <section className="w-full bg-white py-[50px] md:py-[70px] lg:py-[110px]">
        <div className="mx-auto grid max-w-content gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <WordReveal
              as="h2"
              text="Industry challenges"
              className="font-display text-[clamp(1.7rem,2.8vw,2.6rem)] font-semibold tracking-[-0.025em] text-ink" />
            
            <ul className="mt-8">
              {industry.challenges.map((c, i) =>
              <Reveal key={c} delay={i * 0.04}>
                  <li className="flex gap-5 border-t border-line py-5">
                    <span className="text-[11px] tabular-nums text-accent">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[15px] leading-relaxed text-graphite">{c}</span>
                  </li>
                </Reveal>
              )}
            </ul>
          </div>
          <div>
            <WordReveal
              as="h2"
              text="Mixing requirements"
              className="font-display text-[clamp(1.7rem,2.8vw,2.6rem)] font-semibold tracking-[-0.025em] text-ink" />
            
            <ul className="mt-8">
              {industry.requirements.map((r, i) =>
              <Reveal key={r} delay={i * 0.04}>
                  <li className="flex gap-5 border-t border-line py-5">
                    <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                    <span className="text-[15px] leading-relaxed text-ink">{r}</span>
                  </li>
                </Reveal>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Recommended technologies */}
      <section className="w-full bg-paper py-[50px] md:py-[70px] lg:py-[110px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <WordReveal
            as="h2"
            text="Recommended technologies"
            className="font-display text-[clamp(1.7rem,2.8vw,2.6rem)] font-semibold tracking-[-0.025em] text-ink" />
          
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {technologies.map((p) =>
            <li key={p.slug} className="border border-line bg-white">
                <Link to={`/products/${p.slug}`} className="group block">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-white">
                    <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 ease-expo group-hover:scale-[1.04]" />
                  
                  </div>
                  <div className="border-t border-line p-5">
                    <h3 className="font-display text-[19px] font-semibold text-ink">{p.name}</h3>
                    <p className="mt-2 text-[13.5px] leading-snug text-graphite">{p.tagline}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-label text-ink transition-colors group-hover:text-accent">
                      View product
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              </li>
            )}
          </ul>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3 className="text-[11px] font-medium uppercase tracking-label text-steel">Applications</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {industry.applications.map((a) =>
                <li key={a} className="border border-line bg-white px-4 py-2.5 text-[13px] text-graphite">
                    {a}
                  </li>
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-medium uppercase tracking-label text-steel">Engineering capabilities</h3>
              <ul className="mt-5">
                {industry.capabilities.map((c) =>
                <li key={c.title} className="border-t border-line py-4">
                    <p className="font-display text-[17px] font-medium text-ink">{c.title}</p>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-graphite">{c.text}</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case study */}
      {study &&
      <section className="w-full bg-white py-[50px] md:py-[70px] lg:py-[110px]">
          <div className="mx-auto max-w-content px-6 md:px-10">
            <div className="border-t border-line pt-6">
              <span className="text-[11px] uppercase tracking-label text-steel">Case study</span>
            </div>
            <Link to={`/case-studies/${study.slug}`} className="group mt-8 grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="aspect-[16/10] w-full overflow-hidden bg-paper">
                <img
                src={study.image}
                alt={study.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.05]" />
              
              </div>
              <div className="lg:pt-4">
                <p className="text-[10px] uppercase tracking-label text-accent">
                  {study.industry} · {study.location} · {study.year}
                </p>
                <h2 className="mt-4 font-display text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[34px]">
                  {study.title}
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-graphite">{study.result}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink transition-colors group-hover:text-accent">
                  Read case study
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          </div>
        </section>
      }

      {/* CTA */}
      <section className="w-full bg-ink py-[60px] text-white md:py-[80px] lg:py-[110px]">
        <div className="mx-auto flex max-w-content flex-col gap-8 px-6 md:px-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-label text-white/50">Next step</p>
            <h2 className="mt-5 max-w-xl font-display text-[clamp(1.9rem,3.4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.025em]">
              Let’s review your {industry.name.toLowerCase()} process together.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink to="/quote" className="bg-white text-ink hover:bg-accent hover:text-white">
              Request a quote
            </ActionLink>
            <ActionLink to="/contact" variant="ghost" arrow={false} className="border border-white/25 text-white hover:text-white/70">
              Talk to an engineer
            </ActionLink>
          </div>
        </div>
      </section>
    </>);

}