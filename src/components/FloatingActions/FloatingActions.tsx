import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowRightIcon, PhoneIcon, MessageCircleIcon, FileTextIcon, PlusIcon, XIcon } from 'lucide-react';

export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setVisible(v > 700));

  const mobileActions = [
  { label: 'WhatsApp', href: 'https://wa.me/31100000000', Icon: MessageCircleIcon },
  { label: 'Call', href: 'tel:+31100000000', Icon: PhoneIcon }];


  return (
    <>
      {/* Desktop */}
      <AnimatePresence>
        {visible &&
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-8 right-8 z-50 hidden lg:block">
          
            <Link
            to="/quote"
            className="group inline-flex items-center gap-3 bg-accent px-6 py-4 text-[12px] font-medium uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(11,63,214,0.25)] transition-colors duration-200 hover:bg-ink">
            
              Request a quote
              <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1"
              aria-hidden />
            
            </Link>
          </motion.div>
        }
      </AnimatePresence>

      {/* Mobile */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 lg:hidden">
        <AnimatePresence>
          {open &&
          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col items-end gap-2">
            
              {mobileActions.map(({ label, href, Icon }, i) =>
            <motion.li
              key={label}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: i * 0.04, ease: [0.23, 1, 0.32, 1] }}>
              
                  <a
                href={href}
                className="flex items-center gap-2 border border-line bg-white px-4 py-3 text-[12px] font-medium uppercase tracking-[0.1em] text-ink shadow-[0_6px_20px_rgba(17,20,24,0.1)]">
                
                    <Icon className="h-4 w-4 text-accent" aria-hidden />
                    {label}
                  </a>
                </motion.li>
            )}
              <motion.li initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.08 }}>
                <Link
                to="/quote"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 bg-ink px-4 py-3 text-[12px] font-medium uppercase tracking-[0.1em] text-white shadow-[0_6px_20px_rgba(17,20,24,0.16)]">
                
                  <FileTextIcon className="h-4 w-4" aria-hidden />
                  Quote
                </Link>
              </motion.li>
            </motion.ul>
          }
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close contact actions' : 'Open contact actions'}
          className="flex min-h-[56px] min-w-[56px] items-center justify-center bg-accent text-white shadow-[0_10px_26px_rgba(11,63,214,0.3)] transition-transform hover:scale-105 active:scale-95 sm:h-14 sm:w-14">
          
          <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}>
            {open ? <XIcon className="h-6 w-6" aria-hidden /> : <PlusIcon className="h-6 w-6" aria-hidden />}
          </motion.span>
        </button>
      </div>
    </>);

}