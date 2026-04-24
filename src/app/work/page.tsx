import { ProjectGrid } from "@/components/ProjectGrid";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { createMetadata } from "@/lib/metadata";
import { projects } from "@/content/work";
import { brand } from "@/content/site";

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
        subtitle="Most of this work is for local service businesses. Each project is built around clarity, credibility, and lead flow."
      />

      <SectionShell variant="alt">
        <ProjectGrid projects={projects} />
      </SectionShell>

      <PageCta
        title="Have a project in mind?"
        description="Tell me about your business and I will help you map the right website direction."
        secondaryHref={brand.bookingUrl}
        secondaryLabel="Book a Free Call"
        sectionClassName="section"
      />
    </>
  );
}
