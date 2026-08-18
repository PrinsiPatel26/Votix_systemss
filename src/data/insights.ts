import { media } from './media';
import type { Insight } from '../types/content';

export const insightCategories = [
'All',
'Industry News',
'Technical Articles',
'Case Studies',
'Product Updates',
'Engineering Guides',
'Tutorials'] as
const;

export const insights: Insight[] = [
{
  slug: 'selecting-the-right-impeller',
  category: 'Engineering Guides',
  title: 'Selecting the right impeller: flow versus shear',
  date: '2026-07-28',
  readingTime: '8 min',
  excerpt:
  'Most mixing problems are not power problems. They are geometry problems. A structured way to decide whether your duty needs pumping capacity or localised shear.',
  image: media.engineerInspecting,
  body: [
  'Impeller selection begins with a single question: does the process need bulk movement or energy concentration? Blending, suspension and heat transfer are pumping duties. Emulsification and dispersion are shear duties. Almost every specification error we review comes from applying one to the other.',
  'Axial hydrofoils convert a high share of shaft power into flow, which is what keeps solids suspended and heat transfer surfaces renewed. Radial turbines trade flow for shear rate, generating the local energy dissipation needed to break droplets or wet agglomerates.',
  'Where a process needs both, the correct answer is usually two geometries on one shaft rather than a compromise between them — a slow bulk impeller for turnover, and a high-shear stage sized on the target droplet distribution.',
  'The practical takeaway: define the mixing duty in measurable terms before selecting hardware. Blend time, settling velocity, required kLa or target particle size all lead to different geometries, and each can be verified in a pilot trial before capital is committed.']

},
{
  slug: 'cfd-in-mixing-design',
  category: 'Technical Articles',
  title: 'What CFD can and cannot tell you about a mixing vessel',
  date: '2026-06-14',
  readingTime: '11 min',
  excerpt:
  'Simulation is a powerful design instrument and a poor substitute for measurement. Where the models are reliable, and where pilot testing remains essential.',
  image: media.cfdEngineering,
  body: [
  'CFD is exceptionally good at revealing flow structure: dead zones, short-circuiting, surface vortexing and the distribution of shear inside a vessel. These are the insights that let us reposition an impeller instead of adding installed power.',
  'It is much weaker on multiphase behaviour with strong coupling — dense suspensions, gas hold-up at high superficial velocities, and non-Newtonian media whose rheology changes during the batch. Here simulation narrows the design space rather than confirming a result.',
  'Our practice is therefore hybrid. We simulate to choose between candidate geometries, then verify blend time, power number and mass transfer in a scaled pilot vessel before releasing the design for manufacture.']

},
{
  slug: 'hygienic-design-principles',
  category: 'Technical Articles',
  title: 'Hygienic design principles for agitated vessels',
  date: '2026-05-30',
  readingTime: '9 min',
  excerpt:
  'Cleanability is designed in, not cleaned in. Surface finish, drainage, radii and seal architecture decide whether a vessel can be validated.',
  image: media.industryPharma,
  body: [
  'A cleanable agitator has no crevices, no dead volume and no upward-facing horizontal surfaces in the wetted zone. Every internal radius is generous enough for spray impingement to reach it, and every geometry drains completely without manual assistance.',
  'Surface finish matters, but it is often over-specified while geometry is under-specified. An Ra of 0.25 µm cannot compensate for a shaft-to-impeller joint that traps product.',
  'Seal architecture is the decisive choice. Where containment or sterility is critical, removing the dynamic seal altogether with a magnetic coupling eliminates the highest-risk element rather than managing it.']

},
{
  slug: 'energy-optimisation-digesters',
  category: 'Case Studies',
  title: 'Cutting mixing energy in anaerobic digesters',
  date: '2026-05-08',
  readingTime: '6 min',
  excerpt:
  'Continuous mixing is rarely the optimum. How flow studies and an intermittent regime reduced specific mixing energy on a Danish biogas plant.',
  image: media.industryBiogas,
  body: [
  'Mixing in digesters is usually specified as continuous because it is simple to operate, not because the biology requires it. Substrate homogeneity has a time constant, and once it is reached, additional mixing only adds cost.',
  'By mapping flow patterns and identifying the point at which stratification returns, an intermittent cycle can maintain homogeneity with a fraction of the installed running hours.',
  'The same study allowed the propeller profile to be re-selected for fibrous feedstock, ending the wrap-up problem that previously required manual intervention.']

},
{
  slug: 'magnetic-mixer-range-update',
  category: 'Product Updates',
  title: 'Magnetic mixer range extended to 60 m³ vessels',
  date: '2026-04-22',
  readingTime: '4 min',
  excerpt:
  'A new bearing and rotor arrangement extends hermetic mixing into larger sterile buffer preparation volumes without raising particle generation.',
  image: media.productMagnetic,
  body: [
  'The extended range keeps the same wetted material specification and cleanability geometry while increasing transmissible torque, allowing hermetic mixing in vessels previously requiring a sealed bottom-entry unit.',
  'Retrofit kits are available for existing vessels with a compatible bottom flange, including drainage verification and riboflavin testing as part of the delivery.']

},
{
  slug: 'scale-up-fermentation',
  category: 'Tutorials',
  title: 'Scaling up fermentation without losing oxygen transfer',
  date: '2026-03-19',
  readingTime: '12 min',
  excerpt:
  'A step-by-step approach to holding kLa constant while respecting shear limits as vessel volume increases by two orders of magnitude.',
  image: media.testingRig,
  body: [
  'Geometric similarity alone does not preserve mass transfer. As volume increases, constant tip speed reduces specific power, while constant specific power raises tip speed and local shear — the classic scale-up conflict.',
  'The workable path is to fix the process requirement, usually kLa, and then solve for the impeller system that reaches it inside the shear tolerance of the organism, adjusting sparger design and gas flow together with the geometry.',
  'We recommend verifying each scale step in a pilot vessel instrumented for kLa measurement, so the correlation used for the next scale is your own data rather than a literature exponent.']

},
{
  slug: 'european-process-investment',
  category: 'Industry News',
  title: 'European process investment shifts toward retrofit efficiency',
  date: '2026-02-27',
  readingTime: '5 min',
  excerpt:
  'Capital is increasingly directed at improving existing assets rather than building new capacity. What this means for mixing equipment specification.',
  image: media.factoryWide,
  body: [
  'Across food, chemical and pharmaceutical production we see a clear move toward extracting more from installed vessels: shorter batch times, lower specific energy, and improved product consistency without new tanks.',
  'For mixing specification this raises the importance of retrofit compatibility — nozzle interfaces, headroom constraints and existing drive footprints become primary design inputs rather than afterthoughts.']

},
{
  slug: 'seal-selection-guide',
  category: 'Engineering Guides',
  title: 'Shaft seal selection: matching risk to architecture',
  date: '2026-01-30',
  readingTime: '7 min',
  excerpt:
  'From lip seals to hermetic couplings — a decision framework based on process risk, pressure and cleaning regime rather than purchase price.',
  image: media.qualityInspection,
  body: [
  'A seal is a risk decision. Atmospheric duties with benign media are well served by a lip seal or packing. Pressure, toxicity, sterility or emission limits move the choice toward double mechanical seals with a controlled barrier.',
  'The highest-risk cases justify removing the dynamic seal entirely. A magnetic coupling has no leakage path, no barrier fluid system and no wear-driven maintenance interval, at the cost of transmissible torque.',
  'Whichever architecture is selected, monitoring is what turns a good design into a reliable one: barrier pressure, temperature and leak detection all belong in the specification.']

}];


export const getInsight = (slug?: string) => insights.find((i) => i.slug === slug);