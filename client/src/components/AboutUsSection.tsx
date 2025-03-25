import { motion } from 'framer-motion';

export default function AboutUsSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10 reveal"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Xentricks team collaborating" 
              className="rounded-lg shadow-lg w-full h-auto" 
              width="600" 
              height="400"
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2 reveal"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">About Xentricks</h2>
            <p className="text-neutral-600 mb-4 text-lg">
              We are a team of passionate digital experts committed to delivering innovative technology solutions that drive business success.
            </p>
            <p className="text-neutral-600 mb-6">
              Founded with a vision to bridge the gap between technology and business needs, Xentricks has grown into a trusted partner for companies seeking to leverage digital transformation for competitive advantage.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Our Mission</h3>
                <p className="text-neutral-600">
                  To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and exceptional customer experiences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Our Vision</h3>
                <p className="text-neutral-600">
                  To be the go-to partner for businesses seeking innovative digital solutions that transform challenges into opportunities.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white py-3 px-4 rounded-lg shadow-sm">
                <div className="text-primary mr-3 text-xl">
                  <i className="fas fa-award"></i>
                </div>
                <div>
                  <h4 className="font-semibold">7+ Years</h4>
                  <p className="text-sm text-neutral-500">Industry Experience</p>
                </div>
              </div>
              <div className="flex items-center bg-white py-3 px-4 rounded-lg shadow-sm">
                <div className="text-primary mr-3 text-xl">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div>
                  <h4 className="font-semibold">10+</h4>
                  <p className="text-sm text-neutral-500">Projects Completed</p>
                </div>
              </div>
              <div className="flex items-center bg-white py-3 px-4 rounded-lg shadow-sm">
                <div className="text-primary mr-3 text-xl">
                  <i className="fas fa-users"></i>
                </div>
                <div>
                  <h4 className="font-semibold">10+</h4>
                  <p className="text-sm text-neutral-500">Expert Team Members</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
