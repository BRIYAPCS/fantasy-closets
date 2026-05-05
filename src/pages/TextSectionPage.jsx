import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { textSections } from '../data/sections';
import { useSEO } from '../hooks/useSEO';

const TextSectionPage = ({ slug }) => {
  const data = textSections[slug];

  useSEO({
    title: data?.seo?.title || data?.title,
    description: data?.seo?.description,
    keywords: data?.seo?.keywords,
    path: `/${slug}`,
    image: data?.image ? `https://fantasycloset.com${data.image}` : undefined,
    jsonLd:
      data?.faqs && {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
  });

  if (!data) return <Navigate to="/" replace />;

  return (
    <div className="pt-32 pb-20 bg-luxury-100 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-luxury-800 mb-4">{data.subtitle}</p>
          <h1 className="text-4xl md:text-5xl font-serif text-luxury-900 mb-6">{data.title}</h1>
          <div className="w-16 h-[1px] bg-luxury-800 mx-auto" />
        </motion.div>

        {data.faqs ? <FaqList faqs={data.faqs} /> : <ProseBlock data={data} />}

        <div className="mt-20 text-center">
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-luxury-900 text-luxury-100 uppercase tracking-widest text-sm hover:bg-luxury-800 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProseBlock = ({ data }) => (
  <div className="max-w-4xl mx-auto">
    {data.image && (
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        src={data.image}
        alt={data.title}
        className="w-full aspect-[16/9] object-cover mb-12 shadow-lg"
      />
    )}
    {data.intro && (
      <p className="text-xl md:text-2xl font-serif text-luxury-900 leading-relaxed mb-8">
        {data.intro}
      </p>
    )}
    <div className="space-y-6">
      {data.body?.map((p, i) => (
        <p key={i} className="text-luxury-900/80 text-lg font-light leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  </div>
);

const FaqList = ({ faqs }) => {
  const [open, setOpen] = useState(0);
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border border-luxury-200 bg-white">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex justify-between items-center text-left p-6 hover:bg-luxury-100/40 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-lg font-medium text-luxury-900 pr-6">{f.q}</span>
              <ChevronDown
                size={20}
                className={`text-luxury-800 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-luxury-900/75 font-light leading-relaxed">{f.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TextSectionPage;
