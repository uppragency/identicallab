import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { LegalPage } from "@/components/pages/LegalPage";
import { TERMS } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${TERMS.title} | iDentical Lab`,
  description: TERMS.intro,
  alternates: { canonical: "/termeni-si-conditii" },
};

export default function Page() {
  return (
    <PageShell>
      <LegalPage doc={TERMS} />
    </PageShell>
  );
}
