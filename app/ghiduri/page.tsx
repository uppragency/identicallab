import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { GuideCta, GuidesGrid, GuidesHero } from "@/components/pages/GuideSections";

export const metadata: Metadata = {
  title: "Ghiduri | iDentical Lab",
  description: "Ghiduri practice pentru cabinete: fișiere CBCT, formate, planificare implantară, design CAD/CAM și ghiduri chirurgicale.",
  alternates: { canonical: "/ghiduri" },
};

export default function Page() {
  return (
    <PageShell>
      <GuidesHero />
      <GuidesGrid />
      <GuideCta />
    </PageShell>
  );
}
