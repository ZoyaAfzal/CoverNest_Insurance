// Shared data for services, blog posts, testimonials. Image URLs use Unsplash.
export type Service = {
  slug: string;
  name: string;
  short: string;
  long: string;
  image: string;
  emoji: string;
  covers: string[];
};

export const services: Service[] = [
  {
    slug: "home",
    name: "Home Insurance",
    short: "Protect the place where life happens from foundation to roofline.",
    long: "Comprehensive dwelling, contents, and liability coverage tailored to your property and lifestyle.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop",
    emoji: "🏠",
    covers: ["Dwelling & structures", "Personal belongings", "Liability protection", "Loss of use"],
  },
  {
    slug: "health",
    name: "Health Insurance",
    short: "Comprehensive plans for individuals, families, and small teams.",
    long: "From routine care to specialist visits, our plans focus on access, affordability, and clarity.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop",
    emoji: "🏥",
    covers: ["Primary & specialist care", "Prescriptions", "Mental health", "Preventive visits"],
  },
  {
    slug: "auto",
    name: "Auto Insurance",
    short: "Coverage that follows you, with claims handled in hours not weeks.",
    long: "Liability, collision, and comprehensive coverage with roadside, rental, and gap options.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80&auto=format&fit=crop",
    emoji: "🚗",
    covers: ["Liability", "Collision & comprehensive", "Roadside assistance", "Rental reimbursement"],
  },
  {
    slug: "business",
    name: "Business Insurance",
    short: "Protect employees, property, and reputation as you grow.",
    long: "General liability, BOP, workers' comp, and cyber coverage built for modern operations.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80&auto=format&fit=crop",
    emoji: "💼",
    covers: ["General liability", "Property & BOP", "Workers' compensation", "Cyber liability"],
  },
  {
    slug: "life",
    name: "Life Insurance",
    short: "Make sure the people you love are looked after, no matter what.",
    long: "Term, whole, and universal life policies with transparent underwriting and fast approvals.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80&auto=format&fit=crop",
    emoji: "❤️",
    covers: ["Term life", "Whole life", "Universal life", "Living benefits"],
  },
  {
    slug: "travel",
    name: "Travel Insurance",
    short: "From weekend trips to year-long journeys - covered every mile.",
    long: "Trip cancellation, medical, evacuation, and baggage protection for travelers worldwide.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80&auto=format&fit=crop",
    emoji: "✈️",
    covers: ["Trip cancellation", "Emergency medical", "Evacuation", "Lost baggage"],
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
};

export const posts: Post[] = [
  {
    slug: "how-to-choose-the-right-health-plan",
    title: "How to choose the right health plan in 2026",
    excerpt: "A clear, jargon-free framework for picking a plan that matches your life, not your fears.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1400&q=80&auto=format&fit=crop",
    author: "Maya Lawson",
    date: "May 24, 2026",
    readTime: "6 min read",
  },
  {
    slug: "what-auto-insurance-actually-covers",
    title: "What auto insurance actually covers (and what it doesn't)",
    excerpt: "Most drivers misread their policy. Here's the plain-English guide we wish we'd had.",
    category: "Auto",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1400&q=80&auto=format&fit=crop",
    author: "Daniel Reyes",
    date: "May 12, 2026",
    readTime: "5 min read",
  },
  {
    slug: "term-vs-whole-life-the-honest-comparison",
    title: "Term vs whole life: the honest comparison",
    excerpt: "Salespeople rarely show the math. We did with three real-world scenarios.",
    category: "Life",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80&auto=format&fit=crop",
    author: "Priya Anand",
    date: "April 30, 2026",
    readTime: "8 min read",
  },
];

export const testimonials = [
  {
    name: "Sarah & Marcus Hill",
    city: "Brookline, MA",
    quote: "The CoverNest team rebuilt our coverage in under a week and saved us $1,840 a year, without giving up a single protection we needed.",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Jordan Whitaker",
    city: "Austin, TX",
    quote: "I filed a claim on Sunday night and had an adjuster on the phone Monday morning. That's not insurance, that's a partnership.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Elena Park",
    city: "Seattle, WA",
    quote: "They explained every line of my policy until I actually understood it. I've never felt this informed about my own coverage.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop",
  },
];

export const team = [
  { name: "Amelia Carter", role: "Founder & Principal Advisor", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop" },
  { name: "Theo Nakamura", role: "Head of Claims", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop" },
  { name: "Rosa Delgado", role: "Senior Life Advisor", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop" },
  { name: "Marcus Lin", role: "Commercial Lines Lead", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80&auto=format&fit=crop" },
];
