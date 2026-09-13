import Navbar from "@/components/Navbar";
import KineticMatrix from "@/components/KineticMatrix";
import TrustMarquee from "@/components/TrustMarquee";
import Services from "@/components/Services";
import RoiCalculator from "@/components/RoiCalculator";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950 relative">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Kinetic Physics Canvas Hero Section */}
      <KineticMatrix />

      {/* Trust & Verified Certifications Marquee */}
      <TrustMarquee />

      {/* Core Creative & Growth Services Grid */}
      <Services />

      {/* Verified Featured Works & Creative Showcase */}
      <Portfolio />

      {/* Interactive Reach & Growth Estimator */}
      <RoiCalculator />

      {/* The 4-Stage Framify Growth System */}
      <Process />

      {/* Client Reviews & Social Proof */}
      <Testimonials />

      {/* Creative Team Section */}
      <TeamSection />

      {/* Interactive FAQ Section */}
      <FaqSection />

      {/* Direct Contact & Project Quotation */}
      <ContactSection />

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating 1-Click WhatsApp Support */}
      <WhatsAppButton />
    </main>
  );
}
