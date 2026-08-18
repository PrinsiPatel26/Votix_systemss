import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';
import { products } from '../../data/products';
import { industries } from '../../data/industries';

const panel = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.23, 1, 0.32, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.16, ease: [0.23, 1, 0.32, 1] } }
};

const list = {
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.04 } }
};
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.24, ease: [0.23, 1, 0.32, 1] } }
};

export function ProductsMegaMenu({ onNavigate }: {onNavigate: () => void;}) {
  return (
    <motion.div variants={panel} initial="hidden" animate="show" exit="exit" className="w-full">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-12 md:px-10 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-16">
        <div className="flex flex-col justify-between border-b border-line pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-label text-accent">Our technology</p>
            <h2 className="mt-5 font-display text-[26px] font-semibold leading-tight tracking-[-0.02em] text-white">
              Eight technology families, one engineering method.
            </h2>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-white/80">
              Each configuration is dimensioned from your process duty — media behaviour, vessel geometry and the result
              you need to reach.
            </p>
          </div>
          <Link
            to="/products"
            onClick={onNavigate}
            className="group mt-8 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:text-accent">
            
            All products
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        <motion.ul variants={list} initial="hidden" animate="show" className="grid gap-x-10 gap-y-1 sm:grid-cols-2">
          {products.map((p) =>
          <motion.li key={p.slug} variants={item}>
              <Link
              to={`/products/${p.slug}`}
              onClick={onNavigate}
              className="group flex items-start gap-4 border-b border-white/10 py-4 transition-colors hover:border-white/30">
              
                <span className="relative h-14 w-16 shrink-0 overflow-hidden bg-paper">
                  <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-300 ease-expo group-hover:scale-105" />
                
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-display text-[15px] font-medium text-white">{p.name}</span>
                    <ArrowUpRightIcon
                    className="h-4 w-4 shrink-0 text-white/60 transition-all duration-200 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden />
                  
                  </span>
                  <span className="mt-1 block text-[12.5px] leading-snug text-white/60">{p.tagline}</span>
                </span>
              </Link>
            </motion.li>
          )}
        </motion.ul>
      </div>
    </motion.div>);

}

export function IndustriesMegaMenu({ onNavigate }: {onNavigate: () => void;}) {
  return (
    <motion.div variants={panel} initial="hidden" animate="show" exit="exit" className="w-full">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-12 md:px-10 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-16">
        <div className="border-b border-line pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
          <p className="text-[11px] font-medium uppercase tracking-label text-accent">Industries</p>
          <h2 className="mt-5 font-display text-[26px] font-semibold leading-tight tracking-[-0.02em] text-white">
            Process knowledge, sector by sector.
          </h2>
          <Link
            to="/industries"
            onClick={onNavigate}
            className="group mt-8 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:text-accent">
            
            All industries
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
        <motion.ul variants={list} initial="hidden" animate="show" className="grid gap-x-10 gap-y-1 sm:grid-cols-3">
          {industries.map((ind) =>
          <motion.li key={ind.slug} variants={item}>
              <Link
              to={`/industries/${ind.slug}`}
              onClick={onNavigate}
              className="group flex items-center justify-between gap-3 border-b border-white/10 py-3.5 transition-colors hover:border-white/30">
              
                <span className="flex items-baseline gap-3">
                  <span className="text-[10px] tabular-nums text-white/60">{ind.index}</span>
                  <span className="font-display text-[15px] font-medium text-white">{ind.name}</span>
                </span>
                <ArrowUpRightIcon
                className="h-4 w-4 shrink-0 text-white/60 transition-all duration-200 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                aria-hidden />
              
              </Link>
            </motion.li>
          )}
        </motion.ul>
      </div>
    </motion.div>);

}