import { media } from './media';
import type { Product } from '../types/content';

export const products: Product[] = [
{
  slug: 'top-entry-agitators',
  index: '01',
  name: 'Top Entry Agitators',
  shortName: 'Top Entry',
  family: 'Agitators',
  tagline: 'The reference solution for vertical process vessels',
  summary:
  'Vertically mounted agitators with bevel or helical gear drives, engineered around vessel geometry, batch behaviour and torque profile.',
  image: media.productTopEntry,
  overview: [
  'Top entry agitators are the most widely applied mixing configuration in process industry. The drive unit is mounted on the vessel head, transmitting torque through a rigid shaft to one or more impellers selected for the required flow regime.',
  'Every unit is dimensioned from the process backwards: impeller geometry, shaft diameter and critical speed, gearbox service factor, and nozzle loads are calculated for your specific fluid, vessel and duty cycle rather than taken from a fixed catalogue range.'],

  applications: [
  'Low to medium viscosity blending',
  'Solid suspension and dissolution',
  'Heat transfer support in jacketed vessels',
  'Gas dispersion in fermentation and oxidation',
  'Crystallisation with controlled shear'],

  specs: [
  { label: 'Power range', value: '0.12 – 250 kW' },
  { label: 'Shaft speed', value: '10 – 1,500 rpm' },
  { label: 'Vessel volume', value: '0.05 – 5,000 m³' },
  { label: 'Shaft length', value: 'up to 12,000 mm' },
  { label: 'Design pressure', value: 'vacuum – 25 bar' },
  { label: 'Design temperature', value: '−40 °C – 350 °C' },
  { label: 'Mounting', value: 'Flange, beam, lantern' },
  { label: 'Certification', value: 'CE, ATEX, ASME, GMP' }],

  advantages: [
  { title: 'Process-first sizing', text: 'Impeller and speed selected from the mixing duty, not from a fixed frame size.' },
  { title: 'Low nozzle loads', text: 'Shaft dynamics calculated to keep bending moments inside vessel design limits.' },
  { title: 'Serviceable in place', text: 'Cartridge seals and split couplings allow maintenance without removing the drive.' },
  { title: 'Energy optimised', text: 'Hydrofoil geometry delivers required flow at measurably lower absorbed power.' }],

  configurations: [
  'Single or multi-stage impellers',
  'Steady bearing or free-hanging shaft',
  'Removable shaft sections for low headroom',
  'Beam or flange mounted lantern',
  'Vessel-side baffle package',
  'Foldable impellers for small manways'],

  materials: ['1.4301 / AISI 304', '1.4404 / AISI 316L', '1.4462 duplex', '1.4539 / 904L', 'Hastelloy C-22', 'Titanium Gr. 2', 'Rubber and ECTFE lining'],
  driveOptions: [
  'Helical bevel gear unit',
  'Coaxial helical gear unit',
  'Direct drive with IE3/IE4 motor',
  'Variable frequency drive',
  'ATEX Ex d / Ex e motors',
  'Hydraulic drive for high torque'],

  sealOptions: [
  'Lip seal (atmospheric)',
  'Single mechanical cartridge seal',
  'Double mechanical seal with barrier fluid',
  'Gas-lubricated dry running seal',
  'Stuffing box with lantern ring',
  'Magnetic coupling (hermetic)'],

  industries: ['chemical', 'pharmaceutical', 'food-beverage', 'biotechnology', 'energy'],
  downloads: [
  { name: 'Top Entry Agitators — Technical Brochure', format: 'PDF', size: '4.2 MB' },
  { name: 'Impeller Selection Guide', format: 'PDF', size: '1.8 MB' },
  { name: 'Dimensional Data Sheets', format: 'PDF', size: '2.6 MB' }],

  related: ['side-entry-agitators', 'high-shear-mixers', 'custom-mixing-systems'],
  match: {
    applications: ['blending', 'suspension', 'heat-transfer', 'gas-dispersion', 'homogenization'],
    vessels: ['closed-tank', 'open-tank', 'reactor', 'pressure-vessel'],
    capacity: ['1-10', '10-100', '100-1000', '1000+'],
    viscosity: ['low', 'medium', 'high'],
    industries: ['food', 'dairy', 'pharmaceutical', 'chemical', 'biotech', 'energy', 'environmental', 'cosmetics']
  }
},
{
  slug: 'side-entry-agitators',
  index: '02',
  name: 'Side Entry Agitators',
  shortName: 'Side Entry',
  family: 'Agitators',
  tagline: 'Horizontal mixing for large-volume storage and digestion',
  summary:
  'Horizontally mounted units that generate long-range bulk flow in large tanks where top access is limited or structurally impractical.',
  image: media.productSideEntry,
  overview: [
  'Side entry agitators enter the vessel through the shell wall, creating a rotating bulk flow pattern that keeps solids in suspension across very large diameters without a tall support structure.',
  'Nozzle angle, immersion depth and propeller pitch are determined by tank geometry and sediment behaviour, so a small number of units can homogenise volumes that would otherwise require heavy top-mounted equipment.'],

  applications: [
  'Sludge and digester homogenisation',
  'Crude oil and fuel storage tanks',
  'Large water and effluent basins',
  'FGD and limestone slurry tanks',
  'Blending in flat-bottom silos'],

  specs: [
  { label: 'Power range', value: '1.5 – 90 kW' },
  { label: 'Propeller speed', value: '100 – 750 rpm' },
  { label: 'Tank diameter', value: 'up to 60 m' },
  { label: 'Immersion', value: 'up to 20 m' },
  { label: 'Swivel range', value: '±30° horizontal / vertical' },
  { label: 'Design temperature', value: '−20 °C – 150 °C' },
  { label: 'Mounting', value: 'Welded or bolted shell nozzle' },
  { label: 'Certification', value: 'CE, ATEX' }],

  advantages: [
  { title: 'No top structure', text: 'Removes the need for bridges, platforms and long shafts on large tanks.' },
  { title: 'Directional flow', text: 'Adjustable swivel angle lets you steer flow toward known sediment zones.' },
  { title: 'Seal-safe design', text: 'Bearing arrangement isolates radial load away from the shaft seal.' },
  { title: 'Retrofit friendly', text: 'Standard nozzle patterns simplify installation on existing tanks.' }],

  configurations: [
  'Fixed or swivel flange',
  'Single or twin propeller',
  'Sealed bearing housing with monitoring',
  'On-line seal exchange device',
  'Submersible variant',
  'Guide vane package'],

  materials: ['1.4301 / AISI 304', '1.4404 / AISI 316L', '1.4462 duplex', 'Carbon steel with coating', 'Rubber-lined propellers'],
  driveOptions: ['Direct coupled IE3 motor', 'Belt drive for speed trim', 'Helical gear reducer', 'VFD controlled', 'ATEX Ex d motors'],
  sealOptions: [
  'Double mechanical seal with barrier',
  'Cartridge seal with leak detection',
  'On-line replaceable seal unit',
  'Stuffing box for low pressure'],

  industries: ['energy', 'environmental', 'petrochemical', 'chemical'],
  downloads: [
  { name: 'Side Entry Agitators — Technical Brochure', format: 'PDF', size: '3.4 MB' },
  { name: 'Tank Nozzle Preparation Guide', format: 'PDF', size: '900 KB' }],

  related: ['top-entry-agitators', 'bottom-entry-agitators', 'custom-mixing-systems'],
  match: {
    applications: ['suspension', 'blending', 'heat-transfer'],
    vessels: ['open-tank', 'storage-tank', 'digester'],
    capacity: ['100-1000', '1000+'],
    viscosity: ['low', 'medium'],
    industries: ['energy', 'environmental', 'chemical']
  }
},
{
  slug: 'bottom-entry-agitators',
  index: '03',
  name: 'Bottom Entry Agitators',
  shortName: 'Bottom Entry',
  family: 'Agitators',
  tagline: 'Short shafts, full vessel access, complete discharge',
  summary:
  'Bottom-mounted units with a short overhung shaft, used where the vessel head must stay free or where residue-free emptying is critical.',
  image: media.productBottomEntry,
  overview: [
  'By moving the drive beneath the vessel, bottom entry agitators free the entire tank head for instrumentation, spray balls and charging ports while eliminating long shaft dynamics.',
  'The short overhung shaft gives very high mechanical stability, and the impeller can work close to the tank floor for near-complete discharge — decisive in high-value batch production.'],

  applications: [
  'High-value batch production',
  'Pharmaceutical and biotech vessels',
  'Fermenters with crowded top heads',
  'Fine chemical crystallisers',
  'Low headroom installations'],

  specs: [
  { label: 'Power range', value: '0.25 – 45 kW' },
  { label: 'Shaft speed', value: '30 – 1,200 rpm' },
  { label: 'Vessel volume', value: '0.05 – 250 m³' },
  { label: 'Shaft overhang', value: 'up to 900 mm' },
  { label: 'Design pressure', value: 'vacuum – 16 bar' },
  { label: 'Surface finish', value: 'Ra ≤ 0.4 µm available' },
  { label: 'Mounting', value: 'Bottom flange, sanitary' },
  { label: 'Certification', value: 'CE, ATEX, GMP, FDA' }],

  advantages: [
  { title: 'Free vessel head', text: 'All top nozzles remain available for process instrumentation.' },
  { title: 'Rigid short shaft', text: 'No critical speed limitation, no steady bearing in the product.' },
  { title: 'Full discharge', text: 'Impeller close to the tank floor minimises residual batch volume.' },
  { title: 'Hygienic execution', text: 'Crevice-free geometry with polished finishes and CIP compatibility.' }],

  configurations: [
  'Centre or off-centre mounting',
  'Sanitary flange or clamp connection',
  'Integrated seal flush arrangement',
  'Tank bottom scraper option',
  'Support frame for service access'],

  materials: ['1.4404 / AISI 316L', '1.4435 low delta ferrite', 'Hastelloy C-22', 'PTFE and PFA components', 'Sintered SiC seal faces'],
  driveOptions: ['Coaxial helical gear unit', 'Direct drive servo motor', 'VFD with encoder feedback', 'Hygienic washdown motor'],
  sealOptions: [
  'Double mechanical seal with steam barrier',
  'Sterile cartridge seal',
  'Magnetic coupling for hermetic duty',
  'Single seal with condensate drain'],

  industries: ['pharmaceutical', 'biotechnology', 'cosmetics', 'food-beverage'],
  downloads: [
  { name: 'Bottom Entry Agitators — Technical Brochure', format: 'PDF', size: '3.1 MB' },
  { name: 'Hygienic Design Statement', format: 'PDF', size: '640 KB' }],

  related: ['magnetic-mixers', 'top-entry-agitators', 'special-agitators'],
  match: {
    applications: ['blending', 'suspension', 'homogenization'],
    vessels: ['closed-tank', 'reactor', 'pressure-vessel', 'fermenter'],
    capacity: ['<1', '1-10', '10-100'],
    viscosity: ['low', 'medium'],
    industries: ['pharmaceutical', 'biotech', 'cosmetics', 'food', 'dairy']
  }
},
{
  slug: 'magnetic-mixers',
  index: '04',
  name: 'Magnetic Mixers',
  shortName: 'Magnetic',
  family: 'Mixers',
  tagline: 'Hermetically sealed mixing for sterile processes',
  summary:
  'Bottom-mounted magnetically coupled mixers with no shaft penetration — the sterile answer to containment, CIP and SIP requirements.',
  image: media.productMagnetic,
  overview: [
  'A magnetic mixer transmits torque through the vessel wall, so there is no dynamic seal and no leakage path at all. The wetted assembly consists of a single polished impeller head running on a sterile bearing.',
  'This makes it the preferred technology for sterile buffer preparation, media hold and formulation vessels where cleanability and containment cannot be compromised.'],

  applications: [
  'Buffer and media preparation',
  'Sterile formulation and hold vessels',
  'Cell culture harvest tanks',
  'Vaccine and biologics production',
  'Ultra-pure water systems'],

  specs: [
  { label: 'Power range', value: '0.1 – 11 kW' },
  { label: 'Impeller speed', value: '20 – 900 rpm' },
  { label: 'Vessel volume', value: '0.005 – 60 m³' },
  { label: 'Surface finish', value: 'Ra ≤ 0.25 µm' },
  { label: 'SIP capability', value: '135 °C sterilisation' },
  { label: 'Design pressure', value: 'vacuum – 10 bar' },
  { label: 'Wetted parts', value: '1.4435 / PEEK / SiC' },
  { label: 'Certification', value: 'GMP, FDA CFR 21, USP Class VI' }],

  advantages: [
  { title: 'Zero leakage', text: 'No shaft penetration removes the primary contamination and emission path.' },
  { title: 'Fully cleanable', text: 'Open geometry with defined drainage validated for CIP and SIP cycles.' },
  { title: 'Low particle generation', text: 'Sterile bearing materials avoid abrasion into the product.' },
  { title: 'Documented compliance', text: 'Complete material traceability and qualification documentation pack.' }],

  configurations: [
  'Single-use compatible head',
  'Retrofit kit for existing vessels',
  'Levitating or bearing-supported rotor',
  'Integrated temperature probe port',
  'Small-scale development version'],

  materials: ['1.4435 / 316L low delta ferrite', 'PEEK', 'Sintered silicon carbide', 'EPDM and PTFE seals (USP VI)'],
  driveOptions: ['Servo direct drive', 'VFD with torque monitoring', 'Explosion-proof executions', 'Portable drive head'],
  sealOptions: ['Hermetic magnetic coupling — no dynamic seal required'],
  industries: ['pharmaceutical', 'biotechnology', 'cosmetics'],
  downloads: [
  { name: 'Magnetic Mixers — Technical Brochure', format: 'PDF', size: '2.9 MB' },
  { name: 'CIP / SIP Validation Notes', format: 'PDF', size: '1.1 MB' }],

  related: ['bottom-entry-agitators', 'inline-mixers', 'custom-mixing-systems'],
  match: {
    applications: ['blending', 'homogenization', 'suspension'],
    vessels: ['closed-tank', 'pressure-vessel', 'fermenter'],
    capacity: ['<1', '1-10', '10-100'],
    viscosity: ['low'],
    industries: ['pharmaceutical', 'biotech', 'cosmetics', 'food']
  }
},
{
  slug: 'inline-mixers',
  index: '05',
  name: 'Inline Mixers',
  shortName: 'Inline',
  family: 'Mixers',
  tagline: 'Continuous mixing inside the pipeline',
  summary:
  'Static and dynamic inline units that mix, disperse and emulsify in a single pass — no batch vessel, no residence time penalty.',
  image: media.productInline,
  overview: [
  'Inline mixers move the mixing duty into the pipeline. Static elements use pipeline energy to fold streams together, while dynamic rotor-stator heads add controlled shear for emulsification and powder wetting.',
  'Because performance is defined by geometry and flow rate rather than batch time, inline mixing gives highly repeatable results and integrates directly into continuous production lines.'],

  applications: [
  'Continuous blending of miscible liquids',
  'Emulsification and dispersion',
  'In-line powder wetting',
  'pH correction and dosing',
  'Gas–liquid contacting'],

  specs: [
  { label: 'Power range', value: '0.55 – 75 kW' },
  { label: 'Flow rate', value: '0.5 – 400 m³/h' },
  { label: 'Connection size', value: 'DN 25 – DN 300' },
  { label: 'Tip speed', value: 'up to 40 m/s' },
  { label: 'Design pressure', value: 'up to 16 bar' },
  { label: 'Connections', value: 'Tri-clamp, DIN 11851, flanged' },
  { label: 'Surface finish', value: 'Ra ≤ 0.8 µm' },
  { label: 'Certification', value: 'CE, ATEX, EHEDG' }],

  advantages: [
  { title: 'Single-pass result', text: 'Target droplet or particle size achieved without recirculation loops.' },
  { title: 'Small footprint', text: 'Replaces batch vessels and their associated services.' },
  { title: 'Repeatable quality', text: 'Result set by flow and speed, both continuously controllable.' },
  { title: 'CIP in place', text: 'Cleaned as part of the pipeline without disassembly.' }],

  configurations: [
  'Static element only',
  'Single or multi-stage rotor-stator',
  'Interchangeable shear screens',
  'Powder induction hopper',
  'Skid-mounted with pump and controls'],

  materials: ['1.4404 / AISI 316L', '1.4435', 'Hastelloy C-22', 'Duplex 1.4462', 'Hardened shear screens'],
  driveOptions: ['Close-coupled motor', 'VFD controlled', 'Hygienic washdown motor', 'ATEX executions'],
  sealOptions: ['Single mechanical seal', 'Double seal with flush', 'Water-flushed hygienic seal'],
  industries: ['food-beverage', 'dairy', 'cosmetics', 'chemical', 'pharmaceutical'],
  downloads: [
  { name: 'Inline Mixers — Technical Brochure', format: 'PDF', size: '2.4 MB' },
  { name: 'Pressure Drop Calculation Sheet', format: 'XLSX', size: '480 KB' }],

  related: ['high-shear-mixers', 'magnetic-mixers', 'custom-mixing-systems'],
  match: {
    applications: ['homogenization', 'dispersion', 'blending', 'gas-dispersion'],
    vessels: ['pipeline', 'closed-tank'],
    capacity: ['<1', '1-10', '10-100'],
    viscosity: ['low', 'medium'],
    industries: ['food', 'dairy', 'cosmetics', 'chemical', 'pharmaceutical']
  }
},
{
  slug: 'high-shear-mixers',
  index: '06',
  name: 'High-Shear Mixers',
  shortName: 'High-Shear',
  family: 'Mixers',
  tagline: 'Controlled energy where the droplet breaks',
  summary:
  'Rotor-stator systems delivering intense, localised shear for emulsions, dispersions and fine particle reduction.',
  image: media.productHighShear,
  overview: [
  'High-shear mixers concentrate energy in a narrow gap between rotor and stator, breaking droplets and agglomerates far below what a conventional impeller can achieve.',
  'Screen geometry, tip speed and the surrounding bulk flow are engineered together, so shear is applied where it is needed without overheating or degrading the product.'],

  applications: [
  'Emulsions and creams',
  'Pigment and filler dispersion',
  'Gum and thickener hydration',
  'Agglomerate breakdown',
  'Nano and micro suspension prep'],

  specs: [
  { label: 'Power range', value: '1.1 – 160 kW' },
  { label: 'Rotor speed', value: '1,000 – 3,600 rpm' },
  { label: 'Tip speed', value: 'up to 45 m/s' },
  { label: 'Batch volume', value: '0.01 – 60 m³' },
  { label: 'Shear gap', value: '0.2 – 1.0 mm' },
  { label: 'Viscosity', value: 'up to 50,000 mPa·s' },
  { label: 'Vacuum capability', value: 'to 50 mbar abs' },
  { label: 'Certification', value: 'CE, ATEX, GMP' }],

  advantages: [
  { title: 'Defined droplet size', text: 'Screen and tip speed selected to hit a target distribution, verified in pilot tests.' },
  { title: 'Thermal control', text: 'Shear zone designed to limit temperature rise in sensitive formulations.' },
  { title: 'Combined duty', text: 'Runs together with a slow bulk impeller for full vessel turnover.' },
  { title: 'Fast changeover', text: 'Tool-light screen exchange between product recipes.' }],

  configurations: [
  'Vessel-mounted or portable',
  'Vacuum emulsifying arrangement',
  'Coaxial with scraper impeller',
  'Interchangeable screen set',
  'Bottom or top mounted head'],

  materials: ['1.4404 / AISI 316L', '1.4435', 'Duplex 1.4462', 'Hardened tool steel screens', 'PTFE scraper blades'],
  driveOptions: ['Direct drive high-speed motor', 'VFD with power monitoring', 'ATEX Ex d motors', 'Dual-drive coaxial unit'],
  sealOptions: ['Double mechanical seal with barrier fluid', 'Gas-lubricated dry seal', 'Vacuum-rated cartridge seal'],
  industries: ['cosmetics', 'pharmaceutical', 'food-beverage', 'chemical'],
  downloads: [
  { name: 'High-Shear Mixers — Technical Brochure', format: 'PDF', size: '3.6 MB' },
  { name: 'Shear Screen Selection Matrix', format: 'PDF', size: '820 KB' }],

  related: ['inline-mixers', 'top-entry-agitators', 'special-agitators'],
  match: {
    applications: ['dispersion', 'homogenization', 'blending'],
    vessels: ['closed-tank', 'open-tank', 'reactor'],
    capacity: ['<1', '1-10', '10-100'],
    viscosity: ['medium', 'high'],
    industries: ['cosmetics', 'pharmaceutical', 'food', 'chemical', 'dairy']
  }
},
{
  slug: 'special-agitators',
  index: '07',
  name: 'Special Agitators',
  shortName: 'Special',
  family: 'Agitators',
  tagline: 'When the process refuses to be standard',
  summary:
  'Anchor, helical ribbon, scraper and coaxial systems for high viscosity, non-Newtonian and heat-transfer-critical duties.',
  image: media.productSpecial,
  overview: [
  'Some processes cannot be solved with a turbine. Highly viscous, shear-thinning or fouling media need close-clearance geometries that move the whole batch and continuously renew the heat transfer surface.',
  'We design anchor and ribbon systems, coaxial combinations and scraper arrangements around measured rheology, then verify power draw and blend time before manufacturing.'],

  applications: [
  'Viscous pastes, gels and resins',
  'Heat transfer critical batches',
  'Non-Newtonian and thixotropic media',
  'Polymerisation reactors',
  'Vacuum drying and devolatilisation'],

  specs: [
  { label: 'Power range', value: '1.5 – 315 kW' },
  { label: 'Shaft speed', value: '2 – 120 rpm' },
  { label: 'Viscosity', value: 'up to 1,000,000 mPa·s' },
  { label: 'Wall clearance', value: 'from 3 mm' },
  { label: 'Design temperature', value: '−40 °C – 400 °C' },
  { label: 'Design pressure', value: 'vacuum – 40 bar' },
  { label: 'Torque', value: 'up to 120 kNm' },
  { label: 'Certification', value: 'CE, ATEX, ASME' }],

  advantages: [
  { title: 'Rheology-based design', text: 'Geometry derived from measured flow curves, not viscosity averages.' },
  { title: 'Active surface renewal', text: 'Scrapers keep the heat transfer film thin and predictable.' },
  { title: 'High torque drive train', text: 'Planetary and bevel trains dimensioned for continuous full-load duty.' },
  { title: 'Verified before build', text: 'CFD and pilot trials confirm blend time and power before release.' }],

  configurations: [
  'Anchor with counter-rotating inner shaft',
  'Helical ribbon single or double flight',
  'Wall and bottom scraper blades',
  'Coaxial high-shear insert',
  'Draft tube arrangement'],

  materials: ['1.4404 / AISI 316L', '1.4462 duplex', 'Hastelloy C-276', 'Nickel alloy 625', 'Electropolished finishes', 'PTFE scrapers'],
  driveOptions: ['Planetary gear unit', 'Double reduction bevel train', 'Dual independent drives', 'Hydraulic high-torque drive'],
  sealOptions: ['Double mechanical seal with barrier', 'High-temperature packing', 'Dry gas seal', 'Magnetic coupling'],
  industries: ['chemical', 'cosmetics', 'food-beverage', 'petrochemical'],
  downloads: [
  { name: 'Special Agitators — Technical Brochure', format: 'PDF', size: '4.8 MB' },
  { name: 'Viscous Mixing Design Notes', format: 'PDF', size: '1.4 MB' }],

  related: ['high-shear-mixers', 'top-entry-agitators', 'custom-mixing-systems'],
  match: {
    applications: ['blending', 'heat-transfer', 'dispersion', 'homogenization'],
    vessels: ['reactor', 'closed-tank', 'pressure-vessel'],
    capacity: ['<1', '1-10', '10-100', '100-1000'],
    viscosity: ['high', 'very-high'],
    industries: ['chemical', 'cosmetics', 'food', 'pharmaceutical']
  }
},
{
  slug: 'custom-mixing-systems',
  index: '08',
  name: 'Custom Mixing Systems',
  shortName: 'Systems',
  family: 'Systems',
  tagline: 'Complete process units, delivered ready to run',
  summary:
  'Skid-mounted vessels, agitation, piping, instrumentation and control engineered, built and tested as one documented package.',
  image: media.productSystem,
  overview: [
  'Where mixing is one step in a larger process, we deliver the complete unit: vessels, agitation, valves, pumps, heat exchange, instrumentation and control, pre-assembled on a skid.',
  'The system is factory tested against your acceptance criteria before shipment, which compresses site work to connection and commissioning.'],

  applications: [
  'Buffer and media preparation units',
  'Batch and continuous dosing systems',
  'Pilot and scale-up plants',
  'Powder–liquid preparation lines',
  'Mobile process modules'],

  specs: [
  { label: 'Vessel volume', value: '0.05 – 100 m³ per unit' },
  { label: 'Skid footprint', value: 'from 1.2 × 1.8 m' },
  { label: 'Control platform', value: 'Siemens, Rockwell, Beckhoff' },
  { label: 'Instrumentation', value: 'Level, temp, pH, conductivity, mass' },
  { label: 'Cleaning', value: 'Integrated CIP / SIP' },
  { label: 'Documentation', value: 'IQ/OQ, FAT/SAT dossiers' },
  { label: 'Design codes', value: 'PED, ASME VIII, GMP' },
  { label: 'Testing', value: 'Full FAT with water batch' }],

  advantages: [
  { title: 'One responsibility', text: 'A single engineering partner for process, mechanical, electrical and controls.' },
  { title: 'Tested before shipping', text: 'Factory acceptance testing removes surprises during commissioning.' },
  { title: 'Compressed site time', text: 'Pre-assembled skids reduce installation to connections and start-up.' },
  { title: 'Complete dossier', text: 'Full traceability and qualification documentation on handover.' }],

  configurations: [
  'Single or multi-vessel skid',
  'Mobile frame on castors',
  'Integrated CIP module',
  'Weighing and load cell system',
  'Full automation with recipe control'],

  materials: ['1.4404 / AISI 316L', '1.4435', 'Duplex 1.4462', 'Orbital-welded tubing', 'Electropolished internals'],
  driveOptions: ['Any agitator drive from our range', 'Integrated VFD cabinet', 'Redundant drive arrangements'],
  sealOptions: ['Specified per vessel duty', 'Magnetic coupling for sterile units', 'Double seal with barrier skid'],
  industries: ['pharmaceutical', 'biotechnology', 'food-beverage', 'dairy', 'chemical'],
  downloads: [
  { name: 'Custom Systems — Capability Statement', format: 'PDF', size: '5.1 MB' },
  { name: 'Project Delivery Process', format: 'PDF', size: '760 KB' }],

  related: ['top-entry-agitators', 'magnetic-mixers', 'inline-mixers'],
  match: {
    applications: ['blending', 'homogenization', 'suspension', 'dispersion', 'heat-transfer', 'gas-dispersion'],
    vessels: ['closed-tank', 'open-tank', 'reactor', 'pressure-vessel', 'fermenter', 'pipeline'],
    capacity: ['<1', '1-10', '10-100', '100-1000'],
    viscosity: ['low', 'medium', 'high', 'very-high'],
    industries: ['food', 'dairy', 'pharmaceutical', 'chemical', 'cosmetics', 'biotech', 'energy', 'environmental']
  }
}];


export const getProduct = (slug?: string) => products.find((p) => p.slug === slug);

export const productFamilies = ['All', 'Agitators', 'Mixers', 'Systems'] as const;