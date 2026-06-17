import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const location = useLocation();

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
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'Our Story' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/catering', label: 'Catering' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F8F3EA]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <span
                className="font-['Great_Vibes'] text-3xl lg:text-4xl"
                style={{ color: '#556B2F' }}
              >
                Basilico
              </span>
              <span
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: '#6B6B6B', fontFamily: 'Inter' }}
              >
                by Sara
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-sm tracking-wider uppercase transition-colors duration-300"
                  style={{
                    color: location.pathname === link.path ? '#556B2F' : '#1C1C1C',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ backgroundColor: '#556B2F' }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <Link
              to="/reservation"
              className="hidden lg:block px-8 py-3 rounded-full transition-all duration-300 border-2"
              style={{
                borderColor: '#556B2F',
                color: '#556B2F',
                fontFamily: 'Inter',
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#556B2F';
                e.currentTarget.style.color = '#F8F3EA';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#556B2F';
              }}
            >
              Reserve Table
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              style={{ color: '#556B2F' }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
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
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 bottom-0 w-full lg:hidden z-40"
            style={{ backgroundColor: '#F8F3EA' }}
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
                      color: location.pathname === link.path ? '#556B2F' : '#1C1C1C',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              {showMobileCTA && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Link
                    to="/reservation"
                    className="px-12 py-4 rounded-full border-2 text-lg"
                    style={{
                      borderColor: '#556B2F',
                      backgroundColor: '#556B2F',
                      color: '#F8F3EA',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                    }}
                  >
                    Reserve Table
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile CTA */}
      {showMobileCTA && location.pathname !== '/reservation' && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 lg:hidden z-40 p-4"
          style={{ backgroundColor: '#F8F3EA' }}
        >
          <Link
            to="/reservation"
            className="block w-full py-4 rounded-full text-center text-lg shadow-lg"
            style={{
              backgroundColor: '#556B2F',
              color: '#F8F3EA',
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