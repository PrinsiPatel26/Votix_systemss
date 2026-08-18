export interface Option {
  id: string;
  label: string;
  hint?: string;
}

export interface ConfigStep {
  index: string;
  key: 'industry' | 'application' | 'vessel' | 'capacity' | 'viscosity';
  title: string;
  question: string;
  options: Option[];
}

export const configSteps: ConfigStep[] = [
{
  index: '01',
  key: 'industry',
  title: 'Industry',
  question: 'Which industry does the process belong to?',
  options: [
  { id: 'food', label: 'Food' },
  { id: 'dairy', label: 'Dairy' },
  { id: 'pharmaceutical', label: 'Pharmaceutical' },
  { id: 'chemical', label: 'Chemical' },
  { id: 'cosmetics', label: 'Cosmetics' },
  { id: 'biotech', label: 'Biotech' },
  { id: 'energy', label: 'Energy' },
  { id: 'environmental', label: 'Environmental' }]

},
{
  index: '02',
  key: 'application',
  title: 'Application',
  question: 'What must the mixing duty achieve?',
  options: [
  { id: 'blending', label: 'Blending', hint: 'Miscible liquids to uniformity' },
  { id: 'suspension', label: 'Suspension', hint: 'Keep solids distributed' },
  { id: 'homogenization', label: 'Homogenisation', hint: 'Uniform phase and texture' },
  { id: 'dispersion', label: 'Dispersion', hint: 'Break droplets or agglomerates' },
  { id: 'heat-transfer', label: 'Heat transfer', hint: 'Renew the wall film' },
  { id: 'gas-dispersion', label: 'Gas dispersion', hint: 'Mass transfer into liquid' }]

},
{
  index: '03',
  key: 'vessel',
  title: 'Vessel type',
  question: 'Where does the mixing take place?',
  options: [
  { id: 'closed-tank', label: 'Closed tank' },
  { id: 'open-tank', label: 'Open tank' },
  { id: 'reactor', label: 'Reactor' },
  { id: 'pressure-vessel', label: 'Pressure vessel' },
  { id: 'fermenter', label: 'Fermenter' },
  { id: 'storage-tank', label: 'Storage tank' },
  { id: 'digester', label: 'Digester' },
  { id: 'pipeline', label: 'Pipeline / inline' }]

},
{
  index: '04',
  key: 'capacity',
  title: 'Capacity',
  question: 'What is the working volume?',
  options: [
  { id: '<1', label: 'Below 1 m³' },
  { id: '1-10', label: '1 – 10 m³' },
  { id: '10-100', label: '10 – 100 m³' },
  { id: '100-1000', label: '100 – 1,000 m³' },
  { id: '1000+', label: 'Above 1,000 m³' }]

},
{
  index: '05',
  key: 'viscosity',
  title: 'Viscosity',
  question: 'How does the media behave?',
  options: [
  { id: 'low', label: 'Low', hint: 'Water-like, < 100 mPa·s' },
  { id: 'medium', label: 'Medium', hint: '100 – 5,000 mPa·s' },
  { id: 'high', label: 'High', hint: '5,000 – 100,000 mPa·s' },
  { id: 'very-high', label: 'Very high', hint: 'Above 100,000 mPa·s' }]

}];


export const explorerHotspots = [
{
  id: 'motor',
  label: 'Motor',
  index: '01',
  x: 52,
  y: 11,
  text: 'IE3 and IE4 efficiency motors with optional ATEX certification, sized on continuous absorbed power rather than nameplate margin.',
  specs: ['0.12 – 250 kW', 'IE3 / IE4 efficiency', 'ATEX Ex d / Ex e']
},
{
  id: 'gearbox',
  label: 'Gearbox',
  index: '02',
  x: 47,
  y: 24,
  text: 'Helical bevel gear units dimensioned with a service factor for continuous industrial duty, with reinforced output bearings for agitator loads.',
  specs: ['Service factor ≥ 2.0', 'Bevel or coaxial', 'Torque to 120 kNm']
},
{
  id: 'seal',
  label: 'Seal',
  index: '03',
  x: 51,
  y: 38,
  text: 'Cartridge seal architecture matched to process risk: single, double with barrier fluid, dry gas, or a fully hermetic magnetic coupling.',
  specs: ['Vacuum – 25 bar', 'SiC / carbon faces', 'Leak detection ready']
},
{
  id: 'shaft',
  label: 'Shaft',
  index: '04',
  x: 50,
  y: 58,
  text: 'Shaft diameter is set by torsional load and critical speed, so the operating speed stays clear of resonance across the whole batch range.',
  specs: ['Up to 12,000 mm', 'Critical speed verified', 'Split for low headroom']
},
{
  id: 'impeller',
  label: 'Impeller',
  index: '05',
  x: 51,
  y: 80,
  text: 'Optimised impeller geometry moves the required volume with minimum absorbed power, converting torque into flow rather than local shear.',
  specs: ['Hydrofoil / turbine / anchor', 'Pumping number verified', 'Foldable options']
},
{
  id: 'mounting',
  label: 'Mounting',
  index: '06',
  x: 50,
  y: 93,
  text: 'Flange, beam or lantern mounting designed to keep bending moments inside the nozzle load limits of your vessel.',
  specs: ['Flange / beam / lantern', 'Nozzle loads calculated', 'Retrofit patterns']
}];