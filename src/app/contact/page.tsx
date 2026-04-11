import { FadeIn } from "@/components/FadeIn";
import { CheckList } from "@/components/CheckList";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Zackary Brown Web Solutions",
  description:
    "Request a quote for your website project. Based in Colorado, working with businesses locally and remotely.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "5rem" }}>
        <div className="container">
          <FadeIn>
            <p className="section-label">Contact</p>
            <h1 style={{ maxWidth: "640px", marginBottom: "1.25rem" }}>
              Let&apos;s discuss your project.
            </h1>
            <p className="section-subtext">
              Fill out the form below and I&apos;ll get back to you within 1–2
              business days. No pressure, no obligation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-alt">
        <div className="container">
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
                      href="mailto:zackary@zbweb.solutions"
                      style={{
                        color: "var(--accent)",
                        textDecoration: "none",
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                      }}
                    >
                      zackary@zbweb.solutions
                    </a>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Based in Colorado, working with businesses locally and
                      remotely.
                    </p>
                  </div>
                </div>

                {/* Good Fit */}
                <div>
                  <h3 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                    Good Fit Inquiries
                  </h3>
                  <CheckList
                    items={[
                      "You're a local service business (detailing, dental, fitness, contractor, salon, etc.)",
                      "You need a new website or a redesign of your current one",
                      "You want a professional web presence that generates leads",
                      "You're looking for ongoing website support",
                      "You value clear communication and honest pricing",
                    ]}
                    containerStyle={{ gap: "0.625rem" }}
                  />
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
                    {[
                      {
                        step: "1",
                        title: "You send your inquiry",
                        text: "Tell me about your business and what you're looking for.",
                      },
                      {
                        step: "2",
                        title: "I review and respond",
                        text: "Within 1–2 business days, I'll reach out to discuss your project.",
                      },
                      {
                        step: "3",
                        title: "We have a conversation",
                        text: "A short call or email exchange to understand your needs in detail.",
                      },
                      {
                        step: "4",
                        title: "You receive a proposal",
                        text: "A clear quote with scope, pricing, and timeline. No obligation.",
                      },
                    ].map((item) => (
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
        </div>
      </section>
    </>
  );
}
