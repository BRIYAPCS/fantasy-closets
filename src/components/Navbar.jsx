import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = ({ onMenuClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`md:hidden fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
      scrolled ? 'bg-luxury-100/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-4'
    }`}>
      <div className="px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-serif font-bold text-luxury-900 tracking-wider">
          FANTASY<span className="font-light">CLOSETS</span>
        </Link>
        <button onClick={onMenuClick} className="text-luxury-900 p-2 focus:outline-none">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
