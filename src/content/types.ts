/* ── Shared content types ── */

export interface NavItem {
  href: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  includes?: string[];
  bestFor?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  includes: string[];
  bestFor?: string;
  featured?: boolean;
  featuredLabel?: string;
}

export interface CarePlan {
  name: string;
  price: string;
  period: string;
  description?: string;
  features: string[];
  exclusions?: string[];
  featured?: boolean;
  featuredLabel?: string;
}

export interface PricingLane {
  label: string;
  heading: string;
  subtext: string;
  tone: "quick" | "custom";
  points: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Project {
  name: string;
  type: string;
  cardSummary?: string;
  image: string;
  url: string;
  challenge: string;
  solution: string;
  result: string;
  capabilities: string[];
  improvements?: string[];
  tech?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TrustStripItem {
  text: string;
}

export interface FeatureItem {
  title: string;
  text: string;
}

export interface PricingFactor {
  title: string;
  text: string;
}

export interface ContactStep {
  step: string;
  title: string;
  text: string;
}

export interface CtaBlock {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}
