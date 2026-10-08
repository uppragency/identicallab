import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { FaqCta, FaqGroups, FaqHero } from "@/components/pages/FaqSections";

export const metadata: Metadata = {
  title: "Întrebări frecvente | iDentical Lab",
  description: "Răspunsuri la întrebările frecvente ale cabinetelor: fișiere, servicii, termene, prețuri și colaborare cu iDentical Lab.",
  alternates: { canonical: "/intrebari" },
};

export default function Page() {
  return (
    <PageShell>
      <FaqHero />
      <FaqGroups />
      <FaqCta />
    </PageShell>
  );
}
