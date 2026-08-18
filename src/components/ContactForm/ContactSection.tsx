import React from 'react';
import { ContactForm } from './ContactForm';
import { WordReveal, Reveal } from '../ui/Primitives';

const details = [
{ label: 'Office', value: '[Industrieweg 24, 3000 Rotterdam, Netherlands]' },
{ label: 'Phone', value: '[+31 (0)10 000 0000]' },
{ label: 'Email', value: '[info@helicon-mixing.com]' },
{ label: 'Working hours', value: 'Mon – Fri, [08:00 – 17:30 CET]' }];


export function ContactSection({ sectionNumber = '17' }: {sectionNumber?: string;}) {
  return (
    <section id="contact" className="w-full bg-white py-[50px] sm:py-[60px] md:py-[88px] lg:py-[130px]">
      <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10">
        <div className="flex items-center gap-4 border-t border-line pt-4">
          <span className="text-[11px] font-medium uppercase tracking-label text-steel">{sectionNumber} / Contact</span>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <WordReveal
              as="h2"
              text={'Let’s talk\nengineering.'}
              className="font-display text-section font-bold text-ink" />
            
            <Reveal>
              <p className="mt-7 max-w-md text-[16px] leading-relaxed text-graphite">
                Send drawings, process data or simply a description of the problem. Our engineers prefer specifics over
                sales conversations.
              </p>
              <dl className="mt-10 grid gap-6 sm:grid-cols-2">
                {details.map((d) =>
                <div key={d.label} className="border-t border-line pt-4">
                    <dt className="text-[11px] uppercase tracking-label text-steel">{d.label}</dt>
                    <dd className="mt-2 text-[14.5px] leading-relaxed text-ink">{d.value}</dd>
                  </div>
                )}
              </dl>
            </Reveal>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>);

}