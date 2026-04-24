import { FadeIn } from "@/components/FadeIn";
import { FAQ } from "@/components/FAQ";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { SectionIntro } from "@/components/SectionIntro";
import { CardGrid } from "@/components/CardGrid";
import { PricingLane } from "@/components/PricingLane";
import { CarePlanCard } from "@/components/CarePlanCard";
import { createMetadata } from "@/lib/metadata";
import {
  pricingLanes,
  quickStartTiers,
  customBuildTiers,
  carePlans,
  pricingFactors,
} from "@/content/pricing";
import { brand } from "@/content/site";
import { pricingFaqItems } from "@/content/faq";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Clear starting prices for WordPress quick-start websites, custom builds, and optional monthly care plans.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Choose the right build path for your business."
        subtitle="Most projects fit one of two paths: a faster WordPress quick start or a more tailored custom build. Every package is from pricing and scoped to your goals."
      />

      <SectionShell className="pricing-path-overview">
        <div className="pricing-path-grid">
          {pricingLanes.map((lane, i) => (
            <FadeIn key={lane.label} delay={i * 90}>
              <article
                className={`pricing-path-card pricing-path-card-${lane.tone}`}
              >
                <p className="pricing-path-label">{lane.label}</p>
                <h2 className="pricing-path-title">{lane.heading}</h2>
                <p className="pricing-path-summary">{lane.subtext}</p>
                <ul className="pricing-path-points">
                  {lane.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="pricing-path-start">
                  Starts at{" "}
                  {lane.tone === "quick"
                    ? quickStartTiers[0].price
                    : customBuildTiers[0].price}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </SectionShell>

      <SectionShell variant="alt" className="pricing-lane-section">
        <PricingLane lane={pricingLanes[0]} tiers={quickStartTiers} />
      </SectionShell>

      <SectionShell className="pricing-lane-section">
        <PricingLane lane={pricingLanes[1]} tiers={customBuildTiers} />
      </SectionShell>

      <SectionShell variant="alt" className="pricing-factors-section">
        <SectionIntro
          label="What Affects Pricing"
          heading="Final pricing depends on more than page count"
          subtext="Each quote is scoped to your business goals. These are the biggest variables that affect total investment."
        />
        <div className="pricing-factors-list">
          {pricingFactors.map((factor, i) => (
            <FadeIn key={factor.title} delay={i * 60}>
              <article className="pricing-factor-row">
                <h3>{factor.title}</h3>
                <p>{factor.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionIntro
          label="After Launch"
          heading="Choose hosting-only or ongoing care"
          subtext="Managed Hosting keeps your site online and monitored. Website Care includes actual post-launch help. Both options are optional and month to month."
        />
        <div className="care-plan-grid-wrap">
          <CardGrid minWidth="320px">
            {carePlans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 80}>
                <CarePlanCard plan={plan} />
              </FadeIn>
            ))}
          </CardGrid>
        </div>
      </SectionShell>

      <SectionShell narrow>
        <div id="faq">
          <SectionIntro
            label="Questions"
            heading="Pricing FAQ"
            subtext="Straight answers so you can choose your next step with confidence."
          />
          <FadeIn delay={100}>
            <FAQ items={pricingFaqItems} />
          </FadeIn>
        </div>
      </SectionShell>

      <PageCta
        title="Not sure which path fits your business?"
        description="Tell me what your business needs and I will recommend the right starting point with a clear scoped quote."
        secondaryHref={brand.bookingUrl}
        secondaryLabel="Book a Free Call"
      />
    </>
  );
}
