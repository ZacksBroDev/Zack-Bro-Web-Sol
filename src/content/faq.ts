import type { FAQItem } from "./types";

/* ── Homepage FAQ (tight subset — 6 items) ── */
export { homeFaqItems } from "./home";

/* ── Pricing FAQ ── */
export const pricingFaqItems: FAQItem[] = [
  {
    question: "Are these fixed prices?",
    answer:
      "These are starting prices. Final pricing depends on your specific needs, number of pages, content requirements, and any special functionality. I provide a clear quote after our initial conversation.",
  },
  {
    question: "Do I need to pay everything upfront?",
    answer:
      "I typically work with a 50% deposit to begin, with the remainder due at launch. For larger projects, we can discuss a payment schedule that works for both of us.",
  },
  {
    question: "What's not included in these prices?",
    answer:
      "Domain registration, hosting fees, premium stock photography, and third-party service subscriptions (like booking software) are separate. I'll be transparent about any additional costs during the quoting process.",
  },
  {
    question: "How long does a project typically take?",
    answer:
      "Landing pages can be completed in about a week. Starter sites typically take 2 to 3 weeks. Growth and custom projects take 3 to 6 weeks depending on scope. Timelines depend partly on how quickly content and feedback are provided.",
  },
  {
    question: "Can I upgrade my care plan later?",
    answer:
      "Yes. You can change your care plan at any time. There are no long-term contracts, and plans are month-to-month.",
  },
  {
    question: "What if I don't need a care plan?",
    answer:
      "Care plans are optional. After launch, you're free to manage your site independently. Plans are there for businesses that want ongoing support without the hassle.",
  },
];

/* ── Full FAQ (for a dedicated FAQ page or deeper link) ── */
export const fullFaqItems: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Projects start at $200 for a WordPress site and go up from there depending on scope. Most small business websites fall in the $900 to $3,000 range. I provide a clear quote after learning about your needs.",
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
      "Yes. I offer monthly care plans starting at $50/month for basic monitoring and updates, up to $150/month for more active support and content changes.",
  },
  {
    question: "Can you work with businesses outside Colorado?",
    answer:
      "Absolutely. While I'm based in Colorado, I work with businesses remotely across the country. Most communication happens over email and video calls.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Just a conversation about your business and goals. From there, I'll handle the design, development, and technical setup. I'll guide you on what content and images are needed along the way.",
  },
  {
    question:
      "Why does my business need a website if I already have social media?",
    answer:
      "Social media is great for visibility, but you don't own it. A website gives you a professional home base that you control, where customers can learn about your services, read reviews, and contact you directly without distractions or algorithms getting in the way.",
  },
  {
    question: "How can a website help me get more leads?",
    answer:
      "A well-structured website guides visitors toward taking action, whether that's requesting a quote, booking a service, or calling you. With clear messaging, strong calls to action, and mobile-friendly design, your site becomes a 24/7 sales tool that works even when you're busy.",
  },
  {
    question: "What makes a professional website better than a DIY site?",
    answer:
      "DIY builders can get something online fast, but they often look generic and lack the structure needed to convert visitors into customers. A professionally built site is designed around your business goals, loads faster, ranks better in search, and builds real trust with potential customers.",
  },
  {
    question: "What if I already have a website, but it's not getting results?",
    answer:
      "That's one of the most common situations I work with. If your site isn't generating leads, it usually comes down to unclear messaging, poor mobile experience, or weak calls to action. I can redesign and restructure your site to fix those issues and turn it into something that actually works for your business.",
  },
  {
    question: "Can my website help me show up better in Google?",
    answer:
      "Yes. Every site I build includes foundational SEO, including proper page structure, meta tags, fast load times, and mobile optimization. These are the basics that help Google understand and rank your site. For local businesses, this can make a real difference in showing up when nearby customers search for your services.",
  },
];
