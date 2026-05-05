import Hero from '../components/Hero';
import Services from '../components/Services';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const Home = () => {
  useSEO({
    title: 'Luxury Custom Closets & Bespoke Storage Design',
    description:
      'Fantasy Closets crafts luxury custom walk-in closets, pantries, mudrooms, laundry rooms and garage storage. Premium materials, bespoke design, white-glove installation.',
    keywords:
      'custom closets, luxury closets, walk-in closets, bespoke closet design, custom storage, closet organization, closet designer, Beverly Hills closets',
    path: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Fantasy Closets',
      url: 'https://fantasycloset.com/',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://fantasycloset.com/gallery?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  });

  return (
    <>
      <Hero />
      <Services />
      
      {/* Feature Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <img
                src="/gallery/closet_01.jpg"
                alt="Custom walk-in closet with island and chandelier"
                className="w-full h-auto object-cover shadow-2xl"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-luxury-900 mb-6">Designed for Your Lifestyle</h2>
              <div className="w-16 h-[1px] bg-luxury-800 mb-8"></div>
              <p className="text-luxury-900/70 text-lg leading-relaxed mb-6 font-light">
                We believe that organization is the foundation of a serene and elegant home. Our custom closets are meticulously designed to maximize space without compromising on aesthetics.
              </p>
              <p className="text-luxury-900/70 text-lg leading-relaxed mb-10 font-light">
                By blending premium materials with innovative storage solutions, we create spaces that not only store your belongings but elevate your daily routine.
              </p>
              <Link to="/contact" className="inline-block border-b border-luxury-900 text-luxury-900 uppercase tracking-widest text-sm font-medium pb-1 hover:text-luxury-800 hover:border-luxury-800 transition-colors">
                Discover Our Process
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-luxury-900 text-luxury-100 text-center px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to Elevate Your Space?</h2>
            <p className="text-xl text-luxury-100/70 font-light mb-12">
              Book a complimentary design consultation today and let our experts bring your vision to life.
            </p>
            <Link to="/contact" className="inline-block px-10 py-5 bg-luxury-100 text-luxury-900 uppercase tracking-widest text-sm font-medium hover:bg-white transition-colors">
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
