import type { ContactStep } from "./types";

export const goodFitItems: string[] = [
  "You're a local service business (detailing, dental, fitness, contractor, salon, etc.)",
  "You need a new website or a redesign of your current one",
  "You want a professional web presence that generates leads",
  "You're looking for ongoing website support",
  "You value clear communication and honest pricing",
];

export const contactSteps: ContactStep[] = [
  {
    step: "1",
    title: "You send your inquiry",
    text: "Tell me about your business and what you're looking for.",
  },
  {
    step: "2",
    title: "I review and respond",
    text: "Within 1 to 2 business days, I'll reach out to discuss your project.",
  },
  {
    step: "3",
    title: "We have a conversation",
    text: "A short call or email exchange to understand your needs in detail.",
  },
  {
    step: "4",
    title: "You receive a proposal",
    text: "A clear quote with scope, pricing, and timeline. No obligation.",
  },
];
