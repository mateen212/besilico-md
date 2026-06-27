import React, { useState } from 'react';
import { Link } from 'react-router';
import { Instagram, Facebook, Mail, Phone, MapPin, Globe, Clock, Navigation } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

type BranchKey = 'main';

export function PanettoFooter() {
  const { isDark } = useTheme();
  const [activeBranch, setActiveBranch] = useState<BranchKey>('main');

  const branches = {
    main: {
      name: "Panetto Bakery",
      address: "Food Street, Old Lahore, Lahore, Punjab 54000, Pakistan",
      phone: "+92 300 1234567",
      timing: "8:00 AM – 10:00 PM",
      mapQuery: "Panetto+Bakery,+Food+Street,+Lahore",
      mapLink: "https://maps.google.com/maps?q=Panetto+Bakery,+Food+Street,+Lahore"
    }
  };

  const current = branches[activeBranch];
  const bgColor = isDark ? '#1A1512' : '#F5F1E8';
  const borderColor = isDark ? 'rgba(139, 115, 85, 0.2)' : 'rgba(212, 165, 116, 0.1)';
  const textColor = isDark ? '#D4A574' : '#8B7355';
  const mutedText = isDark ? '#B8966B' : '#A0865F';

  return (
    <footer className="py-16 lg:py-20 text-sm transition-colors duration-300" style={{ backgroundColor: bgColor, borderTop: `1px solid ${borderColor}` }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Col 1: Brand & Soul */}
          <div className="space-y-6">
            <div>
              <h3 className="font-['Great_Vibes'] text-4xl mb-2 tracking-wide" style={{ color: textColor }}>
                Panetto
              </h3>
              <p className="text-xs tracking-[0.3em] uppercase font-sans" style={{ color: mutedText }}>
                Artisan Bakery
              </p>
            </div>
            <p className="leading-relaxed font-sans text-sm" style={{ color: mutedText }}>
              Premium European-crafted pastries and artisan breads. Baked fresh daily with the finest ingredients using time-honored techniques.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/panettobakery" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-105"
                style={{ borderColor: textColor, color: textColor }}
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com/panettobakery" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-105"
                style={{ borderColor: textColor, color: textColor }}
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://panettobakery.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Website"
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-105"
                style={{ borderColor: textColor, color: textColor }}
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4 font-sans">
            <h4 className="text-base font-semibold uppercase tracking-wider" style={{ color: textColor }}>Explore</h4>
            <ul className="space-y-2.5" style={{ color: mutedText }}>
              <li><Link to="/panetto/menu" className="hover:underline transition-all">Our Menu</Link></li>
              <li><Link to="/panetto/about" className="hover:underline transition-all">Our Story</Link></li>
              <li><Link to="/panetto/contact" className="hover:underline transition-all">Contact Us</Link></li>
              <li><a href="https://panettobakery.com" target="_blank" rel="noreferrer" className="hover:underline transition-all">Online Order</a></li>
            </ul>
          </div>

          {/* Col 3: General Contact */}
          <div className="space-y-4 font-sans" style={{ color: mutedText }}>
            <h4 className="text-base font-semibold uppercase tracking-wider" style={{ color: textColor }}>Contact</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <Phone size={16} style={{ color: textColor }} />
                <span>+92 300 1234567</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={16} style={{ color: textColor }} />
                <span>info@panettobakery.com</span>
              </p>
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" style={{ color: textColor }} />
                <span>Lahore, Punjab, Pakistan</span>
              </p>
            </div>
          </div>

          {/* Col 4: Operating Hours */}
          <div className="space-y-4 font-sans" style={{ color: mutedText }}>
            <h4 className="text-base font-semibold uppercase tracking-wider" style={{ color: textColor }}>Hours</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2 font-medium" style={{ color: isDark ? '#F5F1E8' : '#2D2D2D' }}>
                <Clock size={15} style={{ color: textColor }} />
                <span>Monday – Sunday</span>
              </p>
              <p className="pl-6 text-xs">8:00 AM – 10:00 PM</p>
              <div className="pt-2">
                <span className="inline-block px-2 py-0.5 text-[10px] uppercase tracking-widest rounded border" style={{ borderColor: textColor, color: textColor }}>
                  Fresh Daily Baking
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Live Interactive Map Section */}
        <div className="mt-16 pt-12 border-t" style={{ borderColor }}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h4 className="text-xl font-serif tracking-wide" style={{ color: textColor }}>Find Us in Lahore</h4>
              <p className="text-xs font-sans mt-0.5" style={{ color: mutedText }}>Visit our bakery for fresh artisan treats</p>
            </div>
          </div>

          {/* Map & Card Flex */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 rounded-2xl border" style={{ 
            backgroundColor: isDark ? 'rgba(139, 115, 85, 0.1)' : 'rgba(212, 165, 116, 0.05)',
            borderColor 
          }}>
            
            {/* Active Branch Meta */}
            <div className="lg:col-span-1 space-y-4 flex flex-col justify-between p-2 font-sans">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold" style={{ 
                  backgroundColor: borderColor, 
                  color: textColor 
                }}>
                  Location
                </span>
                <h5 className="text-lg font-serif tracking-wide pt-1" style={{ color: isDark ? '#F5F1E8' : '#2D2D2D' }}>
                  {current.name}
                </h5>
                <p className="text-xs leading-relaxed" style={{ color: mutedText }}>
                  {current.address}
                </p>
                <div className="pt-2 space-y-1 text-xs" style={{ color: mutedText }}>
                  <p><strong className="font-medium" style={{ color: isDark ? '#F5F1E8' : '#2D2D2D' }}>Hours:</strong> {current.timing}</p>
                  <p><strong className="font-medium" style={{ color: isDark ? '#F5F1E8' : '#2D2D2D' }}>Phone:</strong> {current.phone}</p>
                </div>
              </div>

              <a
                href={current.mapLink}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all hover:opacity-90"
                style={{ backgroundColor: textColor, color: bgColor }}
              >
                <Navigation size={14} />
                <span>Open in Maps</span>
              </a>
            </div>

            {/* Open Google Maps Iframe */}
            <div className="lg:col-span-2 h-64 sm:h-72 rounded-xl overflow-hidden relative border" style={{ borderColor }}>
              <iframe
                title="Google Map location for Panetto Bakery"
                src={`https://maps.google.com/maps?q=${current.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs border-t font-sans gap-4" style={{ borderColor, color: mutedText }}>
          <p>© {new Date().getFullYear()} Panetto Bakery. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/panetto" className="hover:underline">Home</Link>
            <Link to="/panetto/about" className="hover:underline">About</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
