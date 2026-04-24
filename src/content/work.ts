import type { Project } from "./types";

const projectCatalog: Project[] = [
  {
    name: "Northline Studio",
    type: "Design Studio",
    image: "/projects/northline-studio.png",
    url: "northlinestudio27.wordpress.com",
    challenge:
      "Northline Studio needed a website that reflected the quality of their own design work. It had to communicate credibility, showcase their branding and web design services, and attract small businesses looking for professional creative direction.",
    solution:
      "Built a clean, modern WordPress site with clear service breakdowns, portfolio presentation, and a straightforward contact flow. The design itself serves as proof of what the studio can deliver.",
    result:
      "A polished online presence that positions Northline Studio as a credible, strategic creative partner for small businesses and growing brands.",
    capabilities: [
      "WordPress",
      "Brand identity",
      "Service pages",
      "Portfolio layout",
    ],
    tech: ["WordPress", "PHP", "CSS"],
    improvements: [
      "Clean visual system reinforcing the studio's design credibility",
      "Service pages outlining branding, web design, and creative direction",
      "Portfolio presentation showcasing real client work",
      "Simple contact flow for new business inquiries",
    ],
  },
  {
    name: "Cable Goblin",
    type: "E-Commerce",
    image: "/projects/cable-goblin.png",
    url: "zackbrown94.wpcomstaging.com",
    challenge:
      "Cable Goblin needed an online store that could showcase a wide range of electronics, from smartphones and laptops to headphones and accessories, while making it easy for customers to browse, search, and buy.",
    solution:
      "Built a full-featured WordPress e-commerce site with product catalogs, category filtering, search functionality, promotional banners, and a clean shopping experience designed to drive conversions.",
    result:
      "A professional online storefront that organizes a large product catalog into clear categories and gives customers a smooth path from browsing to checkout.",
    capabilities: [
      "WordPress + WooCommerce",
      "Product catalog",
      "Category filtering",
      "Mobile-responsive",
    ],
    tech: ["WordPress", "WooCommerce", "PHP", "CSS"],
    improvements: [
      "Organized product catalog with clear category navigation",
      "Promotional banner system for seasonal deals",
      "Search functionality for quick product discovery",
      "Mobile-friendly layout for on-the-go shoppers",
    ],
  },
  {
    name: "Trailhead Cycles",
    type: "Bike Shop",
    image: "/projects/trailhead-cycles.png",
    url: "zackaryzbrown-yeswj.wordpress.com",
    challenge:
      "A neighborhood bike shop needed a website that reflected their premium, community-focused brand while making it easy for customers to explore bikes, book service appointments, and reserve rentals.",
    solution:
      "Built a clean WordPress site with dedicated pages for bikes, service and repairs, rentals, and contact. Hero imagery and clear navigation guide visitors to the right service, while a contact form simplifies appointment scheduling.",
    result:
      "A polished, inviting online presence that positions Trailhead Cycles as the go-to local bike shop, with clear paths from browsing to booking a service or rental.",
    capabilities: ["WordPress", "Service pages", "Rental info", "Contact form"],
    tech: ["WordPress", "PHP", "CSS"],
    improvements: [
      "Service pages breaking down tune-ups, repairs, and custom builds",
      "Rental section with clear gear options for visitors",
      "Customer reviews building trust with real testimonials",
      "Mobile-friendly layout for riders on the go",
    ],
  },
  {
    name: "MHK Training",
    type: "Martial Arts / Fitness",
    image: "/projects/mhk-training.png",
    url: "www.mhktraining.com",
    challenge:
      "MHK Training had strong programs but their online presence didn't reflect it. Potential clients couldn't easily understand what was offered or take the next step toward booking.",
    solution:
      "Built a clean, structured website with clear service breakdowns, trainer credentials, and integrated booking. Every page guides visitors from understanding the training approach to scheduling a session.",
    result:
      "A credible, conversion-ready web presence that positions MHK Training as a serious fitness business, with a streamlined path from first visit to booked session.",
    capabilities: [
      "Custom design",
      "Service pages",
      "Booking integration",
      "Mobile-responsive",
    ],
    tech: [
      "React",
      "Vite",
      "CSS Modules",
      "Web3Forms",
      "AWS Amplify",
      "Docker",
      "Node.js",
    ],
    improvements: [
      "Clear service hierarchy for multiple program types",
      "Integrated booking flow reducing friction to sign-up",
      "Mobile-first design for on-the-go browsing",
      "Professional credibility through structured content",
    ],
  },
  {
    name: "Mobile Auto Detailing",
    type: "Automotive Detailing",
    image: "/projects/Auto-detailing.png",
    url: "zekie-demo.zackarybrown.net",
    challenge:
      "The business needed a website that could serve as their primary lead generation tool. It had to showcase services, build trust, and make it simple for vehicle owners to request a quote.",
    solution:
      "Designed a conversion-focused site with clear service tiers, upfront pricing transparency, and prominent quote request forms. Optimized for mobile since the majority of detailing customers search from their phones.",
    result:
      "A polished, professional site that builds instant trust and gives customers a clear, frictionless path from browsing services to requesting a quote.",
    capabilities: [
      "Custom design",
      "Quote forms",
      "Service & pricing pages",
      "Mobile-first",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "shadcn/ui",
      "Framer Motion",
      "React Hook Form",
    ],
    improvements: [
      "Service tier structure clarifying offerings and pricing",
      "Quote request forms placed at key decision points",
      "Mobile-optimized for phone-first customer behavior",
      "Trust-building design for a competitive local market",
    ],
  },
  {
    name: "Mobile Detailing",
    type: "Automotive Detailing",
    image: "/projects/MobileDetailing.png",
    url: "mobile-details-demo.zackarybrown.net",
    challenge:
      "A Denver-based mobile detailing business needed a site that could generate leads, showcase real results, and make it dead simple for customers to request a quote via text or call.",
    solution:
      "Built a conversion-driven single-page site with before/after galleries, service breakdowns, a step-by-step booking flow, and prominent text-to-quote CTAs. Everything was optimized for the phone-first behavior of detailing customers.",
    result:
      "A high-trust, mobile-optimized site that turns visitors into quote requests through social proof, visual results, and a frictionless text-based booking experience.",
    capabilities: [
      "Custom design",
      "Before/after gallery",
      "SMS quote integration",
      "Service area map",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "MUI",
      "shadcn/ui",
      "Framer Motion",
    ],
    improvements: [
      "Before/after comparisons building instant credibility",
      "Text-to-quote flow matching how customers actually communicate",
      "Service area coverage map for local SEO and trust",
      "Review showcase reinforcing quality with real feedback",
    ],
  },
  {
    name: "GreenScape Pro",
    type: "Lawn Care & Landscaping",
    image: "/projects/greenscape.png",
    url: "demo-greenscape.netlify.app",
    challenge:
      "A Boulder County lawn care and landscaping company needed a professional site that communicated reliability, showcased their range of services, and made it easy for homeowners and businesses to request a quote.",
    solution:
      "Designed a structured, trust-forward site with clear service categories, a project gallery, service area mapping, and a streamlined quote request flow. All built to convert property owners browsing for dependable outdoor maintenance.",
    result:
      "A polished web presence that positions GreenScape Pro as the reliable, professional choice in a crowded local market, with clear paths from discovery to quote request.",
    capabilities: [
      "Custom design",
      "Service pages",
      "Project gallery",
      "Quote request flow",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    improvements: [
      "Service tier structure covering residential and commercial needs",
      "Project gallery showcasing real transformation results",
      "Service area map building local trust and relevance",
      "Testimonials and trust signals reinforcing reliability",
    ],
  },
  {
    name: "Floor Hosting",
    type: "Hosting / SaaS Concept",
    image: "/projects/FloorHosting.png",
    url: "stupendous-otter-759661.netlify.app",
    challenge:
      "A web hosting startup needed a credible, modern site that could compete with established providers. It had to communicate speed, reliability, and real human support without feeling generic or templated.",
    solution:
      "Built a clean, developer-friendly site with clear plan breakdowns, feature highlights, and social proof from real customers. The design balances technical credibility with approachable messaging that appeals to both developers and small business owners.",
    result:
      "A professional hosting site that builds confidence through clear pricing, strong feature presentation, and authentic testimonials. It positions Floor Hosting as a serious alternative to commodity providers.",
    capabilities: [
      "Custom design",
      "Pricing pages",
      "Feature showcase",
      "Testimonials",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    improvements: [
      "Clear plan comparison helping customers choose confidently",
      "Feature grid communicating technical advantages simply",
      "Customer testimonials building trust with real use cases",
      "Clean, modern design competing with established brands",
    ],
  },
  {
    name: "North Peak Dental",
    type: "Dental Practice",
    image: "/projects/NorthPeakDental.png",
    url: "northpeakdental.netlify.app",
    challenge:
      "A dental practice needed a modern website that reflected their calm, patient-first approach. It had to make it easy for new patients to understand services, build trust, and book their first appointment without friction.",
    solution:
      "Designed a clean, welcoming site with clear service breakdowns, an easy onboarding flow for new patients, and prominent appointment CTAs. The design balances professionalism with warmth to match the practice's no-pressure philosophy.",
    result:
      "A polished, trust-building web presence that positions North Peak Dental as a modern, approachable practice, with a streamlined path from first visit to booked appointment.",
    capabilities: [
      "Custom design",
      "Service pages",
      "Patient onboarding",
      "Appointment booking",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Google Fonts"],
    improvements: [
      "New patient flow reducing friction to first appointment",
      "Service breakdowns building confidence before visiting",
      "Calm, modern design reflecting the practice's atmosphere",
      "Clear CTAs guiding visitors to book or call",
    ],
  },
  {
    name: "JustMalikBeats",
    type: "Music Production",
    image: "/projects/justmalikbeats.png",
    url: "malikbeats.com",
    challenge:
      "JustMalikBeats needed a professional platform to showcase their catalog, handle licensing, and present a cohesive brand to potential clients in the music industry.",
    solution:
      "Built a custom platform with audio playback, licensing breakdowns, and a polished brand presentation. The site balances creative expression with clear business functionality.",
    result:
      "A professional music platform that showcases the catalog effectively and provides a clear path to licensing, positioning JustMalikBeats as a credible, established producer.",
    capabilities: [
      "Custom build",
      "Audio integration",
      "Licensing pages",
      "Brand design",
    ],
    tech: [
      "React",
      "Vite",
      "Express",
      "MongoDB",
      "Stripe",
      "JWT",
      "AWS Amplify",
      "CSS Modules",
    ],
    improvements: [
      "Audio showcase letting clients preview before purchasing",
      "Clear licensing structure reducing back-and-forth inquiries",
      "Professional brand presentation across all touchpoints",
      "Streamlined catalog navigation for browsing beats",
    ],
  },
  {
    name: "The Futons",
    type: "Music / Band",
    image: "/projects/the-futons.png",
    url: "thefutons.band",
    challenge:
      "The Futons needed a web presence that captured their identity as a band while making it easy for fans and event organizers to find information and book them for shows.",
    solution:
      "Created a site that balances personality with practicality, featuring music samples, show information, and clear contact options for booking inquiries.",
    result:
      "An authentic online presence that represents the band professionally and makes booking inquiries frictionless for event organizers.",
    capabilities: [
      "Custom design",
      "Media integration",
      "Contact setup",
      "Responsive layout",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Cloudinary", "Web3Forms"],
    improvements: [
      "Booking-friendly contact flow for event organizers",
      "Media integration showcasing music and performances",
      "Brand-authentic design reflecting the band's identity",
      "Mobile-ready layout for fans discovering them at events",
    ],
  },
];

const projectTypePriority: Record<string, number> = {
  "Dental Practice": 1,
  "Automotive Detailing": 2,
  "Lawn Care & Landscaping": 3,
  "Martial Arts / Fitness": 4,
  "Bike Shop": 5,
  "Design Studio": 6,
  Contractors: 7,
};

export const projects: Project[] = [...projectCatalog].sort((a, b) => {
  const aPriority = projectTypePriority[a.type] ?? 99;
  const bPriority = projectTypePriority[b.type] ?? 99;

  if (aPriority !== bPriority) return aPriority - bPriority;
  return a.name.localeCompare(b.name);
});

/* Homepage featured subset */
export const featuredProjects = projects.slice(0, 3);
