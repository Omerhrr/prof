"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { GallerySection } from "@/components/gallery-section";
import { ImpactSection } from "@/components/impact-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ImpactSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
