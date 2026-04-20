import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const PlaceholderPage = () => {
  const location = useLocation();
  const pathName = location.pathname.replace('/', '').replace(/-/g, ' ');
  const title = pathName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
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
