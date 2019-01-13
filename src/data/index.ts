export const titles: string[] = [
  'Choose car brand',
  'Choose car model',
  'Choose transmission type',
  'Choose fuel type',
  'Your choice'
];

export interface IAuto {
  brand: string;
  models: string[];
}

export const auto: IAuto[] = [
  {
    brand: 'Volkswagen',
    models: ['Polo', 'Golf', 'Scirocco', 'Beetle'],
  },
  {
    brand: 'Peugeot',
    models: ['206', '406', '407', '408'],
  },
  {
    brand: 'Subaru',
    models: ['Impreza', 'Legacy', 'Ascent', 'Forester'],
  },
  {
    brand: 'Lada',
    models: ['Kalina', 'Priora', 'Vesta', 'Granta'],
  }
];

export const transmissionTypes: string[] = [
  'auto',
  'manual',
  'hybrid',
  'robotic',
];

export const fuelTypes: string[] = [
  'petrol',
  'diesel',
  'gas',
  'electric'
];
