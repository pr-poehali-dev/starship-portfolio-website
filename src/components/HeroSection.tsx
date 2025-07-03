import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            STARSHIP
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-4 font-light">
            ENTERTAINMENT
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Виртуальная корейская компания по продвижению артистов в
            телеграм-пространстве
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
            >
              <Icon name="Users" className="mr-2 h-5 w-5" />
              Наши артисты
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-6 text-lg"
            >
              <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
