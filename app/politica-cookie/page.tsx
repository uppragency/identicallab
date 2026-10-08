import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { LegalPage } from "@/components/pages/LegalPage";
import { COOKIES } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${COOKIES.title} | iDentical Lab`,
  description: COOKIES.intro,
  alternates: { canonical: "/politica-cookie" },
};

export default function Page() {
  return (
    <PageShell>
      <LegalPage doc={COOKIES} />
    </PageShell>
  );
}
