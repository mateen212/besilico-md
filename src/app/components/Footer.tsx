import { Link } from 'react-router';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-[#F8F3EA] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3
                className="font-['Great_Vibes'] text-4xl mb-2"
                style={{ color: '#C8A96A' }}
              >
                Basilico
              </h3>
              <p
                className="text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: 'Inter', color: '#F8F3EA' }}
              >
                by Sara
              </p>
            </div>
            <p
              className="text-sm leading-relaxed opacity-80"
              style={{ fontFamily: 'Inter' }}
            >
              Authentic Italian fine dining with a warm Mediterranean soul.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#C8A96A] flex items-center justify-center transition-all duration-300 hover:bg-[#C8A96A] hover:text-[#1C1C1C]"
                style={{ color: '#C8A96A' }}
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#C8A96A] flex items-center justify-center transition-all duration-300 hover:bg-[#C8A96A] hover:text-[#1C1C1C]"
                style={{ color: '#C8A96A' }}
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: 'Inter', fontWeight: 500, color: '#C8A96A' }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/menu', label: 'Menu' },
                { path: '/about', label: 'Our Story' },
                { path: '/gallery', label: 'Gallery' },
                { path: '/catering', label: 'Catering' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: 'Inter', fontWeight: 500, color: '#C8A96A' }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" style={{ color: '#C8A96A' }} />
                <span className="text-sm opacity-80" style={{ fontFamily: 'Inter' }}>
                  123 Via Roma, Milan<br />Italy 20121
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} style={{ color: '#C8A96A' }} />
                <span className="text-sm opacity-80" style={{ fontFamily: 'Inter' }}>
                  +39 02 1234 5678
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} style={{ color: '#C8A96A' }} />
                <span className="text-sm opacity-80" style={{ fontFamily: 'Inter' }}>
                  info@basilicobysara.it
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4
              className="text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: 'Inter', fontWeight: 500, color: '#C8A96A' }}
            >
              Hours
            </h4>
            <ul className="space-y-3 text-sm opacity-80" style={{ fontFamily: 'Inter' }}>
              <li>
                <span className="opacity-100" style={{ color: '#C8A96A' }}>Lunch</span><br />
                Tuesday - Sunday<br />
                12:00 PM - 3:00 PM
              </li>
              <li className="mt-4">
                <span className="opacity-100" style={{ color: '#C8A96A' }}>Dinner</span><br />
                Tuesday - Sunday<br />
                6:00 PM - 11:00 PM
              </li>
              <li className="mt-4 opacity-60">
                Closed Mondays
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#C8A96A]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
            <p style={{ fontFamily: 'Inter' }}>
              © 2026 Basilico by Sara. All rights reserved.
            </p>
            <div className="flex gap-6" style={{ fontFamily: 'Inter' }}>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
