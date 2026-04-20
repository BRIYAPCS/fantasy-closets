import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden -mt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_closet.png" 
          alt="Luxury custom closet" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-luxury-900/40 bg-gradient-to-t from-luxury-900/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-luxury-100 font-medium tracking-tight mb-6 drop-shadow-lg"
        >
          Transform Your Space
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-luxury-100/90 font-light mb-12 max-w-2xl drop-shadow-md"
        >
          Custom-designed closets tailored seamlessly to your lifestyle. We elevate functionality to an art form.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <Link 
            to="/contact" 
            className="w-full sm:w-auto px-8 py-4 bg-luxury-100 text-luxury-900 uppercase tracking-widest text-sm font-medium hover:bg-white transition-colors"
          >
            Book Free Consultation
          </Link>
          <Link 
            to="/gallery" 
            className="w-full sm:w-auto px-8 py-4 border border-luxury-100 text-luxury-100 uppercase tracking-widest text-sm font-medium hover:bg-luxury-100 hover:text-luxury-900 transition-colors"
          >
            View Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
