import type { ServiceItem } from "./types";

export const servicesDetailed: ServiceItem[] = [
  {
    title: "Custom Websites",
    description:
      "A website built around your business goals, audience, and services, not a recycled template.",
    icon: "◆",
    includes: [
      "Custom design and layout",
      "Mobile-responsive build",
      "Clear service and contact pages",
      "Basic SEO structure",
      "Analytics setup",
      "Launch support",
    ],
    bestFor: "New businesses or businesses without a strong professional site.",
  },
  {
    title: "Website Redesigns",
    description:
      "If your current site feels outdated or underperforming, I rebuild it with clearer structure, stronger messaging, and better usability.",
    icon: "◇",
    includes: [
      "Full visual and structural redesign",
      "Improved mobile experience",
      "Clearer messaging and content hierarchy",
      "Performance improvements",
      "Updated call-to-action structure",
      "Content and image organization",
    ],
    bestFor:
      "Businesses with an existing site that is outdated or not generating leads.",
  },
  {
    title: "Lead Capture Setup",
    description:
      "Set up forms and booking flows so visitors can quickly request a quote, call, or book.",
    icon: "▣",
    includes: [
      "Contact and quote request forms",
      "Booking or scheduling integration",
      "Call-to-action placement strategy",
      "Form notification setup",
      "Conversion-minded page structure",
      "Mobile-optimized forms",
    ],
    bestFor:
      "Businesses that need more inquiries and a cleaner path from visit to lead.",
  },
  {
    title: "Website Care & Support",
    description:
      "After launch, keep your website maintained, monitored, and current with lightweight monthly support.",
    icon: "○",
    includes: [
      "Regular monitoring and uptime checks",
      "Small content and image updates",
      "Security and performance checks",
      "Contact form monitoring",
      "Small design and text edits",
      "Dedicated support contact",
    ],
    bestFor:
      "Businesses that want ongoing support without handling website maintenance internally.",
  },
];
