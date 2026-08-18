import { media } from './media';
import type { CaseStudy } from '../types/content';

export const caseStudies: CaseStudy[] = [
{
  slug: 'high-purity-api-mixing',
  industry: 'Pharmaceutical',
  industrySlug: 'pharmaceutical',
  title: 'Optimising mixing performance for high-purity production',
  location: 'Ireland',
  year: '2025',
  image: media.industryPharma,
  challenge:
  'A sterile API facility was losing batch time to extended cleaning validation on four formulation vessels. The existing top-mounted units required disassembly between campaigns and the seal arrangement was a recurring deviation source.',
  solution:
  'We replaced the top-entry drives with hermetically coupled magnetic mixers, redesigning the vessel bottom interface for full drainage and verified spray coverage. Impeller geometry was re-sized to hold the same blend time at lower tip speed.',
  result:
  'Cleaning validation moved to a documented CIP cycle without disassembly, seal-related deviations were eliminated, and residual batch volume dropped sharply thanks to the low-clearance impeller position.',
  metrics: [
  { label: 'Cleaning cycle', value: '−[42]%' },
  { label: 'Seal deviations', value: '[0] per year' },
  { label: 'Residual volume', value: '−[68]%' }],

  technical: [
  { label: 'Technology', value: 'Magnetic mixers, 4 units' },
  { label: 'Vessel volume', value: '4 × 6 m³' },
  { label: 'Wetted material', value: '1.4435, Ra ≤ 0.25 µm' },
  { label: 'Sterilisation', value: 'SIP at 135 °C' }],

  products: ['magnetic-mixers', 'custom-mixing-systems']
},
{
  slug: 'homogenisation-efficiency-chemical',
  industry: 'Chemical',
  industrySlug: 'chemical',
  title: 'Improving homogenisation efficiency in a solvent reactor train',
  location: 'Germany',
  year: '2025',
  image: media.industryChemical,
  challenge:
  'Inconsistent product quality was traced to incomplete homogenisation in three 40 m³ reactors. Increasing speed on the existing turbines raised power draw without solving stratification near the vessel bottom.',
  solution:
  'CFD analysis of the existing geometry revealed a stagnant lower zone. We designed a dual hydrofoil arrangement with a repositioned lower impeller and added a baffle package, then verified blend time in a scaled pilot vessel.',
  result:
  'Stratification was eliminated across the full batch range and absorbed power fell despite the improved flow pattern, because the new geometry converted torque into pumping rather than local shear.',
  metrics: [
  { label: 'Blend time', value: '−[35]%' },
  { label: 'Absorbed power', value: '−[18]%' },
  { label: 'Off-spec batches', value: '−[90]%' }],

  technical: [
  { label: 'Technology', value: 'Top entry agitators, 3 units' },
  { label: 'Vessel volume', value: '3 × 40 m³' },
  { label: 'Drive', value: '30 kW bevel gear, VFD' },
  { label: 'Verification', value: 'CFD + pilot trial' }],

  products: ['top-entry-agitators', 'special-agitators']
},
{
  slug: 'batch-time-reduction-food',
  industry: 'Food & Beverage',
  industrySlug: 'food-beverage',
  title: 'Reducing mixing time in large-scale sauce production',
  location: 'Netherlands',
  year: '2024',
  image: media.industryFood,
  challenge:
  'A high-volume sauce line was constrained by powder hydration time. Operators dosed thickener manually into batch vessels, causing lumps, rework and an unpredictable cycle time.',
  solution:
  'An inline rotor-stator mixer with a powder induction hopper was installed in a recirculation loop, combined with a re-profiled vessel impeller to maintain gentle bulk turnover for the inclusions.',
  result:
  'Hydration became a single-pass operation with repeatable viscosity, and the line gained additional batches per shift without extending the existing vessel capacity.',
  metrics: [
  { label: 'Hydration time', value: '−[55]%' },
  { label: 'Batches per shift', value: '+[3]' },
  { label: 'Rework', value: '−[80]%' }],

  technical: [
  { label: 'Technology', value: 'Inline mixer with powder induction' },
  { label: 'Flow rate', value: '60 m³/h' },
  { label: 'Connections', value: 'DN 100 tri-clamp' },
  { label: 'Cleaning', value: 'CIP in place' }],

  products: ['inline-mixers', 'top-entry-agitators']
},
{
  slug: 'digester-suspension-biogas',
  industry: 'Environmental',
  industrySlug: 'environmental',
  title: 'Efficient suspension for anaerobic digestion tanks',
  location: 'Denmark',
  year: '2024',
  image: media.industryBiogas,
  challenge:
  'Two 3,000 m³ digesters suffered floating layer formation and fibrous wrap-up on the existing mixers, forcing frequent manual intervention and unstable gas yield.',
  solution:
  'Side entry units with non-clogging propeller profiles were positioned from a CFD flow study, and the mixing regime was changed from continuous to an optimised intermittent cycle controlled by the plant PLC.',
  result:
  'Floating layers no longer form, manual interventions stopped, and specific mixing energy per cubic metre of substrate fell substantially while gas yield stabilised.',
  metrics: [
  { label: 'Mixing energy', value: '−[46]%' },
  { label: 'Manual interventions', value: '[0] per month' },
  { label: 'Gas yield stability', value: '+[12]%' }],

  technical: [
  { label: 'Technology', value: 'Side entry agitators, 6 units' },
  { label: 'Tank volume', value: '2 × 3,000 m³' },
  { label: 'Drive', value: '15 kW, VFD, ATEX' },
  { label: 'Control', value: 'Intermittent cycle via PLC' }],

  products: ['side-entry-agitators', 'custom-mixing-systems']
}];


export const getCaseStudy = (slug?: string) => caseStudies.find((c) => c.slug === slug);