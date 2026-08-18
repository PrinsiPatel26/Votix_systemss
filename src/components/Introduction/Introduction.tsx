import React from 'react';
import { Eyebrow, WordReveal, Reveal, Counter, TextLink } from '../ui/Primitives';

export function Introduction() {
  return (
    <section id="introduction" className="relative w-full bg-white py-[50px] sm:py-[60px] md:py-[88px] lg:py-[140px]">
      <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10">
        <div className="flex items-center gap-2 sm:gap-4 border-t border-line pt-3 sm:pt-4">
          <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-label text-steel">01 / Engineering with purpose</span>
        </div>

        <div className="mt-8 sm:mt-12 grid gap-8 sm:gap-12 lg:mt-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-24">
          <div>
            <Eyebrow className="lg:hidden">Engineering with purpose</Eyebrow>
            <WordReveal
              as="h2"
              text={'We don’t just build agitators.\nWe engineer the\nmixing process.'}
              className="mt-6 font-display text-section font-semibold text-ink lg:mt-0" />
            
          </div>

          <div className="lg:pt-3">
            <Reveal>
              <p className="text-[16px] leading-relaxed text-graphite md:text-[17px]">
                HELICON is a European engineering company specialising in industrial agitation. For four decades we have
                designed mixing equipment for process industries where the result — not the equipment — is what matters:
                a batch that blends in time, a suspension that never settles, an emulsion that holds on the shelf.
              </p>
              <p className="mt-6 text-[15px] leading-relaxed text-steel md:text-[16px]">
                Our engineers start with your media, your vessel and your production reality. Rheology is measured, flow
                patterns are simulated, and performance is verified in our test facility before a single component is
                manufactured. That is why our equipment behaves in your plant the way it behaved in the calculation.
              </p>
              <TextLink to="/about" className="mt-8">
                About our engineering
              </TextLink>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid items-end gap-10 border-t border-line pt-12 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-24">
          <Reveal className="flex items-end gap-6">
            <span className="font-display text-colossal font-semibold tabular-nums leading-none text-ink">
              <Counter value="40+" />
            </span>
            <span className="mb-3 max-w-[120px] text-[11px] uppercase tracking-label text-steel">
              Years of engineering
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="font-display text-[22px] font-medium leading-snug tracking-[-0.015em] text-ink md:text-[28px]">
              “From process analysis to final installation, every solution is engineered around your application.”
            </p>
            <p className="mt-5 text-[12px] uppercase tracking-label text-steel">
              [Name Surname] — Director of Engineering
            </p>
          </Reveal>
        </div>
      </div>
    </section>);

}