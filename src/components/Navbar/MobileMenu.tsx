import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, ArrowRightIcon } from 'lucide-react';
import { products } from '../../data/products';
import { industries } from '../../data/industries';

const sections = [
{ label: 'Products', to: '/products', children: products.map((p) => ({ label: p.name, to: `/products/${p.slug}` })) },
{
  label: 'Industries',
  to: '/industries',
  children: industries.map((i) => ({ label: i.name, to: `/industries/${i.slug}` }))
},
{ label: 'Engineering', to: '/engineering', children: [] },
{ label: 'Services', to: '/services', children: [] },
{ label: 'About', to: '/about', children: [] },
{ label: 'Insights', to: '/insights', children: [] },
{ label: 'Case Studies', to: '/case-studies', children: [] },
{ label: 'Contact', to: '/contact', children: [] }];


export function MobileMenu({ open, onClose }: {open: boolean;onClose: () => void;}) {
  const [expanded, setExpanded] = useState<string | null>('Products');

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        className="fixed inset-0 z-[70] flex flex-col bg-white lg:hidden"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu">
        
          <div className="h-[68px] shrink-0 border-b border-line" />
          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <ul>
              {sections.map((section) =>
            <li key={section.label} className="border-b border-line">
                  <div className="flex items-center justify-between">
                    <Link
                  to={section.to}
                  onClick={onClose}
                  className="flex-1 py-5 font-display text-[22px] font-medium tracking-[-0.01em] text-ink">
                  
                      {section.label}
                    </Link>
                    {section.children.length > 0 &&
                <button
                  type="button"
                  onClick={() => setExpanded(expanded === section.label ? null : section.label)}
                  aria-expanded={expanded === section.label}
                  aria-label={`Toggle ${section.label} submenu`}
                  className="p-3 text-steel">
                  
                        <motion.span
                    animate={{ rotate: expanded === section.label ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="block">
                    
                          <ChevronDownIcon className="h-5 w-5" aria-hidden />
                        </motion.span>
                      </button>
                }
                  </div>
                  <AnimatePresence initial={false}>
                    {expanded === section.label && section.children.length > 0 &&
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden">
                  
                        {section.children.map((child) =>
                  <li key={child.to}>
                            <Link
                      to={child.to}
                      onClick={onClose}
                      className="flex items-center justify-between border-t border-line/60 py-3.5 pl-4 text-[15px] text-graphite">
                      
                              {child.label}
                              <ArrowRightIcon className="h-4 w-4 text-steel" aria-hidden />
                            </Link>
                          </li>
                  )}
                        <li className="h-3" />
                      </motion.ul>
                }
                  </AnimatePresence>
                </li>
            )}
            </ul>

            <Link
            to="/quote"
            onClick={onClose}
            className="mt-8 flex w-full items-center justify-center gap-3 bg-ink px-6 py-5 text-[13px] font-medium uppercase tracking-[0.12em] text-white">
            
              Request a quote
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </Link>

            <dl className="mt-10 grid grid-cols-2 gap-6 pb-10 text-[13px]">
              <div>
                <dt className="text-[11px] uppercase tracking-label text-steel">Phone</dt>
                <dd className="mt-1 text-ink">[+31 (0)10 000 0000]</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-label text-steel">Email</dt>
                <dd className="mt-1 break-all text-ink">[info@helicon-mixing.com]</dd>
              </div>
            </dl>
          </nav>
        </motion.div>
      }
    </AnimatePresence>);

}