import { motion } from 'motion/react';
import { Heart, Users, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function PanettoAbout() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/panetto"
            className="inline-flex items-center gap-2 mb-4 text-amber-100 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold mb-2">About Panetto</h1>
          <p className="text-lg text-amber-100">The art and passion behind every bake</p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Panetto was born from a passion for authentic artisan baking. Our founder, raised in the heart of
              Paris, spent years perfecting traditional French baking techniques before bringing this expertise to
              Karachi.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Every morning before dawn, our master bakers arrive to begin their craft. Using time-honored techniques
              and the finest imported ingredients, they create the same quality pastries and breads you'd find in the
              best bakeries of Europe.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Panetto isn't just a bakery – it's a commitment to quality, tradition, and the simple joy of enjoying
              fresh, authentic baked goods.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-80 rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop"
              alt="Our bakery"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">What drives us every single day</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Passion',
                description: 'We pour our hearts into every loaf, pastry, and creation',
                image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
              },
              {
                icon: Award,
                title: 'Quality',
                description: 'Only the finest ingredients and traditional techniques',
                image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300&h=300&fit=crop',
              },
              {
                icon: Users,
                title: 'Community',
                description: 'We believe in building relationships with our customers',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Icon size={40} className="mx-auto mb-4 text-amber-600" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">Master bakers with decades of expertise</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Pierre Laurent',
                role: 'Head Baker & Founder',
                bio: 'French master baker with 30 years of experience in Paris',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
              },
              {
                name: 'Maria Santos',
                role: 'Pastry Chef',
                bio: 'Specialist in French pastries and desserts',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
              },
              {
                name: 'Ahmed Hassan',
                role: 'Bread Master',
                bio: 'Expert in traditional sourdough and artisan breads',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-amber-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '25+', label: 'Years Experience' },
            { number: '500+', label: 'Happy Customers Daily' },
            { number: '50+', label: 'Menu Items' },
            { number: '100%', label: 'Fresh Daily' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <p className="text-4xl font-bold mb-2">{stat.number}</p>
              <p className="text-amber-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Experience Panetto</h2>
            <p className="text-lg text-gray-600 mb-8">
              Visit us today and taste the difference that passion and quality make
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/panetto/menu"
                className="px-10 py-4 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors font-semibold text-lg"
              >
                Browse Menu
              </Link>
              <Link
                to="/panetto/contact"
                className="px-10 py-4 border-2 border-amber-600 text-amber-600 rounded-full hover:bg-amber-50 transition-colors font-semibold text-lg"
              >
                Visit Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
