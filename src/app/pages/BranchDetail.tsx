import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Mail, ArrowLeft, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getThemeColors } from '../styles/themes';
import { useBranches } from '../context/BranchContext';

export function BranchDetail() {
  const { branchId } = useParams();
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  const { getBranchById } = useBranches();

  const branch = branchId ? getBranchById(branchId) : undefined;

  if (!branch) {
    return (
      <div style={{ backgroundColor: colors.background }} className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4" style={{ fontFamily: 'Playfair Display', color: colors.text }}>
            Branch Not Found
          </h1>
          <Link
            to="/branches"
            className="inline-flex items-center gap-2"
            style={{ fontFamily: 'Inter', fontWeight: 500, color: colors.primary }}
          >
            <ArrowLeft size={20} />
            Back to Branches
          </Link>
        </div>
      </div>
    );
  }

  const categoryGroups = [
    { name: 'Appetizers', key: 'appetizer' },
    { name: 'Mains', key: 'main' },
    { name: 'Desserts', key: 'dessert' },
    { name: 'Beverages', key: 'beverage' },
    { name: 'Wine', key: 'wine' },
  ];

  return (
    <div style={{ backgroundColor: colors.background }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <Link
          to="/branches"
          className="inline-flex items-center gap-2 mb-8"
          style={{ fontFamily: 'Inter', fontWeight: 500, color: colors.primary }}
        >
          <ArrowLeft size={20} />
          Back to Branches
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-sm tracking-widest uppercase mb-4"
            style={{ fontFamily: 'Inter', color: colors.accent }}
          >
            {branch.type === 'restaurant' ? 'Fine Dining' : 'Café'}
          </p>
          <h1
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: 'Playfair Display', color: colors.text }}
          >
            {branch.name}
          </h1>
          {branch.description && (
            <p
              className="text-xl max-w-2xl opacity-80"
              style={{ fontFamily: 'Inter', color: colors.text }}
            >
              {branch.description}
            </p>
          )}
        </motion.div>
      </div>

      {/* Info Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-xl"
            style={{ backgroundColor: colors.cardBg }}
          >
            <div className="flex gap-4">
              <MapPin size={24} style={{ color: colors.accent }} className="flex-shrink-0" />
              <div>
                <p style={{ fontFamily: 'Inter', fontWeight: 600, color: colors.text }} className="mb-2">
                  Location
                </p>
                <p style={{ fontFamily: 'Inter', color: colors.text }} className="opacity-75">
                  {branch.location.address}<br />
                  {branch.location.city}, {branch.location.country}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-xl"
            style={{ backgroundColor: colors.cardBg }}
          >
            <div className="flex gap-4">
              <Phone size={24} style={{ color: colors.accent }} className="flex-shrink-0" />
              <div>
                <p style={{ fontFamily: 'Inter', fontWeight: 600, color: colors.text }} className="mb-2">
                  Phone
                </p>
                <a
                  href={`tel:${branch.location.phone}`}
                  style={{ fontFamily: 'Inter', color: colors.primary }}
                  className="hover:opacity-80"
                >
                  {branch.location.phone}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-xl"
            style={{ backgroundColor: colors.cardBg }}
          >
            <div className="flex gap-4">
              <Mail size={24} style={{ color: colors.accent }} className="flex-shrink-0" />
              <div>
                <p style={{ fontFamily: 'Inter', fontWeight: 600, color: colors.text }} className="mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${branch.location.email}`}
                  style={{ fontFamily: 'Inter', color: colors.primary }}
                  className="hover:opacity-80 break-all"
                >
                  {branch.location.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hours */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <h2 className="text-3xl mb-8" style={{ fontFamily: 'Playfair Display', color: colors.text }}>
          Hours
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {branch.hours.map((hour, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-4 rounded-lg"
              style={{ backgroundColor: colors.cardBg }}
            >
              <p style={{ fontFamily: 'Inter', fontWeight: 600, color: colors.text }} className="mb-1">
                {hour.day}
              </p>
              <p style={{ fontFamily: 'Inter', color: colors.textMuted }} className="text-sm">
                {hour.closed ? 'Closed' : `${hour.open} - ${hour.close}`}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 pb-32">
        <h2 className="text-3xl mb-8" style={{ fontFamily: 'Playfair Display', color: colors.text }}>
          Menu
        </h2>

        {categoryGroups.map((category, catIndex) => {
          const items = branch.menu.filter((item) => item.category === category.key);
          if (items.length === 0) return null;

          return (
            <div key={category.key} className="mb-12">
              <h3
                className="text-xl mb-6 pb-4 border-b"
                style={{
                  fontFamily: 'Playfair Display',
                  color: colors.accent,
                  borderColor: colors.accent + '40',
                }}
              >
                {category.name}
              </h3>
              <div className="space-y-4">
                {items.map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.1 }}
                    className="pb-4 border-b"
                    style={{ borderColor: colors.accent + '20' }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 style={{ fontFamily: 'Playfair Display', color: colors.text }} className="text-lg">
                        {item.name}
                      </h4>
                      <span style={{ fontFamily: 'Inter', fontWeight: 600, color: colors.primary }} className="text-lg ml-4">
                        €{item.price.toFixed(2)}
                      </span>
                    </div>
                    <p
                      style={{ fontFamily: 'Inter', color: colors.textMuted }}
                      className="text-sm opacity-75"
                    >
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2
            className="text-4xl md:text-5xl mb-8"
            style={{ fontFamily: 'Playfair Display', color: colors.text }}
          >
            Ready to Dine With Us?
          </h2>
          <Link
            to="/reservation"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full text-lg border-2"
            style={{
              borderColor: colors.accent,
              backgroundColor: colors.accent,
              color: colors.text,
              fontFamily: 'Inter',
              fontWeight: 500,
            }}
          >
            Make a Reservation
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
