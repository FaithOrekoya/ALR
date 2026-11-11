export type ServiceType = 'preparation' | 'recovery' | 'both';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceNeeded: ServiceType;
  propertyLocation: string;
  tentDate?: string;
  message: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  service: string;
  content: string;
  rating: number;
  date: string;
}

export interface ChecklistItem {
  id: string;
  phase: 'prep' | 'recovery';
  title: string;
  description: string;
  category: 'food' | 'plants' | 'access' | 'reentry';
}
