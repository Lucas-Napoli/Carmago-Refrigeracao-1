import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ApplianceServices from "@/components/ApplianceServices";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <ApplianceServices />
        <Benefits />
        <Brands />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
