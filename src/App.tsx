import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { FloatingActions } from './components/FloatingActions/FloatingActions';
import { RouteCurtain, PageShell } from './components/ui/PageTransition';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Industries } from './pages/Industries';
import { IndustryDetail } from './pages/IndustryDetail';
import { Engineering } from './pages/Engineering';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { CaseStudiesPage } from './pages/CaseStudies';
import { CaseStudyDetail } from './pages/CaseStudyDetail';
import { Insights } from './pages/Insights';
import { InsightDetail } from './pages/InsightDetail';
import { Contact } from './pages/Contact';
import { Quote } from './pages/Quote';
import { NotFound } from './pages/NotFound';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);
  return null;
}

function Layout() {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-[13px] focus:text-white">
        
        Skip to content
      </a>
      <ScrollToTop />
      <RouteCurtain />
      <Navbar overHero={pathname === '/'} />
      <div id="main" className="flex-1">
        <PageShell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageShell>
      </div>
      <Footer />
      <FloatingActions />
    </div>);

}

export function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>);

}