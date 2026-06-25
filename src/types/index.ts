export interface Suite {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  excerpt: string;
  images: SanityImage[];
  floorSize: string;
  view: string;
  amenities: string[];
  architecture: string;
  availability: boolean;
  pricing: string;
  gallery: SanityImage[];
  specifications: Specification[];
  related: Suite[];
}

export interface Specification {
  label: string;
  value: string;
}

export interface Dining {
  _id: string;
  title: string;
  slug: { current: string };
  story: string;
  chef: string;
  philosophy: string;
  menu: MenuItem[];
  images: SanityImage[];
  reservation: boolean;
  operatingHours: string;
  dressCode: string;
  dietaryInfo: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
}

export interface Experience {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  category: ExperienceCategory;
  images: SanityImage[];
  duration: string;
  pricing: string;
  includes: string[];
  maxGuests: number;
}

export type ExperienceCategory = 
  | 'nature'
  | 'private-dining'
  | 'photography-tours'
  | 'boat-excursions'
  | 'spa'
  | 'yoga'
  | 'sunrise-walks'
  | 'cooking-classes'
  | 'local-culture';

export interface JournalEntry {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content: string;
  heroImage: SanityImage;
  readingTime: number;
  author: string;
  category: JournalCategory;
  publishedAt: string;
  related: JournalEntry[];
}

export type JournalCategory = 
  | 'architecture'
  | 'travel'
  | 'food'
  | 'culture'
  | 'design'
  | 'photography';

export interface Testimonial {
  _id: string;
  quote: string;
  author: string;
  title: string;
  image: SanityImage;
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface SeoMetadata {
  title: string;
  description: string;
  ogImage?: SanityImage;
  noIndex?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface BookingInquiry {
  arrival: string;
  departure: string;
  guests: number;
  suite?: string;
  purpose?: string;
  preferences: BookingPreferences;
  guestInfo: GuestInfo;
}

export interface BookingPreferences {
  airportTransfer: boolean;
  breakfast: boolean;
  spa: boolean;
  dining: boolean;
  accessibility: boolean;
  celebration: string;
}

export interface GuestInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

export interface NavbarState {
  isOpen: boolean;
  isScrolled: boolean;
}