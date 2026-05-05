import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';
import SectionPage from './pages/SectionPage';
import TextSectionPage from './pages/TextSectionPage';
import PlaceholderPage from './pages/PlaceholderPage';

const gallerySlugs = [
  'walk-in', 'reach-in', 'office-spaces', 'pantries', 'mudrooms', 'laundry-rooms',
  'garage-spaces', 'hardware', 'accessories', 'drawer-and-door-styles', 'colors',
  'before-after', 'pet-helpers',
];

const textSlugs = ['about', 'why-choose-us', 'faqs'];

const remainingPlaceholders = ['/installation-video', '/terms'];

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f9f7f0] text-luxury-900 font-sans">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />

            {gallerySlugs.map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<SectionPage slug={slug} />} />
            ))}

            {textSlugs.map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<TextSectionPage slug={slug} />} />
            ))}

            {remainingPlaceholders.map((path) => (
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
