import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, RotateCcwIcon } from 'lucide-react';
import { configSteps } from '../../data/configurator';
import { products } from '../../data/products';
import { WordReveal, Reveal, ActionButton } from '../ui/Primitives';
import { cn } from '../../utils/cn';

type Selections = Partial<Record<(typeof configSteps)[number]['key'], string>>;

const ease = [0.23, 1, 0.32, 1] as const;

export function Configurator() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<Selections>({});
  const [done, setDone] = useState(false);

  const current = configSteps[step];
  const isLast = step === configSteps.length - 1;

  const recommendations = useMemo(() => {
    const { industry, application, vessel, capacity, viscosity } = selections;
    return products.
    map((p) => {
      let score = 0;
      if (application && p.match.applications.includes(application)) score += 3;
      if (viscosity && p.match.viscosity.includes(viscosity)) score += 2;
      if (vessel && p.match.vessels.includes(vessel)) score += 2;
      if (capacity && p.match.capacity.includes(capacity)) score += 2;
      if (industry && p.match.industries.includes(industry)) score += 1;
      return { product: p, score };
    }).
    filter((r) => r.score >= 6).
    sort((a, b) => b.score - a.score).
    slice(0, 3);
  }, [selections]);

  const select = (key: keyof Selections, id: string) => {
    setSelections((s) => ({ ...s, [key]: id }));
    if (isLast) {
      setDone(true);
    } else {
      window.setTimeout(() => setStep((v) => Math.min(v + 1, configSteps.length - 1)), 180);
    }
  };

  const reset = () => {
    setSelections({});
    setStep(0);
    setDone(false);
  };

  return (
    <section id="configurator" className="w-full bg-white py-[60px] md:py-[88px] lg:py-[130px]">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex items-center gap-4 border-t border-line pt-4">
          <span className="text-[11px] font-medium uppercase tracking-label text-steel">Solution finder</span>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-8 lg:mt-16 lg:flex-row lg:items-end">
          <WordReveal
            as="h2"
            text={'Find your\nmixing solution'}
            className="font-display text-section font-semibold text-ink" />
          
          <Reveal className="max-w-sm">
            <p className="text-[15px] leading-relaxed text-graphite">
              Five questions give a first technology direction. An engineer confirms it with calculations — the
              configurator narrows the field, it does not replace the review.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 border border-line lg:mt-16">
          {/* Stepper */}
          <ol className="no-scrollbar flex overflow-x-auto border-b border-line">
            {configSteps.map((s, i) => {
              const complete = Boolean(selections[s.key]);
              const activeStep = i === step && !done;
              return (
                <li key={s.key} className="flex-1">
                  <button
                    type="button"
                    onClick={() => {
                      setDone(false);
                      setStep(i);
                    }}
                    aria-current={activeStep ? 'step' : undefined}
                    className={cn(
                      'flex w-full min-w-[150px] items-center gap-3 border-r border-line px-5 py-4 text-left transition-colors duration-200',
                      activeStep ? 'bg-paper' : 'bg-white hover:bg-paper/60'
                    )}>
                    
                    <span
                      className={cn(
                        'flex h-6 w-6 shrink-0 items-center justify-center border text-[10px] tabular-nums',
                        complete ? 'border-accent bg-accent text-white' : activeStep ? 'border-ink text-ink' : 'border-line text-steel'
                      )}>
                      
                      {complete ? <CheckIcon className="h-3 w-3" aria-hidden /> : s.index}
                    </span>
                    <span className="min-w-0">
                      <span className={cn('block text-[12px] font-medium uppercase tracking-label', activeStep ? 'text-ink' : 'text-steel')}>
                        {s.title}
                      </span>
                      <span className="mt-0.5 block truncate text-[11px] text-steel">
                        {selections[s.key] ?
                        s.options.find((o) => o.id === selections[s.key])?.label :
                        'Not selected'}
                      </span>
                    </span>
                  </button>
                </li>);

            })}
          </ol>

          <div className="p-6 md:p-10">
            <AnimatePresence mode="wait">
              {!done ?
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease }}>
                
                  <p className="text-[10px] uppercase tracking-label text-accent">Step {current.index}</p>
                  <h3 className="mt-3 font-display text-[24px] font-semibold tracking-[-0.02em] text-ink md:text-[30px]">
                    {current.question}
                  </h3>

                  <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {current.options.map((o) => {
                    const selected = selections[current.key] === o.id;
                    return (
                      <li key={o.id}>
                          <button
                          type="button"
                          onClick={() => select(current.key, o.id)}
                          aria-pressed={selected}
                          className={cn(
                            'h-full w-full border px-5 py-5 text-left transition-colors duration-200',
                            selected ? 'border-accent bg-accent/[0.04]' : 'border-line hover:border-ink'
                          )}>
                          
                            <span className={cn('block text-[15px] font-medium', selected ? 'text-accent' : 'text-ink')}>
                              {o.label}
                            </span>
                            {o.hint && <span className="mt-1 block text-[12.5px] leading-snug text-steel">{o.hint}</span>}
                          </button>
                        </li>);

                  })}
                  </ul>

                  <div className="mt-9 flex items-center justify-between gap-4 border-t border-line pt-6">
                    <button
                    type="button"
                    onClick={() => setStep((v) => Math.max(0, v - 1))}
                    disabled={step === 0}
                    className={cn(
                      'inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors',
                      step === 0 ? 'cursor-not-allowed text-steel/50' : 'text-ink hover:text-accent'
                    )}>
                    
                      <ArrowLeftIcon className="h-4 w-4" aria-hidden />
                      Back
                    </button>
                    <span className="text-[11px] tabular-nums uppercase tracking-label text-steel">
                      {current.index} / 05
                    </span>
                    {isLast ?
                  <ActionButton onClick={() => setDone(true)} disabled={!selections[current.key]} arrow>
                        See solutions
                      </ActionButton> :

                  <button
                    type="button"
                    onClick={() => setStep((v) => Math.min(configSteps.length - 1, v + 1))}
                    disabled={!selections[current.key]}
                    className={cn(
                      'inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors',
                      selections[current.key] ? 'text-ink hover:text-accent' : 'cursor-not-allowed text-steel/50'
                    )}>
                    
                        Next
                        <ArrowRightIcon className="h-4 w-4" aria-hidden />
                      </button>
                  }
                  </div>
                </motion.div> :

              <motion.div
                key="results"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24, ease }}>
                
                  <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-label text-accent">Recommended solutions</p>
                      <h3 className="mt-3 font-display text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[32px]">
                        {recommendations.length > 0 ?
                      `${recommendations.length} technologies match your process` :
                      'Your process needs a custom review'}
                      </h3>
                    </div>
                    <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:text-accent">
                    
                      <RotateCcwIcon className="h-4 w-4" aria-hidden />
                      Start again
                    </button>
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {configSteps.map((s) =>
                  <li
                    key={s.key}
                    className="border border-line px-3 py-1.5 text-[11px] uppercase tracking-label text-steel">
                    
                        {s.title}: {s.options.find((o) => o.id === selections[s.key])?.label ?? '—'}
                      </li>
                  )}
                  </ul>

                  {recommendations.length > 0 ?
                <ul className="mt-9 grid gap-6 md:grid-cols-3">
                      {recommendations.map(({ product, score }, i) =>
                  <motion.li
                    key={product.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.24, delay: i * 0.06, ease }}
                    className="border border-line">
                    
                          <Link to={`/products/${product.slug}`} className="group block">
                            <div className="aspect-[4/3] w-full overflow-hidden bg-white">
                              <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="h-full w-full object-contain transition-transform duration-500 ease-expo group-hover:scale-[1.04]" />
                        
                            </div>
                            <div className="border-t border-line p-5">
                              <div className="flex items-center justify-between gap-3">
                                <span className="text-[10px] uppercase tracking-label text-steel">{product.family}</span>
                                {i === 0 &&
                          <span className="bg-accent px-2 py-1 text-[9px] uppercase tracking-label text-white">
                                    Best match
                                  </span>
                          }
                              </div>
                              <h4 className="mt-3 font-display text-[19px] font-semibold text-ink">{product.name}</h4>
                              <p className="mt-2 text-[13.5px] leading-snug text-graphite">{product.tagline}</p>
                              <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-label text-ink transition-colors group-hover:text-accent">
                                View product
                                <ArrowRightIcon
                            className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1"
                            aria-hidden />
                          
                              </span>
                              <span className="sr-only">Match score {score}</span>
                            </div>
                          </Link>
                        </motion.li>
                  )}
                    </ul> :

                <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-graphite">
                      This combination falls outside our standard configurations, which usually means a custom-engineered
                      solution. Send us the process data and an engineer will respond with a concrete direction.
                    </p>
                }

                  <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
                    <Link
                    to="/quote"
                    className="group inline-flex items-center justify-center gap-3 bg-ink px-7 py-4 text-[13px] font-medium uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-accent">
                    
                      Request a quote
                      <ArrowRightIcon
                      className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1"
                      aria-hidden />
                    
                    </Link>
                    <Link
                    to="/contact"
                    className="inline-flex items-center justify-center border border-line px-7 py-4 text-[13px] font-medium uppercase tracking-[0.12em] text-ink transition-colors duration-200 hover:border-ink">
                    
                      Discuss with an engineer
                    </Link>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}