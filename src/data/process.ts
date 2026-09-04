import { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover & Align',
    subtitle: 'Understanding the core message, audience, and intent.',
    description: 'Every project starts with a deep dive into what we want to communicate. We unpack the target audience, format constraints, key selling points, and the emotional reaction we want to trigger.',
    deliverable: 'Creative Brief & Visual Goals',
    details: [
      'Target audience & platform breakdown',
      'Key message hierarchy definition',
      'Format & deliverable specifications'
    ],
    accentColor: '#FF4D4D'
  },
  {
    number: '02',
    title: 'Explore & Concept',
    subtitle: 'Curating mood, typography, and visual directions.',
    description: 'Exploring bold visual routes before committing. We look at color contrast, type personalities, layout compositions, and reference moods to determine the strongest creative direction.',
    deliverable: 'Style Direction & Mood Exploration',
    details: [
      'Typography pairing & scale tests',
      'Harmonious color palette testing',
      'Rough layout composition sketches'
    ],
    accentColor: '#2B4CFF'
  },
  {
    number: '03',
    title: 'Design & Animate',
    subtitle: 'Translating concepts into polished, impactful assets.',
    description: 'Bringing the chosen direction to life across Figma, Photoshop, Illustrator, and Premiere Pro. Perfecting layout balance, typography kerning, contrast ratios, and motion timing.',
    deliverable: 'Complete High-Fidelity Artwork',
    details: [
      'Pixel-perfect vector & raster artwork',
      'Motion sequencing & transition timing',
      'Multi-format adaptations (Feed, Story, Print)'
    ],
    accentColor: '#D4FF32'
  },
  {
    number: '04',
    title: 'Refine & Deliver',
    subtitle: 'Iterating on feedback and packaging production files.',
    description: 'Fine-tuning details based on collaborative feedback. Delivering organized, export-ready assets across all required aspect ratios with clean file naming and print-ready specs.',
    deliverable: 'Production-Ready Master Assets',
    details: [
      'High-res web & print export formats',
      'Organized source files & layered masters',
      'Handoff guidelines & ongoing support'
    ],
    accentColor: '#8B5CF6'
  }
];
