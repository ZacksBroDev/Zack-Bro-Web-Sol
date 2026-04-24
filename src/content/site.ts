import type { NavItem, TrustStripItem } from "./types";

/* ── Brand ── */
export const brand = {
  name: "Zackary Brown Web Solutions",
  shortName: "Zackary Brown",
  tagline: "Web Solutions",
  founder: "Zackary Brown",
  email: "zackary@zbweb.solutions",
  location: "Colorado",
  url: "https://zbweb.solutions",
  bookingUrl: "https://calendly.com/zackary-zbweb/30min",
  description:
    "Founder-led web business building modern, conversion-focused websites for local service businesses. Custom sites, redesigns, and ongoing support. Based in Colorado.",
} as const;

/* ── Navigation ── */
export const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/* ── Trust strip ── */
export const trustStripItems: TrustStripItem[] = [
  { text: "Direct communication, no middlemen" },
  { text: "Clear pricing from $349+" },
  { text: "Based in Colorado" },
  { text: "Ongoing website care after launch" },
];

/* ── Industries ── */
export const industries: string[] = [
  "Automotive Detailing",
  "Dental Offices",
  "Med Spas",
  "Martial Arts Schools",
  "Gyms & Fitness Studios",
  "Contractors",
  "Salons & Barbershops",
  "Landscapers",
  "Cleaning Services",
  "Local Service Brands",
];
