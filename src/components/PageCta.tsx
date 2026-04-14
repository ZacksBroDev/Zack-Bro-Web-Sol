import { FadeIn } from "@/components/FadeIn";
import { TrackedLink } from "@/components/TrackedLink";

interface PageCtaProps {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  sectionClassName?: "section" | "section-alt";
  containerMaxWidth?: string;
  copyMaxWidth?: string;
}

export function PageCta({
  title,
  description,
  href = "/contact",
  linkLabel = "Request a Quote",
  secondaryHref,
  secondaryLabel,
  sectionClassName = "section-alt",
  containerMaxWidth = "600px",
  copyMaxWidth = "480px",
}: PageCtaProps) {
  return (
    <section className={sectionClassName}>
      <div
        className="container"
        style={{ textAlign: "center", maxWidth: containerMaxWidth }}
      >
        <FadeIn>
          <h2 style={{ marginBottom: "1rem" }}>{title}</h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--text-secondary)",
              maxWidth: copyMaxWidth,
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            {description}
          </p>
          <TrackedLink
            href={href}
            className="btn-primary"
            label={`page_cta_${linkLabel.toLowerCase().replaceAll(" ", "_")}`}
          >
            {linkLabel}
          </TrackedLink>
          {secondaryHref && secondaryLabel && (
            <TrackedLink
              href={secondaryHref}
              className="btn-secondary"
              label={`page_cta_${secondaryLabel.toLowerCase().replaceAll(" ", "_")}`}
              style={{ marginLeft: "0.75rem" }}
            >
              {secondaryLabel}
            </TrackedLink>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
