export interface Talent {
  slug: string;
  name: string;
  category: 'Model' | 'SPG' | 'MC' | 'Host' | 'Dancer' | 'Brand Ambassador';
  height: number;
  languages: string[];
  experience: string;
  description: string;
  mainImage: string;
  portfolio: string[];
  videoUrl?: string;
}

export interface EventItem {
  slug: string;
  title: string;
  category: 'Wedding' | 'Exhibition' | 'Corporate' | 'Product Launching' | 'Traditional Event';
  location: string;
  year: string;
  client: string;
  mainImage: string;
  description: string;
  gallery: string[];
  testimonial?: {
    name: string;
    role: string;
    comment: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  publishedAt: string;
  author: string;
  mainImage: string;
  content: string;
}