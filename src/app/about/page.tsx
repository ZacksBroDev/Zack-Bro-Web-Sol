import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Zackary Brown Web Solutions",
  description: "Founder-led web business helping local service businesses build professional, conversion-focused websites. Based in Colorado.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "5rem" }}>
        <div className="container">
          <FadeIn>
            <p className="section-label">About</p>
            <h1 style={{ maxWidth: "640px", marginBottom: "1.25rem" }}>
              A web business built to help other businesses grow online.
            </h1>
            <p className="section-subtext">
              Zackary Brown Web Solutions is a founder-led web business
              focused on building professional, modern websites for local
              service businesses.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-alt">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            <FadeIn>
              <div
                style={{
                  background: "linear-gradient(145deg, var(--bg) 0%, var(--accent-light) 60%, var(--accent-muted) 100%)",
                  borderRadius: "var(--radius-lg)",
                  height: "360px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.25rem",
                  border: "1px solid var(--border-light)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Monogram */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-instrument-serif), Georgia, serif",
                      fontSize: "2rem",
                      color: "#fff",
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    ZB
                  </span>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-instrument-serif), Georgia, serif",
                      fontSize: "1.125rem",
                      color: "var(--text-primary)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Zackary Brown
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                    }}
                  >
                    Founder & Developer
                  </p>
                </div>
                {/* Accent corner detail */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    right: "-20px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    opacity: 0.05,
                  }}
                />
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div>
                <h2 style={{ marginBottom: "1.25rem" }}>
                  Hi, I&apos;m Zackary Brown.
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                    I run Zackary Brown Web Solutions, an independent web business
                    where I work directly with local service businesses to build
                    websites that look professional and actually help generate leads.
                  </p>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                    When you work with me, you&apos;re not handed off to a team of
                    people you&apos;ve never met. I handle the design, the development,
                    and the communication. One person who knows your project from
                    start to finish.
                  </p>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                    I started this business because I saw too many local businesses
                    either stuck with outdated websites that don&apos;t convert, or
                    paying agency prices for results they could get from a focused,
                    independent professional. My goal is to be the web partner that
                    small business owners actually want to work with. Responsive,
                    transparent, and easy to communicate with.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <p className="section-label">My Approach</p>
            <h2 className="section-heading" style={{ maxWidth: "600px" }}>
              How I think about building websites for businesses.
            </h2>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2rem",
              marginTop: "2.5rem",
            }}
          >
            {[
              {
                title: "Business goals come first",
                text: "Before any design or code, I want to understand what your website needs to accomplish. More bookings? More quote requests? A more professional first impression? The design follows the goal.",
              },
              {
                title: "Clarity over complexity",
                text: "I don't build complicated websites for the sake of it. Clean, clear, and easy to navigate beats flashy and confusing every time. Your customers should know who you are and how to reach you within seconds.",
              },
              {
                title: "Built for trust",
                text: "For local service businesses, trust is everything. Your website should make people feel confident that you're professional, established, and safe to hire. That means good design, clear messaging, and no gimmicks.",
              },
              {
                title: "Designed for mobile",
                text: "Most of your customers are finding you on their phone. Every site I build is designed mobile-first and tested across devices to make sure the experience is seamless.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div>
                  <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.625rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: "720px" }}>
          <FadeIn>
            <p className="section-label">Who I Work With</p>
            <h2 className="section-heading" style={{ marginBottom: "1.25rem" }}>
              Businesses that depend on their online presence to attract customers.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                I specialize in working with local service businesses, the kind of
                businesses where a potential customer's first impression often starts
                with a Google search. Detailing shops, dental offices, fitness studios,
                contractors, salons, med spas, and similar service-based businesses.
              </p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                The common thread is simple: these businesses need a website that
                looks professional, communicates clearly, and makes it easy to take
                the next step, whether that&apos;s requesting a quote, booking an
                appointment, or making a call.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <p className="section-label">What You Can Expect</p>
            <h2 className="section-heading" style={{ marginBottom: "2.5rem" }}>
              When you work with me, here&apos;s what I commit to.
            </h2>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                title: "Honest communication",
                text: "I'll tell you what's realistic, what's not, and what your options are. No overpromising.",
              },
              {
                title: "Clear pricing and timelines",
                text: "You'll know what the project costs and when to expect deliverables before we start.",
              },
              {
                title: "Quality you can see",
                text: "Every site I deliver is clean, polished, and built to professional standards.",
              },
              {
                title: "Support after launch",
                text: "I don't disappear after your site goes live. Ongoing care plans are available, and I'm always reachable for questions.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="card" style={{ height: "100%" }}>
                  <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.5rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-alt">
        <div className="container" style={{ textAlign: "center", maxWidth: "600px" }}>
          <FadeIn>
            <h2 style={{ marginBottom: "1rem" }}>
              Let&apos;s talk about your project.
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--text-secondary)",
                maxWidth: "480px",
                margin: "0 auto 2rem",
                lineHeight: 1.7,
              }}
            >
              I&apos;d like to learn about your business and see how I can help.
              Reach out and I&apos;ll get back to you within 1–2 business days.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
