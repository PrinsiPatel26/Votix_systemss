import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from 'framer-motion';
import {
  SearchIcon,
  MenuIcon,
  XIcon,
  ArrowRightIcon,
} from 'lucide-react';

import { Logo } from '../ui/Logo';
import { ProductsMegaMenu, IndustriesMegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';
import { SearchOverlay } from './SearchOverlay';
import { cn } from '../../utils/cn';

type MenuKey = 'products' | 'industries' | null;

const links = [
  {
    label: 'Products',
    to: '/products',
    menu: 'products' as const,
  },
  {
    label: 'Industries',
    to: '/industries',
    menu: 'industries' as const,
  },
  {
    label: 'Engineering',
    to: '/engineering',
    menu: null,
  },
  {
    label: 'Services',
    to: '/services',
    menu: null,
  },
  {
    label: 'About',
    to: '/about',
    menu: null,
  },
  {
    label: 'Insights',
    to: '/insights',
    menu: null,
  },
];

export function Navbar({
  overHero,
}: {
  overHero: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { pathname } = useLocation();

  const { scrollY, scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 40);
  });

  useEffect(() => {
    setMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const solid = scrolled || !overHero || menu !== null;

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[60]',
          'border-b transition-all duration-300 ease-expo',

          // Always use Votix dark navy so the logo stays visible
          solid
            ? 'border-white/10 bg-[#071525] shadow-[0_8px_30px_rgba(0,0,0,0.18)]'
            : 'border-white/10 bg-[#071525]/95 backdrop-blur-xl'
        )}
        onMouseLeave={() => setMenu(null)}
      >
        <div className="mx-auto max-w-shell px-6 md:px-10">
          <div
            className={cn(
              'flex items-center justify-between',
              'transition-[height] duration-300 ease-expo',

              // Increased navbar height for larger logo
              solid ? 'h-[88px]' : 'h-[96px]'
            )}
          >
            {/* =========================
                LOGO
            ========================== */}
            <Logo
              className="
                shrink-0
                scale-[1.18]
                origin-left
              "
            />

            {/* =========================
                DESKTOP NAVIGATION
            ========================== */}
            <nav
              aria-label="Main"
              className="hidden items-center gap-1 lg:flex"
            >
              {links.map((link) => {
                const active =
                  pathname === link.to ||
                  pathname.startsWith(link.to + '/');

                return (
                  <div
                    key={link.to}
                    onMouseEnter={() => setMenu(link.menu)}
                  >
                    {link.menu ? (
                      <button
                        type="button"
                        aria-expanded={menu === link.menu}
                        aria-haspopup="true"
                        onClick={() =>
                          setMenu(
                            menu === link.menu
                              ? null
                              : link.menu
                          )
                        }
                        className={cn(
                          'relative px-4 py-2',
                          'text-[12px] font-medium uppercase',
                          'tracking-[0.14em]',
                          'transition-colors duration-200',

                          active || menu === link.menu
                            ? 'text-[#F4B942]'
                            : 'text-white/85 hover:text-[#F4B942]'
                        )}
                      >
                        {link.label}

                        {/* Active underline */}
                        {(active || menu === link.menu) && (
                          <span
                            className="
                              absolute
                              bottom-0
                              left-4
                              right-4
                              h-[1px]
                              bg-[#F4B942]
                            "
                          />
                        )}
                      </button>
                    ) : (
                      <Link
                        to={link.to}
                        className={cn(
                          'relative px-4 py-2',
                          'text-[12px] font-medium uppercase',
                          'tracking-[0.14em]',
                          'transition-colors duration-200',

                          active
                            ? 'text-[#F4B942]'
                            : 'text-white/85 hover:text-[#F4B942]'
                        )}
                      >
                        {link.label}

                        {/* Active underline */}
                        {active && (
                          <span
                            className="
                              absolute
                              bottom-0
                              left-4
                              right-4
                              h-[1px]
                              bg-[#F4B942]
                            "
                          />
                        )}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* =========================
                RIGHT SIDE ACTIONS
            ========================== */}
            <div className="flex items-center gap-1 md:gap-2">
              {/* Search */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="
                  rounded-full
                  p-3
                  text-white/90
                  transition-all
                  duration-200
                  hover:bg-white/10
                  hover:text-[#F4B942]
                "
              >
                <SearchIcon
                  className="h-[19px] w-[19px]"
                  aria-hidden
                />
              </button>

              {/* Request Quote */}
              <Link
                to="/quote"
                className="
                  group
                  hidden
                  items-center
                  gap-2
                  bg-[#F4B942]
                  px-6
                  py-3.5
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#071525]
                  transition-all
                  duration-200
                  hover:bg-white
                  md:inline-flex
                "
              >
                Request a quote

                <ArrowRightIcon
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    ease-expo
                    group-hover:translate-x-1
                  "
                  aria-hidden
                />
              </Link>

              {/* Mobile Menu */}
              <button
                type="button"
                onClick={() =>
                  setMobileOpen((v) => !v)
                }
                aria-label={
                  mobileOpen
                    ? 'Close menu'
                    : 'Open menu'
                }
                aria-expanded={mobileOpen}
                className="
                  relative
                  z-[75]
                  rounded-full
                  p-3
                  text-white
                  transition-colors
                  hover:bg-white/10
                  lg:hidden
                "
              >
                {mobileOpen ? (
                  <XIcon
                    className="h-6 w-6"
                    aria-hidden
                  />
                ) : (
                  <MenuIcon
                    className="h-6 w-6"
                    aria-hidden
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* =========================
            MEGA MENUS
        ========================== */}
        <AnimatePresence>
          {menu && (
            <motion.div
              key={menu}
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: 'auto',
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.24,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="
                hidden
                overflow-hidden
                border-t
                border-white/10
                bg-[#071525]
                lg:block
              "
            >
              {menu === 'products' ? (
                <ProductsMegaMenu
                  onNavigate={() => setMenu(null)}
                />
              ) : (
                <IndustriesMegaMenu
                  onNavigate={() => setMenu(null)}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* =========================
            SCROLL PROGRESS
        ========================== */}
        <motion.div
          aria-hidden
          style={{
            scaleX: progress,
          }}
          className="
            h-[2px]
            origin-left
            bg-[#F4B942]
            transition-opacity
            duration-300
            opacity-100
          "
        />
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      {/* Search Overlay */}
      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}