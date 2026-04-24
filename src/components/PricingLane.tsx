import { CardGrid } from "./CardGrid";
import { FadeIn } from "./FadeIn";
import { PricingTierCard } from "./PricingTierCard";
import type {
  PricingLane as PricingLaneType,
  PricingTier,
} from "@/content/types";

interface PricingLaneProps {
  lane: PricingLaneType;
  tiers: PricingTier[];
}

export function PricingLane({ lane, tiers }: PricingLaneProps) {
  return (
    <div className={`pricing-lane-shell pricing-lane-shell-${lane.tone}`}>
      <FadeIn>
        <div className="pricing-lane-header">
          <p className="section-label" style={{ marginBottom: "0.625rem" }}>
            {lane.label}
          </p>
          <h2 className="section-heading" style={{ marginBottom: "0.875rem" }}>
            {lane.heading}
          </h2>
          <p className="section-subtext" style={{ marginBottom: "0" }}>
            {lane.subtext}
          </p>
        </div>
      </FadeIn>

      <CardGrid minWidth={lane.tone === "quick" ? "270px" : "260px"}>
        {tiers.map((tier, i) => (
          <FadeIn key={tier.name} delay={i * 80}>
            <PricingTierCard tier={tier} tone={lane.tone} />
          </FadeIn>
        ))}
      </CardGrid>
    </div>
  );
}
