import { media } from './media';
import type { Service } from '../types/content';

export const engineeringServices: Service[] = [
{
  index: '01',
  name: 'Process Optimisation',
  summary:
  'We measure what your current installation actually does — blend time, power draw, suspension quality — and re-engineer the geometry against that baseline.',
  image: media.engineerInspecting,
  deliverables: ['Baseline measurement report', 'Geometry improvement proposal', 'Energy and cycle time comparison']
},
{
  index: '02',
  name: 'CFD Analysis',
  summary:
  'Computational fluid dynamics reveals dead zones, shear distribution and surface behaviour before anything is manufactured, so design decisions are made on evidence.',
  image: media.cfdEngineering,
  deliverables: ['Flow field and shear maps', 'Candidate geometry comparison', 'Design recommendation dossier']
},
{
  index: '03',
  name: 'Custom Engineering',
  summary:
  'Where no standard configuration fits, we design from first principles: rheology, vessel constraints, materials and mechanical limits resolved into one solution.',
  image: media.assemblyHall,
  deliverables: ['3D design and drawings', 'Strength and shaft dynamics calculations', 'Material and code compliance package']
},
{
  index: '04',
  name: 'Pilot Testing',
  summary:
  'Our test facility reproduces your duty at scale so blend time, droplet size, power number and mass transfer are confirmed with your own product.',
  image: media.testingRig,
  deliverables: ['Trial protocol and results', 'Scale-up correlation', 'Verified performance guarantee']
},
{
  index: '05',
  name: 'Process Development',
  summary:
  'From laboratory concept to production recipe, we develop the mixing step alongside your process team and document every parameter that matters.',
  image: media.industryPharma,
  deliverables: ['Development roadmap', 'Parameter definition', 'Technology transfer documentation']
},
{
  index: '06',
  name: 'Equipment Design',
  summary:
  'Complete mechanical design of agitators, vessels and skids to the applicable pressure and hygiene codes, ready for manufacturing release.',
  image: media.cncMachining,
  deliverables: ['Certified design calculations', 'Manufacturing drawing set', 'Inspection and test plan']
}];


export const serviceLines = [
{
  index: '01',
  name: 'Installation & Commissioning',
  text: 'Supervised or turnkey installation, alignment, and start-up with performance verification on site.'
},
{
  index: '02',
  name: 'Preventive Maintenance',
  text: 'Scheduled inspection programmes with condition monitoring and documented wear tracking.'
},
{
  index: '03',
  name: 'Seal & Drive Service',
  text: 'Overhaul of mechanical seals, gearboxes and couplings, in our workshop or at your plant.'
},
{
  index: '04',
  name: 'Spare Parts Supply',
  text: 'Original parts with full traceability, held for the documented lifetime of your equipment.'
},
{
  index: '05',
  name: 'Retrofit & Upgrade',
  text: 'Modernisation of existing agitators from any manufacturer, including drop-in replacements.'
},
{
  index: '06',
  name: 'Technical Support',
  text: 'Direct access to process engineers for troubleshooting, calculations and specification review.'
}];


export const processSteps = [
{
  index: '01',
  name: 'Understand',
  text: 'We start with your process, not our catalogue: media properties, batch behaviour, vessel constraints and what success must look like.',
  image: media.engineerInspecting
},
{
  index: '02',
  name: 'Analyse',
  text: 'Rheology, settling behaviour and heat transfer requirements are measured and translated into a quantified mixing duty.',
  image: media.testingRig
},
{
  index: '03',
  name: 'Design',
  text: 'Impeller geometry, shaft dynamics, drive train and seal architecture are dimensioned as one integrated system.',
  image: media.cfdEngineering
},
{
  index: '04',
  name: 'Simulate',
  text: 'CFD confirms flow structure, shear distribution and the absence of dead zones before manufacturing is released.',
  image: media.cfdEngineering
},
{
  index: '05',
  name: 'Manufacture',
  text: 'Machining, welding and assembly in-house under one quality system, with material traceability throughout.',
  image: media.cncMachining
},
{
  index: '06',
  name: 'Test',
  text: 'Every unit runs on the test bench. Complete systems undergo factory acceptance testing against your criteria.',
  image: media.qualityInspection
},
{
  index: '07',
  name: 'Install',
  text: 'Site installation and commissioning with alignment, run-in and verification of the guaranteed performance.',
  image: media.assemblyHall
},
{
  index: '08',
  name: 'Support',
  text: 'Long-term service, spare parts and process support for the documented lifetime of the equipment.',
  image: media.welding
}];