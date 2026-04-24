import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { SectionIntro } from "@/components/SectionIntro";
import { FeatureGrid } from "@/components/FeatureGrid";
import { createMetadata } from "@/lib/metadata";
import { founderBio, approach, commitments } from "@/content/about";
import { brand } from "@/content/site";

export const metadata = createMetadata({
  title: "About",
  description:
    "Founder-led web business helping local service businesses build professional, conversion-focused websites. Based in Colorado.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="A founder-led web studio for local service businesses."
        subtitle={`${brand.name} is a founder-led web business focused on building professional, modern websites for local service businesses.`}
      />

      {/* Founder Section */}
      <SectionShell variant="alt">
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          <FadeIn>
            <div
              style={{
                background: "var(--bg-card)",
                padding: "0.75rem",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
                maxWidth: "340px",
                margin: "0 auto",
              }}
            >
              <Image
                src="/zackary-brown.jpg"
                alt={`${brand.founder}, Founder and Developer`}
                width={600}
                height={750}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div>
              <h2 style={{ marginBottom: "1.25rem" }}>
                Hi, I&apos;m {brand.founder}.
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {founderBio.map((paragraph, i) => (
                  <p key={i} style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionShell>

      {/* Approach */}
      <SectionShell>
        <SectionIntro
          label="My Approach"
          heading="How I think about building websites for businesses."
        />
        <div style={{ marginTop: "2.5rem" }}>
          <FeatureGrid items={approach} minWidth="300px" />
        </div>
      </SectionShell>

      {/* Who I Work With */}
      <SectionShell variant="alt" narrow>
        <FadeIn>
          <p className="section-label">Who I Work With</p>
          <h2 className="section-heading" style={{ marginBottom: "1.25rem" }}>
            Businesses where the website directly influences who reaches out.
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              I mostly work with local service businesses where first
              impressions start with a Google search: dental practices,
              detailing shops, landscapers, fitness studios, contractors, and
              similar service brands.
            </p>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              The goal is simple: a website that looks professional,
              communicates clearly, and makes the next step easy.
            </p>
          </div>
        </FadeIn>
      </SectionShell>

      {/* Commitments */}
      <SectionShell>
        <SectionIntro
          label="What You Can Expect"
          heading="When you work with me, here's what I commit to."
        />
        <div style={{ marginTop: "2.5rem" }}>
          <FeatureGrid items={commitments} variant="card" />
        </div>
      </SectionShell>

      <PageCta
        title="Let's talk about your project."
        description="Tell me what your business needs and I will follow up with clear next steps."
        secondaryHref={brand.bookingUrl}
        secondaryLabel="Book a Free Call"
      />
    </>
  );
}
