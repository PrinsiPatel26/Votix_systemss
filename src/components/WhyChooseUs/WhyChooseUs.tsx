import React from 'react';
import { Reveal, WordReveal } from '../ui/Primitives';

const reasons = [
{ index: '01', title: 'Precision', text: 'Designed around exact process requirements.', detail: 'Geometry, speed and torque derived from your duty — never scaled from a nearest catalogue size.' },
{ index: '02', title: 'Reliability', text: 'Built for demanding industrial environments.', detail: 'Drive trains dimensioned with service factors for continuous operation, not peak-rated nameplates.' },
{ index: '03', title: 'Efficiency', text: 'Optimised for process and energy performance.', detail: 'Absorbed power measured against the mixing result, so you pay for flow rather than friction.' },
{ index: '04', title: 'Customisation', text: 'Engineered for your application.', detail: 'Materials, seals, mounting and controls specified per installation, including retrofits.' },
{ index: '05', title: 'Expertise', text: 'Deep process and engineering knowledge.', detail: 'Process engineers, mechanical designers and manufacturing under one roof and one responsibility.' },
{ index: '06', title: 'Support', text: 'From commissioning to after-sales.', detail: 'Spare parts, service and technical support for the documented lifetime of the equipment.' }];


export function WhyChooseUs() {
  return (
    <section aria-label="Why choose HELICON" className="w-full bg-white py-[60px] md:py-[88px] lg:py-[130px]">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex items-center gap-4 border-t border-line pt-4">
          <span className="text-[11px] font-medium uppercase tracking-label text-steel">Why HELICON</span>
        </div>

        <WordReveal
          as="h2"
          text={'Six reasons engineers\nkeep coming back'}
          className="mt-12 max-w-2xl font-display text-section font-semibold text-ink lg:mt-16" />
        

        <ul className="mt-12 lg:mt-16">
          {reasons.map((r, i) =>
          <li key={r.index}>
              <Reveal delay={Math.min(i * 0.04, 0.16)}>
                <div className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:items-baseline md:gap-8 lg:py-10">
                  <span className="font-display text-[13px] font-medium tabular-nums text-accent md:col-span-1">
                    {r.index}
                  </span>
                  <h3 className="font-display text-[28px] font-semibold uppercase tracking-[-0.015em] text-ink md:col-span-4 md:text-[34px]">
                    {r.title}
                  </h3>
                  <p className="text-[16px] leading-snug text-ink md:col-span-3 md:text-[17px]">{r.text}</p>
                  <p className="text-[14px] leading-relaxed text-steel md:col-span-4">{r.detail}</p>
                </div>
              </Reveal>
            </li>
          )}
        </ul>
      </div>
    </section>);

}