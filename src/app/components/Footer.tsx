import { Link } from 'react-router';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 lg:py-20" style={{ backgroundColor: 'var(--brand-bg-alt)', borderTop: '1px solid var(--brand-border)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-['Great_Vibes'] text-4xl mb-2" style={{ color: 'var(--brand-gold)' }}>
                Basilico
              </h3>
              <p className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
                by Sara
              </p>
            </div>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
              Authentic Italian fine dining with a warm Mediterranean soul.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    border: '1px solid var(--brand-gold)',
                    color: 'var(--brand-gold)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-gold)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--brand-bg)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = 'var(--brand-gold)';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6" style={{ fontFamily: 'Inter', fontWeight: 500, color: 'var(--brand-gold)' }}>
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
                    className="text-sm transition-colors duration-300"
                    style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--brand-text)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--brand-text-muted)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6" style={{ fontFamily: 'Inter', fontWeight: 500, color: 'var(--brand-gold)' }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" style={{ color: 'var(--brand-gold)' }} />
                <span className="text-sm" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
                  123 Via Roma, Milan<br />Italy 20121
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} style={{ color: 'var(--brand-gold)' }} />
                <span className="text-sm" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
                  +39 02 1234 5678
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} style={{ color: 'var(--brand-gold)' }} />
                <span className="text-sm" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
                  info@basilicobysara.it
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6" style={{ fontFamily: 'Inter', fontWeight: 500, color: 'var(--brand-gold)' }}>
              Hours
            </h4>
            <ul className="space-y-3 text-sm" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
              <li>
                <span style={{ color: 'var(--brand-gold)' }}>Lunch</span><br />
                Tuesday – Sunday<br />
                12:00 PM – 3:00 PM
              </li>
              <li className="mt-4">
                <span style={{ color: 'var(--brand-gold)' }}>Dinner</span><br />
                Tuesday – Sunday<br />
                6:00 PM – 11:00 PM
              </li>
              <li className="mt-4 opacity-60">Closed Mondays</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8" style={{ borderTop: '1px solid var(--brand-border)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm" style={{ color: 'var(--brand-text-muted)', fontFamily: 'Inter' }}>
            <p>© 2026 Basilico by Sara. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100 transition-opacity opacity-60">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity opacity-60">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
