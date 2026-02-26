import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutCandidate } from "./components/AboutCandidate";
import { Proposals } from "./components/Proposals";
import { ImpactSection } from "./components/ImpactSection";
import { Experience } from "./components/Experience";
import { Events } from "./components/Events";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-['Inter',sans-serif]">
      <Header />
      <main>
        <Hero />
        <AboutCandidate />
        <Proposals />
        <ImpactSection />
        <Experience />
        <Events />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}