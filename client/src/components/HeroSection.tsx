import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-24 bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0 reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900 mb-6">
              Innovative Solutions for Digital Growth
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl">
              We create cutting-edge applications, websites, and CRM solutions that help businesses transform and thrive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3"
                onClick={() => scrollToSection('services')}
              >
                Explore Our Services
              </Button>
              <Button 
                variant="outline" 
                className="bg-white text-primary hover:bg-neutral-100 border border-primary font-semibold px-6 py-3"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-end reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Team working on digital solutions" 
              className="rounded-lg shadow-xl max-w-full md:max-w-lg h-auto" 
              width="600" 
              height="450"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
