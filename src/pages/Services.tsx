import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { serviceLines } from '../data/services';
import { ActionLink, Reveal, WordReveal } from '../components/ui/Primitives';
import { FAQ } from '../components/FAQ/FAQ';
import { useSeo } from '../hooks/useSeo';
import { media } from '../data/media';

const commitments = [
{ label: 'Response time', value: 'Within [4] hours for critical installations' },
{ label: 'Spare parts', value: 'Held for the documented equipment lifetime' },
{ label: 'Coverage', value: '[24/7] technical support' },
{ label: 'Retrofit', value: 'Any manufacturer, drop-in replacements' }];


export function Services() {
  useSeo({
    title: 'Services — Installation, maintenance and support',
    description:
    'Installation and commissioning, preventive maintenance, seal and drive service, spare parts, retrofits and 24/7 technical support for industrial mixing equipment.',
    path: '/services',
    image: media.assemblyHall
  });

  return (
    <>
      <PageHero
        eyebrow="04 / Services"
        title={'Supported for\nthe long run'}
        intro="Equipment lifetime is a service question as much as a design question. Our service organisation exists to keep installed agitators performing to their original calculation."
        image={media.assemblyHall}
        imageAlt="Technicians assembling large stainless steel agitators in an assembly hall"
        trail={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />
      

      <section className="w-full bg-white py-[50px] md:py-[70px] lg:py-[110px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <ul>
            {serviceLines.map((s, i) =>
            <li key={s.index}>
                <Reveal delay={Math.min(i * 0.04, 0.18)}>
                  <div className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:items-baseline md:gap-8 lg:py-10">
                    <span className="font-display text-[13px] font-medium tabular-nums text-accent md:col-span-1">
                      {s.index}
                    </span>
                    <h2 className="font-display text-[24px] font-semibold tracking-[-0.02em] text-ink md:col-span-5 md:text-[30px]">
                      {s.name}
                    </h2>
                    <p className="text-[15px] leading-relaxed text-graphite md:col-span-6">{s.text}</p>
                  </div>
                </Reveal>
              </li>
            )}
          </ul>

          <div className="mt-16 grid gap-10 border-t border-line pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <WordReveal
              as="h2"
              text="Service commitments"
              className="font-display text-[clamp(1.7rem,2.8vw,2.6rem)] font-semibold tracking-[-0.025em] text-ink" />
            
            <Reveal>
              <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {commitments.map((c) =>
                <div key={c.label} className="border-t border-line pt-3">
                    <dt className="text-[10px] uppercase tracking-label text-steel">{c.label}</dt>
                    <dd className="mt-1.5 text-[14px] leading-snug text-ink">{c.value}</dd>
                  </div>
                )}
              </dl>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ActionLink to="/contact">Request service</ActionLink>
                <ActionLink to="/quote" variant="outline" arrow={false}>
                  Spare parts enquiry
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FAQ />
    </>);

}