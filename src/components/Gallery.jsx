import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const categories = ['All', 'Walk-in Closets', 'Laundry Rooms', 'Materials'];
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, src: '/walkin_closet.png', category: 'Walk-in Closets', alt: 'Modern Walk-in Closet' },
    { id: 2, src: '/laundry_room.png', category: 'Laundry Rooms', alt: 'Luxury Laundry Area' },
    { id: 3, src: '/hero_closet.png', category: 'Walk-in Closets', alt: 'Boutique Display Custom' },
    // Placeholder repeats for display layout
    { id: 4, src: '/walkin_closet.png', category: 'Materials', alt: 'Rich wood finishing' },
    { id: 5, src: '/laundry_room.png', category: 'Laundry Rooms', alt: 'Custom cabinets' },
    { id: 6, src: '/hero_closet.png', category: 'Walk-in Closets', alt: 'Pristine Shelving' },
  ];

  const filteredItems = galleryItems.filter(item => 
    activeFilter === 'All' ? true : item.category === activeFilter
  );

  return (
    <section className="py-20 bg-luxury-100">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 uppercase tracking-wider text-sm transition-all duration-300 ${
                activeFilter === category 
                  ? 'bg-luxury-900 text-luxury-100' 
                  : 'bg-transparent text-luxury-900 hover:text-luxury-800 border border-luxury-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-square overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-luxury-900/0 group-hover:bg-luxury-900/40 transition-colors duration-500 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" size={40} strokeWidth={1} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-luxury-900/95 backdrop-blur-sm p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
