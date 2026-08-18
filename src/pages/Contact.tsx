import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ContactSection } from '../components/ContactForm/ContactSection';
import { Reveal } from '../components/ui/Primitives';
import { useSeo } from '../hooks/useSeo';
import { media } from '../data/media';

const offices = [
{ city: '[Rotterdam]', role: 'Headquarters & manufacturing', address: '[Industrieweg 24, 3000 Rotterdam, NL]', phone: '[+31 (0)10 000 0000]' },
{ city: '[Hamburg]', role: 'Engineering office', address: '[Hafenstraße 12, 20359 Hamburg, DE]', phone: '[+49 (0)40 000 0000]' },
{ city: '[Singapore]', role: 'Regional office APAC', address: '[12 Jurong Industrial Ave, Singapore]', phone: '[+65 0000 0000]' }];


export function Contact() {
  useSeo({
    title: 'Contact — Let’s talk engineering',
    description:
    'Contact HELICON Mixing Technology for technical questions, quotations, service, spare parts and pilot testing. Offices in Europe and Asia.',
    path: '/contact',
    image: media.factoryWide
  });

  return (
    <>
      <PageHero
        eyebrow="08 / Contact"
        title={'Let’s talk\nengineering.'}
        intro="Send drawings, process data or simply a description of the problem. Technical enquiries reach an engineer, not a queue."
        trail={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        meta={[
        { label: 'General', value: '[info@helicon-mixing.com]' },
        { label: 'Service desk', value: '[service@helicon-mixing.com]' }]
        } />
      

      <ContactSection sectionNumber="08" />

      <section className="w-full bg-paper py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <h2 className="border-t border-line pt-6 font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-semibold tracking-[-0.02em] text-ink">
            Offices
          </h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {offices.map((o, i) =>
            <Reveal key={o.city} delay={i * 0.05}>
                <li className="border-t border-ink pt-5">
                  <h3 className="font-display text-[22px] font-semibold text-ink">{o.city}</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-label text-accent">{o.role}</p>
                  <p className="mt-4 text-[14px] leading-relaxed text-graphite">{o.address}</p>
                  <a href="tel:+31100000000" className="mt-3 block text-[14px] text-ink transition-colors hover:text-accent">
                    {o.phone}
                  </a>
                </li>
              </Reveal>
            )}
          </ul>

          {/* Location map — schematic, replace with a live map service when keys are available */}
          <div className="mt-14 border border-line bg-white p-6 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-[11px] uppercase tracking-label text-steel">Headquarters location</p>
              <a
                href="https://www.openstreetmap.org"
                target="_blank"
                rel="noreferrer noopener"
                className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:text-accent">
                
                Open in maps
              </a>
            </div>
            <div className="relative mt-6 h-[280px] w-full overflow-hidden bg-paper eng-grid md:h-[360px]">
              <svg viewBox="0 0 800 360" className="h-full w-full" role="img" aria-label="Schematic map of the headquarters location">
                <path d="M0 250 H800" stroke="#E1E4E9" strokeWidth="14" fill="none" />
                <path d="M180 0 V360" stroke="#E1E4E9" strokeWidth="10" fill="none" />
                <path d="M560 0 V360" stroke="#E1E4E9" strokeWidth="6" fill="none" />
                <path d="M0 120 H800" stroke="#E1E4E9" strokeWidth="4" fill="none" />
                <rect x="300" y="150" width="180" height="80" fill="#111418" opacity="0.08" />
                <circle cx="390" cy="190" r="6" fill="#0B3FD6" />
                <circle cx="390" cy="190" r="16" fill="none" stroke="#0B3FD6" strokeWidth="1" opacity="0.5" />
                <text x="414" y="186" fontSize="13" fill="#111418" fontFamily="Inter, sans-serif">
                  HELICON HQ
                </text>
                <text x="414" y="204" fontSize="11" fill="#8A929D" fontFamily="Inter, sans-serif">
                  [Industrieweg 24, Rotterdam]
                </text>
              </svg>
            </div>
            <dl className="mt-6 grid gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-[10px] uppercase tracking-label text-steel">Working hours</dt>
                <dd className="mt-1.5 text-[14px] text-ink">Mon – Fri, [08:00 – 17:30 CET]</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-label text-steel">Emergency support</dt>
                <dd className="mt-1.5 text-[14px] text-ink">[24/7] for service contracts</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-label text-steel">Deliveries</dt>
                <dd className="mt-1.5 text-[14px] text-ink">Gate [2], Mon – Fri [07:00 – 16:00]</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>);

}