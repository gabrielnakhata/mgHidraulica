"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <TimelineSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
