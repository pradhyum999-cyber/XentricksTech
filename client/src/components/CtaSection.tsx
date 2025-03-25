import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function CtaSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section 
      className="py-16 bg-primary text-white reveal"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg opacity-90 max-w-2xl">
              Partner with Xentricks to bring your digital vision to life. Contact us today for a free consultation.
            </p>
          </div>
          <div>
            <Button 
              className="bg-white text-primary hover:bg-neutral-100 font-semibold px-8 py-4 h-auto"
              onClick={scrollToContact}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
