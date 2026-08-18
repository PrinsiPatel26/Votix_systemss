import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon, AlertCircleIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

const ease = [0.23, 1, 0.32, 1] as const;

interface ContactState {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initial: ContactState = { name: '', company: '', email: '', phone: '', subject: '', message: '' };

const labels: Record<keyof ContactState, string> = {
  name: 'Full name',
  company: 'Company',
  email: 'Email address',
  phone: 'Phone',
  subject: 'Subject',
  message: 'Message'
};

const subjects = [
'Technical question',
'Quotation request',
'Service & spare parts',
'Retrofit or upgrade',
'Pilot testing',
'Other'];


export function ContactForm() {
  const [form, setForm] = useState<ContactState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactState, string>>>({});
  const [sent, setSent] = useState(false);

  const setField = (k: keyof ContactState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<keyof ContactState, string>> = {};
    if (!form.name.trim()) next.name = 'This field is required';
    if (!form.email.trim()) next.email = 'This field is required';else
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address';
    if (!form.message.trim()) next.message = 'Tell us briefly what you need';
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease }}
        className="border border-line bg-white px-6 py-14 text-center md:px-10">
        
        <motion.span
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.26, ease, delay: 0.06 }}
          className="mx-auto flex h-14 w-14 items-center justify-center border border-accent text-accent">
          
          <CheckIcon className="h-6 w-6" aria-hidden />
        </motion.span>
        <h3 className="mt-7 font-display text-[26px] font-semibold uppercase tracking-[-0.02em] text-ink">
          Message sent
        </h3>
        <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-graphite">
          Thank you, {form.name.split(' ')[0]}. An engineer will reply to {form.email} within [1–2] working days.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setForm(initial);
          }}
          className="mt-8 inline-flex items-center justify-center border border-line px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:border-ink">
          
          Send another message
        </button>
      </motion.div>);

  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-line bg-white px-6 py-8 md:px-8 md:py-10">
      <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
        {(['name', 'company', 'email', 'phone'] as Array<keyof ContactState>).map((k) =>
        <div key={k}>
            <label htmlFor={`contact-${k}`} className="block text-[11px] uppercase tracking-label text-steel">
              {labels[k]}
              {(k === 'name' || k === 'email') && <span className="text-accent"> *</span>}
            </label>
            <input
            id={`contact-${k}`}
            type={k === 'email' ? 'email' : k === 'phone' ? 'tel' : 'text'}
            value={form[k]}
            onChange={(e) => setField(k, e.target.value)}
            aria-invalid={Boolean(errors[k])}
            className={cn(
              'mt-2 w-full border-b bg-transparent px-1 py-3 text-[15px] text-ink outline-none transition-colors sm:px-2',
              errors[k] ? 'border-accent' : 'border-line focus:border-ink'
            )} />
          
            <AnimatePresence>
              {errors[k] &&
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease }}
              role="alert"
              className="mt-2 flex items-center gap-2 text-[12px] text-accent">
              
                  <AlertCircleIcon className="h-3.5 w-3.5" aria-hidden />
                  {errors[k]}
                </motion.p>
            }
            </AnimatePresence>
          </div>
        )}

        <div className="md:col-span-2">
          <label htmlFor="contact-subject" className="block text-[11px] uppercase tracking-label text-steel">
            {labels.subject}
          </label>
          <select
            id="contact-subject"
            value={form.subject}
            onChange={(e) => setField('subject', e.target.value)}
            className="mt-2 w-full appearance-none border-b border-line bg-transparent py-3 text-[15px] text-ink outline-none transition-colors focus:border-ink">
            
            <option value="">Select…</option>
            {subjects.map((s) =>
            <option key={s} value={s}>
                {s}
              </option>
            )}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="contact-message" className="block text-[11px] uppercase tracking-label text-steel">
            {labels.message}
            <span className="text-accent"> *</span>
          </label>
          <textarea
            id="contact-message"
            rows={5}
            value={form.message}
            onChange={(e) => setField('message', e.target.value)}
            aria-invalid={Boolean(errors.message)}
            className={cn(
              'mt-2 w-full resize-none border-b bg-transparent py-3 text-[15px] text-ink outline-none transition-colors',
              errors.message ? 'border-accent' : 'border-line focus:border-ink'
            )} />
          
          <AnimatePresence>
            {errors.message &&
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease }}
              role="alert"
              className="mt-2 flex items-center gap-2 text-[12px] text-accent">
              
                <AlertCircleIcon className="h-3.5 w-3.5" aria-hidden />
                {errors.message}
              </motion.p>
            }
          </AnimatePresence>
        </div>
      </div>

      <button
        type="submit"
        className="group mt-10 inline-flex items-center gap-3 bg-ink px-7 py-4 text-[13px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent">
        
        Send message
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1" aria-hidden />
      </button>
    </form>);

}