import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { LegalPage } from "@/components/pages/LegalPage";
import { PRIVACY } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${PRIVACY.title} | iDentical Lab`,
  description: PRIVACY.intro,
  alternates: { canonical: "/politica-de-confidentialitate" },
};

export default function Page() {
  return (
    <PageShell>
      <LegalPage doc={PRIVACY} />
    </PageShell>
  );
}
