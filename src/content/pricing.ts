import type { PricingTier, CarePlan, PricingFactor } from "./types";

/** Budget-friendly entry points */
export const entryTiers: PricingTier[] = [
  {
    name: "WordPress Site",
    price: "$200",
    description:
      "A clean, professional WordPress website for businesses that need a reliable online presence without a custom build.",
    includes: [
      "WordPress theme setup and customization",
      "Up to 3 pages",
      "Mobile-responsive design",
      "Contact form setup",
      "Basic SEO and security plugins",
      "Launch support",
    ],
  },
  {
    name: "Landing Page",
    price: "$500",
    description:
      "A single focused page, ideal for a specific service, promotion, or a business that needs a clean web presence fast.",
    includes: [
      "One-page custom design",
      "Mobile-responsive layout",
      "Contact form or CTA",
      "Basic SEO setup",
      "Launch support",
    ],
  },
];

/** Custom-built project tiers */
export const buildTiers: PricingTier[] = [
  {
    name: "Starter Website",
    price: "$900",
    description:
      "A professional multi-page site for businesses ready to establish a clear, credible online presence.",
    includes: [
      "3 to 5 custom pages",
      "Mobile-responsive design",
      "Service and contact pages",
      "Basic SEO structure",
      "Analytics setup",
      "Launch support",
    ],
    featured: true,
  },
  {
    name: "Growth Website",
    price: "$1,800",
    description:
      "A more robust site for businesses that need stronger conversion structure, more content, and a polished brand experience.",
    includes: [
      "5 to 8+ custom pages",
      "Advanced layout and design",
      "Quote/booking form setup",
      "Content organization",
      "Performance optimization",
      "SEO and analytics setup",
      "Priority launch support",
    ],
  },
  {
    name: "Custom Project",
    price: "$3,000",
    description:
      "For businesses with specific requirements, integrations, or larger-scope needs. Scoped and quoted individually.",
    includes: [
      "Custom scope and planning",
      "Advanced functionality",
      "Third-party integrations",
      "Complex design requirements",
      "Extended development timeline",
      "Dedicated support",
    ],
  },
];

/** All tiers combined (for backward compat) */
export const tiers: PricingTier[] = [...entryTiers, ...buildTiers];

export const carePlans: CarePlan[] = [
  {
    name: "Essential",
    price: "$25",
    period: "/month",
    features: [
      "Hosting included",
      "SSL certificate & uptime checks",
      "Security updates",
      "Light support via email",
    ],
  },
  {
    name: "Basic Care",
    price: "$50",
    period: "/month",
    features: [
      "Everything in Essential",
      "Monthly site health check",
      "Contact form monitoring",
      "One small content update per month",
      "Basic performance monitoring",
    ],
    featured: true,
  },
  {
    name: "Standard Support",
    price: "$100",
    period: "/month",
    features: [
      "Everything in Basic Care",
      "Regular edits and content updates",
      "Faster support turnaround",
      "Priority email support",
      "Performance monitoring",
      "Monthly maintenance check-in",
    ],
  },
];

export const pricingFactors: PricingFactor[] = [
  {
    title: "Number of pages",
    text: "More pages means more design, content, and development work.",
  },
  {
    title: "Content readiness",
    text: "Projects move faster when text, images, and branding materials are provided upfront.",
  },
  {
    title: "Custom functionality",
    text: "Forms, booking systems, third-party integrations, and special features add to scope.",
  },
  {
    title: "Design complexity",
    text: "Unique layouts, custom graphics, and advanced visual requirements take more time.",
  },
  {
    title: "Timeline",
    text: "Rush timelines may affect pricing. Standard timelines are 2 to 4 weeks for most projects.",
  },
];
