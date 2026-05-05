import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';

const SEO_BY_PATH = {
  '/walk-in': {
    title: 'Custom Walk-In Closets — Luxury Wardrobe Design',
    description:
      'Bespoke walk-in closets engineered around your wardrobe. Custom-lit islands, glass-front displays and premium materials for a true boutique experience.',
    keywords: 'walk-in closet, custom walk-in wardrobe, luxury closet design, boutique closet',
  },
  '/reach-in': {
    title: 'Reach-In Closets — Smart Custom Storage',
    description:
      'Maximize every inch of your reach-in closets with custom shelving, drawers and hardware tailored to how you live.',
    keywords: 'reach-in closet, small closet design, custom shelving, closet organization',
  },
  '/office-spaces': {
    title: 'Custom Home Office Cabinetry & Storage',
    description:
      'Refined home offices with built-in cabinetry, integrated desks and elegant storage that elevate the way you work.',
    keywords: 'home office cabinetry, custom desk, built-in office, office storage',
  },
  '/pantries': {
    title: 'Custom Pantries — Designer Kitchen Storage',
    description:
      'Beautifully organized custom pantries with adjustable shelving, glass doors and premium finishes designed for daily life.',
    keywords: 'custom pantry, kitchen pantry design, butler pantry, pantry shelving',
  },
  '/mudrooms': {
    title: 'Mudroom Design & Custom Built-Ins',
    description:
      'Hard-working mudrooms with custom benches, lockers and storage that blend utility with high-end finishes.',
    keywords: 'mudroom design, custom mudroom, entry storage, mudroom lockers',
  },
  '/laundry-rooms': {
    title: 'Luxury Laundry Room Cabinetry & Design',
    description:
      'Transform your laundry room with premium cabinetry, integrated appliances and elegant utility storage.',
    keywords: 'laundry room cabinets, custom laundry room, luxury laundry design',
  },
  '/garage-spaces': {
    title: 'Custom Garage Storage Systems',
    description:
      'Garage storage solutions with custom cabinetry, slat-wall systems and durable finishes built to last.',
    keywords: 'garage storage, garage cabinets, custom garage organization',
  },
  '/hardware': {
    title: 'Premium Closet Hardware & Finishes',
    description:
      'Explore the curated selection of luxury hardware, pulls and finishes that complete every Fantasy Closets design.',
    keywords: 'closet hardware, luxury cabinet pulls, custom closet finishes',
  },
  '/accessories': {
    title: 'Closet Accessories — Inserts, Lighting & More',
    description:
      'Drawer inserts, jewelry trays, valet rods, integrated lighting and the finishing touches that make a closet truly bespoke.',
    keywords: 'closet accessories, drawer inserts, closet lighting, valet rod',
  },
  '/drawer-and-door-styles': {
    title: 'Drawer & Door Styles for Custom Closets',
    description:
      'Discover the full range of drawer fronts and door styles available for your custom closet, pantry or built-in.',
    keywords: 'cabinet door styles, drawer fronts, closet door design',
  },
  '/colors': {
    title: 'Custom Closet Colors & Finish Library',
    description:
      'Browse our finish library — wood tones, lacquers and designer colors for closets and built-ins.',
    keywords: 'closet colors, cabinet finishes, custom closet wood tones',
  },
  '/before-after': {
    title: 'Before & After — Custom Closet Transformations',
    description:
      'See real client transformations: before and after photos of closets, pantries and storage spaces by Fantasy Closets.',
    keywords: 'closet before and after, closet renovation, closet transformation',
  },
  '/installation-video': {
    title: 'Closet Installation Process — Video Walkthrough',
    description:
      'Watch the white-glove installation process behind every Fantasy Closets project, from delivery to final reveal.',
    keywords: 'closet installation, custom closet installer, installation process',
  },
  '/pet-helpers': {
    title: 'Pet Helpers — Built-In Pet Spaces',
    description:
      'Adorable, functional built-ins for pets — from feeding stations to integrated kennels — designed to fit your home.',
    keywords: 'pet station, built-in dog kennel, pet feeding station, pet-friendly storage',
  },
  '/about': {
    title: 'About Fantasy Closets — Our Story & Craftsmanship',
    description:
      'Meet the designers and craftspeople behind Fantasy Closets and learn how we approach every bespoke project.',
    keywords: 'about Fantasy Closets, custom closet company, closet designer team',
  },
  '/why-choose-us': {
    title: 'Why Choose Fantasy Closets — Quality & Process',
    description:
      'White-glove service, premium materials and end-to-end craftsmanship — see why clients choose Fantasy Closets.',
    keywords: 'why choose Fantasy Closets, best custom closet company, luxury closet designer',
  },
  '/faqs': {
    title: 'FAQs — Custom Closets & Storage Questions Answered',
    description:
      'Answers to the most common questions about pricing, timelines, materials, warranty and the Fantasy Closets design process.',
    keywords: 'closet FAQ, closet pricing questions, custom closet timeline, closet warranty',
  },
  '/terms': {
    title: 'Terms & Conditions',
    description:
      'Terms and conditions governing the use of the Fantasy Closets website and services.',
    keywords: 'terms and conditions, fantasy closets terms',
  },
};

const PlaceholderPage = () => {
  const location = useLocation();
  const pathName = location.pathname.replace('/', '').replace(/-/g, ' ');
  const title = pathName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const seo = SEO_BY_PATH[location.pathname] || {
    title,
    description: `Learn more about ${title} from Fantasy Closets — luxury custom closets and bespoke storage design.`,
  };

  useSEO({
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    path: location.pathname,
  });

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] px-6 pt-32 pb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-serif text-luxury-900 mb-6">{title}</h1>
        <div className="w-16 h-[1px] bg-luxury-800 mx-auto mb-8"></div>
        <p className="text-luxury-900/70 text-lg max-w-2xl font-light leading-relaxed">
          This section is currently under development. Soon, it will feature our exquisite portfolio and detailed information regarding <strong className="font-medium">{title}</strong>.
        </p>
      </motion.div>
    </div>
  );
};

export default PlaceholderPage;
