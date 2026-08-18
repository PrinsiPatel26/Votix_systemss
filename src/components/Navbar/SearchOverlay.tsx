import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { SearchIcon, XIcon, ArrowRightIcon } from 'lucide-react';
import { search } from '../../utils/search';

const suggestions = ['magnetic', 'high shear', 'pharmaceutical', 'biogas', 'seal'];

export function SearchOverlay({ open, onClose }: {open: boolean;onClose: () => void;}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => search(query), [query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      const t = window.setTimeout(() => inputRef.current?.focus(), 120);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof results>();
    results.forEach((r) => {
      map.set(r.group, [...(map.get(r.group) ?? []), r]);
    });
    return Array.from(map.entries());
  }, [results]);

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        className="fixed inset-0 z-[80]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label="Search">
        
          <button
          type="button"
          aria-label="Close search"
          onClick={onClose}
          className="absolute inset-0 h-full w-full cursor-default bg-ink/25 backdrop-blur-[2px]" />
        
          <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
          className="relative border-b border-line bg-white">
          
            <div className="mx-auto max-w-content px-6 py-6 md:px-10 md:py-8">
              <div className="flex items-center gap-4 border-b border-line pb-4">
                <SearchIcon className="h-5 w-5 shrink-0 text-steel" aria-hidden />
                <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, industries and resources"
                aria-label="Search products, industries and resources"
                className="w-full bg-transparent font-display text-[20px] text-ink outline-none placeholder:text-steel md:text-[26px]" />
              
                <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className="shrink-0 p-2 text-steel transition-colors hover:text-ink">
                
                  <XIcon className="h-5 w-5" aria-hidden />
                </button>
              </div>

              <div className="mt-6 max-h-[54vh] overflow-y-auto">
                {query.trim().length < 2 ?
              <div>
                    <p className="text-[11px] uppercase tracking-label text-steel">Try</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {suggestions.map((s) =>
                  <button
                    key={s}
                    type="button"
                    onClick={() => setQuery(s)}
                    className="border border-line px-4 py-2 text-[13px] text-graphite transition-colors hover:border-ink hover:text-ink">
                    
                          {s}
                        </button>
                  )}
                    </div>
                  </div> :
              results.length === 0 ?
              <p className="py-6 text-[14px] text-graphite">
                    No results for “{query}”. Try a technology, industry or process term.
                  </p> :

              <div className="grid gap-8 md:grid-cols-3">
                    {grouped.map(([group, items]) =>
                <div key={group}>
                        <p className="text-[11px] uppercase tracking-label text-steel">{group}</p>
                        <ul className="mt-3">
                          {items.map((r, i) =>
                    <motion.li
                      key={r.to + r.title}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.03, ease: [0.23, 1, 0.32, 1] }}>
                      
                              <Link
                        to={r.to}
                        onClick={onClose}
                        className="group flex items-start justify-between gap-3 border-b border-line/70 py-3">
                        
                                <span>
                                  <span className="block font-display text-[15px] text-ink">{r.title}</span>
                                  <span className="mt-0.5 block text-[12.5px] leading-snug text-steel">{r.meta}</span>
                                </span>
                                <ArrowRightIcon
                          className="mt-1 h-4 w-4 shrink-0 text-steel transition-transform duration-200 ease-expo group-hover:translate-x-1 group-hover:text-accent"
                          aria-hidden />
                        
                              </Link>
                            </motion.li>
                    )}
                        </ul>
                      </div>
                )}
                  </div>
              }
              </div>
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}