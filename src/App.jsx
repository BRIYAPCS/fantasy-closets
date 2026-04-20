import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';
import PlaceholderPage from './pages/PlaceholderPage';

const placeholderRoutes = [
  "/walk-in", "/reach-in", "/office-spaces", "/pantries", "/mudrooms", "/laundry-rooms",
  "/garage-spaces", "/hardware", "/accessories", "/drawer-and-door-styles", "/colors",
  "/before-after", "/installation-video", "/pet-helpers", "/about",
  "/why-choose-us", "/faqs", "/terms"
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      {/* Root layout requested: flex min-h-screen */}
      <div className="flex min-h-screen bg-[#f9f7f0] text-luxury-900 font-sans">
        
        {/* Left Column */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        
        {/* Right Container */}
        <div className="flex-1 md:ml-[260px] flex flex-col min-h-screen">
          
          <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
          
          <main className="flex-1 pt-20 md:pt-0">
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

      </div>
    </Router>
  );
}

export default App;
