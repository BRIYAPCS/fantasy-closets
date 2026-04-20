import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-luxury-100/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-luxury-900 tracking-wider">
          FANTASY<span className="font-light">CLOSETS</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-luxury-800 ${
                location.pathname === link.path ? 'text-luxury-900 border-b border-luxury-900' : 'text-luxury-900/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="px-6 py-2 border border-luxury-900 text-luxury-900 hover:bg-luxury-900 hover:text-luxury-100 transition-colors uppercase text-sm tracking-wider">
            Book Consultation
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-luxury-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-luxury-100 shadow-md border-t border-luxury-200 py-6 px-6 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-lg uppercase tracking-wider font-serif text-luxury-900"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="w-full py-3 bg-luxury-900 text-luxury-100 text-center uppercase tracking-wider">
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
