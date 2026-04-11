import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

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
          <Link href={href} className="btn-primary">
            {linkLabel}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
