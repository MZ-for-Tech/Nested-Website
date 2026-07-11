import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Value from "@/components/Value/Value";
import Services from "@/components/Services/Services";
import Vision from "@/components/Vision/Vision";
import Partners from "@/components/Partners/Partners";
import Founders from "@/components/Founders/Founders";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Value />
      <Services />
      <Vision />
      <Founders />
      <Partners />
      <Footer />
    </main>
  );
}
