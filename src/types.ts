export type CurrencyCode = 'USD' | 'KGS' | 'EUR';

export type LanguageCode = 'en' | 'ru' | 'kg';

export interface Room {
  id: string;
  name: {
    en: string;
    ru: string;
    kg: string;
  };
  tagline: {
    en: string;
    ru: string;
    kg: string;
  };
  priceUSD: number;
  capacity: number; // max persons
  beds: {
    en: string;
    ru: string;
    kg: string;
  };
  sizeM2: number;
  features: {
    en: string[];
    ru: string[];
    kg: string[];
  };
  popular?: boolean;
  imageTheme: 'mountain' | 'twin' | 'family' | 'budget';
}

export interface ExcursionDestination {
  id: string;
  name: {
    en: string;
    ru: string;
    kg: string;
  };
  altitude: string;
  distanceKm: number;
  drivingTimeHours: number;
  requiresBorderPermit: boolean;
  description: {
    en: string;
    ru: string;
    kg: string;
  };
  highlights: {
    en: string[];
    ru: string[];
    kg: string[];
  };
  roadCondition: {
    en: string;
    ru: string;
    kg: string;
  };
  bestSeason: string;
}

export interface AmenityItem {
  id: string;
  iconName: string;
  title: {
    en: string;
    ru: string;
    kg: string;
  };
  description: {
    en: string;
    ru: string;
    kg: string;
  };
}

export interface Testimonial {
  id: string;
  author: string;
  origin: string;
  travelerType: string;
  date: string;
  text: string;
  roomBooked: string;
  rating: number;
}

export interface BookingFormState {
  checkIn: string;
  checkOut: string;
  roomId: string;
  guestsCount: number;
  guestName: string;
  email: string;
  phone: string;
  needPermit: boolean;
  needTransfer: boolean;
  notes: string;
}
