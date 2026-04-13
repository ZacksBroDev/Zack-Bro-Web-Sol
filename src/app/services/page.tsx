import { FadeIn } from "@/components/FadeIn";
import { CheckList } from "@/components/CheckList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { SectionIntro } from "@/components/SectionIntro";
import { createMetadata } from "@/lib/metadata";
import { servicesDetailed } from "@/content/services";
import { brand } from "@/content/site";
import { industries } from "@/content/site";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Custom websites, redesigns, lead capture setup, and ongoing support for local service businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Everything your business needs to look professional online."
        subtitle="From brand-new websites to ongoing support, I offer focused services that help local service businesses build trust and generate leads."
      />

      {/* Service Cards */}
      <SectionShell variant="alt">
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {servicesDetailed.map((service, i) => (
            <FadeIn key={service.title} delay={i * 80}>
              <div
                className="card"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "2rem",
                  padding: "2.5rem",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                      marginBottom: "1rem",
                    }}
                  >
                    {service.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {service.description}
                  </p>

                  {service.includes && (
                    <CheckList
                      items={service.includes}
                      containerStyle={{
                        gridTemplateColumns:
                          "repeat(auto-fill, minmax(220px, 1fr))",
                        marginBottom: "1.5rem",
                      }}
                    />
                  )}

                  {service.bestFor && (
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--text-tertiary)",
                        fontStyle: "italic",
                      }}
                    >
                      Best for: {service.bestFor}
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionShell>

      {/* Who This Is For */}
      <SectionShell>
        <SectionIntro
          label="Who This Is For"
          heading="Built for local service businesses that rely on trust and visibility."
          subtext="I work with businesses where a professional online presence directly impacts whether customers choose to reach out."
        />
        <FadeIn delay={100}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {industries.map((industry) => (
              <span
                key={industry}
                style={{
                  padding: "0.5rem 1.125rem",
                  background: "var(--accent-light)",
                  color: "var(--accent)",
                  borderRadius: "100px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                {industry}
              </span>
            ))}
          </div>
        </FadeIn>
      </SectionShell>

      <PageCta
        title="Not sure which service you need?"
        description="Tell me about your business and I'll recommend the right approach. No commitment, no pressure."
        secondaryHref={brand.bookingUrl}
        secondaryLabel="Book a Free Call"
      />
    </>
  );
}
