import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { EngineeringSection } from '../components/EngineeringSection/EngineeringSection';
import { EngineeringProcess } from '../components/EngineeringProcess/EngineeringProcess';
import { ProductExplorer } from '../components/ProductExplorer/ProductExplorer';
import { ActionLink, Reveal, WordReveal } from '../components/ui/Primitives';
import { useSeo } from '../hooks/useSeo';
import { media } from '../data/media';

const capabilities = [
{ label: 'Rheology measurement', value: 'Flow curves, yield stress, thixotropy' },
{ label: 'Simulation', value: 'CFD single and multiphase, FEA' },
{ label: 'Pilot testing', value: 'Blend time, droplet size, kLa, power number' },
{ label: 'Mechanical design', value: 'Shaft dynamics, critical speed, nozzle loads' },
{ label: 'Codes', value: 'PED, ASME VIII, ATEX, GMP, EHEDG' },
{ label: 'Documentation', value: 'Calculations, IQ/OQ, FAT & SAT protocols' }];


export function Engineering() {
  useSeo({
    title: 'Engineering — From process to performance',
    description:
    'Process optimisation, CFD analysis, custom engineering, pilot testing, process development and equipment design for industrial mixing.',
    path: '/engineering',
    image: media.cfdEngineering
  });

  return (
    <>
      <PageHero
        eyebrow="03 / Engineering"
        title={'From process\nto performance'}
        intro="Engineering is the product. Measurement, simulation and physical testing decide what gets manufactured — and what performance we are prepared to guarantee."
        image={media.cfdEngineering}
        imageAlt="Engineer reviewing a CFD flow simulation of a mixing vessel"
        trail={[{ label: 'Home', to: '/' }, { label: 'Engineering' }]} />
      

      <section className="w-full bg-white py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="mx-auto grid max-w-content gap-12 px-6 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <WordReveal
            as="h2"
            text={'Verified before\nit is manufactured'}
            className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-[-0.025em] text-ink" />
          
          <Reveal>
            <p className="text-[16px] leading-relaxed text-graphite">
              A mixing result cannot be assumed from installed power. Our workflow measures the media, simulates the flow
              field, and confirms performance in a pilot vessel — so the guarantee we sign is based on evidence, not on a
              correlation borrowed from literature.
            </p>
            <dl className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {capabilities.map((c) =>
              <div key={c.label} className="border-t border-line pt-3">
                  <dt className="text-[10px] uppercase tracking-label text-steel">{c.label}</dt>
                  <dd className="mt-1.5 text-[14px] leading-snug text-ink">{c.value}</dd>
                </div>
              )}
            </dl>
          </Reveal>
        </div>
      </section>

      <EngineeringSection />
      <ProductExplorer />
      <EngineeringProcess />

      <section className="w-full bg-white py-[60px] md:py-[80px] lg:py-[110px]">
        <div className="mx-auto flex max-w-content flex-col gap-8 px-6 md:px-10 lg:flex-row lg:items-end lg:justify-between">
          <WordReveal
            as="h2"
            text={'Bring us a process problem,\nnot a part number.'}
            className="max-w-2xl font-display text-[clamp(1.8rem,3.2vw,3rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-ink" />
          
          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink to="/quote">Request a quote</ActionLink>
            <ActionLink to="/contact" variant="outline" arrow={false}>
              Talk to an engineer
            </ActionLink>
          </div>
        </div>
      </section>
    </>);

}