import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Award, Heart } from 'lucide-react';
import { Link } from 'react-router';

const featuredProducts = [
  {
    name: 'Croissants Français',
    description: 'Buttery, flaky layers of perfection',
    price: 'PKR 250',
  },
  {
    name: 'Sourdough Loaf',
    description: 'Fermented 48 hours, naturally leavened',
    price: 'PKR 320',
  },
  {
    name: 'Chocolate Éclairs',
    description: 'Smooth chocolate cream with dark couverture',
    price: 'PKR 180',
  },
  {
    name: 'Berry Tarts',
    description: 'Fresh seasonal berries with pastry cream',
    price: 'PKR 150',
  },
];

export function PaniteHome() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <div className="overflow-x-hidden pt-24">
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div
            className="w-full h-full"
            style={{
              background:
                'linear-gradient(135deg, #8B7355 0%, #D4A574 100%)',
            }}
          />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative h-full flex items-center justify-center text-center px-6"
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles size={24} style={{ color: '#F5F1E8' }} />
                <span
                  className="text-xs tracking-widest uppercase font-semibold"
                  style={{ color: '#F5F1E8' }}
                >
                  Artisan Bakery
                </span>
                <Sparkles size={24} style={{ color: '#F5F1E8' }} />
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 font-bold" style={{ color: '#F5F1E8' }}>
                Panite
              </h1>
              <p
                className="text-lg md:text-2xl lg:text-3xl leading-relaxed font-light"
                style={{
                  color: '#F5F1E8',
                  fontStyle: 'italic',
                }}
              >
                Where tradition meets modern craft
                <br />
                in every perfectly baked creation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-12"
            >
              <Link
                to="/panite"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full transition-all duration-500 border-2 text-sm tracking-widest uppercase"
                style={{
                  borderColor: '#F5F1E8',
                  backgroundColor: '#F5F1E8',
                  color: '#8B7355',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = '#F5F1E8';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#F5F1E8';
                  (e.currentTarget as HTMLElement).style.color = '#8B7355';
                }}
              >
                Order Online
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center pt-2"
            style={{ borderColor: '#F5F1E8' }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: '#F5F1E8' }}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: '#FEFDFB' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#D4A574' }}>
              Premium Selection
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4" style={{ color: '#5A4A42' }}>
              Our Signature Collection
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8B7355' }}>
              Handcrafted daily with the finest European ingredients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div
                  className="relative overflow-hidden rounded-2xl mb-4 aspect-square bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center group-hover:shadow-lg transition-shadow"
                  style={{ backgroundColor: '#E8DCC8' }}
                >
                  <Sparkles
                    size={48}
                    style={{ color: '#D4A574', opacity: 0.6 }}
                    className="group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="text-xl mb-2 font-semibold" style={{ color: '#5A4A42' }}>
                  {product.name}
                </h3>
                <p className="text-sm mb-3" style={{ color: '#8B7355' }}>
                  {product.description}
                </p>
                <p className="text-lg font-bold" style={{ color: '#D4A574' }}>
                  {product.price}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              to="/panite"
              className="inline-flex items-center gap-2 text-lg transition-all duration-300"
              style={{
                color: '#8B7355',
                fontWeight: 500,
              }}
            >
              Explore Full Menu
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: '#8B7355' }} className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#F5F1E8' }}>
              The Panite Promise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Award,
                title: 'European Craft',
                description: 'Recipes and techniques from master bakers across Europe',
              },
              {
                icon: Heart,
                title: 'Premium Ingredients',
                description: 'Only the finest flours, butters, and organic toppings',
              },
              {
                icon: Sparkles,
                title: 'Fresh Daily',
                description: 'Baked fresh each morning in our open kitchen',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#F5F1E8' }}>
                    <Icon size={32} style={{ color: '#F5F1E8' }} />
                  </div>
                  <h3 className="text-2xl mb-4" style={{ color: '#F5F1E8' }}>
                    {value.title}
                  </h3>
                  <p className="text-base opacity-80 leading-relaxed" style={{ color: '#F5F1E8' }}>
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 font-bold" style={{ color: '#5A4A42' }}>
              Experience Artisan Perfection
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#8B7355' }}>
              Visit us today for a taste of European tradition
            </p>
            <Link
              to="/panite"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full transition-all border-2 text-sm tracking-widest uppercase"
              style={{
                borderColor: '#8B7355',
                backgroundColor: '#8B7355',
                color: '#F5F1E8',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLElement).style.color = '#8B7355';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#8B7355';
                (e.currentTarget as HTMLElement).style.color = '#F5F1E8';
              }}
            >
              Order Now
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#5A4A42' }} className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4" style={{ color: '#F5F1E8' }}>
                Panite
              </h3>
              <p style={{ color: '#D4A574' }} className="text-sm">
                Artisan bakery dedicated to quality
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#F5F1E8' }}>
                Hours
              </h4>
              <p style={{ color: '#D4A574' }} className="text-sm">
                Mon - Fri: 7am - 8pm
                <br />
                Sat - Sun: 8am - 9pm
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#F5F1E8' }}>
                Contact
              </h4>
              <p style={{ color: '#D4A574' }} className="text-sm">
                Phone: +92 300 123 4567
                <br />
                Email: hello@panite.com
              </p>
            </div>
          </div>
          <div className="border-t pt-8 text-center" style={{ borderColor: '#8B7355' }}>
            <p style={{ color: '#D4A574' }} className="text-sm">
              © 2026 Panite. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
