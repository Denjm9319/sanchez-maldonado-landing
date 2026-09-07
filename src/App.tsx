import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Pillars from "./components/Pillars";
import Services from "./components/Services";
import Sofia from "./components/Sofia";
import OtherBusinesses from "./components/OtherBusinesses";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Problem />
        <Pillars />
        <Services />
        <Sofia />
        <OtherBusinesses />
        <Projects />
        <Process />
        <Team />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
