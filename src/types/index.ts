export type ProjectCategory = 'all' | 'academy' | 'social' | 'festive' | 'editorial';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'academy' | 'social' | 'festive' | 'editorial';
  categoryLabel: string;
  description: string;
  challenge: string;
  visualDirection: string;
  deliverables: string[];
  tools: string[];
  colors: { name: string; hex: string }[];
  heroImage: string;
  galleryImages: string[];
  featured: boolean;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  year: string;
  clientContext: string;
  takeaway: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  accentColor: string;
  accentBg: string;
  iconName: 'Sparkles' | 'Share2' | 'Film' | 'BookOpen';
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
  details: string[];
  accentColor: string;
}

export interface MotionItem {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  duration: string;
  software: string[];
  aspectRatio: '9:16' | '16:9' | '1:1';
  motionFocus: string;
  colorTone: string;
}
