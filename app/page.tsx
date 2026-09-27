import { HeroSection } from "../components/features/home/HeroSection";
import { AboutSection } from "../components/features/home/AboutSection";
import { FeaturedSection } from "../components/features/home/FeaturedSection";
import { PrinciplesSection } from "../components/features/home/PrinciplesSection";
import { ServicesSection } from "../components/features/home/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <PrinciplesSection />
      <ServicesSection />
    </>
  );
}
