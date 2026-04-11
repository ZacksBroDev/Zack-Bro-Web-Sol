import { FadeIn } from "@/components/FadeIn";
import { CheckList } from "@/components/CheckList";
import { PageCta } from "@/components/PageCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Zackary Brown Web Solutions",
  description:
    "Custom websites, redesigns, lead capture setup, and ongoing support for local service businesses.",
};

const services = [
  {
    title: "Custom Small Business Websites",
    description:
      "A website built from scratch around your business, not a generic template with your logo dropped in. I design and develop each site to communicate what you do, who you serve, and why someone should choose you.",
    includes: [
      "Custom design and layout",
      "Mobile-responsive build",
      "Clear service and contact pages",
      "Basic SEO structure",
      "Analytics setup",
      "Launch support",
    ],
    bestFor: "New businesses or businesses without a professional website.",
  },
  {
    title: "Website Redesigns",
    description:
      "If your current site is outdated, hard to navigate, or not helping you get leads, it's time for a rebuild. I'll restructure your site with modern design, clear messaging, and a layout that actually converts visitors into inquiries.",
    includes: [
      "Full visual and structural redesign",
      "Improved mobile experience",
      "Clearer messaging and content hierarchy",
      "Performance improvements",
      "Updated call-to-action structure",
      "Content and image organization",
    ],
    bestFor:
      "Businesses with an existing site that's underperforming or outdated.",
  },
  {
    title: "Quote / Booking / Lead Capture Setup",
    description:
      "Your website should make it easy for potential customers to take action. I set up contact forms, quote request flows, and booking integrations so leads don't slip through the cracks.",
    includes: [
      "Contact and quote request forms",
      "Booking or scheduling integration",
      "Call-to-action placement strategy",
      "Form notification setup",
      "Conversion-minded page structure",
      "Mobile-optimized forms",
    ],
    bestFor:
      "Businesses that need more inquiries and a clearer path from visitor to lead.",
  },
  {
    title: "Ongoing Website Care & Support",
    description:
      "After launch, your site still needs attention. I offer monthly care plans that cover updates, monitoring, and small changes so your site stays current and you don't have to think about it.",
    includes: [
      "Regular monitoring and uptime checks",
      "Content and image updates",
      "Security and performance checks",
      "Contact form monitoring",
      "Small design or text edits",
      "Dedicated support contact",
    ],
    bestFor:
      "Any business that wants their website maintained without hiring in-house.",
  },
];

const industries = [
  "Automotive Detailing",
  "Dental Offices",
  "Med Spas",
  "Martial Arts Schools",
  "Gyms & Fitness Studios",
  "Contractors",
  "Salons & Barbershops",
  "Landscapers",
  "Cleaning Services",
  "Local Service Brands",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "5rem" }}>
        <div className="container">
          <FadeIn>
            <p className="section-label">Services</p>
            <h1 style={{ maxWidth: "640px", marginBottom: "1.25rem" }}>
              Everything your business needs to look professional online.
            </h1>
            <p className="section-subtext">
              From brand-new websites to ongoing support, I offer focused
              services that help local service businesses build trust and
              generate leads.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section-alt">
        <div className="container">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {services.map((service, i) => (
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

                    <CheckList
                      items={service.includes}
                      containerStyle={{
                        gridTemplateColumns:
                          "repeat(auto-fill, minmax(220px, 1fr))",
                        marginBottom: "1.5rem",
                      }}
                    />

                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--text-tertiary)",
                        fontStyle: "italic",
                      }}
                    >
                      Best for: {service.bestFor}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <p className="section-label">Who This Is For</p>
            <h2 className="section-heading">
              Built for local service businesses that rely on trust and
              visibility.
            </h2>
            <p className="section-subtext" style={{ marginBottom: "2.5rem" }}>
              I work with businesses where a professional online presence
              directly impacts whether customers choose to reach out.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
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
        </div>
      </section>

      <PageCta
        title="Not sure which service you need?"
        description="Tell me about your business and I'll recommend the right approach. No commitment, no pressure."
      />
    </>
  );
}
