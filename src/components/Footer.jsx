import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-luxury-900 text-luxury-100 py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-serif font-bold tracking-wider mb-6">
            FANTASY<span className="font-light">CLOSETS</span>
          </h3>
          <p className="text-luxury-100/70 leading-relaxed">
            Elevating your spaces with high-end, bespoke custom closets tailored precisely to your luxury lifestyle.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg uppercase tracking-widest font-serif mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-luxury-100/70 hover:text-luxury-100 transition-colors">Home</Link></li>
            <li><Link to="/gallery" className="text-luxury-100/70 hover:text-luxury-100 transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="text-luxury-100/70 hover:text-luxury-100 transition-colors">Contact</Link></li>
            <li><Link to="/contact" className="text-luxury-100/70 hover:text-luxury-100 transition-colors">Book a Consultation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg uppercase tracking-widest font-serif mb-6">Contact Us</h4>
          <address className="not-italic text-luxury-100/70 space-y-2">
            <p>123 Luxury Lane, Suite 100</p>
            <p>Beverly Hills, CA 90210</p>
            <p className="mt-4">contact@fantasyclosets.com</p>
            <p>(555) 123-4567</p>
          </address>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-luxury-100/20 text-center text-luxury-100/50 text-sm">
        <p>&copy; {new Date().getFullYear()} Fantasy Closets. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
