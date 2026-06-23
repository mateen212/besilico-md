export type BranchType = 'restaurant' | 'cafe';

export interface Location {
  address: string;
  city: string;
  country: string;
  latitude?: number;
  longitude?: number;
  phone: string;
  email: string;
}

export interface OpeningHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'appetizer' | 'main' | 'dessert' | 'beverage' | 'wine';
  available: boolean;
  image?: string;
}

export interface Branch {
  id: string;
  type: BranchType;
  name: string;
  location: Location;
  menu: MenuItem[];
  hours: OpeningHours[];
  status: 'active' | 'inactive';
  description?: string;
  featured?: boolean;
  imageUrl?: string;
}

export interface Brand {
  name: string;
  tagline: string;
  branches: Branch[];
  defaultBranchId?: string;
}
