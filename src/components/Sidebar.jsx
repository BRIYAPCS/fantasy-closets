import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

/* ================= MENU CONFIG ================= */
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

/* ================= COMPONENT ================= */
const Sidebar = ({ isOpen, setIsOpen }) => {
  const [openSection, setOpenSection] = useState(null);
  const location = useLocation();

  /* Toggle accordion sections */
  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  /* Close sidebar on mobile when clicking a link */
  const handleLinkClick = () => {
    if (setIsOpen) setIsOpen(false);
  };

  return (
    <>
      {/* ================= MOBILE OVERLAY ================= */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed md:static
          top-0 left-0 h-full
          w-[260px]
          bg-[#f9f7f0]
          border-r border-[#e8e3d5]
          z-40 flex flex-col

          transform transition-transform duration-300

          /* MOBILE: slide in/out */
          ${isOpen ? "translate-x-0" : "-translate-x-full"}

          /* DESKTOP: always visible */
          md:translate-x-0
        `}
      >

        {/* ================= HEADER ================= */}
        <div className="p-6 flex justify-between items-center border-b border-[#e8e3d5] sticky top-0 bg-[#f9f7f0] z-10">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="text-xl font-serif font-bold text-[#3b2c25] tracking-wider"
          >
            FANTASY<span className="font-light">CLOSETS</span>
          </Link>
        </div>

        {/* ================= NAV ================= */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">

          {/* HOME */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className={`block px-4 py-3 rounded-sm text-sm uppercase tracking-wider font-medium transition-colors ${location.pathname === '/'
                ? 'bg-[#3b2c25] text-[#f9f7f0]'
                : 'text-[#3b2c25] hover:bg-[#e8e3d5]/50'
              }`}
          >
            Home
          </Link>

          {/* CONTACT */}
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={`block px-4 py-3 rounded-sm text-sm uppercase tracking-wider font-medium transition-colors ${location.pathname === '/contact'
                ? 'bg-[#3b2c25] text-[#f9f7f0]'
                : 'text-[#3b2c25] hover:bg-[#e8e3d5]/50'
              }`}
          >
            Contact
          </Link>

          <div className="my-6 border-t border-[#e8e3d5]/60"></div>

          {/* ================= ACCORDION ================= */}
          {menu.map((category) => {
            const isSectionOpen = openSection === category.title;
            const hasActiveChild = category.items.some(
              item => item.path === location.pathname
            );

            return (
              <div key={category.title}>
                {/* SECTION HEADER */}
                <button
                  onClick={() => toggleSection(category.title)}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 rounded-sm
                    transition-colors
                    ${hasActiveChild && !isSectionOpen
                      ? 'text-[#3b2c25] font-bold'
                      : 'text-[#3b2c25]/80 hover:bg-[#e8e3d5]/40'
                    }
                  `}
                >
                  <span className="text-sm uppercase tracking-widest font-medium">
                    {category.title}
                  </span>

                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isSectionOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {/* SECTION ITEMS */}
                {isSectionOpen && (
                  <ul className="bg-white/40 py-2 space-y-1">
                    {category.items.map((item) => {
                      const isActive = location.pathname === item.path;

                      return (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            onClick={handleLinkClick}
                            className={`
                              block px-8 py-2 text-sm transition-colors
                              ${isActive
                                ? 'font-bold text-[#3b2c25] border-l-2 border-[#3b2c25]'
                                : 'text-[#3b2c25]/70 hover:text-[#3b2c25] hover:bg-[#e8e3d5]/30'
                              }
                            `}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;