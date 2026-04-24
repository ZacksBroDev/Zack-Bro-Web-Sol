import type { ServiceItem, ProcessStep, FeatureItem, FAQItem } from "./types";

/* ── Services (overview cards) ── */
export const services: ServiceItem[] = [
  {
    title: "Custom Small Business Websites",
    description:
      "Purpose-built websites designed around your business, your customers, and your goals. Every site is built to work for you, not pulled from a template.",
    icon: "◆",
  },
  {
    title: "Website Redesigns",
    description:
      "Already have a site that isn't performing? I'll rebuild it with clearer messaging, better mobile experience, and a stronger path to leads.",
    icon: "◇",
  },
  {
    title: "Quote & Lead Capture Setup",
    description:
      "Forms, booking integrations, and call-to-action structure that makes it easy for your customers to reach you.",
    icon: "▣",
  },
  {
    title: "Ongoing Website Care",
    description:
      "Monthly support plans that keep your site updated, secure, and performing so you can focus on running your business.",
    icon: "○",
  },
];

/* ── Pricing preview (homepage) ── */
export const pricingPreview = [
  { name: "WordPress Site", price: "from $349" },
  { name: "Landing Page", price: "from $399" },
  { name: "Starter Website", price: "from $999" },
  { name: "Growth Website", price: "from $1,499" },
  { name: "Advanced Website / Custom Functionality", price: "from $1,800" },
] as const;

/* ── Process steps ── */
export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We talk about your business, your customers, and what you need your website to accomplish.",
  },
  {
    step: "02",
    title: "Scope & Quote",
    description:
      "I put together a clear proposal with pricing, timeline, and deliverables. No surprises.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "I design and develop your site, keeping you updated along the way with progress check-ins.",
  },
  {
    step: "04",
    title: "Review & Refine",
    description:
      "You review the site and I make refinements until everything looks and works exactly right.",
  },
  {
    step: "05",
    title: "Launch",
    description:
      "We go live. I handle the technical details including domain, hosting setup, and final checks.",
  },
  {
    step: "06",
    title: "Ongoing Support",
    description:
      "After launch, I'm here for updates, questions, and ongoing care if you need it.",
  },
];

/* ── Why Work With Me ── */
export const whyWorkWithMe: FeatureItem[] = [
  {
    title: "Direct Communication",
    text: "You work with me directly. Not an account manager, not a junior developer. One point of contact who knows your project inside and out.",
  },
  {
    title: "Business-Focused Approach",
    text: "Every design decision is made to help your business look credible, communicate clearly, and convert visitors into inquiries.",
  },
  {
    title: "Transparent Process",
    text: "Clear pricing, honest timelines, and regular updates. No scope creep surprises, no vanishing after launch.",
  },
  {
    title: "Built for Performance",
    text: "Fast-loading, mobile-first, and structured for search visibility. Your site works well for customers and for your business.",
  },
];

/* ── Homepage FAQ (trimmed subset) ── */
export const homeFaqItems: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Projects start at $349 for a WordPress site and go up from there depending on scope. Most small business websites fall in the $999 to $1,800+ range. I provide a clear quote after learning about your needs.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most websites are completed in 2 to 4 weeks depending on complexity and how quickly content is provided. I'll give you a realistic timeline during the quoting process.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. If you have a site that's outdated, not mobile-friendly, or just not generating leads, I can redesign it with modern structure and clearer messaging.",
  },
  {
    question: "Do you help with hosting and launch?",
    answer:
      "Yes. I handle the technical side of launching your site, including domain connection, hosting setup, SSL, and making sure everything works properly from day one.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. I offer monthly care plans starting at $25/month for hosting and basic maintenance, up to $100/month for more active support and content changes.",
  },
  {
    question: "What makes a professional website better than a DIY site?",
    answer:
      "DIY builders can get something online fast, but they often look generic and lack the structure needed to convert visitors into customers. A professionally built site is designed around your business goals, loads faster, ranks better in search, and builds real trust with potential customers.",
  },
];
