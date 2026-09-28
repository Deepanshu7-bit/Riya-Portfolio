import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'the-beans-coffee-brand',
    title: 'The Beans: Artisanal Coffee Co. & Takeaway Systems',
    subtitle: 'Warm tactile cup mockups, vector monogram typography & editorial cold brew campaign posters',
    category: 'social',
    categoryLabel: 'Brand Identity & Packaging',
    description: 'A complete specialty coffee visual identity and takeaway packaging suite for "The Beans". Built around a distinctive typographic logotype integrating a central coffee bean negative space, multi-size eco-craft paper cup mockups with tactile sleeves, and high-editorial cold iced latte promotional launch posters.',
    challenge: 'Coffee branding in urban cafe markets requires an instant sense of warmth, tactile elegance, and modern editorial distinction that looks mouthwatering both in physical customer hands and on visual social feeds.',
    visualDirection: 'Earthy espresso mocha, roasted bean tan, warm cream backdrop, elegant high-contrast serif typography with custom bean ligature, and clean product photography styling.',
    deliverables: [
      'Brand Identity & Coffee Bean Vector Monogram',
      'Takeaway Cup Packaging Suite (Multi-Size Mockups)',
      'Embossed Eco-Kraft Cup Sleeve System',
      'Cold Iced Latte Editorial Launch Poster',
      'Menu & Social Media Campaign Creatives'
    ],
    tools: ['Figma', 'Photoshop', 'Illustrator'],
    colors: [
      { name: 'Roast Espresso', hex: '#3E2415' },
      { name: 'Warm Cream', hex: '#F6F0E6' },
      { name: 'Caramel Bean', hex: '#C48A54' },
      { name: 'Kraft Earth', hex: '#A87A51' }
    ],
    heroImage: '/the-beans/cups.png',
    galleryImages: [
      '/the-beans/cups.png',
      '/the-beans/logo.png',
      '/the-beans/iced-latte.png'
    ],
    featured: true,
    accentColor: '#C48A54',
    badgeBg: 'bg-amber-600/10 text-amber-800 border-amber-600/30 dark:bg-amber-600/20 dark:text-amber-200',
    badgeText: 'Featured Case Study',
    year: '2025',
    clientContext: 'Full visual identity & physical takeaway collateral for specialty coffee roaster The Beans.',
    takeaway: 'Tactile physical packaging paired with editorial product photography elevates a local coffee shop into a recognizable lifestyle brand.'
  },
  {
    id: 'singh-bake-brand-impression',
    title: 'Singh Bake & Bites: 360° Digital Impression',
    subtitle: 'End-to-end brand identity, tactile packaging, promotional post suites & high-energy video motion reels',
    category: 'social',
    categoryLabel: 'Brand Socials & Motion',
    description: 'A complete 360° digital and physical brand transformation for artisanal bakery "Singh Bake & Bites". Created a vibrant, appetising visual language spanning brand logo vectorization, eco-craft paperbag packaging, multi-part social campaign post suites, and AI-generated video motion reels synthesized via generative AI prompting.',
    challenge: 'Artisanal food brands in a competitive market need more than static photos. They require a cohesive identity system that feels tactile in real life and magnetic on digital feeds, stopping user scrolls within the first 500ms.',
    visualDirection: 'Warm bakery amber tones, rustic eco-craft textures, modern bold typography, appetizing dynamic close-up framing, and generative AI video motion synthesis.',
    deliverables: [
      'Brand Identity & Logo Vector Architecture',
      'Eco-Craft Paperbag Packaging Mockup & Print Specs',
      'Social Media Campaign Posts (Set of 3+)',
      'Generative AI Video Motion Reels & Tutorial Cuts',
      'Promotional Launch Discount Creatives'
    ],
    tools: ['Generative AI Video', 'Figma', 'Photoshop', 'Premiere Pro'],
    colors: [
      { name: 'Bakery Amber', hex: '#E07A28' },
      { name: 'Warm Cream', hex: '#FDFBF7' },
      { name: 'Deep Espresso', hex: '#261B14' },
      { name: 'Rustic Gold', hex: '#D4A373' }
    ],
    heroImage: '/singh-bake/sb-brand-post.png',
    galleryImages: [
      '/singh-bake/sb-brand-post.png',
      '/singh-bake/biscuit-post.png',
      '/singh-bake/wholesale-post.png',
      '/singh-bake/post-2.png',
      '/singh-bake/logo.png',
      '/singh-bake/paperbag.png'
    ],
    featured: true,
    accentColor: '#E07A28',
    badgeBg: 'bg-amber-500/10 text-amber-700 border-amber-500/30 dark:bg-amber-500/20 dark:text-amber-300',
    badgeText: 'Flagship 360° Case Study',
    year: '2025',
    clientContext: 'Complete brand overhaul & social launch for artisanal bakery Singh Bake & Bites.',
    takeaway: 'Combining cohesive packaging with high-energy video motion reels creates an irresistible 360° digital impression.'
  },
  {
    id: 'academy-career-launch',
    title: 'Next-Gen Tech Academy Campaigns',
    subtitle: 'High-conversion admission posters, orientation announcements & bootcamp promotional design',
    category: 'academy',
    categoryLabel: 'Academy & EdTech',
    description: 'A comprehensive series of high-impact promotional posters and social creatives built for career launch programs, tech bootcamps, and developer webinars. Combines structured typographic hierarchy, strong call-to-action blocks, and energetic visual pacing.',
    challenge: 'Education and bootcamp marketing frequently gets lost in text-heavy clutter. The challenge was to communicate complex course curriculums, schedules, and career transformation within a fraction of a second on fast-scrolling social feeds.',
    visualDirection: 'Punchy color contrast, bold geometric framing, modern sans-serif typography, and high-energy accent badges to drive immediate curiosity and event registrations.',
    deliverables: [
      'Social Media Campaign Creatives',
      'Course Announcement Posters',
      'Webinar & Speaker Promos',
      'Registration Banner Formats'
    ],
    tools: ['Figma', 'Photoshop', 'Canva'],
    colors: [
      { name: 'Cobalt Energy', hex: '#2B4CFF' },
      { name: 'Electric Coral', hex: '#FF4D4D' },
      { name: 'Deep Carbon', hex: '#121214' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    heroImage: '/riya-work/Design 1.png',
    galleryImages: [
      '/riya-work/Design 1.png',
      '/riya-work/Design 2.png',
      '/riya-work/Design 3.png',
      '/riya-work/Design 5.png',
      '/riya-work/Design 7.png'
    ],
    featured: true,
    accentColor: '#2B4CFF',
    badgeBg: 'bg-blue-500/10 text-blue-600 border-blue-500/30 dark:bg-blue-500/20 dark:text-blue-300',
    badgeText: 'Campaign Series',
    year: '2025',
    clientContext: 'Designed for academy student outreach, admissions, and event promotion.',
    takeaway: 'Strategic typography and high-contrast color hierarchy turn complex course info into instant, clickable interest.'
  },
  {
    id: 'academy-editorial-brochure',
    title: 'Academy Curriculum & Editorial Brochure',
    subtitle: 'Comprehensive multi-page print and digital brochure system',
    category: 'editorial',
    categoryLabel: 'Editorial & Print',
    description: 'An editorial brochure design showcasing tech academy offerings, course breakdowns, value propositions, and institutional credibility across tactile front and back layouts.',
    challenge: 'Translating extensive course curriculums and institutional credentials into a clean, legible, and aesthetically inspiring printed format that feels both authoritative and approachable.',
    visualDirection: 'Grid-based modular layout with dedicated reading zones, crisp line dividers, balanced white space, and clear focal points for contact details.',
    deliverables: [
      'Brochure Front Cover & Value Prop',
      'Brochure Back Layout & Curriculum Index',
      'Print-Ready Layout Architecture',
      'Digital PDF Viewing Format'
    ],
    tools: ['Photoshop', 'Figma', 'Illustrator'],
    colors: [
      { name: 'Rich Navy', hex: '#0E1F40' },
      { name: 'Bright Cyan', hex: '#00D2FF' },
      { name: 'Warm Cream', hex: '#F9F8F5' },
      { name: 'Slate Gray', hex: '#4A5568' }
    ],
    heroImage: '/riya-work/brochure front.png',
    galleryImages: [
      '/riya-work/brochure front.png',
      '/riya-work/brochure back.png'
    ],
    featured: true,
    accentColor: '#00D2FF',
    badgeBg: 'bg-cyan-500/10 text-cyan-700 border-cyan-500/30 dark:bg-cyan-500/20 dark:text-cyan-300',
    badgeText: 'Print & Editorial',
    year: '2025',
    clientContext: 'Created for physical handouts, educational expos, and digital distribution.',
    takeaway: 'Editorial clarity and precise layout pacing make detailed educational programs effortlessly scannable.'
  },
  {
    id: 'food-beverage-social-suite',
    title: 'FMCG & Beverage Creatives: Red Bull, Amul & Gourmet Bites',
    subtitle: 'Feature-callout product posters, packaging before/after redesigns & appetite-first social ads',
    category: 'social',
    categoryLabel: 'Brand Socials & Packaging',
    description: 'A dynamic suite of FMCG and food & beverage visual creatives spanning benefit-breakdown posters for Red Bull Energy Drink, an illustrative "Before vs After" packaging overhaul case for Amul Masti Dahi, and high-conversion promotional creatives for gourmet food items.',
    challenge: 'Balancing fast-scanning benefit communication (such as energy, focus, and natural ingredients) with emotional visual warmth and mouthwatering appetite appeal on crowded social feeds.',
    visualDirection: 'Crisp condensation droplets, dynamic angled product hero shots, rich brand blues and warm dairy pasture greens, clear benefit badges, and before/after problem-solving comparisons.',
    deliverables: [
      'Red Bull Feature Breakdown & 9:16 Social Poster',
      'Amul Masti Dahi Packaging Redesign (Before vs After)',
      'Gourmet Food Launch Creatives & Offer Graphics',
      'Social Feed & Story Templates'
    ],
    tools: ['Photoshop', 'Figma', 'Illustrator'],
    colors: [
      { name: 'Red Bull Cobalt', hex: '#002244' },
      { name: 'Electric Red', hex: '#E63946' },
      { name: 'Pasture Green', hex: '#2D6A4F' },
      { name: 'Warm Cream', hex: '#FAF8F5' }
    ],
    heroImage: '/creatives/redbull-poster.png',
    galleryImages: [
      '/creatives/redbull-poster.png',
      '/creatives/amul-dahi-redesign.png',
      '/riya-work/food design 1.png',
      '/riya-work/food design 2.png'
    ],
    featured: true,
    accentColor: '#002244',
    badgeBg: 'bg-blue-600/10 text-blue-800 border-blue-600/30 dark:bg-blue-600/20 dark:text-blue-200',
    badgeText: 'FMCG & Packaging',
    year: '2025',
    clientContext: 'Commercial product posters and packaging transformation studies for leading FMCG brands.',
    takeaway: 'Clear benefit callouts combined with high-contrast product staging increase viewer retention and conversion.'
  },
  {
    id: 'festive-cultural-campaigns',
    title: 'Cultural & Festive Brand Storytelling',
    subtitle: 'Lohri, Ganesh Chaturthi & seasonal celebration identity creatives',
    category: 'festive',
    categoryLabel: 'Festive & Cultural',
    description: 'Vibrant cultural festival campaigns weaving traditional celebration motifs with modern digital typography. Designed to foster emotional connection and seasonal brand warmth.',
    challenge: 'Balancing authentic cultural reverence and traditional motifs with contemporary design aesthetics and clean corporate branding.',
    visualDirection: 'Rich warm color palettes (saffron gold, royal emerald, celebratory crimson), ornate illustrative accents, and festive typographic compositions.',
    deliverables: [
      'Lohri Celebration Campaign',
      'Ganesh Chaturthi Devotional Art',
      'Seasonal Festive Greetings',
      'Cultural Social Media Posts'
    ],
    tools: ['Photoshop', 'Illustrator', 'Canva'],
    colors: [
      { name: 'Saffron Sun', hex: '#FF9E00' },
      { name: 'Festival Crimson', hex: '#D00000' },
      { name: 'Golden Glow', hex: '#FFD166' },
      { name: 'Midnight Charcoal', hex: '#141416' }
    ],
    heroImage: '/riya-work/lohri.png',
    galleryImages: [
      '/riya-work/lohri.png',
      '/riya-work/Frame 4.png',
      '/riya-work/Frame 2.jpg',
      '/riya-work/Design 8.png'
    ],
    featured: true,
    accentColor: '#FF9E00',
    badgeBg: 'bg-amber-500/10 text-amber-700 border-amber-500/30 dark:bg-amber-500/20 dark:text-amber-300',
    badgeText: 'Festive Suite',
    year: '2025',
    clientContext: 'Seasonal holiday and festival campaigns across multiple brand channels.',
    takeaway: 'Emotional storytelling and festive warmth connect deeply with audiences on culturally significant moments.'
  },
  {
    id: 'learn-lead-educational-posters',
    title: 'Learn & Lead Brand Identity Explainer',
    subtitle: 'Educational motivation, speaker webinars & service architecture',
    category: 'academy',
    categoryLabel: 'Academy & EdTech',
    description: 'A bold, motivational visual series combining aspirational typography with structured service explainers for tech academies and training initiatives.',
    challenge: 'Inspiring ambitious students to take action while clearly articulating multi-step career pathways and technical course advantages.',
    visualDirection: 'High-contrast editorial typography, dynamic directional arrows, clean badge elements, and motivating messaging hierarchy.',
    deliverables: [
      'Motivation & Career Push Posters',
      'Service Architecture Infographics',
      'Webinar Feature Creatives',
      'Speaker Announcement Graphics'
    ],
    tools: ['Figma', 'Photoshop'],
    colors: [
      { name: 'Electric Chartreuse', hex: '#D4FF32' },
      { name: 'Carbon Black', hex: '#101012' },
      { name: 'Vibrant Magenta', hex: '#D9048E' },
      { name: 'Paper White', hex: '#F7F7F7' }
    ],
    heroImage: '/riya-work/Design 4.png',
    galleryImages: [
      '/riya-work/Design 4.png',
      '/riya-work/Design 6.png',
      '/riya-work/Design 8.png'
    ],
    featured: true,
    accentColor: '#D4FF32',
    badgeBg: 'bg-lime-500/10 text-lime-700 border-lime-500/30 dark:bg-lime-500/20 dark:text-lime-300',
    badgeText: 'Brand Explainer',
    year: '2025',
    clientContext: 'Created to drive engagement for tech academies and mentorship workshops.',
    takeaway: 'When educational content feels energetic and modern, student enrollments naturally increase.'
  }
];
