import AboutSection from "../components/about/AboutSection";
import BlogSection from "../components/blog/BlogSection";
import ClientsSection from "../components/client/ClientsSection";
import CounterSection from "../components/counter/CounterSection";
import CtaSection from "../components/cta/CtaSection";
import FaqSection from "../components/faq/FaqSection";
import FeaturesSection from "../components/features/FeaturesSection";
import HeroSection from "../components/hero/HeroSection";
import ServicesSection from "../components/service/ServicesSection";
import SliderServiceSection from "../components/service/SliderServiceSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <CtaSection />
      <FaqSection />
      <CounterSection />
      <SliderServiceSection />
      <ClientsSection />
      <BlogSection />
    </>
  );
};

export default HomePage;
