import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';

const Contact = () => {
  useSEO({
    title: 'Contact Us — Book a Free Custom Closet Consultation',
    description:
      'Schedule a complimentary consultation with the Fantasy Closets design team. Visit our Beverly Hills showroom or book an in-home appointment.',
    keywords:
      'closet consultation, custom closet quote, Beverly Hills closet showroom, free design consultation, contact closet designer',
    path: '/contact',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Fantasy Closets',
      url: 'https://fantasycloset.com/contact',
      mainEntity: {
        '@type': 'LocalBusiness',
        name: 'Fantasy Closets',
        telephone: '+1-555-123-4567',
        email: 'contact@fantasyclosets.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Luxury Lane, Suite 100',
          addressLocality: 'Beverly Hills',
          addressRegion: 'CA',
          postalCode: '90210',
          addressCountry: 'US',
        },
      },
    },
  });

  return (
    <div className="pt-32 pb-20 bg-luxury-100 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12 flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-luxury-900 mb-6">Let's Connect</h1>
            <div className="w-16 h-[1px] bg-luxury-800 mb-8"></div>
            <p className="text-luxury-900/70 text-lg font-light mb-12 leading-relaxed">
              Whether you're ready to start your project or simply exploring the possibilities, our design team is here to guide you. Reach out to schedule your complimentary showroom visit or in-home consultation.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm uppercase tracking-widest text-luxury-900 font-medium mb-3">Visit the Showroom</h4>
                <p className="text-luxury-900/70 font-light">123 Luxury Lane, Suite 100<br />Beverly Hills, CA 90210</p>
              </div>
              
              <div>
                <h4 className="text-sm uppercase tracking-widest text-luxury-900 font-medium mb-3">Contact Details</h4>
                <p className="text-luxury-900/70 font-light mb-1">contact@fantasyclosets.com</p>
                <p className="text-luxury-900/70 font-light">(555) 123-4567</p>
              </div>
              
              <div>
                <h4 className="text-sm uppercase tracking-widest text-luxury-900 font-medium mb-3">Hours of Operation</h4>
                <p className="text-luxury-900/70 font-light mb-1">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-luxury-900/70 font-light">Sat - Sun: By Appointment Only</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Form Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-7/12"
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
