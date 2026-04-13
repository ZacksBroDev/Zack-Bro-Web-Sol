import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { BrowserMockup } from "@/components/BrowserMockup";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { TrackedLink } from "@/components/TrackedLink";
import { createMetadata } from "@/lib/metadata";
import { projects } from "@/content/work";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Selected projects built for local service businesses. Custom websites designed to look professional and generate leads.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Previous Work"
        title="Real projects built for real businesses."
        subtitle="Most of my work is for local service businesses, with a few select founder-led brands mixed in when the fit is right. Each project is shaped around the client's audience, goals, and the outcomes that matter most."
      />

      {/* Projects */}
      <SectionShell variant="alt">
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 100}>
              <article
                className="card"
                style={{ padding: "0", overflow: "hidden" }}
              >
                <div
                  style={{
                    padding: "1.5rem",
                    background: "var(--bg-alt)",
                    borderBottom: "1px solid var(--border-light)",
                  }}
                >
                  <BrowserMockup url={project.url}>
                    <Image
                      src={project.image}
                      alt={`${project.name} website screenshot`}
                      width={1728}
                      height={972}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </BrowserMockup>
                </div>

                <div style={{ padding: "2.5rem" }}>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: "1rem",
                    }}
                  >
                    {project.type}
                  </p>

                  <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
                    {project.name}
                  </h2>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                      gap: "2rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div>
                      <h4
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          color: "var(--text-tertiary)",
                          marginBottom: "0.5rem",
                          fontFamily:
                            "var(--font-dm-sans), system-ui, sans-serif",
                        }}
                      >
                        The Challenge
                      </h4>
                      <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          color: "var(--text-tertiary)",
                          marginBottom: "0.5rem",
                          fontFamily:
                            "var(--font-dm-sans), system-ui, sans-serif",
                        }}
                      >
                        The Solution
                      </h4>
                      <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <h4
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        color: "var(--text-tertiary)",
                        marginBottom: "0.5rem",
                        fontFamily:
                          "var(--font-dm-sans), system-ui, sans-serif",
                      }}
                    >
                      The Result
                    </h4>
                    <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                      {project.result}
                    </p>
                  </div>

                  {/* Key Improvements */}
                  {project.improvements && project.improvements.length > 0 && (
                    <div style={{ marginBottom: "1.5rem" }}>
                      <h4
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          color: "var(--text-tertiary)",
                          marginBottom: "0.75rem",
                          fontFamily:
                            "var(--font-dm-sans), system-ui, sans-serif",
                        }}
                      >
                        Key Improvements
                      </h4>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fill, minmax(220px, 1fr))",
                          gap: "0.5rem",
                        }}
                      >
                        {project.improvements.map((item) => (
                          <div
                            key={item}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "0.5rem",
                              fontSize: "0.875rem",
                              color: "var(--text-secondary)",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--accent)",
                                fontWeight: 600,
                                flexShrink: 0,
                                marginTop: "2px",
                              }}
                            >
                              ✓
                            </span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Capabilities */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    {project.capabilities.map((cap) => (
                      <span
                        key={cap}
                        style={{
                          padding: "0.375rem 0.875rem",
                          border: "1px solid var(--border)",
                          borderRadius: "100px",
                          fontSize: "0.8125rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  {/* Visit Site link */}
                  <TrackedLink
                    href={`https://${project.url.replace(/^https?:\/\//, "")}`}
                    className="btn"
                    label={`work_visit_site_${project.name.toLowerCase().replaceAll(" ", "_")}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginTop: "1rem",
                    }}
                  >
                    Visit Live Site
                    <span aria-hidden="true" style={{ fontSize: "1.1em" }}>
                      ↗
                    </span>
                  </TrackedLink>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </SectionShell>

      <PageCta
        title="Have a project in mind?"
        description="I'd like to hear about your business and what you're looking to accomplish online. Let's start a conversation."
        sectionClassName="section"
      />
    </>
  );
}
