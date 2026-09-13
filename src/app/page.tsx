import { BeforeAfter } from "@/components/BeforeAfter";
import { Coach } from "@/components/Coach";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Marquee } from "@/components/Marquee";
import { Paths } from "@/components/Paths";
import { Method } from "@/components/Method";
import { Pricing } from "@/components/Pricing";
import { Programs } from "@/components/Programs";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Method />
        <Paths />
        <BeforeAfter />
        <Programs />
        <Coach />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
