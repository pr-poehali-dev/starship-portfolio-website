import React from "react";
import HeroSection from "@/components/HeroSection";
import ArtistsSection from "@/components/ArtistsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-pink-900">
      <HeroSection />
      <ArtistsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
