import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  structuredData?: Record<string, unknown>;
}

const SITE = 'HELICON Mixing Technology';
const ORIGIN = 'https://www.helicon-mixing.com';

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/** Sets per-route title, meta description, OpenGraph tags, canonical URL and JSON-LD. */
export function useSeo({ title, description, path, image, type = 'website', structuredData }: SeoOptions) {
  useEffect(() => {
    const fullTitle = path === '/' ? `${SITE} — Engineered to mix. Built to perform.` : `${title} | ${SITE}`;
    document.title = fullTitle;

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: ORIGIN + path });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    if (image) {
      upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
      upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });
    }
    upsertLink('canonical', ORIGIN + path);

    const scriptId = 'route-structured-data';
    document.getElementById(scriptId)?.remove();
    const data =
    structuredData ?? {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE,
      url: ORIGIN,
      description
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = scriptId;
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }, [title, description, path, image, type, structuredData]);
}