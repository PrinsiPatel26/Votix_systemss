import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { Introduction } from '../components/Introduction/Introduction';
import { ImageBreak } from '../components/ImageBreak/ImageBreak';
import { ProductShowcase } from '../components/ProductShowcase/ProductShowcase';
import { ProductExplorer } from '../components/ProductExplorer/ProductExplorer';
import { IndustryShowcase } from '../components/IndustryShowcase/IndustryShowcase';
import { EngineeringSection } from '../components/EngineeringSection/EngineeringSection';
import { EngineeringProcess } from '../components/EngineeringProcess/EngineeringProcess';
import { Stats } from '../components/Stats/Stats';
import { Manufacturing } from '../components/Manufacturing/Manufacturing';
import { CaseStudiesSection } from '../components/CaseStudy/CaseStudiesSection';
import { VirtualShowroom } from '../components/VirtualShowroom/VirtualShowroom';
import { GlobalMap } from '../components/GlobalMap/GlobalMap';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { InsightsSection } from '../components/Insights/InsightsSection';
import { FAQ } from '../components/FAQ/FAQ';
import { QuoteForm } from '../components/QuoteForm/QuoteForm';
import { ContactSection } from '../components/ContactForm/ContactSection';
import { Configurator } from '../components/Configurator/Configurator';
import { WhyChooseUs } from '../components/WhyChooseUs/WhyChooseUs';
import { useSeo } from '../hooks/useSeo';
import { media } from '../data/media';

export function Home() {
  useSeo({
    title: 'Industrial agitators, mixers and mixing systems',
    description:
    'HELICON engineers industrial agitators, mixers and complete mixing systems for food, pharmaceutical, chemical, energy and environmental processes — designed around your process, verified before manufacture.',
    path: '/',
    image: media.heroAgitator,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'HELICON Mixing Technology',
      url: 'https://www.helicon-mixing.com',
      description: 'Industrial agitators, mixers, mixing systems and process engineering.',
      address: { '@type': 'PostalAddress', addressCountry: 'NL', addressLocality: 'Rotterdam' }
    }
  });

  return (
    <>
      <Hero />
      <Introduction />
      <ImageBreak />
      <ProductShowcase />
      <ProductExplorer />
      <Configurator />
      <IndustryShowcase />
      <EngineeringSection />
      <EngineeringProcess />
      <Stats />
      <Manufacturing />
      <CaseStudiesSection />
      <VirtualShowroom />
      <GlobalMap />
      <Testimonials />
      <WhyChooseUs />
      <InsightsSection />
      <FAQ />
      <QuoteForm />
      <ContactSection />
    </>);

}