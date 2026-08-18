import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon, DownloadIcon } from 'lucide-react';
import { getProduct, products } from '../data/products';
import { industries } from '../data/industries';
import { PageHero } from '../components/ui/PageHero';
import { Reveal, ActionLink, WordReveal } from '../components/ui/Primitives';
import { NotFound } from './NotFound';
import { useSeo } from '../hooks/useSeo';

function ListBlock({ title, items, index }: {title: string;items: string[];index: string;}) {
  return (
    <div>
      <div className="flex items-baseline gap-3 border-t border-line pt-4">
        <span className="text-[11px] tabular-nums text-accent">{index}</span>
        <h3 className="text-[11px] font-medium uppercase tracking-label text-ink">{title}</h3>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((item) =>
        <li key={item} className="flex gap-3 text-[14px] leading-snug text-graphite">
            <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
            {item}
          </li>
        )}
      </ul>
    </div>);

}

export function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);

  useSeo({
    title: product ? `${product.name} — ${product.tagline}` : 'Product not found',
    description: product?.summary ?? 'Product not found',
    path: `/products/${slug}`,
    image: product?.image,
    structuredData: product ?
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.summary,
      category: product.family,
      brand: { '@type': 'Brand', name: 'HELICON Mixing Technology' }
    } :
    undefined
  });

  if (!product) return <NotFound />;

  const relatedIndustries = industries.filter((i) => product.industries.includes(i.slug));
  const related = product.related.map((r) => products.find((p) => p.slug === r)!).filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow={`${product.index} / ${product.family}`}
        title={product.name}
        intro={product.tagline}
        trail={[{ label: 'Home', to: '/' }, { label: 'Products', to: '/products' }, { label: product.name }]}
        meta={[
        { label: 'Power range', value: product.specs[0].value },
        { label: 'Certification', value: product.specs[product.specs.length - 1].value }]
        } />
      

      {/* Product visual + overview */}
      <section className="w-full bg-white py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="mx-auto grid max-w-content gap-10 px-6 md:px-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
          <div className="bg-paper p-6 md:p-10">
            <img
              src={product.image}
              alt={`${product.name} — industrial catalogue photograph on white background`}
              className="h-full max-h-[520px] w-full object-contain" />
            
          </div>
          <div>
            <h2 className="text-[11px] font-medium uppercase tracking-label text-steel">Overview</h2>
            {product.overview.map((para, i) =>
            <p key={i} className={i === 0 ? 'mt-5 text-[16.5px] leading-relaxed text-ink' : 'mt-5 text-[15px] leading-relaxed text-graphite'}>
                {para}
              </p>
            )}
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <ListBlock index="01" title="Applications" items={product.applications} />
              <ListBlock index="02" title="Available configurations" items={product.configurations} />
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ActionLink to="/quote">Request a quote</ActionLink>
              <ActionLink to="/contact" variant="outline" arrow={false}>
                Ask an engineer
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      {/* Technical specifications */}
      <section className="w-full bg-paper py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <WordReveal
            as="h2"
            text="Technical specifications"
            className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-[-0.025em] text-ink" />
          
          <div className="no-scrollbar mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <caption className="sr-only">Technical specifications for {product.name}</caption>
              <tbody>
                {product.specs.map((s) =>
                <tr key={s.label} className="border-b border-line">
                    <th scope="row" className="w-1/2 py-4 pr-6 text-[11px] font-medium uppercase tracking-label text-steel">
                      {s.label}
                    </th>
                    <td className="py-4 text-[15px] text-ink">{s.value}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <ListBlock index="03" title="Materials" items={product.materials} />
            <ListBlock index="04" title="Drive options" items={product.driveOptions} />
            <ListBlock index="05" title="Seal options" items={product.sealOptions} />
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="w-full bg-white py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <WordReveal
            as="h2"
            text="Engineering advantages"
            className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-[-0.025em] text-ink" />
          
          <ul className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {product.advantages.map((a, i) =>
            <Reveal key={a.title} delay={i * 0.05} className="border-t border-line pt-5">
                <h3 className="font-display text-[20px] font-semibold text-ink">{a.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-graphite">{a.text}</p>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      {/* Industries + downloads */}
      <section className="w-full bg-paper py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="mx-auto grid max-w-content gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-[11px] font-medium uppercase tracking-label text-steel">Industries</h2>
            <ul className="mt-6">
              {relatedIndustries.map((ind) =>
              <li key={ind.slug}>
                  <Link
                  to={`/industries/${ind.slug}`}
                  className="group flex items-center justify-between gap-4 border-b border-line py-4">
                  
                    <span className="font-display text-[19px] font-medium text-ink">{ind.name}</span>
                    <ArrowRightIcon
                    className="h-4 w-4 text-steel transition-all duration-200 ease-expo group-hover:translate-x-1 group-hover:text-accent"
                    aria-hidden />
                  
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-medium uppercase tracking-label text-steel">Downloads</h2>
            <ul className="mt-6">
              {product.downloads.map((d) =>
              <li key={d.name}>
                  <a
                  href="/quote"
                  className="group flex items-center justify-between gap-4 border-b border-line py-4"
                  aria-label={`${d.name} — request via quotation form`}>
                  
                    <span>
                      <span className="block text-[15px] text-ink">{d.name}</span>
                      <span className="mt-1 block text-[11px] uppercase tracking-label text-steel">
                        {d.format} · {d.size}
                      </span>
                    </span>
                    <DownloadIcon
                    className="h-4 w-4 shrink-0 text-steel transition-colors duration-200 group-hover:text-accent"
                    aria-hidden />
                  
                  </a>
                </li>
              )}
            </ul>
            <p className="mt-4 text-[12px] leading-relaxed text-steel">
              Documentation is released on request so we can send the revision that matches your specification.
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="w-full bg-white py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="flex items-end justify-between gap-6 border-t border-line pt-6">
            <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-semibold tracking-[-0.02em] text-ink">
              Related technology
            </h2>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:text-accent">
              
              All products
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r) =>
            <li key={r.slug} className="border border-line">
                <Link to={`/products/${r.slug}`} className="group block">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-white">
                    <img
                    src={r.image}
                    alt={r.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 ease-expo group-hover:scale-[1.04]" />
                  
                  </div>
                  <div className="border-t border-line p-5">
                    <h3 className="font-display text-[19px] font-semibold text-ink">{r.name}</h3>
                    <p className="mt-2 text-[13.5px] leading-snug text-graphite">{r.tagline}</p>
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>
    </>);

}