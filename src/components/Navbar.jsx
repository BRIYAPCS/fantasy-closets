import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const topLinks = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = ({ onMenuClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Solid style on every route except Home (which has a dark hero behind the nav)
  const opaque = scrolled || location.pathname !== '/';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        opaque
          ? 'bg-luxury-100/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="px-6 md:px-12 flex justify-between items-center">
        <Link
          to="/"
          className={`text-xl md:text-2xl font-serif font-bold tracking-wider transition-colors ${
            opaque ? 'text-luxury-900' : 'text-luxury-100 drop-shadow-md'
          }`}
        >
          FANTASY<span className="font-light">CLOSETS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {topLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-widest transition-colors ${
                  opaque ? 'text-luxury-900' : 'text-luxury-100 drop-shadow-md'
                } ${isActive ? 'font-semibold border-b border-current pb-1' : 'hover:opacity-70'}`}
              >
                {link.name}
              </Link>
            );
          })}
          <button
            onClick={onMenuClick}
            aria-label="Open full menu"
            className={`flex items-center gap-2 text-sm uppercase tracking-widest transition-colors ${
              opaque ? 'text-luxury-900 hover:opacity-70' : 'text-luxury-100 hover:opacity-80 drop-shadow-md'
            }`}
          >
            <Menu size={20} /> Menu
          </button>
        </nav>

        <button
          onClick={onMenuClick}
          aria-label="Open menu"
          className={`md:hidden p-2 focus:outline-none transition-colors ${
            opaque ? 'text-luxury-900' : 'text-luxury-100 drop-shadow-md'
          }`}
        >
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
