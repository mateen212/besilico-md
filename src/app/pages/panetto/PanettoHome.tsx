import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Award, Clock, Users } from 'lucide-react';
import { Link } from 'react-router';

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

export function PanettoHome() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <div className="overflow-x-hidden pt-24 bg-amber-50">
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&h=900&fit=crop"
            alt="Artisan bakery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative h-full flex items-center justify-center text-center text-white px-4"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-['Great_Vibes'] text-6xl lg:text-7xl mb-4"
            >
              Panetto
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl mb-8 tracking-wide"
            >
              Artisan Bakery & Pastries
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base lg:text-lg max-w-2xl mx-auto mb-12 text-gray-100"
            >
              Handcrafted baked goods made fresh daily with the finest ingredients
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/panetto/menu"
                className="px-8 py-4 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                Explore Menu <ArrowRight size={20} />
              </Link>
              <Link
                to="/panetto/contact"
                className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-amber-900 transition-colors font-semibold"
              >
                Order Now
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Creations</h2>
            <p className="text-lg text-gray-600">Discover our most beloved baked creations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-bold">{product.price}</span>
                  <button className="text-amber-600 hover:text-amber-700 transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              to="/panetto/menu"
              className="inline-flex items-center gap-3 px-10 py-4 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors font-semibold text-lg"
            >
              View Full Menu <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Panetto */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Panetto?</h2>
            <p className="text-lg text-gray-600">Experience the difference of artisan baking</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Premium Ingredients',
                description: 'We use only the finest organic ingredients sourced from trusted suppliers',
                image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
              },
              {
                icon: Award,
                title: 'Expert Craftsmen',
                description: 'Our bakers have decades of combined experience in traditional French baking',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
              },
              {
                icon: Clock,
                title: 'Fresh Daily',
                description: 'Everything is baked fresh every morning, never frozen or pre-made',
                image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300&h=300&fit=crop',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="relative h-40 mb-6 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Icon size={40} className="mx-auto mb-4 text-amber-600" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Love</h2>
            <p className="text-lg text-gray-600">What our customers are saying</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: 'The best croissants I\'ve ever had! Absolutely amazing quality.',
                author: 'Sarah Ahmed',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
              },
              {
                text: 'Panetto has changed my mornings. Fresh, delicious, and authentic.',
                author: 'Hassan Khan',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
              },
              {
                text: 'Finally found an artisan bakery that lives up to its promise!',
                author: 'Fatima Hassan',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-amber-50 p-8 rounded-lg shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Sparkles key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Order Your Favorites Today</h2>
          <p className="text-xl mb-8 text-amber-100">
            Visit our bakery or place your order online for delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/panetto/menu"
              className="px-10 py-4 bg-white text-amber-700 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Browse Menu
            </Link>
            <Link
              to="/panetto/contact"
              className="px-10 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-amber-700 transition-colors font-semibold text-lg"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-['Great_Vibes'] text-3xl text-amber-500 mb-4">Panetto</h3>
              <p className="text-sm">Artisan bakery & pastries, crafted with love every day.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/panetto/menu" className="hover:text-amber-500 transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to="/panetto/about" className="hover:text-amber-500 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/panetto/contact" className="hover:text-amber-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Hours</h4>
              <ul className="space-y-2 text-sm">
                <li>Mon-Fri: 7 AM - 8 PM</li>
                <li>Sat: 8 AM - 9 PM</li>
                <li>Sun: 8 AM - 6 PM</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>📍 Karachi, Pakistan</li>
                <li>📞 +92 300 1234567</li>
                <li>✉️ hello@panetto.pk</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>© 2026 Panetto. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
