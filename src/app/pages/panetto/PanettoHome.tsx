import React from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Award, Clock, Users, Leaf } from 'lucide-react';
import { Link } from 'react-router';
import { useTheme } from '../../contexts/ThemeContext';
import { PanettoFooter } from '../../components/PanettoFooter';

const featuredProducts = [
  {
    name: 'Croissants Français',
    description: 'Buttery, flaky layers of perfection',
    price: 'PKR 250',
    image: 'https://images.unsplash.com/photo-1585080198519-35fdd160cb4d?w=400&h=300&fit=crop',
  },
  {
    name: 'Sourdough Loaf',
    description: 'Fermented 48 hours, naturally leavened',
    price: 'PKR 320',
    image: 'https://images.unsplash.com/photo-1549365778-bc4e4b1b0313?w=400&h=300&fit=crop',
  },
  {
    name: 'Chocolate Éclairs',
    description: 'Smooth chocolate cream with dark couverture',
    price: 'PKR 180',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
  },
  {
    name: 'Berry Tarts',
    description: 'Fresh seasonal berries with pastry cream',
    price: 'PKR 150',
    image: 'https://images.unsplash.com/photo-1535920527894-b82b27910c95?w=400&h=300&fit=crop',
  },
];

const testimonials = [
  {
    name: 'Sarah Khan',
    role: 'Customer',
    text: 'The croissants here are absolutely divine. I come back every weekend!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    name: 'Ahmed Ali',
    role: 'Regular Customer',
    text: 'Best sourdough in Lahore. The bread has perfect crust and crumb. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Fatima Hassan',
    role: 'Food Blogger',
    text: 'Authentic European technique meets local flavors. Pure artisanal craftsmanship.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

export function PanettoHome() {
  const { isDark } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  const bgColor = isDark ? '#1A1512' : '#F5F1E8';
  const textColor = isDark ? '#F5F1E8' : '#2D2D2D';
  const accentColor = '#8B7355';
  const lightAccent = '#D4A574';

  return (
    <div className="min-h-screen transition-colors" style={{ backgroundColor: bgColor }}>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Bakery"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-black/70' : 'bg-black/40'}`} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(212, 165, 116, 0.1)', border: '1px solid rgba(212, 165, 116, 0.3)' }}
          >
            <Sparkles size={16} style={{ color: lightAccent }} />
            <span style={{ color: lightAccent }} className="text-sm font-semibold">Artisan Bakery Since 2020</span>
          </motion.div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight"
            style={{ fontFamily: 'Great_Vibes, cursive', color: '#F5F1E8' }}
          >
            Panetto
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto" style={{ color: '#F5F1E8', fontWeight: 300 }}>
            Premium European breads & pastries, baked fresh daily with traditional techniques
          </p>

          <Link
            to="/panetto/menu"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full transition-all duration-500 text-lg border-2"
            style={{
              borderColor: lightAccent,
              backgroundColor: lightAccent,
              color: accentColor,
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLElement).style.color = lightAccent;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = lightAccent;
              (e.currentTarget as HTMLElement).style.color = accentColor;
            }}
          >
            Explore Menu
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 lg:px-12 transition-colors" style={{ backgroundColor: bgColor }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 font-serif" style={{ color: accentColor }}>
              Featured Delights
            </h2>
            <p style={{ color: isDark ? '#B8966B' : '#A0865F' }}>
              Our most loved creations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
                style={{
                  backgroundColor: isDark ? '#2A2420' : '#FFFFFF',
                  border: `1px solid ${isDark ? 'rgba(212, 165, 116, 0.2)' : 'rgba(212, 165, 116, 0.1)'}`
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: textColor }}>
                    {product.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: isDark ? '#B8966B' : '#A0865F' }}>
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold" style={{ color: accentColor }}>
                      {product.price}
                    </span>
                    <button
                      className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                      style={{
                        backgroundColor: accentColor,
                        color: bgColor,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = lightAccent;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = accentColor;
                      }}
                    >
                      Order
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 lg:px-12 transition-colors" style={{ backgroundColor: isDark ? '#2A2420' : '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 font-serif" style={{ color: accentColor }}>
              Why Choose Panetto
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Premium Quality', desc: 'Only finest European ingredients used' },
              { icon: Clock, title: 'Fresh Daily', desc: 'Baked fresh each morning' },
              { icon: Leaf, title: 'Authentic', desc: 'Traditional European techniques' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 rounded-xl transition-all"
                style={{
                  backgroundColor: isDark ? '#1A1512' : 'rgba(212, 165, 116, 0.05)',
                  border: `1px solid ${isDark ? 'rgba(212, 165, 116, 0.2)' : 'rgba(212, 165, 116, 0.1)'}`
                }}
              >
                <item.icon size={32} style={{ color: accentColor }} className="mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2" style={{ color: textColor }}>
                  {item.title}
                </h3>
                <p style={{ color: isDark ? '#B8966B' : '#A0865F' }} className="text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 lg:px-12 transition-colors" style={{ backgroundColor: bgColor }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 font-serif" style={{ color: accentColor }}>
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-xl transition-all"
                style={{
                  backgroundColor: isDark ? '#2A2420' : '#FFFFFF',
                  border: `1px solid ${isDark ? 'rgba(212, 165, 116, 0.2)' : 'rgba(212, 165, 116, 0.1)'}`
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold" style={{ color: textColor }}>
                      {testimonial.name}
                    </h4>
                    <p style={{ color: accentColor }} className="text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p style={{ color: isDark ? '#B8966B' : '#A0865F' }} className="italic">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 transition-colors" style={{ backgroundColor: isDark ? '#2A2420' : '#F5F1E8' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl mb-6 font-serif" style={{ color: accentColor }}>
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl mb-12" style={{ color: isDark ? '#B8966B' : '#A0865F' }}>
            Visit Panetto today or order online for delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/panetto/menu"
              className="px-12 py-4 rounded-full font-semibold transition-all border-2"
              style={{
                borderColor: accentColor,
                backgroundColor: accentColor,
                color: bgColor,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLElement).style.color = accentColor;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = accentColor;
                (e.currentTarget as HTMLElement).style.color = bgColor;
              }}
            >
              Order Now
            </Link>
            <Link
              to="/panetto/contact"
              className="px-12 py-4 rounded-full font-semibold transition-all border-2"
              style={{
                borderColor: accentColor,
                color: accentColor,
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = accentColor;
                (e.currentTarget as HTMLElement).style.color = bgColor;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLElement).style.color = accentColor;
              }}
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <PanettoFooter />
    </div>
  );
}
