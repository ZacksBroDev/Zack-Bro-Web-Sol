import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { createMetadata } from "@/lib/metadata";
import { contactSteps } from "@/content/contact";
import { brand } from "@/content/site";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Request a quote for your website project. Based in Colorado, working with businesses locally and remotely.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's discuss your project"
        subtitle="Share a few details and I will reply within 1 to 2 business days."
      />

      {/* Form + Info */}
      <SectionShell variant="alt">
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Form */}
          <FadeIn>
            <div className="card" style={{ padding: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
                Request a Quote
              </h2>
              <ContactForm />
            </div>
          </FadeIn>

          {/* Contact Info & Context */}
          <FadeIn delay={100}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2.5rem",
              }}
            >
              {/* Direct Contact */}
              <div>
                <h3 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Direct Contact
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <a
                    href={`mailto:${brand.email}`}
                    style={{
                      color: "var(--accent)",
                      textDecoration: "none",
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                    }}
                  >
                    {brand.email}
                  </a>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Based in {brand.location}, working with businesses locally
                    and remotely.
                  </p>
                </div>
              </div>

              {/* Book a Call */}
              <div>
                <h3 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Prefer to Talk?
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-secondary)",
                    marginBottom: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  Book a free 30-minute call if you prefer to talk through your
                  project.
                </p>
                <a
                  href={brand.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ display: "inline-block", fontSize: "0.9375rem" }}
                >
                  Book a Free Call
                </a>
              </div>

              {/* What Happens Next */}
              <div>
                <h3 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  What Happens Next
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {contactSteps.map((item) => (
                    <div
                      key={item.step}
                      style={{
                        display: "flex",
                        gap: "0.875rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: "var(--accent-light)",
                          color: "var(--accent)",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {item.step}
                      </span>
                      <div>
                        <p
                          style={{
                            fontSize: "0.9375rem",
                            fontWeight: 600,
                            color: "var(--text-primary)",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {item.title}
                        </p>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--text-secondary)",
                            lineHeight: 1.5,
                          }}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionShell>
    </>
  );
}
