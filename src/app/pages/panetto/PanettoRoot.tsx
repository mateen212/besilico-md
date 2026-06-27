import { Outlet } from 'react-router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router';
import { useTheme } from '../../contexts/ThemeContext';

export function PanettoRoot() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { path: '/panetto', label: 'Home' },
    { path: '/panetto/menu', label: 'Menu' },
    { path: '/panetto/about', label: 'About' },
    { path: '/panetto/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F1E8' }}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link to="/panetto" className="flex flex-col">
              <span className="font-['Great_Vibes'] text-3xl lg:text-4xl" style={{ color: '#8B7355' }}>
                Panetto
              </span>
              <span className="text-xs tracking-widest uppercase" style={{ color: '#B8966B' }}>
                Artisan Bakery
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-sm tracking-widest uppercase transition-colors"
                  style={{ color: '#5A4A42' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ color: '#8B7355', border: '1px solid #D4A574' }}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Link
                to="/panite"
                className="px-8 py-3 rounded-full transition-all border-2 text-sm tracking-wider"
                style={{
                  borderColor: '#8B7355',
                  color: '#8B7355',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#8B7355';
                  (e.currentTarget as HTMLElement).style.color = '#F5F1E8';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = '#8B7355';
                }}
              >
                Order Now
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ color: '#8B7355' }}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
                style={{ color: '#8B7355' }}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 bottom-0 w-full lg:hidden z-40"
            style={{ backgroundColor: '#F5F1E8' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 pt-24">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-2xl tracking-widest uppercase"
                  style={{ color: '#5A4A42' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Outlet />
    </div>
  );
}
