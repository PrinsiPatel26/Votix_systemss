export interface Spec {
  label: string;
  value: string;
}

export interface Advantage {
  title: string;
  text: string;
}

export interface Download {
  name: string;
  format: string;
  size: string;
}

export interface Product {
  slug: string;
  index: string;
  name: string;
  shortName: string;
  family: 'Agitators' | 'Mixers' | 'Systems';
  tagline: string;
  summary: string;
  image: string;
  overview: string[];
  applications: string[];
  specs: Spec[];
  advantages: Advantage[];
  configurations: string[];
  materials: string[];
  driveOptions: string[];
  sealOptions: string[];
  industries: string[];
  downloads: Download[];
  related: string[];
  /** Configurator matching keys */
  match: {
    applications: string[];
    vessels: string[];
    capacity: string[];
    viscosity: string[];
    industries: string[];
  };
}

export interface Industry {
  slug: string;
  index: string;
  name: string;
  summary: string;
  image: string;
  /** editorial tile weight in the asymmetric industries layout */
  span: 'feature' | 'tall' | 'wide' | 'standard';
  challenges: string[];
  requirements: string[];
  technologies: string[];
  applications: string[];
  capabilities: Advantage[];
  caseStudy?: string;
}

export interface CaseStudy {
  slug: string;
  industry: string;
  industrySlug: string;
  title: string;
  location: string;
  year: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: Spec[];
  technical: Spec[];
  products: string[];
}

export interface Insight {
  slug: string;
  category: 'Industry News' | 'Technical Articles' | 'Case Studies' | 'Product Updates' | 'Engineering Guides' | 'Tutorials';
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  image: string;
  body: string[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Service {
  index: string;
  name: string;
  summary: string;
  image: string;
  deliverables: string[];
}