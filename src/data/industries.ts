import { media } from './media';
import type { Industry } from '../types/content';

export const industries: Industry[] = [
{
  slug: 'pharmaceutical',
  index: '01',
  name: 'Pharmaceutical',
  summary: 'Sterile, containment-critical mixing with full qualification documentation.',
  image: media.industryPharma,
  span: 'feature',
  challenges: [
  'Zero tolerance for contamination or cross-batch carry-over',
  'Cleaning and sterilisation must be validated, not assumed',
  'Shear-sensitive actives degrade under uncontrolled energy input',
  'Every component requires material traceability'],

  requirements: [
  'Crevice-free wetted geometry with defined drainage',
  'Ra ≤ 0.4 µm surfaces, electropolishing on request',
  'CIP and SIP capability at 135 °C',
  'Hermetic sealing or double seals with sterile barrier',
  'Documented IQ/OQ support and FAT protocols'],

  technologies: ['magnetic-mixers', 'bottom-entry-agitators', 'custom-mixing-systems'],
  applications: [
  'Buffer and media preparation',
  'API crystallisation',
  'Sterile formulation and hold',
  'Vaccine and biologics processing',
  'Ointment and suspension manufacture'],

  capabilities: [
  { title: 'Qualification support', text: 'Documentation packs aligned to your validation master plan.' },
  { title: 'Material traceability', text: '3.1 certificates and delta ferrite records for all wetted parts.' },
  { title: 'Riboflavin testing', text: 'Spray coverage and cleanability verified before shipment.' }],

  caseStudy: 'high-purity-api-mixing'
},
{
  slug: 'chemical',
  index: '02',
  name: 'Chemical',
  summary: 'Aggressive media, high pressures and continuous duty cycles.',
  image: media.industryChemical,
  span: 'tall',
  challenges: [
  'Corrosive and abrasive process media',
  'Wide viscosity swings during reaction',
  'Explosive atmospheres requiring ATEX compliance',
  'Continuous operation with minimal maintenance windows'],

  requirements: [
  'Alloy and lined material options',
  'Reactor-rated seals for pressure and vacuum',
  'Shaft dynamics verified against nozzle load limits',
  'ATEX certified drives and monitoring'],

  technologies: ['top-entry-agitators', 'special-agitators', 'side-entry-agitators'],
  applications: ['Reaction and polymerisation', 'Neutralisation', 'Solvent blending', 'Crystallisation', 'Gas–liquid contacting'],
  capabilities: [
  { title: 'Corrosion engineering', text: 'Material selection reviewed against your full media matrix.' },
  { title: 'ATEX compliance', text: 'Zone-appropriate drives, seals and monitoring instrumentation.' },
  { title: 'Reactor integration', text: 'Nozzle and flange design coordinated with your vessel maker.' }],

  caseStudy: 'homogenisation-efficiency-chemical'
},
{
  slug: 'food-beverage',
  index: '03',
  name: 'Food & Beverage',
  summary: 'Hygienic design, fast changeover, gentle product handling.',
  image: media.industryFood,
  span: 'wide',
  challenges: [
  'Frequent recipe changeover and cleaning cycles',
  'Shear-sensitive textures and inclusions',
  'Powder wetting without lump formation',
  'Tight batch time targets on high-volume lines'],

  requirements: [
  'EHEDG-oriented hygienic geometry',
  'Food contact materials with declarations',
  'CIP without disassembly',
  'Controlled shear profiles for texture retention'],

  technologies: ['inline-mixers', 'top-entry-agitators', 'high-shear-mixers'],
  applications: ['Sauces and dressings', 'Beverage blending', 'Powder hydration', 'Syrup and concentrate prep', 'Starch slurries'],
  capabilities: [
  { title: 'Batch time reduction', text: 'Blend time measured and re-engineered against your current baseline.' },
  { title: 'Texture protection', text: 'Impeller geometry that moves volume without damaging structure.' },
  { title: 'Line integration', text: 'Retrofit design that fits existing vessels and pipe runs.' }],

  caseStudy: 'batch-time-reduction-food'
},
{
  slug: 'dairy',
  index: '04',
  name: 'Dairy',
  summary: 'Sanitary mixing for high-volume continuous processing.',
  image: media.industryDairy,
  span: 'tall',
  challenges: [
  'Protein fouling on heat transfer surfaces',
  'Very high daily cleaning frequency',
  'Air entrainment causing foaming losses',
  'Continuous operation across long production windows'],

  requirements: [
  'Sanitary seals with condensate management',
  'Low-shear bulk flow to avoid fat damage',
  'Full CIP compatibility with verified coverage',
  'Foam-avoiding impeller placement'],

  technologies: ['inline-mixers', 'bottom-entry-agitators', 'top-entry-agitators'],
  applications: ['Milk standardisation', 'Yoghurt and cultured products', 'Cheese milk preparation', 'Milk powder recombination', 'Cream blending'],
  capabilities: [
  { title: 'Foam control', text: 'Submergence and geometry chosen to avoid surface vortexing.' },
  { title: 'Fouling mitigation', text: 'Surface renewal strategy for jacketed and coil vessels.' },
  { title: 'Silo retrofits', text: 'Side and bottom entry solutions for existing tank farms.' }]

},
{
  slug: 'biotechnology',
  index: '05',
  name: 'Biotechnology',
  summary: 'Oxygen transfer and cell-friendly hydrodynamics.',
  image: media.industryPharma,
  span: 'standard',
  challenges: [
  'Balancing oxygen transfer against shear damage',
  'Scale-up from bench to production volumes',
  'Sterility across long fermentation campaigns',
  'Crowded vessel heads with dense instrumentation'],

  requirements: [
  'kLa-optimised impeller systems',
  'Sterile double seals with steam barrier',
  'Bottom entry to free the vessel head',
  'Scale-up correlations verified in pilot tests'],

  technologies: ['bottom-entry-agitators', 'magnetic-mixers', 'custom-mixing-systems'],
  applications: ['Microbial fermentation', 'Cell culture', 'Harvest and clarification', 'Precision fermentation', 'Enzyme production'],
  capabilities: [
  { title: 'Oxygen transfer studies', text: 'kLa measurement and impeller comparison in pilot vessels.' },
  { title: 'Shear mapping', text: 'CFD assessment of local shear rates against cell tolerance.' },
  { title: 'Scale-up support', text: 'Geometric and dynamic similarity across your vessel train.' }]

},
{
  slug: 'cosmetics',
  index: '06',
  name: 'Cosmetics',
  summary: 'Stable emulsions with repeatable rheology, batch after batch.',
  image: media.industryCosmetics,
  span: 'standard',
  challenges: [
  'Emulsion stability across shelf life',
  'High viscosity with poor heat transfer',
  'Vacuum processing to avoid air inclusion',
  'Frequent product changeover in small batches'],

  requirements: [
  'Coaxial scraper plus high-shear combination',
  'Vacuum-rated seals and vessel integration',
  'Defined droplet size targets validated in pilot',
  'Fast, tool-light cleaning access'],

  technologies: ['high-shear-mixers', 'special-agitators', 'inline-mixers'],
  applications: ['Creams and lotions', 'Gels and serums', 'Shampoo and surfactants', 'Colour cosmetics', 'Sunscreen emulsions'],
  capabilities: [
  { title: 'Droplet engineering', text: 'Screen and tip speed matched to your target distribution.' },
  { title: 'Vacuum emulsification', text: 'Complete de-aerated processing arrangements.' },
  { title: 'Recipe transfer', text: 'Repeatability verified across vessel sizes.' }]

},
{
  slug: 'petrochemical',
  index: '07',
  name: 'Petrochemical',
  summary: 'Large-volume blending and sediment control in storage.',
  image: media.industryChemical,
  span: 'standard',
  challenges: [
  'Sediment build-up in crude and fuel storage',
  'Very large tank diameters',
  'Hazardous area classification throughout',
  'Long maintenance intervals between shutdowns'],

  requirements: [
  'Side entry units with adjustable swivel',
  'On-line seal replacement capability',
  'ATEX drives with condition monitoring',
  'Retrofit-compatible nozzle interfaces'],

  technologies: ['side-entry-agitators', 'special-agitators', 'top-entry-agitators'],
  applications: ['Crude oil homogenisation', 'Fuel and additive blending', 'Sludge suppression', 'Wax control', 'Additive dosing'],
  capabilities: [
  { title: 'Tank flow studies', text: 'CFD mapping of sediment zones before unit placement.' },
  { title: 'On-line service', text: 'Seal exchange designs that avoid emptying the tank.' },
  { title: 'Condition monitoring', text: 'Vibration and temperature instrumentation packages.' }]

},
{
  slug: 'energy',
  index: '08',
  name: 'Energy',
  summary: 'Slurry handling and desulphurisation duties at plant scale.',
  image: media.industryEnergy,
  span: 'wide',
  challenges: [
  'Highly abrasive limestone and gypsum slurries',
  'Continuous operation with no downtime allowance',
  'Very large basin volumes',
  'Aggressive pH conditions'],

  requirements: [
  'Abrasion resistant materials and coatings',
  'Robust drive trains with long bearing life',
  'Suspension verified at minimum settling velocity',
  'Serviceable arrangements for live plants'],

  technologies: ['side-entry-agitators', 'top-entry-agitators', 'custom-mixing-systems'],
  applications: ['FGD absorber recirculation', 'Limestone slurry preparation', 'Gypsum dewatering feed', 'Ash slurry handling', 'Thermal storage'],
  capabilities: [
  { title: 'Wear engineering', text: 'Material and geometry selection based on measured abrasivity.' },
  { title: 'Availability focus', text: 'Designs targeting multi-year intervals between interventions.' },
  { title: 'Retrofit upgrades', text: 'Drop-in replacements for aged equipment from any maker.' }]

},
{
  slug: 'environmental',
  index: '09',
  name: 'Environmental',
  summary: 'Water, effluent and biogas mixing with energy efficiency in focus.',
  image: media.industryBiogas,
  span: 'standard',
  challenges: [
  'Fibrous and stringy material causing wrap-up',
  'Energy consumption dominating operating cost',
  'Variable feedstock composition',
  'Difficult access for maintenance'],

  requirements: [
  'Non-clogging propeller geometry',
  'Energy-optimised intermittent mixing regimes',
  'Corrosion protection for biogas atmospheres',
  'Removable units for in-service maintenance'],

  technologies: ['side-entry-agitators', 'top-entry-agitators', 'custom-mixing-systems'],
  applications: ['Anaerobic digestion', 'Sludge homogenisation', 'Flocculation basins', 'Equalisation tanks', 'Leachate treatment'],
  capabilities: [
  { title: 'Energy studies', text: 'Mixing regime optimisation to cut specific power consumption.' },
  { title: 'Anti-clogging design', text: 'Propeller profiles tested against fibrous feedstock.' },
  { title: 'In-service removal', text: 'Guide rail systems for maintenance without draining.' }],

  caseStudy: 'digester-suspension-biogas'
}];


export const getIndustry = (slug?: string) => industries.find((i) => i.slug === slug);