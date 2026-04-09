import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { FAQ } from "@/components/FAQ";
import { BrowserMockup } from "@/components/BrowserMockup";
import { SampleSitePreview } from "@/components/SampleSitePreview";
import { TrustStrip } from "@/components/TrustStrip";

const services = [
  {
    title: "Custom Small Business Websites",
    description: "Purpose-built websites designed around your business, your customers, and your goals. Every site is built to work for you, not pulled from a template.",
    icon: "◆",
  },
  {
    title: "Website Redesigns",
    description: "Already have a site that isn't performing? I'll rebuild it with clearer messaging, better mobile experience, and a stronger path to leads.",
    icon: "◇",
  },
  {
    title: "Quote & Lead Capture Setup",
    description: "Forms, booking integrations, and call-to-action structure that makes it easy for your customers to reach you.",
    icon: "▣",
  },
  {
    title: "Ongoing Website Care",
    description: "Monthly support plans that keep your site updated, secure, and performing so you can focus on running your business.",
    icon: "○",
  },
];

const projects = [
  {
    name: "MHK Training",
    type: "Fitness & Training",
    result: "Professional web presence for a training business, with clear service pages and booking integration.",
  },
  {
    name: "Zekie Mobile Detailing",
    type: "Automotive Detailing",
    result: "Clean, conversion-focused site with online quote requests and service breakdowns for a mobile detailing business.",
  },
  {
    name: "JustMalikBeats",
    type: "Music Production",
    result: "Custom-built platform with audio showcase, licensing options, and a professional brand presence.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We talk about your business, your customers, and what you need your website to accomplish.",
  },
  {
    step: "02",
    title: "Scope & Quote",
    description: "I put together a clear proposal with pricing, timeline, and deliverables. No surprises.",
  },
  {
    step: "03",
    title: "Build",
    description: "I design and develop your site, keeping you updated along the way with progress check-ins.",
  },
  {
    step: "04",
    title: "Review & Refine",
    description: "You review the site and I make refinements until everything looks and works exactly right.",
  },
  {
    step: "05",
    title: "Launch",
    description: "We go live. I handle the technical details including domain, hosting setup, and final checks.",
  },
  {
    step: "06",
    title: "Ongoing Support",
    description: "After launch, I'm here for updates, questions, and ongoing care if you need it.",
  },
];

const pricingPreview = [
  { name: "Landing Page", price: "from $500" },
  { name: "Starter Website", price: "from $900" },
  { name: "Growth Website", price: "from $1,800" },
  { name: "Custom Project", price: "from $3,000" },
];

const faqItems = [
  {
    question: "How much does a website cost?",
    answer: "Projects start at $500 for a single landing page and go up from there depending on scope. Most small business websites fall in the $900–$3,000 range. I provide a clear quote after learning about your needs.",
  },
  {
    question: "How long does a project take?",
    answer: "Most websites are completed in 2–4 weeks depending on complexity and how quickly content is provided. I'll give you a realistic timeline during the quoting process.",
  },
  {
    question: "Do you redesign existing websites?",
    answer: "Yes. If you have a site that's outdated, not mobile-friendly, or just not generating leads, I can redesign it with modern structure and clearer messaging.",
  },
  {
    question: "Do you help with hosting and launch?",
    answer: "Yes. I handle the technical side of launching your site, including domain connection, hosting setup, SSL, and making sure everything works properly from day one.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes. I offer monthly care plans starting at $50/month for basic monitoring and updates, up to $150/month for more active support and content changes.",
  },
  {
    question: "Can you work with businesses outside Colorado?",
    answer: "Absolutely. While I'm based in Colorado, I work with businesses remotely across the country. Most communication happens over email and video calls.",
  },
  {
    question: "What do you need from me to get started?",
    answer: "Just a conversation about your business and goals. From there, I'll handle the design, development, and technical setup. I'll guide you on what content and images are needed along the way.",
  },
  {
    question: "Why does my business need a website if I already have social media?",
    answer: "Social media is great for visibility, but you don't own it. A website gives you a professional home base that you control, where customers can learn about your services, read reviews, and contact you directly without distractions or algorithms getting in the way.",
  },
  {
    question: "How can a website help me get more leads?",
    answer: "A well-structured website guides visitors toward taking action, whether that's requesting a quote, booking a service, or calling you. With clear messaging, strong calls to action, and mobile-friendly design, your site becomes a 24/7 sales tool that works even when you're busy.",
  },
  {
    question: "What makes a professional website better than a DIY site?",
    answer: "DIY builders can get something online fast, but they often look generic and lack the structure needed to convert visitors into customers. A professionally built site is designed around your business goals, loads faster, ranks better in search, and builds real trust with potential customers.",
  },
  {
    question: "What if I already have a website, but it's not getting results?",
    answer: "That's one of the most common situations I work with. If your site isn't generating leads, it usually comes down to unclear messaging, poor mobile experience, or weak calls to action. I can redesign and restructure your site to fix those issues and turn it into something that actually works for your business.",
  },
  {
    question: "Can my website help me show up better in Google?",
    answer: "Yes. Every site I build includes foundational SEO, including proper page structure, meta tags, fast load times, and mobile optimization. These are the basics that help Google understand and rank your site. For local businesses, this can make a real difference in showing up when nearby customers search for your services.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="section"
        style={{ paddingTop: "clamp(2rem, 4vw, 3.5rem)", paddingBottom: "3rem" }}
      >
        <div className="container">
          <div className="hero-grid">
            {/* Left column — copy */}
            <div style={{ minWidth: 0 }}>
              <FadeIn>
                <p className="section-label">Web Design for Local Service Businesses</p>
              </FadeIn>
              <FadeIn delay={80}>
                <h1 className="hero-heading">
                  Modern websites that win trust and drive leads.
                </h1>
              </FadeIn>
              <FadeIn delay={160}>
                <p className="hero-subtext">
                  I build clean, professional websites for service businesses that need
                  clearer messaging, stronger credibility, and an easier path to inquiries.
                </p>
                <p className="hero-founder-line">
                  You work directly with me from scope to launch.
                </p>
                <p className="hero-slogan">
                  Built to earn trust. Designed to drive leads.
                </p>
              </FadeIn>
              <FadeIn delay={240}>
                <div className="hero-ctas">
                  <Link href="/contact" className="btn-primary">
                    Request a Quote
                  </Link>
                  <Link href="/work" className="btn-secondary">
                    View Work
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right column — browser mockup */}
            <FadeIn delay={300} direction="right">
              <div className="hero-mockup-wrapper">
                <BrowserMockup url="www.greenscapepro.com">
                  <SampleSitePreview />
                </BrowserMockup>
                {/* Desktop floating badges */}
                <div
                  className="hero-badge"
                  style={{ bottom: "-12px", left: "-12px" }}
                >
                  From $500+
                </div>
                <div
                  className="hero-badge"
                  style={{ top: "50%", right: "-12px" }}
                >
                  Ongoing care available
                </div>
                {/* Mobile inline badges */}
                <div className="hero-badges-mobile">
                  <span className="hero-badge">From $500+</span>
                  <span className="hero-badge">Ongoing care available</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <FadeIn delay={100}>
        <TrustStrip />
      </FadeIn>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="section-alt">
        <div className="container">
          <FadeIn>
            <p className="section-label">What I Do</p>
            <h2 className="section-heading">Services built around what your business actually needs.</h2>
            <p className="section-subtext" style={{ marginBottom: "3rem" }}>
              Every project is scoped to fit your goals, timeline, and budget.
              No cookie-cutter packages, just practical solutions.
            </p>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 80}>
                <div className="card" style={{ height: "100%" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      background: "var(--accent-light)",
                      color: "var(--accent)",
                      fontSize: "1rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {service.icon}
                  </span>
                  <h3 style={{ marginBottom: "0.75rem", fontSize: "1.125rem" }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={320}>
            <div style={{ marginTop: "2.5rem" }}>
              <Link href="/services" className="btn-secondary">
                Learn More About Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== FEATURED WORK ===== */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <p className="section-label">Recent Work</p>
            <h2 className="section-heading">Real projects for real businesses.</h2>
            <p className="section-subtext" style={{ marginBottom: "3rem" }}>
              Each project is designed around the client&apos;s specific business needs, audience, and growth goals.
            </p>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {projects.map((project, i) => (
              <FadeIn key={project.name} delay={i * 100}>
                <div className="card" style={{ height: "100%" }}>
                  <div
                    style={{
                      background: "linear-gradient(135deg, var(--bg) 0%, var(--accent-light) 100%)",
                      borderRadius: "var(--radius)",
                      height: "180px",
                      marginBottom: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-instrument-serif), Georgia, serif",
                        fontSize: "1.25rem",
                        color: "var(--text-primary)",
                      }}
                    >
                      {project.name}
                    </span>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        color: "var(--accent)",
                        fontWeight: 500,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {project.type}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>{project.name}</h3>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>
                    {project.result}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div style={{ marginTop: "2.5rem" }}>
              <Link href="/work" className="btn-secondary">
                View All Work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== WHY WORK WITH ME ===== */}
      <section className="section-alt">
        <div className="container">
          <FadeIn>
            <p className="section-label">Why Work With Me</p>
            <h2 className="section-heading">The advantages of working directly with an independent web professional.</h2>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "2rem",
              marginTop: "2.5rem",
            }}
          >
            {[
              {
                title: "Direct Communication",
                text: "You work with me directly. Not an account manager, not a junior developer. One point of contact who knows your project inside and out.",
              },
              {
                title: "Business-Focused Approach",
                text: "Every design decision is made to help your business look credible, communicate clearly, and convert visitors into inquiries.",
              },
              {
                title: "Transparent Process",
                text: "Clear pricing, honest timelines, and regular updates. No scope creep surprises, no vanishing after launch.",
              },
              {
                title: "Built for Performance",
                text: "Fast-loading, mobile-first, and structured for search visibility. Your site works well for customers and for your business.",
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

      {/* ===== PROCESS ===== */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <p className="section-label">How It Works</p>
            <h2 className="section-heading">A straightforward process from inquiry to launch.</h2>
            <p className="section-subtext" style={{ marginBottom: "3rem" }}>
              No confusion, no black box. Here&apos;s exactly how a project works when you hire me.
            </p>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {processSteps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 60}>
                <div
                  style={{
                    padding: "1.75rem",
                    borderLeft: "2px solid var(--accent-muted)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    STEP {step.step}
                  </span>
                  <h3 style={{ fontSize: "1.0625rem", margin: "0.5rem 0 0.5rem" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING PREVIEW ===== */}
      <section className="section-alt">
        <div className="container">
          <FadeIn>
            <p className="section-label">Pricing</p>
            <h2 className="section-heading">Straightforward pricing. No hidden fees.</h2>
            <p className="section-subtext" style={{ marginBottom: "3rem" }}>
              Every project is different, so final pricing depends on scope and requirements. Here&apos;s where projects typically start.
            </p>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {pricingPreview.map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 80}>
                <div
                  className="card"
                  style={{
                    textAlign: "center",
                    padding: "2rem 1.5rem",
                  }}
                >
                  <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.75rem" }}>
                    {tier.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-instrument-serif), Georgia, serif",
                      fontSize: "1.75rem",
                      color: "var(--accent)",
                      marginBottom: "0",
                    }}
                  >
                    {tier.price}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div style={{ marginTop: "2.5rem" }}>
              <Link href="/pricing" className="btn-secondary">
                See Full Pricing
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== CARE PLANS TEASER ===== */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div
              className="care-plans-cta"
              style={{
                background: "var(--accent-light)",
                borderRadius: "var(--radius-lg)",
                padding: "3rem",
              }}
            >
              <div style={{ marginBottom: "1.5rem" }}>
                <p className="section-label">After Launch</p>
                <h2 style={{ marginBottom: "0.75rem", fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                  Monthly website care plans
                </h2>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, maxWidth: "480px" }}>
                  Keep your site updated, secure, and working properly with ongoing
                  support plans starting at $50/month. No long-term contracts.
                </p>
              </div>
              <div>
                <Link href="/pricing" className="btn-primary">
                  View Plans
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: "720px" }}>
          <FadeIn>
            <p className="section-label">Common Questions</p>
            <h2 className="section-heading" style={{ marginBottom: "2.5rem" }}>
              Frequently asked questions
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <FAQ items={faqItems} />
          </FadeIn>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section">
        <div className="container" style={{ textAlign: "center", maxWidth: "600px" }}>
          <FadeIn>
            <h2 style={{ marginBottom: "1rem" }}>
              Ready to improve your online presence?
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--text-secondary)",
                marginBottom: "2rem",
                maxWidth: "480px",
                margin: "0 auto 2rem",
                lineHeight: 1.7,
              }}
            >
              Tell me about your business and what you need. I&apos;ll get back to you
              within 1–2 business days with next steps.
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
