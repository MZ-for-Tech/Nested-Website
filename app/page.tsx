import dynamic from "next/dynamic";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import StructuredData from "./structured-data";

// Lazy-load below-the-fold sections for faster initial paint
const Value    = dynamic(() => import("@/components/Value/Value"));
const Services = dynamic(() => import("@/components/Services/Services"));
const Vision   = dynamic(() => import("@/components/Vision/Vision"));
const Partners = dynamic(() => import("@/components/Partners/Partners"));
const Founders = dynamic(() => import("@/components/Founders/Founders"));
const Footer   = dynamic(() => import("@/components/Footer/Footer"));

export default function Home() {
  return (
    <>
      <StructuredData />
      <main id="main-content" aria-label="Nested United main content">
        <Hero />
        <About />
        <Value />
        <Services />
        <Vision />
        <Partners />
        <Founders />
        <Footer />
      </main>
    </>
  );
}
