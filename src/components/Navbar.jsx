import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const navStructure = [
  { type: 'link', name: 'Home', path: '/' },
  {
    type: 'group',
    name: 'Closets',
    items: [
      { name: 'Walk-In Closets', path: '/walk-in' },
      { name: 'Reach-In Closets', path: '/reach-in' },
    ],
  },
  {
    type: 'group',
    name: 'Spaces',
    items: [
      { name: 'Office Spaces', path: '/office-spaces' },
      { name: 'Pantries', path: '/pantries' },
      { name: 'Mudrooms', path: '/mudrooms' },
      { name: 'Laundry Rooms', path: '/laundry-rooms' },
      { name: 'Garage Spaces', path: '/garage-spaces' },
    ],
  },
  {
    type: 'group',
    name: 'Design',
    items: [
      { name: 'Drawer & Door Styles', path: '/drawer-and-door-styles' },
      { name: 'Colors Available', path: '/colors' },
      { name: 'Hardware', path: '/hardware' },
      { name: 'Accessories', path: '/accessories' },
    ],
  },
  {
    type: 'group',
    name: 'Inspiration',
    items: [
      { name: 'Photo Gallery', path: '/gallery' },
      { name: 'Before & After', path: '/before-after' },
      { name: 'Installation Video', path: '/installation-video' },
      { name: 'Pet Helpers', path: '/pet-helpers' },
    ],
  },
  {
    type: 'group',
    name: 'Company',
    items: [
      { name: 'About Us', path: '/about' },
      { name: 'Why Choose Us', path: '/why-choose-us' },
      { name: 'FAQs', path: '/faqs' },
    ],
  },
  { type: 'link', name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close any open menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
    setOpenMobileGroup(null);
  }, [location.pathname]);

  // Click-outside closes desktop dropdown
  useEffect(() => {
    const handleClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenGroup(null);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  const opaque = scrolled || location.pathname !== '/' || mobileOpen;

  const isActive = (path) => location.pathname === path;
  const isGroupActive = (group) => group.items?.some((it) => isActive(it.path));

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        opaque
          ? 'bg-luxury-100/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="px-6 md:px-12 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className={`text-xl md:text-2xl font-serif font-bold tracking-wider transition-colors ${
            opaque ? 'text-luxury-900' : 'text-luxury-100 drop-shadow-md'
          }`}
        >
          FANTASY<span className="font-light">CLOSETS</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navStructure.map((entry) => {
            if (entry.type === 'link') {
              return (
                <Link
                  key={entry.name}
                  to={entry.path}
                  className={`text-sm uppercase tracking-widest transition-colors ${
                    opaque ? 'text-luxury-900' : 'text-luxury-100 drop-shadow-md'
                  } ${isActive(entry.path) ? 'font-semibold border-b border-current pb-1' : 'hover:opacity-70'}`}
                >
                  {entry.name}
                </Link>
              );
            }

            const isOpen = openGroup === entry.name;
            const groupActive = isGroupActive(entry);
            return (
              <div key={entry.name} className="relative">
                <button
                  onClick={() => setOpenGroup(isOpen ? null : entry.name)}
                  className={`flex items-center gap-1 text-sm uppercase tracking-widest transition-colors ${
                    opaque ? 'text-luxury-900' : 'text-luxury-100 drop-shadow-md'
                  } ${groupActive ? 'font-semibold' : 'hover:opacity-70'}`}
                >
                  {entry.name}
                  <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="absolute top-full right-0 mt-3 w-60 bg-luxury-100 border border-luxury-200 shadow-lg py-2">
                    {entry.items.map((it) => (
                      <Link
                        key={it.path}
                        to={it.path}
                        className={`block px-5 py-2 text-sm transition-colors ${
                          isActive(it.path)
                            ? 'bg-luxury-900 text-luxury-100'
                            : 'text-luxury-900 hover:bg-luxury-200/60'
                        }`}
                      >
                        {it.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className={`lg:hidden p-2 focus:outline-none transition-colors ${
            opaque ? 'text-luxury-900' : 'text-luxury-100 drop-shadow-md'
          }`}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-luxury-100 border-t border-luxury-200 max-h-[calc(100vh-60px)] overflow-y-auto">
          <nav className="py-4">
            {navStructure.map((entry) => {
              if (entry.type === 'link') {
                return (
                  <Link
                    key={entry.name}
                    to={entry.path}
                    className={`block px-6 py-3 text-sm uppercase tracking-widest font-medium ${
                      isActive(entry.path) ? 'bg-luxury-900 text-luxury-100' : 'text-luxury-900'
                    }`}
                  >
                    {entry.name}
                  </Link>
                );
              }
              const isOpen = openMobileGroup === entry.name;
              return (
                <div key={entry.name} className="border-t border-luxury-200/60">
                  <button
                    onClick={() => setOpenMobileGroup(isOpen ? null : entry.name)}
                    className="w-full flex items-center justify-between px-6 py-3 text-sm uppercase tracking-widest text-luxury-900"
                  >
                    {entry.name}
                    <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="bg-white/40 pb-2">
                      {entry.items.map((it) => (
                        <Link
                          key={it.path}
                          to={it.path}
                          className={`block px-10 py-2 text-sm ${
                            isActive(it.path)
                              ? 'font-semibold text-luxury-900'
                              : 'text-luxury-900/80 hover:text-luxury-900'
                          }`}
                        >
                          {it.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
