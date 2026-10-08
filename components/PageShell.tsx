import type { CSSProperties, ReactNode } from "react";
import rootStyleJson from "@/components/rootStyle.json";
import CookieBanner from "@/components/CookieBanner";
import SiteBehaviors from "@/components/SiteBehaviors";
import { Footer } from "@/components/sections/Footer";
import { FooterMarquee } from "@/components/sections/FooterMarquee";
import { Header } from "@/components/sections/Header";
import { MobileDrawer } from "@/components/sections/MobileDrawer";
import { OfferModal } from "@/components/sections/OfferModal";
import { RingDivider } from "@/components/sections/RingDivider";
import { SearchOverlay } from "@/components/sections/SearchOverlay";

const rootStyle = rootStyleJson as CSSProperties;

/** Shared chrome for inner pages: header, drawer, overlays, closing marquee and footer. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <div style={rootStyle}>
        <Header />
        <MobileDrawer />
        <SearchOverlay />
        <OfferModal />
        {children}
        <RingDivider />
        <FooterMarquee />
        <Footer />
      </div>
      <SiteBehaviors />
      <CookieBanner />
    </>
  );
}
