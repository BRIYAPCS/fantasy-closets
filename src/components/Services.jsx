import { motion } from 'framer-motion';

const Services = () => {
  const servicesList = [
    {
      title: "Custom Closets",
      desc: "Tailored shelving and organizational systems engineered to fit your wardrobe, from everyday essentials to high-end collections."
    },
    {
      title: "Walk-in Closets",
      desc: "Expansive, luxurious walk-in rooms designed with custom-lit islands and glass-front displays for a true boutique experience."
    },
    {
      title: "Laundry Rooms",
      desc: "Bringing elegance to utility. We transform your laundry spaces with premium cabinetry and integrated functionality."
    },
    {
      title: "Installation",
      desc: "Flawless, white-glove installation by our expert craftsmen, treating your home with the utmost care and precision."
    }
  ];

  return (
    <section className="py-24 bg-luxury-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-luxury-900 mb-6 tracking-wide">Our Expertise</h2>
          <div className="w-24 h-[1px] bg-luxury-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {servicesList.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group"
            >
              <div className="h-full p-8 border border-luxury-200 hover:border-luxury-800 transition-colors duration-500 bg-white">
                <h3 className="text-xl font-serif mb-4 text-luxury-900 group-hover:text-luxury-800">{service.title}</h3>
                <p className="text-luxury-900/70 font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
