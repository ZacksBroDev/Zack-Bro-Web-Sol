import { FadeIn } from "@/components/FadeIn";
import { FAQ } from "@/components/FAQ";
import { CheckList } from "@/components/CheckList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { SectionIntro } from "@/components/SectionIntro";
import { CardGrid } from "@/components/CardGrid";
import { createMetadata } from "@/lib/metadata";
import { tiers, carePlans, pricingFactors } from "@/content/pricing";
import { brand } from "@/content/site";
import { pricingFaqItems } from "@/content/faq";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Transparent starting prices for websites, redesigns, and ongoing care plans. Clear pricing for local service businesses.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Clear, honest pricing for your project."
        subtitle="Every project is scoped individually, but here's where things typically start. No hidden fees, no surprise invoices."
      />

      {/* Project Tiers */}
      <SectionShell variant="alt">
        <SectionIntro label="Project Pricing" heading="Website packages" />
        <CardGrid>
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 80}>
              <div
                className="card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: tier.featured ? "2px solid var(--accent)" : undefined,
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
                <CheckList
                  items={tier.includes}
                  containerStyle={{ marginTop: "auto" }}
                  itemStyle={{ fontSize: "0.8125rem" }}
                  checkStyle={{ marginTop: "1px" }}
                />
              </div>
            </FadeIn>
          ))}
        </CardGrid>
      </SectionShell>

      {/* Care Plans */}
      <SectionShell>
        <SectionIntro
          label="After Launch"
          heading="Monthly website care plans"
          subtext="Optional ongoing support to keep your site running smoothly. No long-term contracts. Cancel anytime."
        />
        <CardGrid minWidth="280px">
          {carePlans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 80}>
              <div
                className="card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: plan.featured ? "2px solid var(--accent)" : undefined,
                }}
              >
                <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.5rem" }}>
                  {plan.name}
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.25rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily:
                        "var(--font-instrument-serif), Georgia, serif",
                      fontSize: "2rem",
                      color: "var(--accent)",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    {plan.period}
                  </span>
                </div>
                <CheckList
                  items={plan.features}
                  itemStyle={{ fontSize: "0.8125rem" }}
                  checkStyle={{ marginTop: "1px" }}
                />
              </div>
            </FadeIn>
          ))}
        </CardGrid>
      </SectionShell>

      {/* What Affects Pricing */}
      <SectionShell variant="alt" narrow>
        <SectionIntro
          label="Good to Know"
          heading="What affects final pricing"
        />
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
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
      </SectionShell>

      {/* FAQ */}
      <SectionShell narrow>
        <div id="faq">
          <SectionIntro label="Questions" heading="Pricing FAQ" />
          <FadeIn delay={100}>
            <FAQ items={pricingFaqItems} />
          </FadeIn>
        </div>
      </SectionShell>

      <PageCta
        title="Ready to get a quote for your project?"
        description="Tell me about your business and what you're looking for. I'll follow up with a clear proposal within 1–2 business days."
        secondaryHref={brand.bookingUrl}
        secondaryLabel="Book a Free Call"
      />
    </>
  );
}
