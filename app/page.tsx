import { features } from "@/lib/features";
import type { CSSProperties } from "react";
import rootStyleJson from "@/components/rootStyle.json";
import SiteBehaviors from "@/components/SiteBehaviors";
import { About } from "@/components/sections/About";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { Accreditations } from "@/components/sections/Accreditations";
import { ArticleOverlay } from "@/components/sections/ArticleOverlay";
import { Blog } from "@/components/sections/Blog";
import { Careers } from "@/components/sections/Careers";
import { Contact } from "@/components/sections/Contact";
import { Delivery } from "@/components/sections/Delivery";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { FooterMarquee } from "@/components/sections/FooterMarquee";
import { FullBleed } from "@/components/sections/FullBleed";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Instagram } from "@/components/sections/Instagram";
import { Materials } from "@/components/sections/Materials";
import { MobileDrawer } from "@/components/sections/MobileDrawer";
import { OfferModal } from "@/components/sections/OfferModal";
import { Planning } from "@/components/sections/Planning";
import { Portfolio } from "@/components/sections/Portfolio";
import { Positioning } from "@/components/sections/Positioning";
import { ProcessMarquee } from "@/components/sections/ProcessMarquee";
import { Prosthetics } from "@/components/sections/Prosthetics";
import { Results } from "@/components/sections/Results";
import { RingDivider } from "@/components/sections/RingDivider";
import { SearchOverlay } from "@/components/sections/SearchOverlay";
import { Services } from "@/components/sections/Services";
import { StackableGuides } from "@/components/sections/StackableGuides";
import { Testimonials } from "@/components/sections/Testimonials";
import { Values } from "@/components/sections/Values";
import { Workflow } from "@/components/sections/Workflow";

const rootStyle = rootStyleJson as CSSProperties;

export default function Page() {
  return (
    <>
      <div style={rootStyle}>
        <Header />
        <MobileDrawer />
        <SearchOverlay />
        <OfferModal />
        <Hero />
        <ProcessMarquee />
        <AboutIntro />
        <Values />
        <Positioning />
        <About />
        <RingDivider />
        <Services />
        <Portfolio />
        <Prosthetics />
        <FullBleed />
        <Workflow />
        <StackableGuides />
        <Delivery />
        <Planning />
        <Results />
        <Testimonials />
        <RingDivider />
        <Faq />
        <Materials />
        <Accreditations />
        <GoogleReviews />
        <RingDivider />
        {features.blog && <ArticleOverlay />}
        {features.blog && <Blog />}
        <Instagram />
        <Careers />
        <Contact />
        <RingDivider />
        <FooterMarquee />
        <Footer />
      </div>
      <SiteBehaviors />
    </>
  );
}
