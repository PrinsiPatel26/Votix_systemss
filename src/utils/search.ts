import { products } from '../data/products';
import { industries } from '../data/industries';
import { insights } from '../data/insights';
import { caseStudies } from '../data/caseStudies';

export interface SearchResult {
  group: 'Products' | 'Industries' | 'Resources';
  title: string;
  meta: string;
  to: string;
}

const index: SearchResult[] = [
...products.map((p) => ({
  group: 'Products' as const,
  title: p.name,
  meta: `${p.family} — ${p.tagline}`,
  to: `/products/${p.slug}`,
  haystack: `${p.name} ${p.family} ${p.tagline} ${p.summary} ${p.applications.join(' ')} ${p.match.applications.join(' ')}`
})),
...industries.map((i) => ({
  group: 'Industries' as const,
  title: i.name,
  meta: i.summary,
  to: `/industries/${i.slug}`,
  haystack: `${i.name} ${i.summary} ${i.applications.join(' ')} ${i.requirements.join(' ')}`
})),
...insights.map((a) => ({
  group: 'Resources' as const,
  title: a.title,
  meta: a.category,
  to: `/insights/${a.slug}`,
  haystack: `${a.title} ${a.category} ${a.excerpt}`
})),
...caseStudies.map((c) => ({
  group: 'Resources' as const,
  title: c.title,
  meta: `Case study — ${c.industry}`,
  to: `/case-studies/${c.slug}`,
  haystack: `${c.title} ${c.industry} ${c.challenge} ${c.solution}`
}))].
map((entry) => ({ ...entry, haystack: entry.haystack.toLowerCase() })) as Array<SearchResult & {haystack: string;}>;

export function search(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const terms = q.split(/\s+/);
  return (index as Array<SearchResult & {haystack: string;}>).
  filter((entry) => terms.every((t) => entry.haystack.includes(t))).
  slice(0, 9).
  map(({ group, title, meta, to }) => ({ group, title, meta, to }));
}