import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Stats } from '../components/Stats/Stats';
import { GlobalMap } from '../components/GlobalMap/GlobalMap';
import { Manufacturing } from '../components/Manufacturing/Manufacturing';
import { WhyChooseUs } from '../components/WhyChooseUs/WhyChooseUs';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { ActionLink, Reveal, WordReveal } from '../components/ui/Primitives';
import { useSeo } from '../hooks/useSeo';
import { media } from '../data/media';

const certifications = [
{ label: 'Quality', value: 'ISO 9001 [certificate no.]' },
{ label: 'Environment', value: 'ISO 14001 [certificate no.]' },
{ label: 'Pressure equipment', value: 'PED 2014/68/EU, ASME VIII' },
{ label: 'Explosion protection', value: 'ATEX 2014/34/EU' },
{ label: 'Hygienic design', value: 'EHEDG guidelines, FDA CFR 21' },
{ label: 'Welding', value: 'EN ISO 3834-2 certified procedures' }];


const timeline = [
{ year: '[1985]', text: 'Founded as a mechanical workshop for process equipment repair.' },
{ year: '[1994]', text: 'First fully in-house engineered agitator range for the chemical industry.' },
{ year: '[2006]', text: 'Pilot test facility opened, making verified performance part of every delivery.' },
{ year: '[2015]', text: 'CFD department established; simulation becomes standard in design review.' },
{ year: '[2024]', text: 'Complete skid-mounted systems added to the delivery scope.' }];


export function About() {
  useSeo({
    title: 'About — European mixing engineering',
    description:
    'HELICON is a European engineering company specialising in industrial agitation: process engineering, manufacturing, testing and lifetime support under one quality system.',
    path: '/about',
    image: media.engineerInspecting
  });

  return (
    <>
      <PageHero
        eyebrow="05 / About"
        title={'Engineers who\nstay involved'}
        intro="We are a European engineering company built around one discipline: industrial agitation. The same team that calculates a shaft inspects it before it ships and answers the phone five years later."
        image={media.engineerInspecting}
        imageAlt="Process engineer inspecting the drive unit of a stainless steel agitator"
        trail={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
      

      <section className="w-full bg-white py-[50px] md:py-[70px] lg:py-[110px]">
        <div className="mx-auto grid max-w-content gap-12 px-6 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <WordReveal
              as="h2"
              text={'One discipline,\nfour decades deep'}
              className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-[-0.025em] text-ink" />
            
            <Reveal>
              <p className="mt-8 text-[16px] leading-relaxed text-graphite">
                Specialisation is a choice. Instead of covering the whole process plant, we invested four decades into
                the one component that decides batch quality — and into the process knowledge required to specify it
                correctly.
              </p>
            </Reveal>
          </div>
          <ol className="lg:pt-4">
            {timeline.map((t, i) =>
            <Reveal key={t.year} delay={i * 0.05}>
                <li className="grid grid-cols-[80px_1fr] gap-6 border-t border-line py-5">
                  <span className="font-display text-[15px] font-medium tabular-nums text-accent">{t.year}</span>
                  <span className="text-[14.5px] leading-relaxed text-graphite">{t.text}</span>
                </li>
              </Reveal>
            )}
          </ol>
        </div>
      </section>

      <Stats />
      <Manufacturing />

      <section className="w-full bg-white py-[50px] md:py-[70px] lg:py-[110px]">
        <div className="mx-auto grid max-w-content gap-12 px-6 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <WordReveal
            as="h2"
            text={'Quality &\ncertification'}
            className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-[-0.025em] text-ink" />
          
          <Reveal>
            <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {certifications.map((c) =>
              <div key={c.label} className="border-t border-line pt-3">
                  <dt className="text-[10px] uppercase tracking-label text-steel">{c.label}</dt>
                  <dd className="mt-1.5 text-[14px] leading-snug text-ink">{c.value}</dd>
                </div>
              )}
            </dl>
            <p className="mt-8 text-[12.5px] leading-relaxed text-steel">
              Bracketed values are placeholders for verified certificate numbers.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ActionLink to="/contact">Request documentation</ActionLink>
              <ActionLink to="/engineering" variant="outline" arrow={false}>
                Engineering capabilities
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />
      <GlobalMap />
      <Testimonials />
    </>);

}