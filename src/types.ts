export interface GlobalSettings {
  siteTitle: string;
  metaDescription?: string;
  announcementText?: string;
  phone: string;
  email: string;
  address: string;
  openingHours: string;
  facebookUrl?: string;
  instagramUrl?: string;
  tripAdvisorRating?: number;
  tripAdvisorReviewsCount?: number;
}

export interface Experience {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  duration: string;
  maxParticipants: number;
  minAge: number;
  featured: boolean;
  includedItems: string[];
  requirements: string[];
  imageUrl?: string;
  rating?: number;
  reviewCount?: number;
}

export interface Animal {
  _id: string;
  name: string;
  species: string;
  scientificName?: string;
  type: string;
  wingspan?: string;
  weight?: string;
  diet?: string;
  origin?: string;
  funFact?: string;
  bio: string;
  imageUrl?: string;
  featured?: boolean;
  adoptionAvailable?: boolean;
}
