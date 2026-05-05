// React + Router
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';
import PlaceholderPage from './pages/PlaceholderPage';

// Placeholder routes (future pages)
const placeholderRoutes = [
  "/walk-in", "/reach-in", "/office-spaces", "/pantries", "/mudrooms", "/laundry-rooms",
  "/garage-spaces", "/hardware", "/accessories", "/drawer-and-door-styles", "/colors",
  "/before-after", "/installation-video", "/pet-helpers", "/about",
  "/why-choose-us", "/faqs", "/terms"
];

function App() {
  // Controls mobile sidebar only
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f9f7f0] text-luxury-900 font-sans">

        {/* Slide-in drawer (triggered from navbar on all breakpoints) */}
        <Sidebar
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        {/* Top navbar — always visible, overlays the hero */}
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />

            {placeholderRoutes.map(path => (
              <Route key={path} path={path} element={<PlaceholderPage />} />
            ))}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;