import type {
  PricingTier,
  CarePlan,
  PricingFactor,
  PricingLane,
} from "./types";

export const pricingLanes: PricingLane[] = [
  {
    label: "WordPress / Quick Start",
    heading: "Launch quickly on WordPress",
    subtext:
      "The lower-cost, faster launch path for businesses that want a clean site on a flexible platform they can edit later.",
    tone: "quick",
    points: [
      "Lower upfront investment",
      "Faster launch timeline",
      "Easy to edit after launch",
    ],
  },
  {
    label: "Custom Builds",
    heading: "Build a more tailored custom presence",
    subtext:
      "For businesses that need more design control, cleaner positioning, and a more purpose-built path to inquiries.",
    tone: "custom",
    points: [
      "More tailored messaging and structure",
      "Stronger design and brand control",
      "Built for flexibility and growth",
    ],
  },
];

export const quickStartTiers: PricingTier[] = [
  {
    name: "WordPress One-Page Starter",
    price: "$349",
    description:
      "A clean one-page WordPress presence with a straightforward launch scope.",
    bestFor: "Simple service businesses launching on a lean budget",
    includes: [
      "One-page layout with core sections",
      "Mobile-ready setup",
      "Contact form",
      "Basic launch setup",
    ],
  },
  {
    name: "WordPress 3-Page Starter",
    price: "$649",
    description:
      "A practical Home, Services, and Contact website without a full custom build.",
    bestFor: "Businesses that need clarity and credibility fast",
    includes: [
      "3 page structure (Home, Services, Contact)",
      "Theme customization and brand styling",
      "Mobile optimization",
      "Contact form setup",
    ],
  },
  {
    name: "WordPress 5-Page Business Site",
    price: "$899",
    description:
      "A fuller structure with room for service detail, FAQs, and proof content.",
    bestFor: "Growing service businesses that need a fuller website",
    includes: [
      "Up to 5 pages",
      "Expanded content structure",
      "FAQ and proof-focused sections",
      "On-page SEO essentials",
      "Launch support",
    ],
  },
];

export const customBuildTiers: PricingTier[] = [
  {
    name: "Custom Landing Page",
    price: "$399",
    description:
      "A focused one-page custom build with cleaner design and a simple path to inquiries.",
    bestFor:
      "Early-stage businesses that need a polished custom presence with controlled scope",
    includes: [
      "One-page custom layout and styling",
      "Core message sections and call-to-action flow",
      "Mobile optimization",
      "Basic launch setup",
    ],
  },
  {
    name: "Custom Business Website",
    price: "$999",
    description:
      "A custom 3 to 5 page site with stronger structure and polish.",
    bestFor: "Businesses ready to level up brand and credibility",
    includes: [
      "Custom 3 to 5 page architecture",
      "Tailored design and visual hierarchy",
      "Service and trust messaging",
      "Conversion-focused calls to action",
      "Analytics and launch setup",
    ],
    featuredLabel: "Most Requested",
  },
  {
    name: "Growth Website",
    price: "$1,499",
    description:
      "A more robust custom site with expanded structure and stronger conversion flow.",
    bestFor: "Businesses investing in growth and lead quality",
    includes: [
      "Expanded custom page and section structure",
      "Advanced conversion flow planning",
      "Deeper content organization",
      "Trust and credibility sections",
      "Performance and technical polish",
    ],
  },
  {
    name: "Advanced Website / Custom Functionality",
    price: "$1,800",
    description:
      "For businesses that need a more involved website setup with tailored page structure, stronger user flows, and functionality beyond a standard brochure build.",
    bestFor:
      "Businesses with more complex service offerings, multiple user paths, or advanced quote and booking needs",
    includes: [
      "More involved site architecture and page planning",
      "Advanced quote or booking flow setup",
      "Custom content sections and reusable layouts",
      "Third-party integrations (CRM, scheduling, automation tools)",
      "Additional functional complexity and QA depth",
    ],
  },
];

export const entryTiers: PricingTier[] = quickStartTiers;
export const buildTiers: PricingTier[] = customBuildTiers;
export const tiers: PricingTier[] = [...quickStartTiers, ...customBuildTiers];

export const carePlans: CarePlan[] = [
  {
    name: "Managed Hosting",
    price: "$20",
    period: "/mo",
    description:
      "Basic hosting and site essentials. No ongoing design or development support.",
    features: [
      "Secure hosting",
      "SSL certificate",
      "Routine backups",
      "Uptime monitoring",
      "Basic domain and DNS help if needed",
    ],
    exclusions: [
      "Content edits",
      "Design changes",
      "Larger updates",
      "New pages or features",
      "Active ongoing support",
    ],
  },
  {
    name: "Website Care",
    price: "$59",
    period: "/mo",
    description:
      "For clients who want continued help keeping their site updated and running smoothly.",
    featuredLabel: "Recommended",
    features: [
      "Everything in Managed Hosting",
      "Regular maintenance checks",
      "Contact form checks",
      "One small content update per month",
      "Light support via email",
    ],
    featured: true,
  },
];

export const pricingFactors: PricingFactor[] = [
  {
    title: "Platform and build path",
    text: "WordPress projects use a faster setup. Custom projects include more tailored planning, design control, and conversion structure.",
  },
  {
    title: "Scope and content depth",
    text: "Page count matters, but section complexity and content depth usually have a bigger impact on effort.",
  },
  {
    title: "Design direction",
    text: "More tailored visual direction and custom layout work increase production time.",
  },
  {
    title: "Functionality",
    text: "Advanced quote or booking flows, automations, and integrations increase technical scope and QA time.",
  },
  {
    title: "Timeline",
    text: "Rush timelines or phased launch requirements can change total pricing.",
  },
];
