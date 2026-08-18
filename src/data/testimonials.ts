import { media } from './media';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  country: string;
  image: string;
}

export const testimonials: Testimonial[] = [
{
  quote:
  'They arrived with measurement equipment before they arrived with a proposal. That is unusual, and it is why the installed result matched the calculation.',
  name: 'Dr. Anna Weiss',
  role: 'Head of Process Engineering',
  company: '[Client name]',
  industry: 'Pharmaceutical',
  country: 'Germany',
  image: media.industryPharma
},
{
  quote:
  'The pilot trial changed our specification completely. We would have bought twice the installed power we actually needed.',
  name: 'Marc Dubois',
  role: 'Plant Manager',
  company: '[Client name]',
  industry: 'Chemical',
  country: 'France',
  image: media.industryChemical
},
{
  quote:
  'Our sauce line gained three batches per shift without a single additional vessel. The payback was measured in months.',
  name: 'Sanne de Vries',
  role: 'Operations Director',
  company: '[Client name]',
  industry: 'Food & Beverage',
  country: 'Netherlands',
  image: media.industryFood
},
{
  quote:
  'Six mixers, two digesters, and no manual intervention since commissioning. Their flow study was worth more than the hardware.',
  name: 'Lars Jensen',
  role: 'Technical Lead',
  company: '[Client name]',
  industry: 'Biogas',
  country: 'Denmark',
  image: media.industryBiogas
}];


export const globalRegions = [
{
  id: 'europe',
  name: 'Europe',
  x: 57,
  y: 19,
  detail: 'Engineering headquarters, manufacturing, test centre and service network across [12] countries.',
  offices: ['[Rotterdam] — Headquarters', '[Hamburg] — Engineering', '[Milan] — Service']
},
{
  id: 'asia',
  name: 'Asia',
  x: 78,
  y: 28,
  detail: 'Regional engineering and assembly support for food, chemical and pharmaceutical clients.',
  offices: ['[Singapore] — Regional office', '[Shanghai] — Assembly & service']
},
{
  id: 'middle-east',
  name: 'Middle East',
  x: 67,
  y: 36,
  detail: 'Project engineering and site services for petrochemical and water treatment installations.',
  offices: ['[Dubai] — Project office']
},
{
  id: 'north-america',
  name: 'North America',
  x: 26,
  y: 20,
  detail: 'Sales, application engineering and spare parts stock for the North American process industry.',
  offices: ['[Chicago] — Application engineering', '[Toronto] — Service partner']
},
{
  id: 'south-america',
  name: 'South America',
  x: 36,
  y: 65,
  detail: 'Representation and commissioning support for mining, food and biofuel processing.',
  offices: ['[São Paulo] — Representation']
},
{
  id: 'africa',
  name: 'Africa',
  x: 56,
  y: 52,
  detail: 'Project delivery and technical support for water treatment and mineral processing.',
  offices: ['[Casablanca] — Partner office', '[Johannesburg] — Service partner']
}];


export const companyStats = [
{ value: '[40+]', label: 'Years of engineering' },
{ value: '[10K+]', label: 'Systems engineered' },
{ value: '[50+]', label: 'Countries served' },
{ value: '[100+]', label: 'Custom projects per year' },
{ value: '[24/7]', label: 'Technical support' }];