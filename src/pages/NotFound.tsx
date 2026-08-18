import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { ActionLink } from '../components/ui/Primitives';
import { useSeo } from '../hooks/useSeo';

export function NotFound() {
  const navigate = useNavigate();
  useSeo({
    title: 'Page not found',
    description: 'The requested page could not be found.',
    path: '/404'
  });

  return (
    <section className="flex min-h-[70vh] w-full items-center bg-white pt-[104px]">
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <p className="text-[11px] uppercase tracking-label text-accent">Error 404</p>
        <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-ink">
          This page is not
          <br />
          in our documentation.
        </h1>
        <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-graphite">
          The page may have been moved or renamed. Start from the product families, or go back to where you were.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ActionLink to="/products">Explore products</ActionLink>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 border border-line px-7 py-4 text-[13px] font-medium uppercase tracking-[0.12em] text-ink transition-colors duration-200 hover:border-ink">
            
            <ArrowLeftIcon className="h-4 w-4" aria-hidden />
            Go back
          </button>
        </div>
      </div>
    </section>);

}