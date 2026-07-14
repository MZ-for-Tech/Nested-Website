import dynamic from "next/dynamic";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import SmartOperations from "@/components/SmartOperations/SmartOperations";
import StructuredData from "./structured-data";

// Lazy-load below-the-fold sections for faster initial paint
const Brands = dynamic(() => import("@/components/Brands/Brands"));
const Solutions = dynamic(() => import("@/components/Solutions/Solutions"));
const Partners = dynamic(() => import("@/components/Partners/Partners"));
const CoreValues = dynamic(() => import("@/components/CoreValues/CoreValues"));
const Footer = dynamic(() => import("@/components/Footer/Footer"));

export default function Home() {
  return (
    <>
      <StructuredData />
      <main id="main-content" aria-label="Nested United main content">
        <Hero />
        <SmartOperations />
        <About />
        <Brands />
        <Solutions />
        <Partners />
        <CoreValues />
        <Footer />
      </main>
    </>
  );
}
