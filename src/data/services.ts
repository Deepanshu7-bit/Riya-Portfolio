import { ServiceItem } from '@/types';

export const servicesData: ServiceItem[] = [
  {
    id: 'brand-identity',
    number: '01',
    title: 'Brand & Visual Identity Systems',
    tagline: 'From a memorable mark to a living visual world.',
    description: 'Transforming ideas into cohesive, distinctive brand identities. Crafting visual languages with thoughtful typography systems, curated color palettes, social style guides, and brand assets built for scale.',
    deliverables: [
      'Logo Systems & Wordmarks',
      'Color Harmonies & Typographic Rules',
      'Social Media Brand Toolkits',
      'Visual Guidelines & Asset Kits'
    ],
    accentColor: '#FF4D4D',
    accentBg: 'bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-300',
    iconName: 'Sparkles'
  },
  {
    id: 'social-campaigns',
    number: '02',
    title: 'Scroll-Stopping Social & Campaign Design',
    tagline: 'Creatives engineered for instant feed retention.',
    description: 'Designing high-impact static posts, multi-slide carousels, announcement banners, and promotional campaigns. Every asset is structured for maximum visual clarity, thumb-stopping contrast, and measurable conversion.',
    deliverables: [
      'Instagram Posts & Story Sets',
      'Educational & Multi-Slide Carousels',
      'Event & Webinar Promotion Creatives',
      'Ad Creatives for Meta & LinkedIn'
    ],
    accentColor: '#2B4CFF',
    accentBg: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300',
    iconName: 'Share2'
  },
  {
    id: 'motion-video',
    number: '03',
    title: 'Motion Graphics & Short-Form Video',
    tagline: 'Static is only one frame — bring design to life.',
    description: 'Editing dynamic social reels, kinetic typography teasers, promotional video clips, and animated brand moments with seamless transitions, sound synchronization, and modern pacing.',
    deliverables: [
      'Social Reels & TikTok Formats (9:16)',
      'Kinetic Typography & Title Sequences',
      'Promotional Video Cuts & Teasers',
      'Animated Social Media Assets'
    ],
    accentColor: '#D4FF32',
    accentBg: 'bg-lime-500/10 text-lime-700 dark:bg-lime-500/20 dark:text-lime-300',
    iconName: 'Film'
  },
  {
    id: 'print-editorial',
    number: '04',
    title: 'Editorial, Brochures & Print Layouts',
    tagline: 'Tactile, grid-perfect layouts that command physical presence.',
    description: 'Crafting multi-page curriculum brochures, event flyers, corporate one-pagers, and promotional handouts. Balanced margins, precise typographic hierarchy, and print-ready production files.',
    deliverables: [
      'Multi-Page Curriculum Brochures',
      'Event Posters & Physical Flyers',
      'Corporate One-Pagers & Factsheets',
      'Print-Ready & Interactive Digital PDFs'
    ],
    accentColor: '#8B5CF6',
    accentBg: 'bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300',
    iconName: 'BookOpen'
  }
];
