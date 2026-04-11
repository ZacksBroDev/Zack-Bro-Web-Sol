interface BrowserMockupProps {
  children: React.ReactNode;
  url?: string;
  href?: string;
  className?: string;
}

export function BrowserMockup({
  children,
  url = "www.example.com",
  href,
  className = "",
}: BrowserMockupProps) {
  const resolvedHref =
    href ?? (url ? `https://${url.replace(/^https?:\/\//, "")}` : undefined);
  const Wrapper = resolvedHref ? "a" : "div";
  const wrapperProps = resolvedHref
    ? {
        href: resolvedHref,
        target: "_blank" as const,
        rel: "noopener noreferrer",
        style: { textDecoration: "none", color: "inherit", display: "block" },
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={className}
      style={{
        ...wrapperProps.style,
        background: "var(--bg-card)",
        borderRadius: "12px",
        border: "1px solid var(--border)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        overflow: "hidden",
        cursor: resolvedHref ? "pointer" : undefined,
        transition: "box-shadow 0.2s ease",
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "0.75rem 1rem",
          borderBottom: "1px solid var(--border-light)",
          background: "var(--bg)",
        }}
      >
        {/* Traffic lights */}
        <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#FF5F57",
              opacity: 0.8,
            }}
          />
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#FEBC2E",
              opacity: 0.8,
            }}
          />
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#28C840",
              opacity: 0.8,
            }}
          />
        </div>
        {/* Address bar */}
        <div
          style={{
            flex: 1,
            background: "var(--bg-card)",
            borderRadius: "6px",
            padding: "0.375rem 0.75rem",
            fontSize: "0.75rem",
            color: "var(--text-tertiary)",
            border: "1px solid var(--border-light)",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            letterSpacing: "0.01em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {url}
        </div>
      </div>
      {/* Content area */}
      <div style={{ overflow: "hidden" }}>{children}</div>
    </Wrapper>
  );
}
