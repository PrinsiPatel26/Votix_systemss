import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

/* ------------------------------------------------------------------ */
/* Small uppercase technical label                                     */
/* ------------------------------------------------------------------ */
export function Eyebrow({ children, className }: {children: React.ReactNode;className?: string;}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-label text-graphite',
        className
      )}>
      
      <span aria-hidden className="h-px w-6 bg-accent" />
      {children}
    </span>);

}

/* ------------------------------------------------------------------ */
/* Section wrapper with consistent rhythm + container                  */
/* ------------------------------------------------------------------ */
export function Section({
  children,
  className,
  id,
  label,
  tone = 'white',
  bleed = false







}: {children: React.ReactNode;className?: string;id?: string;label?: string;tone?: 'white' | 'paper';bleed?: boolean;}) {
  return (
    <section
      id={id}
      className={cn('relative py-[60px] md:py-[88px] lg:py-[132px]', tone === 'paper' && 'bg-paper', className)}>
      
      {label &&
      <div className="mx-auto mb-10 max-w-content px-6 md:px-10 lg:mb-16">
          <div className="flex items-center gap-4 border-t border-line pt-4">
            <span className="text-[11px] font-medium uppercase tracking-label text-steel">{label}</span>
          </div>
        </div>
      }
      {bleed ? children : <div className="mx-auto max-w-content px-6 md:px-10">{children}</div>}
    </section>);

}

/* ------------------------------------------------------------------ */
/* Word-by-word heading reveal                                         */
/* ------------------------------------------------------------------ */
export function WordReveal({
  text,
  className,
  as: Tag = 'h2',
  delay = 0





}: {text: string;className?: string;as?: 'h1' | 'h2' | 'h3' | 'p';delay?: number;}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px' });
  const reduce = useReducedMotion();
  const lines = text.split('\n');

  return (
    <Tag className={className}>
      <span ref={ref} className="block">
        {lines.map((line, li) =>
        <span key={li} className="block">
            {line.split(' ').map((word, wi) =>
          <span key={`${li}-${wi}`} className="inline-block overflow-hidden align-bottom">
                <motion.span
              className="inline-block"
              initial={reduce ? undefined : { y: '105%' }}
              animate={inView && !reduce ? { y: '0%' } : undefined}
              transition={{
                duration: 0.28,
                ease: [0.23, 1, 0.32, 1],
                delay: delay + (li * 4 + wi) * 0.035
              }}>
              
                  {word}
                  {wi < line.split(' ').length - 1 ? '\u00A0' : ''}
                </motion.span>
              </span>
          )}
          </span>
        )}
      </span>
    </Tag>);

}

/* ------------------------------------------------------------------ */
/* Fade / rise on scroll into view                                     */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className





}: {children: React.ReactNode;delay?: number;y?: number;className?: string;}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1], delay }}>
      
      {children}
    </motion.div>);

}

/* ------------------------------------------------------------------ */
/* Magnetic button / link                                              */
/* ------------------------------------------------------------------ */
type ButtonVariant = 'primary' | 'outline' | 'ghost';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-ink text-white hover:bg-accent',
  outline: 'border border-line bg-white text-ink hover:border-ink',
  ghost: 'text-ink hover:text-accent'
};

function useMagnetic(disabled?: boolean) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 240, damping: 22, mass: 0.4 });
  const reduce = useReducedMotion();

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled || reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width - 0.5) * 10);
    y.set(((e.clientY - r.top) / r.height - 0.5) * 6);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  return { style: { x: sx, y: sy }, onMouseMove: onMove, onMouseLeave: onLeave };
}

const baseBtn =
'group relative inline-flex items-center justify-center gap-3 px-7 py-4 text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-200 ease-expo';

export function ActionLink({
  to,
  children,
  variant = 'primary',
  className,
  arrow = true






}: {to: string;children: React.ReactNode;variant?: ButtonVariant;className?: string;arrow?: boolean;}) {
  const magnetic = useMagnetic();
  return (
    <motion.span className="inline-block" {...magnetic}>
      <Link to={to} className={cn(baseBtn, variants[variant], className)}>
        {children}
        {arrow &&
        <ArrowRightIcon
          className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1"
          aria-hidden />

        }
      </Link>
    </motion.span>);

}

export function ActionButton({
  children,
  onClick,
  variant = 'primary',
  className,
  arrow = false,
  type = 'button',
  disabled,
  ariaLabel









}: {children: React.ReactNode;onClick?: () => void;variant?: ButtonVariant;className?: string;arrow?: boolean;type?: 'button' | 'submit';disabled?: boolean;ariaLabel?: string;}) {
  const magnetic = useMagnetic(disabled);
  return (
    <motion.span className="inline-block" {...magnetic}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        className={cn(baseBtn, variants[variant], disabled && 'cursor-not-allowed opacity-40', className)}>
        
        {children}
        {arrow &&
        <ArrowRightIcon
          className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1"
          aria-hidden />

        }
      </button>
    </motion.span>);

}

/* Text link with a moving arrow — used across editorial sections */
export function TextLink({ to, children, className }: {to: string;children: React.ReactNode;className?: string;}) {
  return (
    <Link
      to={to}
      className={cn(
        'group inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-[13px] font-medium uppercase tracking-[0.12em] text-ink transition-colors duration-200 hover:border-accent hover:text-accent',
        className
      )}>
      
      {children}
      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1" aria-hidden />
    </Link>);

}

/* ------------------------------------------------------------------ */
/* Animated number counter (supports [bracketed] placeholders)         */
/* ------------------------------------------------------------------ */
export function Counter({ value, className }: {value: string;className?: string;}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : value.replace(/\d+/, '0'));

  React.useEffect(() => {
    const match = value.match(/\d+/);
    if (!inView || reduce || !match) {
      if (inView) setDisplay(value);
      return;
    }
    const target = parseInt(match[0], 10);
    const duration = 900;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value.replace(/\d+/, String(Math.round(target * eased))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>);

}

/* ------------------------------------------------------------------ */
/* Breadcrumbs                                                         */
/* ------------------------------------------------------------------ */
export function Breadcrumbs({ trail }: {trail: Array<{label: string;to?: string;}>;}) {
  return (
    <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-label text-steel">
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((item, i) =>
        <li key={item.label} className="flex items-center gap-2">
            {item.to ?
          <Link to={item.to} className="transition-colors hover:text-ink">
                {item.label}
              </Link> :

          <span className="text-ink">{item.label}</span>
          }
            {i < trail.length - 1 && <span aria-hidden>/</span>}
          </li>
        )}
      </ol>
    </nav>);

}