"use client";

import Link from "next/link";
import { trackCtaClick, trackOutboundClick } from "@/lib/analytics";

interface TrackedLinkProps {
  href: string;
  className?: string;
  label: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function TrackedLink({
  href,
  className,
  label,
  children,
  style,
  onClick,
}: TrackedLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    trackCtaClick(label);
    if (isExternal) {
      trackOutboundClick(href);
    }

    onClick?.(event);
  };

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        style={style}
        onClick={handleClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} style={style} onClick={handleClick}>
      {children}
    </Link>
  );
}
