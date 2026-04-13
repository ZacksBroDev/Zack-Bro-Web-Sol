import { FadeIn } from "@/components/FadeIn";
import { TrackedLink } from "@/components/TrackedLink";

interface PageCtaProps {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  sectionClassName?: "section" | "section-alt";
  containerMaxWidth?: string;
  copyMaxWidth?: string;
}

export function PageCta({
  title,
  description,
  href = "/contact",
  linkLabel = "Request a Quote",
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
        </FadeIn>
      </div>
    </section>
  );
}
