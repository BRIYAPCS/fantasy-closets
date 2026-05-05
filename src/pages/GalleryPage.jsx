import Gallery from '../components/Gallery';
import { useSEO } from '../hooks/useSEO';

const GalleryPage = () => {
  useSEO({
    title: 'Portfolio & Gallery — Custom Closet Designs',
    description:
      'Browse our portfolio of luxury custom closets, walk-in wardrobes, laundry rooms and bespoke storage installations crafted by Fantasy Closets.',
    keywords:
      'custom closet gallery, walk-in closet portfolio, luxury closet photos, closet design inspiration, before and after closets',
    path: '/gallery',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Fantasy Closets Portfolio',
      description:
        'Curated portfolio of custom closets, walk-in wardrobes, laundry rooms and luxury storage solutions.',
      url: 'https://fantasycloset.com/gallery',
    },
  });

  return (
    <div className="pt-32">
      <div className="text-center px-6 mb-8 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-luxury-900 mb-6">Our Portfolio</h1>
        <div className="w-24 h-[1px] bg-luxury-800 mx-auto mb-6"></div>
        <p className="text-luxury-900/70 text-lg font-light">
          Explore a curated selection of our finest custom closets and storage solutions.
        </p>
      </div>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
