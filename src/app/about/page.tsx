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
        title="A web business built to help other businesses grow online."
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
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--border-light)",
                maxWidth: "320px",
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
            Businesses that depend on their online presence to attract
            customers.
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              I specialize in working with local service businesses, the kind of
              businesses where a potential customer&apos;s first impression
              often starts with a Google search. Detailing shops, dental
              offices, fitness studios, contractors, salons, med spas, and
              similar service-based businesses.
            </p>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              The common thread is simple: these businesses need a website that
              looks professional, communicates clearly, and makes it easy to
              take the next step, whether that&apos;s requesting a quote,
              booking an appointment, or making a call.
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
        description="I'd like to learn about your business and see how I can help. Reach out and I'll get back to you within 1 to 2 business days."
        secondaryHref={brand.bookingUrl}
        secondaryLabel="Book a Free Call"
      />
    </>
  );
}
