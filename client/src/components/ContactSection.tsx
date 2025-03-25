import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Have a project in mind or need more information? Contact us today and let's discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-neutral-50 rounded-lg p-6 md:p-8 shadow-sm reveal"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Send Us a Message</h3>
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="reveal"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-primary mt-1 mr-4 text-lg">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Office Address</h4>
                    <p className="text-neutral-600">Virtual Headquarters</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary mt-1 mr-4 text-lg">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone Number</h4>
                    <p className="text-neutral-600">+917774801785</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary mt-1 mr-4 text-lg">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Email Address</h4>
                    <p className="text-neutral-600">info@xentricks.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary mt-1 mr-4 text-lg">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Business Hours</h4>
                    <p className="text-neutral-600">Monday - Friday: 9am - 6pm<br />Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 p-3 rounded-full transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 p-3 rounded-full transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 p-3 rounded-full transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 p-3 rounded-full transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-64 bg-neutral-200 rounded-lg relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31762.108896561693!2d115.18891965376968!3d-8.409518777256115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd239a2f64b787b%3A0x53fd4b6ad77f1d1!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1679891952136!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Maps - Bali, Indonesia"
              ></iframe>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
