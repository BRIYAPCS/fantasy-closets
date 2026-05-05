import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { sections } from '../data/sections';
import { useSEO } from '../hooks/useSEO';

const SectionPage = ({ slug }) => {
  const data = sections[slug];
  const [selected, setSelected] = useState(null);

  useSEO({
    title: data?.seo?.title || data?.title,
    description: data?.seo?.description,
    keywords: data?.seo?.keywords,
    path: `/${slug}`,
    image: data?.images?.[0] ? `https://fantasycloset.com${data.images[0]}` : undefined,
  });

  if (!data) return <Navigate to="/" replace />;

  return (
    <div className="pt-32 pb-20 bg-luxury-100 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-luxury-800 mb-4">{data.subtitle}</p>
          <h1 className="text-4xl md:text-5xl font-serif text-luxury-900 mb-6">{data.title}</h1>
          <div className="w-16 h-[1px] bg-luxury-800 mx-auto mb-8" />
          <p className="text-luxury-900/70 text-lg font-light leading-relaxed">{data.description}</p>
        </motion.div>

        {/* Image grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data.images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer bg-white"
              onClick={() => setSelected({ src, alt: `${data.title} ${i + 1}` })}
            >
              <img
                src={src}
                alt={`${data.title} project ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-luxury-900/0 group-hover:bg-luxury-900/40 transition-colors duration-500 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" size={36} strokeWidth={1} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA strip */}
        <div className="mt-20 text-center">
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-luxury-900 text-luxury-100 uppercase tracking-widest text-sm hover:bg-luxury-800 transition-colors"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-luxury-900/95 backdrop-blur-sm p-6"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-8 right-8 text-white/70 hover:text-white"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: 'spring', damping: 25 }}
              src={selected.src}
              alt={selected.alt}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionPage;
