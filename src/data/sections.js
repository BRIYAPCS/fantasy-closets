// Source of truth for every detail section. Each entry powers a SectionPage route.
// Image arrays reference files under /public/sections/<slug>/.

const imgs = (slug, exts) => exts.map((ext, i) => `/sections/${slug}/${String(i + 1).padStart(2, '0')}.${ext}`);

const j20 = Array(20).fill('jpg');
const j6 = Array(6).fill('jpg');
const j5 = Array(5).fill('jpg');
const j8 = Array(8).fill('jpg');

export const sections = {
  'walk-in': {
    slug: 'walk-in',
    title: 'Walk-In Closets',
    subtitle: 'Transforming Spaces',
    description:
      'Expansive walk-in closets designed around your wardrobe — custom-lit islands, glass-front displays, and meticulous craftsmanship for a true boutique experience.',
    category: 'Walk-in Closets',
    images: imgs('walk-in', j20),
    seo: {
      title: 'Custom Walk-In Closets — Luxury Wardrobe Design',
      description:
        'Bespoke walk-in closets engineered around your wardrobe with custom-lit islands, glass-front displays and premium materials.',
      keywords: 'walk-in closet, custom walk-in wardrobe, luxury closet design, boutique closet',
    },
  },
  'reach-in': {
    slug: 'reach-in',
    title: 'Reach-In Closets',
    subtitle: 'Inspiring Spaces',
    description:
      'Maximize every inch of your reach-in closets with custom shelving, drawers and hardware tailored to how you live.',
    category: 'Reach-in Closets',
    images: imgs('reach-in', j6),
    seo: {
      title: 'Reach-In Closets — Smart Custom Storage',
      description:
        'Make the most of your reach-in closets with custom shelving and drawers tailored to how you live.',
      keywords: 'reach-in closet, small closet design, custom shelving, closet organization',
    },
  },
  'office-spaces': {
    slug: 'office-spaces',
    title: 'Office Spaces',
    subtitle: 'Inspiring Spaces',
    description:
      'Refined home offices with built-in cabinetry, integrated desks and elegant storage that elevate the way you work.',
    category: 'Office',
    images: imgs('office-spaces', j6),
    seo: {
      title: 'Custom Home Office Cabinetry & Storage',
      description:
        'Refined home offices with built-in cabinetry, integrated desks and elegant storage.',
      keywords: 'home office cabinetry, custom desk, built-in office, office storage',
    },
  },
  'pantries': {
    slug: 'pantries',
    title: 'Pantries',
    subtitle: 'Inspiring Spaces',
    description:
      'Beautifully organized custom pantries with adjustable shelving, glass doors and premium finishes designed for daily life.',
    category: 'Pantries',
    images: imgs('pantries', j6),
    seo: {
      title: 'Custom Pantries — Designer Kitchen Storage',
      description:
        'Custom pantries with adjustable shelving, glass doors and premium finishes for everyday life.',
      keywords: 'custom pantry, kitchen pantry design, butler pantry, pantry shelving',
    },
  },
  'mudrooms': {
    slug: 'mudrooms',
    title: 'Mudrooms',
    subtitle: 'Inspiring Spaces',
    description:
      'Hard-working mudrooms with custom benches, lockers and storage that blend utility with high-end finishes.',
    category: 'Mudrooms',
    images: imgs('mudrooms', j6),
    seo: {
      title: 'Mudroom Design & Custom Built-Ins',
      description:
        'Mudrooms with custom benches, lockers and storage that blend utility with refined finishes.',
      keywords: 'mudroom design, custom mudroom, entry storage, mudroom lockers',
    },
  },
  'laundry-rooms': {
    slug: 'laundry-rooms',
    title: 'Laundry Rooms',
    subtitle: 'Transforming Spaces',
    description:
      'Transform your laundry room with premium cabinetry, integrated appliances and elegant utility storage.',
    category: 'Laundry',
    images: imgs('laundry-rooms', j6),
    seo: {
      title: 'Luxury Laundry Room Cabinetry & Design',
      description:
        'Transform your laundry room with premium cabinetry, integrated appliances and elegant storage.',
      keywords: 'laundry room cabinets, custom laundry room, luxury laundry design',
    },
  },
  'garage-spaces': {
    slug: 'garage-spaces',
    title: 'Garage Spaces',
    subtitle: 'Elevate Your Spaces',
    description:
      'Garage storage solutions with custom cabinetry, slat-wall systems and durable finishes built to last.',
    category: 'Garage',
    images: imgs('garage-spaces', j6),
    seo: {
      title: 'Custom Garage Storage Systems',
      description:
        'Garage storage with custom cabinetry, slat-wall systems and durable finishes.',
      keywords: 'garage storage, garage cabinets, custom garage organization',
    },
  },
  'hardware': {
    slug: 'hardware',
    title: 'Hardware',
    subtitle: 'Design Your Dream Space',
    description:
      'Explore the curated selection of luxury hardware, pulls and finishes that complete every Fantasy Closets design.',
    category: 'Hardware',
    images: ['/sections/hardware/01.jpg','/sections/hardware/02.jpg','/sections/hardware/03.jpg','/sections/hardware/04.png','/sections/hardware/05.jpg'],
    seo: {
      title: 'Premium Closet Hardware & Finishes',
      description:
        'Curated luxury hardware, pulls and finishes that complete every Fantasy Closets design.',
      keywords: 'closet hardware, luxury cabinet pulls, custom closet finishes',
    },
  },
  'accessories': {
    slug: 'accessories',
    title: 'Accessories',
    subtitle: 'Design Your Dream Space',
    description:
      'Drawer inserts, jewelry trays, valet rods, integrated lighting and the finishing touches that make a closet truly bespoke.',
    category: 'Accessories',
    images: ['/sections/accessories/01.webp','/sections/accessories/02.jpg','/sections/accessories/03.jpg','/sections/accessories/04.jpg','/sections/accessories/05.jpg','/sections/accessories/06.jpg','/sections/accessories/07.jpg','/sections/accessories/08.jpg'],
    seo: {
      title: 'Closet Accessories — Inserts, Lighting & More',
      description:
        'Drawer inserts, jewelry trays, valet rods, integrated lighting and the finishing touches.',
      keywords: 'closet accessories, drawer inserts, closet lighting, valet rod',
    },
  },
  'drawer-and-door-styles': {
    slug: 'drawer-and-door-styles',
    title: 'Drawer & Door Styles',
    subtitle: 'Design Your Dream Space',
    description:
      'Discover the full range of drawer fronts and door styles available for your custom closet, pantry or built-in.',
    category: 'Drawer & Door',
    images: ['/sections/drawer-and-door-styles/01.jpg','/sections/drawer-and-door-styles/02.jpg','/sections/drawer-and-door-styles/03.jpg','/sections/drawer-and-door-styles/04.jpg','/sections/drawer-and-door-styles/05.jpg','/sections/drawer-and-door-styles/06.jpg','/sections/drawer-and-door-styles/07.png','/sections/drawer-and-door-styles/08.jpg','/sections/drawer-and-door-styles/09.png'],
    seo: {
      title: 'Drawer & Door Styles for Custom Closets',
      description:
        'The full range of drawer fronts and door styles for closets, pantries and built-ins.',
      keywords: 'cabinet door styles, drawer fronts, closet door design',
    },
  },
  'colors': {
    slug: 'colors',
    title: 'Colors Available',
    subtitle: 'Designs That Define',
    description:
      'Browse our finish library — wood tones, lacquers and designer colors for closets and built-ins.',
    category: 'Colors',
    images: imgs('colors', ['jpg']),
    seo: {
      title: 'Custom Closet Colors & Finish Library',
      description:
        'Wood tones, lacquers and designer colors for closets and built-ins.',
      keywords: 'closet colors, cabinet finishes, custom closet wood tones',
    },
  },
  'before-after': {
    slug: 'before-after',
    title: 'Before & After',
    subtitle: 'Designing Dreams',
    description:
      'See real client transformations: before and after photos of closets, pantries and storage spaces by Fantasy Closets.',
    category: 'Before & After',
    images: imgs('before-after', j20),
    seo: {
      title: 'Before & After — Custom Closet Transformations',
      description:
        'Real client transformations of closets, pantries and storage spaces.',
      keywords: 'closet before and after, closet renovation, closet transformation',
    },
  },
  'pet-helpers': {
    slug: 'pet-helpers',
    title: 'Adorable Pet Helpers',
    subtitle: 'Built-In Pet Spaces',
    description:
      'Adorable, functional built-ins for pets — from feeding stations to integrated kennels — designed to fit your home.',
    category: 'Pets',
    images: imgs('pet-helpers', j6),
    seo: {
      title: 'Pet Helpers — Built-In Pet Spaces',
      description:
        'Built-ins for pets — feeding stations, integrated kennels and pet-friendly storage.',
      keywords: 'pet station, built-in dog kennel, pet feeding station',
    },
  },
};

// Sections that mostly contain text (no full gallery)
export const textSections = {
  'about': {
    slug: 'about',
    title: 'About Us',
    subtitle: 'Fantasy Closet Designs',
    intro:
      'At Fantasy Closet Designs, we specialize in the design and installation of custom closet systems that maximize the storage potential of your space. Although our company was established two years ago, our team brings over 15 years of experience in this industry to your home.',
    body: [
      'Our mission is straightforward: to provide you with more storage in any space you have. Whether it’s a small wardrobe or a large walk-in closet, our seasoned team leverages its deep-rooted expertise to deliver solutions that enhance the functionality and style of your home.',
      'Transparency is at the heart of our operations. We believe that each customer should be fully informed about how our closet systems are installed. We provide clear, detailed information at every step of the process, from initial design concepts through to the final installation.',
      'At Fantasy Closet Designs, satisfaction is not just an afterthought — it’s a promise. We strive to ensure that every client is 100% satisfied with our work. This dedication, combined with our rich industry experience, has solidified our reputation as a trusted name in the custom closet industry.',
      'Your space, your vision — our expertise. Trust us to transform your closet space into something that’s both practical and inspiring. Welcome to Fantasy Closet Designs — where we blend experience, dedication, and design to bring the best out of your closet.',
    ],
    image: '/sections/walk-in/01.jpg',
    seo: {
      title: 'About Fantasy Closets — Our Story & Craftsmanship',
      description:
        'Meet the designers behind Fantasy Closets and learn how we approach every bespoke project.',
      keywords: 'about Fantasy Closets, custom closet company, closet designer team',
    },
  },
  'why-choose-us': {
    slug: 'why-choose-us',
    title: 'Why Choose Us',
    subtitle: 'Design Your Dream Space',
    intro:
      'At Fantasy Closet Designs, we believe that every space has the potential to be beautiful and functional. Our team of expert designers are passionate about transforming spaces by creating unique and personalized design solutions that reflect our clients’ individual style and needs.',
    body: [
      'From concept to completion, we work closely with our clients to ensure that every detail is perfect and that their vision is brought to life. Whether you’re looking to update a single room or renovate your entire home, Fantasy Closet Designs has the expertise and creativity to take your space to the next level.',
      'From the day of our consultation to the day of your installation the process is typically 4 weeks. We are a family-owned business and do not subcontract any work out. We build trust with all of our clients and make sure we take good care of their homes.',
      'We focus on making sure that our clients get the best bang for their buck. We design both economical and premium closet systems, but mainly focus on making sure we are budget friendly. Transparency is key — we make sure that our clients are fully aware of everything that is going on inside the closet systems. We do not cut corners.',
    ],
    image: '/sections/why-choose-us/01.jpg',
    seo: {
      title: 'Why Choose Fantasy Closets — Quality & Process',
      description:
        'White-glove service, premium materials and end-to-end craftsmanship.',
      keywords: 'why choose Fantasy Closets, best custom closet company, luxury closet designer',
    },
  },
  'faqs': {
    slug: 'faqs',
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know',
    intro: null,
    faqs: [
      {
        q: 'What services do Fantasy Closet Designs offer?',
        a: 'We offer a range of services, from walk-in closets to reach-in closets, pantries, garages, home offices, laundry rooms, entertainment centers, and so much more.',
      },
      {
        q: 'How much do Fantasy Closet Designs’s services cost?',
        a: 'The cost of our services varies depending on the scope of the project. Every room and every design is very different. Contact us for a consultation and quote.',
      },
      {
        q: 'What type of material does Fantasy Closet Designs use?',
        a: 'All vertical panels, adjustable shelves and locking shelves are made of 3/4" thick thermally fused melamine panels. Under intense heat and pressure, melamine resin and particle board are fused together. Melamine Coated Panel (MCP) is highly resistant to scratching, has very good impact characteristics, and provides ease of maintenance. The 3/4" panels provide additional strength against shelf warping and deflection.',
      },
      {
        q: 'What is Fantasy Closet Designs’s design style?',
        a: 'Our design style is modern and minimalist, with a focus on clean lines and functionality. We are versatile and can work with a range of design styles to meet our clients’ needs.',
      },
      {
        q: 'How long does a typical project take?',
        a: 'The timeline varies depending on the scope of the project. We will provide an estimated timeline during the initial consultation — typically 4 weeks from consultation to installation.',
      },
      {
        q: 'What is the design philosophy of Fantasy Closet Designs?',
        a: 'We believe interior design should be a reflection of the client’s personality and lifestyle. Our philosophy is to create spaces that are both functional and aesthetically pleasing.',
      },
      {
        q: 'What type of spaces does Fantasy Closet Designs specialize in?',
        a: 'Fantasy Closet Designs specializes in residential spaces such as homes, apartments, and condos.',
      },
      {
        q: 'How long does the design process take?',
        a: 'The design process varies depending on the scope and services required. Typically, the design process takes between 4–6 weeks from initial consultation to final implementation.',
      },
    ],
    seo: {
      title: 'FAQs — Custom Closets & Storage Questions Answered',
      description:
        'Answers to the most common questions about pricing, timelines, materials and the Fantasy Closets design process.',
      keywords: 'closet FAQ, closet pricing questions, custom closet timeline',
    },
  },
};

// Filter buckets used by the main /gallery page
export const galleryFilters = ['All', 'Walk-in Closets', 'Reach-in Closets', 'Materials'];

const allFor = (categoryLabel, sectionKeys) =>
  sectionKeys.flatMap((k) =>
    sections[k].images.map((src, i) => ({
      id: `${k}-${i}`,
      src,
      category: categoryLabel,
      alt: `${sections[k].title} ${i + 1}`,
    }))
  );

// Aggregated set used by the main gallery
export const galleryItems = [
  ...allFor('Walk-in Closets', ['walk-in', 'before-after']),
  ...allFor('Reach-in Closets', ['reach-in']),
  ...allFor('Materials', ['hardware', 'accessories', 'drawer-and-door-styles', 'colors']),
];
