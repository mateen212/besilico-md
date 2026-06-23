import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getThemeColors } from '../styles/themes';
import { useBranches } from '../context/BranchContext';
import { BranchType } from '../types/business';

export function Branches() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  const { activeBranches, restaurantBranches, cafeBranches } = useBranches();
  const [selectedType, setSelectedType] = useState<BranchType | 'all'>('all');

  const displayBranches = selectedType === 'all' 
    ? activeBranches 
    : selectedType === 'restaurant' 
    ? restaurantBranches 
    : cafeBranches;

  return (
    <div style={{ backgroundColor: colors.background }}>
      {/* Hero Section */}
      <div style={{ backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5))', backgroundColor: colors.background }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl mb-6"
            style={{ fontFamily: 'Playfair Display', color: colors.text }}
          >
            Basilico Locations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter', color: colors.textMuted }}
          >
            Discover our fine dining restaurants and charming cafés across Italy
          </motion.p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { type: 'all' as const, label: 'All Locations' },
            { type: 'restaurant' as const, label: 'Restaurants' },
            { type: 'cafe' as const, label: 'Cafés' },
          ].map(({ type, label }) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className="px-8 py-3 rounded-full transition-all duration-300 border-2"
              style={{
                borderColor: selectedType === type ? colors.primary : colors.accent,
                backgroundColor: selectedType === type ? colors.primary : 'transparent',
                color: selectedType === type ? colors.background : colors.primary,
                fontFamily: 'Inter',
                fontWeight: 500,
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Branches Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayBranches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden group cursor-pointer"
              style={{ backgroundColor: colors.cardBg }}
            >
              {/* Header */}
              <div className="p-8 pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase mb-2"
                      style={{ fontFamily: 'Inter', color: colors.accent }}
                    >
                      {branch.type === 'restaurant' ? 'Fine Dining' : 'Café'}
                    </p>
                    <h3
                      className="text-2xl mb-2"
                      style={{ fontFamily: 'Playfair Display', color: colors.text }}
                    >
                      {branch.name}
                    </h3>
                  </div>
                </div>

                {branch.description && (
                  <p
                    className="text-sm opacity-75 mb-6"
                    style={{ fontFamily: 'Inter', color: colors.text }}
                  >
                    {branch.description}
                  </p>
                )}

                {/* Info Items */}
                <div className="space-y-3 mb-6 pb-6 border-b" style={{ borderColor: colors.accent + '40' }}>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-1 flex-shrink-0" style={{ color: colors.accent }} />
                    <span className="text-sm" style={{ fontFamily: 'Inter', color: colors.text }}>
                      {branch.location.address}<br />
                      {branch.location.city}, {branch.location.country}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} style={{ color: colors.accent }} />
                    <a 
                      href={`tel:${branch.location.phone}`}
                      className="text-sm"
                      style={{ fontFamily: 'Inter', color: colors.text }}
                    >
                      {branch.location.phone}
                    </a>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="mb-6">
                  <p
                    className="text-xs tracking-widest uppercase mb-3"
                    style={{ fontFamily: 'Inter', color: colors.accent }}
                  >
                    Featured Items
                  </p>
                  <div className="space-y-2">
                    {branch.menu.slice(0, 3).map((item) => (
                      <p
                        key={item.id}
                        className="text-sm"
                        style={{ fontFamily: 'Inter', color: colors.textMuted }}
                      >
                        {item.name} - €{item.price.toFixed(2)}
                      </p>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={`/branch/${branch.id}`}
                  className="inline-flex items-center gap-2 text-sm transition-all duration-300"
                  style={{ fontFamily: 'Inter', fontWeight: 500, color: colors.primary }}
                >
                  View Details
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
