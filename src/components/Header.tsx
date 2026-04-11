"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on route change
  useEffect(() => {
    if (previousPathnameRef.current === pathname) return;

    previousPathnameRef.current = pathname;
    if (!menuOpen) return;

    const timeoutId = window.setTimeout(() => {
      setMenuOpen(false);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [pathname, menuOpen]);

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((current) => !current), []);

  return (
    <header
      className="site-header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: "var(--nav-height)",
        background: scrolled ? "rgba(250, 250, 247, 0.95)" : "var(--bg)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border-light)"
          : "1px solid transparent",
        transition:
          "background 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minWidth: 0,
        }}
      >
        {/* Brand lockup */}
        <Link
          href="/"
          className="brand-lockup"
          style={{ textDecoration: "none" }}
          onClick={closeMenu}
        >
          <span className="brand-name">Zackary Brown</span>
          <span className="brand-tag">Web Solutions</span>
        </Link>

        {/* Desktop nav — visible 1100+ */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              data-active={pathname === link.href ? "true" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary"
            style={{
              marginLeft: "0.75rem",
              padding: "0.625rem 1.5rem",
              fontSize: "0.875rem",
            }}
          >
            Request a Quote
          </Link>
        </nav>

        {/* Right side — below 1100: hamburger (+ optional CTA on tablet) */}
        <div className="mobile-nav-controls">
          <Link
            href="/contact"
            className="btn-primary tablet-cta"
            onClick={closeMenu}
          >
            Request a Quote
          </Link>
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="hamburger-btn"
          >
            <span
              className={`hamburger-line ${menuOpen ? "hamburger-open-top" : ""}`}
            />
            <span
              className={`hamburger-line ${menuOpen ? "hamburger-open-mid" : ""}`}
            />
            <span
              className={`hamburger-line ${menuOpen ? "hamburger-open-bot" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      <div
        className={`mobile-backdrop ${menuOpen ? "mobile-backdrop-visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile slide-over panel */}
      <div
        className={`mobile-panel ${menuOpen ? "mobile-panel-open" : ""}`}
        id="mobile-navigation"
        role="dialog"
        aria-modal={menuOpen}
        aria-hidden={!menuOpen}
      >
        <nav style={{ display: "flex", flexDirection: "column" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              data-active={pathname === link.href ? "true" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="btn-primary mobile-menu-cta"
          onClick={closeMenu}
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
}
