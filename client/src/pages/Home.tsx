import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutUsSection from '@/components/AboutUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { initScrollReveal } from '@/lib/animate';

export default function Home() {
  useEffect(() => {
    // Initialize scroll reveal animations
    initScrollReveal();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutUsSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
