import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { FAQ } from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Zackary Brown Web Solutions",
  description: "Transparent starting prices for websites, redesigns, and ongoing care plans. Clear pricing for local service businesses.",
};

const tiers = [
  {
    name: "Landing Page",
    price: "$500",
    description: "A single focused page, ideal for a specific service, promotion, or a business that needs a clean web presence fast.",
    includes: [
      "One-page custom design",
      "Mobile-responsive layout",
      "Contact form or CTA",
      "Basic SEO setup",
      "Launch support",
    ],
  },
  {
    name: "Starter Website",
    price: "$900",
    description: "A professional multi-page site for businesses ready to establish a clear, credible online presence.",
    includes: [
      "3–5 custom pages",
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
    description: "A more robust site for businesses that need stronger conversion structure, more content, and a polished brand experience.",
    includes: [
      "5–8+ custom pages",
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
    description: "For businesses with specific requirements, integrations, or larger-scope needs. Scoped and quoted individually.",
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

const carePlans = [
  {
    name: "Basic Care",
    price: "$50",
    period: "/month",
    features: [
      "Basic site monitoring",
      "Contact form checks",
      "Light support via email",
      "One small update per month",
    ],
  },
  {
    name: "Standard Support",
    price: "$100",
    period: "/month",
    features: [
      "Regular small edits and updates",
      "Content and image updates",
      "Faster support turnaround",
      "Monthly maintenance check-in",
      "Priority email support",
    ],
    featured: true,
  },
  {
    name: "Growth Support",
    price: "$150",
    period: "/month",
    features: [
      "More active ongoing support",
      "More edits included per month",
      "Fastest turnaround times",
      "Stronger post-launch support",
      "Performance monitoring",
      "Priority support channel",
    ],
  },
];

const pricingFactors = [
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
    text: "Rush timelines may affect pricing. Standard timelines are 2–4 weeks for most projects.",
  },
];

const faqItems = [
  {
    question: "Are these fixed prices?",
    answer: "These are starting prices. Final pricing depends on your specific needs, number of pages, content requirements, and any special functionality. I provide a clear quote after our initial conversation.",
  },
  {
    question: "Do I need to pay everything upfront?",
    answer: "I typically work with a 50% deposit to begin, with the remainder due at launch. For larger projects, we can discuss a payment schedule that works for both of us.",
  },
  {
    question: "What's not included in these prices?",
    answer: "Domain registration, hosting fees, premium stock photography, and third-party service subscriptions (like booking software) are separate. I'll be transparent about any additional costs during the quoting process.",
  },
  {
    question: "How long does a project typically take?",
    answer: "Landing pages can be completed in about a week. Starter sites typically take 2–3 weeks. Growth and custom projects take 3–6 weeks depending on scope. Timelines depend partly on how quickly content and feedback are provided.",
  },
  {
    question: "Can I upgrade my care plan later?",
    answer: "Yes. You can change your care plan at any time. There are no long-term contracts, and plans are month-to-month.",
  },
  {
    question: "What if I don't need a care plan?",
    answer: "Care plans are optional. After launch, you're free to manage your site independently. Plans are there for businesses that want ongoing support without the hassle.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "5rem" }}>
        <div className="container">
          <FadeIn>
            <p className="section-label">Pricing</p>
            <h1 style={{ maxWidth: "640px", marginBottom: "1.25rem" }}>
              Clear, honest pricing for your project.
            </h1>
            <p className="section-subtext">
              Every project is scoped individually, but here&apos;s where things
              typically start. No hidden fees, no surprise invoices.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Project Tiers */}
      <section className="section-alt">
        <div className="container">
          <FadeIn>
            <p className="section-label">Project Pricing</p>
            <h2 className="section-heading" style={{ marginBottom: "2.5rem" }}>
              Website packages
            </h2>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {tiers.map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 80}>
                <div
                  className="card"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: tier.featured
                      ? "2px solid var(--accent)"
                      : undefined,
                    position: "relative",
                  }}
                >
                  {tier.featured && (
                    <span
                      style={{
                        position: "absolute",
                        top: "-12px",
                        left: "1.5rem",
                        background: "var(--accent)",
                        color: "#fff",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "100px",
                      }}
                    >
                      Most Popular
                    </span>
                  )}
                  <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.5rem" }}>
                    {tier.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-instrument-serif), Georgia, serif",
                      fontSize: "2rem",
                      color: "var(--accent)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    from {tier.price}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {tier.description}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "auto" }}>
                    {tier.includes.map((item) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                          fontSize: "0.8125rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        <span style={{ color: "var(--accent)", fontWeight: 600, flexShrink: 0, marginTop: "1px" }}>
                          ✓
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Care Plans */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <p className="section-label">After Launch</p>
            <h2 className="section-heading">Monthly website care plans</h2>
            <p className="section-subtext" style={{ marginBottom: "2.5rem" }}>
              Optional ongoing support to keep your site running smoothly.
              No long-term contracts. Cancel anytime.
            </p>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {carePlans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 80}>
                <div
                  className="card"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: plan.featured
                      ? "2px solid var(--accent)"
                      : undefined,
                  }}
                >
                  <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.5rem" }}>
                    {plan.name}
                  </h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "1.5rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-instrument-serif), Georgia, serif",
                        fontSize: "2rem",
                        color: "var(--accent)",
                      }}
                    >
                      {plan.price}
                    </span>
                    <span style={{ fontSize: "0.875rem", color: "var(--text-tertiary)" }}>
                      {plan.period}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                          fontSize: "0.8125rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        <span style={{ color: "var(--accent)", fontWeight: 600, flexShrink: 0, marginTop: "1px" }}>
                          ✓
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What Affects Pricing */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: "720px" }}>
          <FadeIn>
            <p className="section-label">Good to Know</p>
            <h2 className="section-heading" style={{ marginBottom: "2rem" }}>
              What affects final pricing
            </h2>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {pricingFactors.map((factor, i) => (
              <FadeIn key={factor.title} delay={i * 60}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    gap: "1rem",
                    alignItems: "start",
                    padding: "1rem 0",
                    borderBottom: "1px solid var(--border-light)",
                  }}
                  className="pricing-factor"
                >
                  <h4
                    style={{
                      fontSize: "0.9375rem",
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    {factor.title}
                  </h4>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>
                    {factor.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          <FadeIn>
            <p className="section-label">Questions</p>
            <h2 className="section-heading" style={{ marginBottom: "2.5rem" }}>
              Pricing FAQ
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <FAQ items={faqItems} />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-alt">
        <div className="container" style={{ textAlign: "center", maxWidth: "600px" }}>
          <FadeIn>
            <h2 style={{ marginBottom: "1rem" }}>
              Ready to get a quote for your project?
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--text-secondary)",
                maxWidth: "480px",
                margin: "0 auto 2rem",
                lineHeight: 1.7,
              }}
            >
              Tell me about your business and what you&apos;re looking for. I&apos;ll
              follow up with a clear proposal within 1–2 business days.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
