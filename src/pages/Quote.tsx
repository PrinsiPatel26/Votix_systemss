import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { QuoteForm } from '../components/QuoteForm/QuoteForm';
import { FAQ } from '../components/FAQ/FAQ';
import { useSeo } from '../hooks/useSeo';
import { media } from '../data/media';

export function Quote() {
  useSeo({
    title: 'Request a quote — Engineering review of your process',
    description:
    'Request a quotation for industrial agitators, mixers or complete mixing systems. Five short steps, reviewed personally by an engineering specialist.',
    path: '/quote',
    image: media.productTopEntry
  });

  return (
    <>
      <PageHero
        eyebrow="09 / Request a quote"
        title={'Let’s engineer\nyour solution'}
        intro="Five steps, roughly three minutes. The process detail you provide is what allows an engineer to answer with real numbers instead of a price range."
        trail={[{ label: 'Home', to: '/' }, { label: 'Request a quote' }]}
        meta={[
        { label: 'Reviewed by', value: 'Process engineering specialist' },
        { label: 'Typical response', value: 'Within [1–2] working days' }]
        } />
      

      <QuoteForm compact />
      <FAQ />
    </>);

}