import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Sparkles, UtensilsCrossed } from 'lucide-react';

export function Landing() {
  const brands = [
    {
      name: 'Basilico',
      tagline: 'Authentic Italian Cuisine',
      description: 'Experience the heart of Italy with our signature Italian dishes, crafted with passion and tradition.',
      href: '/basilico',
      color: '#8B7355',
      accent: '#D4A574',
      icon: UtensilsCrossed,
    },
    {
      name: 'Panetto',
      tagline: 'Premium Artisan Bakery',
      description: 'Discover European-crafted pastries and artisan breads, baked fresh daily with the finest ingredients.',
      href: '/panetto',
      color: '#8B7355',
      accent: '#D4A574',
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Sara Group</h1>
          <p className="ml-3 text-sm text-gray-600 dark:text-gray-400">Multi-Brand Platform</p>
        </div>
      </motion.div>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Welcome to Sara Group
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Discover our collection of premium brands, each offering a unique culinary experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {brands.map((brand, index) => {
              const Icon = brand.icon;
              return (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <Link to={brand.href}>
                    <div className="group bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer">
                      {/* Brand Header */}
                      <div
                        className="h-32 flex items-center justify-center group-hover:opacity-90 transition-opacity"
                        style={{ background: `linear-gradient(135deg, ${brand.color} 0%, ${brand.accent} 100%)` }}
                      >
                        <Icon size={56} className="text-white opacity-80" />
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          {brand.name}
                        </h3>
                        <p className="text-sm uppercase tracking-widest mb-4" style={{ color: brand.accent }}>
                          {brand.tagline}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                          {brand.description}
                        </p>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-lg font-semibold" style={{ color: brand.color }}>
                          Explore {brand.name}
                          <ArrowRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Admin Link */}
      <section className="py-20 px-6 lg:px-12 bg-gray-100 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Multi-Brand Management
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Manage all brands, branches, employees, and customer data from our centralized SaaS platform
            </p>
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
            >
              Enter Admin Dashboard
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-slate-950 text-gray-400 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="font-semibold text-white mb-2">Sara Group</p>
            <p className="text-sm mb-4">Premium Multi-Brand Culinary Platform</p>
            <p className="text-xs">© 2026 Sara Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
