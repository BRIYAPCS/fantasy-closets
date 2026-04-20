import Gallery from '../components/Gallery';

const GalleryPage = () => {
  return (
    <div className="pt-12">
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
