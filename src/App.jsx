import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';
import PlaceholderPage from './pages/PlaceholderPage';

// Helper array to register all dynamic unassigned routes
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
      <div className="flex bg-luxury-100 text-luxury-900 font-sans min-h-screen">
        
        {/* Sidebar Navigation */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        
        {/* Main Content Area */}
        <div className="flex-grow flex flex-col md:ml-[260px] w-full min-h-screen transition-all duration-300">
          
          {/* Mobile Header Toggle */}
          <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
          
          <main className="flex-grow pt-20 md:pt-0 flex flex-col">
            <Routes>
              {/* Existing Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Auto-register Placeholder Routes */}
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
