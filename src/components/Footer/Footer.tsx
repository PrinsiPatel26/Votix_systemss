import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import {
  ArrowUpRightIcon,
  ChevronDownIcon,
  LinkedinIcon,
  YoutubeIcon,
  InstagramIcon,
} from 'lucide-react';

import { products } from '../../data/products';
import { industries } from '../../data/industries';
import {
  engineeringServices,
  serviceLines,
} from '../../data/services';

const columns: Array<{
  title: string;
  items: Array<{
    label: string;
    to: string;
  }>;
}> = [
  {
    title: 'Products',
    items: products.map((p) => ({
      label: p.name,
      to: `/products/${p.slug}`,
    })),
  },

  {
    title: 'Industries',
    items: industries.map((i) => ({
      label: i.name,
      to: `/industries/${i.slug}`,
    })),
  },

  {
    title: 'Engineering',
    items: engineeringServices.map((s) => ({
      label: s.name,
      to: '/engineering',
    })),
  },

  {
    title: 'Services',
    items: serviceLines.map((s) => ({
      label: s.name,
      to: '/services',
    })),
  },

  {
    title: 'Company',
    items: [
      {
        label: 'About us',
        to: '/about',
      },
      {
        label: 'Quality & certification',
        to: '/about',
      },
      {
        label: 'Global presence',
        to: '/about',
      },
      {
        label: 'Careers',
        to: '/contact',
      },
    ],
  },

  {
    title: 'Resources',
    items: [
      {
        label: 'Engineering insights',
        to: '/insights',
      },
      {
        label: 'Case studies',
        to: '/case-studies',
      },
      {
        label: 'Solution finder',
        to: '/products#configurator',
      },
      {
        label: 'Downloads',
        to: '/products',
      },
    ],
  },
];

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{
    label: string;
    to: string;
  }>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 md:border-none">
      {/* Column Header */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="
          flex
          w-full
          items-center
          justify-between
          py-4
          text-left
          md:pointer-events-none
          md:py-0
        "
      >
        <span
          className="
            text-[11px]
            font-medium
            uppercase
            tracking-label
            text-white/50
          "
        >
          {title}
        </span>

        <motion.span
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.2,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="md:hidden"
        >
          <ChevronDownIcon
            className="h-4 w-4 text-white/50"
            aria-hidden
          />
        </motion.span>
      </button>

      {/* Desktop List */}
      <ul className="hidden md:mt-5 md:block">
        {items.map((item) => (
          <li key={item.label + item.to}>
            <Link
              to={item.to}
              className="
                block
                py-1.5
                text-[13.5px]
                text-white/70
                transition-colors
                duration-200
                hover:text-white
              "
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Accordion */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
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
              duration: 0.26,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="overflow-hidden md:hidden"
          >
            {items.map((item) => (
              <li key={item.label + item.to}>
                <Link
                  to={item.to}
                  className="
                    block
                    py-2
                    text-[14px]
                    text-white/70
                    transition-colors
                    hover:text-white
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="h-4" />
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#071525] text-white">
      <div
        className="
          mx-auto
          max-w-content
          px-6
          py-16
          md:px-10
          md:py-20
          lg:py-24
        "
      >
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]
            lg:gap-20
          "
        >
          {/* =====================================
              COMPANY / LOGO SECTION
          ====================================== */}
          <div>
            <Link
              to="/"
              className="
                group
                flex
                items-center
                shrink-0
              "
              aria-label="Votix Systems — home"
            >
              <img
                src="/votix.download.png"
                alt="Votix Systems"
                className="
                  h-[82px]
                  w-[260px]
                  max-w-full
                  object-contain
                  object-left
                  transition-transform
                  duration-200
                  group-hover:scale-[1.02]
                "
              />
            </Link>

            {/* Company Description */}
            <p
              className="
                mt-6
                max-w-xs
                text-[14px]
                leading-relaxed
                text-white/60
              "
            >
              Votix Systems delivers precision-engineered
              industrial agitators, mixers and complete
              mixing systems — engineered around your
              process and built for demanding applications.
            </p>

            {/* =====================================
                CONTACT INFORMATION
            ====================================== */}
            <dl className="mt-8 space-y-4 text-[13.5px]">
              <div>
                <dt
                  className="
                    text-[11px]
                    uppercase
                    tracking-label
                    text-white/40
                  "
                >
                  Head office
                </dt>

                <dd
                  className="
                    mt-1
                    text-white/75
                  "
                >
                  [Industrieweg 24, 3000 Rotterdam,
                  Netherlands]
                </dd>
              </div>

              <div>
                <dt
                  className="
                    text-[11px]
                    uppercase
                    tracking-label
                    text-white/40
                  "
                >
                  Contact
                </dt>

                <dd
                  className="
                    mt-1
                    text-white/75
                  "
                >
                  <a
                    href="tel:+31100000000"
                    className="
                      transition-colors
                      hover:text-white
                    "
                  >
                    [+31 (0)10 000 0000]
                  </a>

                  <br />

                  <a
                    href="mailto:info@votixsystems.com"
                    className="
                      transition-colors
                      hover:text-white
                    "
                  >
                    [info@votixsystems.com]
                  </a>
                </dd>
              </div>
            </dl>

            {/* =====================================
                SOCIAL MEDIA
            ====================================== */}
            <div className="mt-8 flex items-center gap-3">
              {[
                {
                  Icon: LinkedinIcon,
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com',
                },
                {
                  Icon: YoutubeIcon,
                  label: 'YouTube',
                  href: 'https://www.youtube.com',
                },
                {
                  Icon: InstagramIcon,
                  label: 'Instagram',
                  href: 'https://www.instagram.com',
                },
              ].map(
                ({
                  Icon,
                  label,
                  href,
                }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="
                      border
                      border-white/15
                      p-3
                      text-white/70
                      transition-all
                      duration-200
                      hover:border-[#F4B942]
                      hover:bg-[#F4B942]
                      hover:text-[#071525]
                    "
                  >
                    <Icon
                      className="h-4 w-4"
                      aria-hidden
                    />
                  </a>
                )
              )}
            </div>
          </div>

          {/* =====================================
              FOOTER NAVIGATION
          ====================================== */}
          <div
            className="
              grid
              gap-x-8
              md:grid-cols-3
              md:gap-y-12
              lg:grid-cols-3
            "
          >
            {columns.map((col) => (
              <FooterColumn
                key={col.title}
                {...col}
              />
            ))}
          </div>
        </div>

        {/* =====================================
            BOTTOM FOOTER
        ====================================== */}
        <div
          className="
            mt-14
            flex
            flex-col
            gap-6
            border-t
            border-white/10
            pt-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* Legal Links */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-2
              text-[12px]
              text-white/50
            "
          >
            <Link
              to="/contact"
              className="
                transition-colors
                hover:text-white
              "
            >
              Privacy policy
            </Link>

            <Link
              to="/contact"
              className="
                transition-colors
                hover:text-white
              "
            >
              Terms & conditions
            </Link>

            <Link
              to="/contact"
              className="
                transition-colors
                hover:text-white
              "
            >
              Cookie settings
            </Link>

            <span>
              © {new Date().getFullYear()} Votix
              Systems. All rights reserved.
            </span>
          </div>

          {/* Request Quote */}
          <Link
            to="/quote"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-[12px]
              font-medium
              uppercase
              tracking-[0.14em]
              text-white
              transition-colors
              hover:text-[#F4B942]
            "
          >
            Request a quote

            <ArrowUpRightIcon
              className="
                h-4
                w-4
                transition-transform
                duration-200
                ease-expo
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}