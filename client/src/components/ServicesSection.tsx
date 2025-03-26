import { motion } from 'framer-motion';
import { services } from '@/lib/data';

export default function ServicesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to meet your business needs and drive growth.
          </p>
        </div>
        
        <motion.div 
          className="flex gap-8 overflow-x-auto scroll-smooth pb-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="flex-none w-80 bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              variants={item}
            >
              <div className="text-accent text-4xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{service.title}</h3>
              <p className="text-neutral-600 mb-4">
                {service.description}
              </p>
              <ul className="text-sm text-neutral-600 mb-4 space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className="fas fa-check text-accent mt-1 mr-2"></i>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className="text-primary hover:text-primary/90 font-medium inline-flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
