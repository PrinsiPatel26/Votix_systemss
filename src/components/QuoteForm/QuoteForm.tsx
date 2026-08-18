import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, PaperclipIcon, XIcon, AlertCircleIcon } from 'lucide-react';
import { products } from '../../data/products';
import { industries } from '../../data/industries';
import { configSteps } from '../../data/configurator';
import { WordReveal } from '../ui/Primitives';
import { cn } from '../../utils/cn';

const ease = [0.23, 1, 0.32, 1] as const;

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  industry: string;
  application: string;
  productType: string;
  tankVolume: string;
  viscosity: string;
  temperature: string;
  material: string;
  message: string;
}

const initial: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  industry: '',
  application: '',
  productType: '',
  tankVolume: '',
  viscosity: '',
  temperature: '',
  material: '',
  message: ''
};

const steps: Array<{index: string;title: string;fields: Array<keyof FormState>;}> = [
{ index: '01', title: 'Company information', fields: ['name', 'company', 'email', 'phone', 'country'] },
{ index: '02', title: 'Process information', fields: ['industry', 'application', 'viscosity', 'temperature'] },
{ index: '03', title: 'Equipment requirements', fields: ['productType', 'tankVolume', 'material'] },
{ index: '04', title: 'Additional requirements', fields: ['message'] },
{ index: '05', title: 'Review & submit', fields: [] }];


const required: Array<keyof FormState> = ['name', 'company', 'email', 'industry', 'application', 'productType'];

const labels: Record<keyof FormState, string> = {
  name: 'Full name',
  company: 'Company',
  email: 'Email address',
  phone: 'Phone',
  country: 'Country',
  industry: 'Industry',
  application: 'Application',
  productType: 'Product type',
  tankVolume: 'Tank volume (m³)',
  viscosity: 'Viscosity',
  temperature: 'Process temperature (°C)',
  material: 'Required material',
  message: 'Describe your process'
};

const selects: Partial<Record<keyof FormState, string[]>> = {
  industry: industries.map((i) => i.name),
  application: configSteps[1].options.map((o) => o.label),
  productType: products.map((p) => p.name),
  viscosity: configSteps[4].options.map((o) => o.label),
  material: ['AISI 304 / 1.4301', 'AISI 316L / 1.4404', 'Duplex 1.4462', 'Hastelloy', 'Titanium', 'To be advised']
};

function Field({
  name,
  value,
  error,
  onChange





}: {name: keyof FormState;value: string;error?: string;onChange: (name: keyof FormState, value: string) => void;}) {
  const isSelect = Boolean(selects[name]);
  const isTextarea = name === 'message';
  const id = `quote-${name}`;

  return (
    <div className={cn(isTextarea && 'md:col-span-2')}>
      <label htmlFor={id} className="block text-[11px] uppercase tracking-label text-steel">
        {labels[name]}
        {required.includes(name) && <span className="text-accent"> *</span>}
      </label>

      {isSelect ?
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        aria-invalid={Boolean(error)}
        className={cn(
          'mt-2 w-full appearance-none border-b bg-transparent px-1 py-3 text-[15px] text-ink outline-none transition-colors sm:px-2',
          error ? 'border-accent' : 'border-line focus:border-ink'
        )}>
        
          <option value="">Select…</option>
          {selects[name]!.map((opt) =>
        <option key={opt} value={opt}>
              {opt}
            </option>
        )}
        </select> :
      isTextarea ?
      <textarea
        id={id}
        rows={5}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder="Media, batch behaviour, existing equipment, constraints…"
        className="mt-2 w-full resize-none border-b border-line bg-transparent px-1 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-steel/70 focus:border-ink sm:px-2" /> :


      <input
        id={id}
        type={name === 'email' ? 'email' : name === 'phone' ? 'tel' : 'text'}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        aria-invalid={Boolean(error)}
        className={cn(
          'mt-2 w-full border-b bg-transparent px-1 py-3 text-[15px] text-ink outline-none transition-colors sm:px-2',
          error ? 'border-accent' : 'border-line focus:border-ink'
        )} />

      }

      <AnimatePresence>
        {error &&
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease }}
          className="mt-2 flex items-center gap-2 text-[12px] text-accent"
          role="alert">
          
            <AlertCircleIcon className="h-3.5 w-3.5" aria-hidden />
            {error}
          </motion.p>
        }
      </AnimatePresence>
    </div>);

}

export function QuoteForm({ compact = false }: {compact?: boolean;}) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [files, setFiles] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const progress = submitted ? 100 : (step + 1) / steps.length * 100;

  const setField = (name: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const validateStep = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    steps[step].fields.forEach((field) => {
      if (required.includes(field) && !form[field].trim()) next[field] = 'This field is required';
      if (field === 'email' && form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Enter a valid email address';
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onNext = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const missing = required.filter((f) => !form[f].trim());
    if (missing.length > 0) {
      setErrors(Object.fromEntries(missing.map((f) => [f, 'This field is required'])));
      const firstStep = steps.findIndex((s) => s.fields.includes(missing[0]));
      setStep(firstStep >= 0 ? firstStep : 0);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="quote" className={cn('w-full bg-paper py-[50px] sm:py-[60px] md:py-[88px]', compact ? 'lg:py-[110px]' : 'lg:py-[130px]')}>
      <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10">
        <div className="flex items-center gap-4 border-t border-line pt-4">
          <span className="text-[11px] font-medium uppercase tracking-label text-steel">16 / Request a quote</span>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <WordReveal
              as="h2"
              text={'Let’s engineer\nyour solution'}
              className="font-display text-section font-bold text-ink" />
            
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-graphite">
              The more process detail you share, the more concrete our response. Every request is reviewed by an
              engineering specialist — not a mailbox.
            </p>
            <dl className="mt-10 space-y-5 border-t border-line pt-6 text-[13.5px]">
              <div>
                <dt className="text-[11px] uppercase tracking-label text-steel">Direct line</dt>
                <dd className="mt-1 text-ink">[+31 (0)10 000 0000]</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-label text-steel">Typical response</dt>
                <dd className="mt-1 text-ink">Within [1–2] working days</dd>
              </div>
            </dl>
          </div>

          <div className="border border-line bg-white">
            {/* Progress */}
            <div className="border-b border-line px-6 py-5 md:px-8">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-label text-steel">
                <span>{submitted ? 'Complete' : `${steps[step].index} — ${steps[step].title}`}</span>
                <span className="tabular-nums">{Math.round(progress)}%</span>
              </div>
              <div className="mt-3 h-px w-full bg-line" aria-hidden>
                <motion.div
                  className="h-px bg-accent"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease }} />
                
              </div>
            </div>

            <AnimatePresence mode="wait">
              {submitted ?
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease }}
                className="px-6 py-16 text-center md:px-8">
                
                  <motion.span
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.26, ease, delay: 0.06 }}
                  className="mx-auto flex h-16 w-16 items-center justify-center border border-accent text-accent">
                  
                    <CheckIcon className="h-7 w-7" aria-hidden />
                  </motion.span>
                  <h3 className="mt-8 font-display text-[30px] font-semibold uppercase tracking-[-0.02em] text-ink md:text-[38px]">
                    Request received
                  </h3>
                  <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-graphite">
                    An engineering specialist will review your requirements and respond with a concrete technical
                    direction. A copy of your request has been sent to {form.email || 'your email address'}.
                  </p>
                  <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-3 bg-ink px-7 py-4 text-[13px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent">
                    
                      Explore products
                    </Link>
                    <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initial);
                      setFiles([]);
                      setStep(0);
                    }}
                    className="inline-flex items-center justify-center border border-line px-7 py-4 text-[13px] font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:border-ink">
                    
                      Submit another request
                    </button>
                  </div>
                </motion.div> :

              <motion.form
                key={step}
                onSubmit={onSubmit}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.22, ease }}
                className="px-6 py-8 md:px-8 md:py-10"
                noValidate>
                
                  {step < 4 ?
                <>
                      <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
                        {steps[step].fields.map((field) =>
                    <Field key={field} name={field} value={form[field]} error={errors[field]} onChange={setField} />
                    )}
                      </div>

                      {step === 3 &&
                  <div className="mt-8">
                          <p className="text-[11px] uppercase tracking-label text-steel">Attachments</p>
                          <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="mt-3 flex w-full items-center justify-center gap-3 border border-dashed border-line py-8 text-[13px] text-graphite transition-colors hover:border-ink hover:text-ink">
                      
                            <PaperclipIcon className="h-4 w-4" aria-hidden />
                            Attach drawings or specifications (PDF, DWG, XLSX)
                          </button>
                          <input
                      ref={fileRef}
                      type="file"
                      multiple
                      className="sr-only"
                      aria-label="Attach files"
                      onChange={(e) => {
                        const names = Array.from(e.target.files ?? []).map((f) => f.name);
                        setFiles((prev) => [...prev, ...names]);
                      }} />
                    
                          <ul className="mt-3 space-y-2">
                            <AnimatePresence>
                              {files.map((f) =>
                        <motion.li
                          key={f}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.18, ease }}
                          className="flex items-center justify-between gap-4 border border-line px-4 py-3 text-[13px] text-ink">
                          
                                  <span className="truncate">{f}</span>
                                  <button
                            type="button"
                            onClick={() => setFiles((prev) => prev.filter((x) => x !== f))}
                            aria-label={`Remove ${f}`}
                            className="text-steel transition-colors hover:text-accent">
                            
                                    <XIcon className="h-4 w-4" aria-hidden />
                                  </button>
                                </motion.li>
                        )}
                            </AnimatePresence>
                          </ul>
                        </div>
                  }
                    </> :

                <div>
                      <h3 className="font-display text-[22px] font-semibold tracking-[-0.02em] text-ink">
                        Review your request
                      </h3>
                      <dl className="mt-6 grid gap-x-8 gap-y-4 md:grid-cols-2">
                        {(Object.keys(form) as Array<keyof FormState>).
                    filter((k) => form[k].trim() !== '').
                    map((k) =>
                    <div key={k} className="border-b border-line pb-3">
                              <dt className="text-[10px] uppercase tracking-label text-steel">{labels[k]}</dt>
                              <dd className="mt-1 text-[14px] text-ink">{form[k]}</dd>
                            </div>
                    )}
                        {files.length > 0 &&
                    <div className="border-b border-line pb-3 md:col-span-2">
                            <dt className="text-[10px] uppercase tracking-label text-steel">Attachments</dt>
                            <dd className="mt-1 text-[14px] text-ink">{files.join(', ')}</dd>
                          </div>
                    }
                      </dl>
                      <p className="mt-6 text-[12.5px] leading-relaxed text-steel">
                        By submitting you agree that we may contact you about this enquiry. We do not share process data
                        with third parties.
                      </p>
                    </div>
                }

                  <div className="mt-10 flex items-center justify-between gap-4 border-t border-line pt-6">
                    <button
                    type="button"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className={cn(
                      'inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors',
                      step === 0 ? 'cursor-not-allowed text-steel/50' : 'text-ink hover:text-accent'
                    )}>
                    
                      <ArrowLeftIcon className="h-4 w-4" aria-hidden />
                      Back
                    </button>

                    {step === steps.length - 1 ?
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-[13px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent">
                    
                        Submit request
                        <ArrowRightIcon
                      className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1"
                      aria-hidden />
                    
                      </button> :

                  <button
                    type="button"
                    onClick={onNext}
                    className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-[13px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent">
                    
                        Continue
                        <ArrowRightIcon
                      className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1"
                      aria-hidden />
                    
                      </button>
                  }
                  </div>
                </motion.form>
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}