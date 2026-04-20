import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';

const menu = [
  {
    title: "Closet Types",
    items: [
      { name: "Walk In Closets", path: "/walk-in" },
      { name: "Reach In Closets", path: "/reach-in" }
    ]
  },
  {
    title: "Spaces",
    items: [
      { name: "Office Spaces", path: "/office-spaces" },
      { name: "Pantries", path: "/pantries" },
      { name: "Mudrooms", path: "/mudrooms" },
      { name: "Laundry Rooms", path: "/laundry-rooms" },
      { name: "Garage Spaces", path: "/garage-spaces" },
    ]
  },
  {
    title: "Products",
    items: [
      { name: "Hardware", path: "/hardware" },
      { name: "Accessories", path: "/accessories" },
      { name: "Drawer & Door Styles", path: "/drawer-and-door-styles" },
      { name: "Colors Available", path: "/colors" }
    ]
  },
  {
    title: "Inspiration",
    items: [
      { name: "Before & After", path: "/before-after" },
      { name: "Photo Gallery", path: "/gallery" },
      { name: "Installation Video", path: "/installation-video" }
    ]
  },
  {
    title: "Extras",
    items: [
      { name: "Adorable Pet Helpers", path: "/pet-helpers" }
    ]
  },
  {
    title: "Company",
    items: [
      { name: "About Us", path: "/about" },
      { name: "Why Choose Us", path: "/why-choose-us" },
      { name: "FAQs", path: "/faqs" },
      { name: "Terms and Conditions", path: "/terms" }
    ]
  }
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [openSection, setOpenSection] = useState(null);
  const location = useLocation();

  // Reset section only if you want: currently we keep state persistent
  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close overlay on mobile safely
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Pure Tailwind layout for rock-solid Desktop/Mobile toggle */}
      <aside
        className={`fixed top-0 left-0 h-full w-[260px] z-40 bg-[#f9f7f0] border-r border-[#e8e3d5] flex flex-col overflow-y-auto transform transition-transform duration-300 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 flex justify-between items-center border-b border-[#e8e3d5] sticky top-0 bg-[#f9f7f0] z-10">
          <Link to="/" onClick={handleLinkClick} className="text-xl font-serif font-bold text-[#3b2c25] tracking-wider">
            FANTASY<span className="font-light">CLOSETS</span>
          </Link>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-[#3b2c25]">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            to="/"
            onClick={handleLinkClick}
            className={`block px-4 py-3 rounded-sm transition-colors text-sm uppercase tracking-wider font-medium ${location.pathname === '/' ? 'bg-[#3b2c25] text-[#f9f7f0]' : 'text-[#3b2c25] hover:bg-[#e8e3d5]/50'}`}
          >
            Home
          </Link>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={`block px-4 py-3 rounded-sm transition-colors text-sm uppercase tracking-wider font-medium ${location.pathname === '/contact' ? 'bg-[#3b2c25] text-[#f9f7f0]' : 'text-[#3b2c25] hover:bg-[#e8e3d5]/50'}`}
          >
            Contact
          </Link>

          <div className="my-6 border-t border-[#e8e3d5]/60 pb-2"></div>

          {menu.map((category) => {
            const isSectionOpen = openSection === category.title;
            const hasActiveChild = category.items.some(item => item.path === location.pathname);

            return (
              <div key={category.title} className="mb-2">
                <button
                  onClick={() => toggleSection(category.title)}
                  className={`w-full flex items-center justify-between px-4 py-3 transition-colors rounded-sm ${hasActiveChild && !isSectionOpen ? 'text-[#3b2c25] font-bold' : 'text-[#3b2c25]/80 hover:bg-[#e8e3d5]/40 hover:text-[#3b2c25]'}`}
                >
                  <span className="text-sm uppercase tracking-widest font-medium text-left">
                    {category.title}
                  </span>
                  <motion.div animate={{ rotate: isSectionOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isSectionOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-white/40"
                    >
                      <div className="py-2 space-y-1">
                        {category.items.map((item) => {
                          const isActive = location.pathname === item.path;
                          return (
                            <li key={item.name}>
                              <Link
                                to={item.path}
                                onClick={handleLinkClick}
                                className={`block px-8 py-2 text-sm transition-colors ${isActive ? 'font-bold text-[#3b2c25] border-l-2 border-[#3b2c25]' : 'text-[#3b2c25]/70 hover:text-[#3b2c25] hover:bg-[#e8e3d5]/30 font-light'}`}
                              >
                                {item.name}
                              </Link>
                            </li>
                          );
                        })}
                      </div>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
