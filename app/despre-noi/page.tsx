import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AboutBand, AboutCta, AboutHero, AboutMethod, AboutStory, AboutTeam, AboutTech } from "@/components/pages/AboutSections";
import { Accreditations } from "@/components/sections/Accreditations";
import { Positioning } from "@/components/sections/Positioning";
import { Results } from "@/components/sections/Results";
import { RingDivider } from "@/components/sections/RingDivider";
import { Testimonials } from "@/components/sections/Testimonials";
import { Values } from "@/components/sections/Values";

export const metadata: Metadata = {
  title: "Despre noi | iDentical Lab",
  description:
    "iDentical Lab este un laborator dentar digital din București: 30 de ani de experiență, peste 700 de cabinete partenere, flux complet de la scanare la livrare.",
  alternates: { canonical: "/despre-noi" },
};

export default function Page() {
  return (
    <PageShell>
      <AboutHero />
      <AboutBand />
      <Positioning />
      <AboutStory />
      <Values />
      <AboutMethod />
      <AboutTech />
      <AboutTeam />
      <Results />
      <Testimonials />
      <RingDivider />
      <Accreditations />
      <AboutCta />
    </PageShell>
  );
}
