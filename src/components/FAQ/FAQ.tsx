import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { faqs } from '../../data/faqs';
import { WordReveal, Reveal, TextLink } from '../ui/Primitives';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-paper py-[50px] sm:py-[60px] md:py-[88px] lg:py-[130px]">
      <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10">
        <div className="flex items-center gap-4 border-t border-line pt-4">
          <span className="text-[11px] font-medium uppercase tracking-label text-steel">15 / Frequently asked</span>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <WordReveal
              as="h2"
              text={'Questions we\nare asked most'}
              className="font-display text-section font-bold text-ink" />
            
            <Reveal>
              <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-graphite">
                Still unresolved? A process engineer answers technical questions directly — no sales gatekeeping.
              </p>
              <TextLink to="/contact" className="mt-6">
                Talk to an engineer
              </TextLink>
            </Reveal>
          </div>

          <ul>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li key={faq.question} className="border-b border-line first:border-t">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full min-h-[56px] items-start justify-between gap-6 py-6 text-left transition-colors hover:text-accent sm:min-h-auto">
                      
                      <span className="font-display text-[17px] font-medium leading-snug text-ink md:text-[19px]">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className="mt-0.5 shrink-0 text-steel transition-colors group-hover:text-accent">
                        
                        <PlusIcon className="h-5 w-5" aria-hidden />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen &&
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden">
                      
                        <p className="max-w-2xl pb-7 pr-10 text-[14.5px] leading-relaxed text-graphite">{faq.answer}</p>
                      </motion.div>
                    }
                  </AnimatePresence>
                </li>);

            })}
          </ul>
        </div>
      </div>
    </section>);

}