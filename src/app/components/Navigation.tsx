import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowMobileCTA(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/basilico', label: 'Home' },
    { path: '/basilico/menu', label: 'Menu' },
    { path: '/basilico/about', label: 'Our Story' },
    { path: '/basilico/gallery', label: 'Gallery' },
    { path: '/basilico/catering', label: 'Catering' },
  ];

  return (
    <>
      <motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled ? 'backdrop-blur-md shadow-sm' : ''
  }`}
  style={{
    backgroundColor: 'var(--brand-nav-bg)',
  }}
>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link to="/basilico" className="flex flex-col">
              <span className="font-['Great_Vibes'] text-3xl lg:text-4xl" style={{ color: 'var(--brand-olive)' }}>
                Basilico
              </span>
              <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
                by Sara
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-sm tracking-wider uppercase transition-colors duration-300"
                  style={{
                    color: location.pathname === link.path ? 'var(--brand-olive)' : 'var(--brand-text)',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ backgroundColor: 'var(--brand-olive)' }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ color: 'var(--brand-gold)', border: '1px solid var(--brand-border)' }}
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Link
                to="/basilico/reservation"
                className="px-8 py-3 rounded-full transition-all duration-300 border-2 text-sm tracking-wide"
                style={{
                  borderColor: 'var(--brand-olive)',
                  color: 'var(--brand-olive)',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-olive)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--brand-bg)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = 'var(--brand-olive)';
                }}
              >
                Reserve Table
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ color: 'var(--brand-gold)' }}
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2" style={{ color: 'var(--brand-olive)' }}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 bottom-0 w-full lg:hidden z-40"
            style={{ backgroundColor: 'var(--brand-bg)' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 pt-24 pb-12">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-2xl tracking-wider uppercase transition-colors duration-300"
                    style={{
                      color: location.pathname === link.path ? 'var(--brand-olive)' : 'var(--brand-text)',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  to="/basilico/reservation"
                  className="px-12 py-4 rounded-full border-2 text-lg"
                  style={{
                    borderColor: 'var(--brand-olive)',
                    backgroundColor: 'var(--brand-olive)',
                    color: 'var(--brand-bg)',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                  }}
                >
                  Reserve Table
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showMobileCTA && !location.pathname.includes('/reservation') && !isMobileMenuOpen && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 lg:hidden z-40 p-4"
          style={{ backgroundColor: 'var(--brand-bg)' }}
        >
          <Link
            to="/basilico/reservation"
            className="block w-full py-4 rounded-full text-center text-lg shadow-lg"
            style={{
              backgroundColor: 'var(--brand-olive)',
              color: 'var(--brand-bg)',
              fontFamily: 'Inter',
              fontWeight: 500,
            }}
          >
            Reserve Table
          </Link>
        </motion.div>
      )}
    </>
  );
}
