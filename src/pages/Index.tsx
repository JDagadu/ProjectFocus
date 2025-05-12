
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import ClientLogos from "../components/home/ClientLogos";
import TeamSection from "../components/home/TeamSection";
import Contact from "../components/home/Contact";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <ClientLogos />
        <TeamSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
