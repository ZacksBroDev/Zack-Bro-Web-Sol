"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--text-primary)",
        color: "rgba(255,255,255,0.7)",
        padding: "4rem 1.5rem 2rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-instrument-serif), Georgia, serif",
                fontSize: "1.25rem",
                color: "#FFFFFF",
                marginBottom: "0.75rem",
              }}
            >
              Zackary Brown
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.6,
                maxWidth: "280px",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Founder-led web business building modern websites for local
              service businesses. Based in Colorado.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1rem",
              }}
            >
              Pages
            </p>
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.625rem",
              }}
            >
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/work", label: "Work" },
                { href: "/pricing", label: "Pricing" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1rem",
              }}
            >
              Services
            </p>
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.625rem",
              }}
            >
              {[
                "Custom Websites",
                "Website Redesigns",
                "Lead Capture Setup",
                "Ongoing Support",
              ].map((item) => (
                <Link key={item} href="/services" className="footer-link">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1rem",
              }}
            >
              Get In Touch
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.625rem",
                fontSize: "0.875rem",
              }}
            >
              <a href="mailto:zackary@zbweb.solutions" className="footer-link">
                zackary@zbweb.solutions
              </a>
              <p
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem" }}
              >
                Based in Colorado
              </p>
              <p
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem" }}
              >
                Working locally &amp; remotely
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>
            &copy; {currentYear} Zackary Brown Web Solutions. All rights
            reserved.
          </p>
          <Link href="/contact" className="footer-link-muted">
            Request a Quote &rarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}
