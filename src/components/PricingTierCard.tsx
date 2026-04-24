import { CheckList } from "./CheckList";
import type { PricingTier } from "@/content/types";

interface PricingTierCardProps {
  tier: PricingTier;
  tone: "quick" | "custom";
}

export function PricingTierCard({ tier, tone }: PricingTierCardProps) {
  return (
    <article className={`card pricing-tier-card pricing-tier-card-${tone}`}>
      <div>
        {tier.featuredLabel && (
          <p className="pricing-tier-badge">{tier.featuredLabel}</p>
        )}
        <h3 className="pricing-tier-title">{tier.name}</h3>
        <p className="pricing-tier-price">from {tier.price}</p>
        {tier.bestFor && (
          <p className="pricing-tier-fit">Best for {tier.bestFor}</p>
        )}
        <p className="pricing-tier-description">{tier.description}</p>
      </div>
      <CheckList
        items={tier.includes}
        containerStyle={{ marginTop: "1rem" }}
        itemStyle={{ fontSize: "0.8125rem" }}
        checkStyle={{ marginTop: "1px" }}
      />
    </article>
  );
}
