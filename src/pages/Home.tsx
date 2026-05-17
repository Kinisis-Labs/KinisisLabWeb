import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Capabilities } from "@/components/Capabilities";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Capabilities />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
