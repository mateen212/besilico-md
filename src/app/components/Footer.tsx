import React, { useState } from 'react';
import { Link } from 'react-router';
import { Instagram, Facebook, Mail, Phone, MapPin, Globe, Clock, Navigation } from 'lucide-react';

type BranchKey = 'gulberg' | 'lakeCity';

export function Footer() {
  const [activeBranch, setActiveBranch] = useState<BranchKey>('gulberg');

  // Real-world verified data for Basilico by Sara
  const branches = {
    gulberg: {
      name: "Gulberg II (Flagship)",
      address: "57-T, Gulberg II, Lahore, Punjab 54000, Pakistan",
      phone: "+92 329 9922245",
      timing: "12:00 PM – 12:00 AM",
      mapQuery: "Basilico+by+Sara,+57-T,+Gulberg+2,+Lahore",
      mapLink: "https://maps.google.com/maps?q=Basilico+by+Sara,+57-T,+Gulberg+2,+Lahore"
    },
    lakeCity: {
      name: "Lake City (Dine-in & Express)",
      address: "Main Boulevard, Lake City, Lahore, Punjab, Pakistan",
      phone: "+92 329 9922245",
      timing: "12:00 PM – 12:00 AM",
      mapQuery: "Basilico+by+Sara,+Lake+City,+Lahore",
      mapLink: "https://maps.google.com/maps?q=Basilico+by+Sara,+Lake+City,+Lahore"
    }
  };

  const current = branches[activeBranch];

  return (
    <footer className="py-16 lg:py-20 text-sm transition-colors duration-300" style={{ backgroundColor: 'var(--brand-bg-alt)', borderTop: '1px solid var(--brand-border)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Col 1: Brand & Soul */}
          <div className="space-y-6">
            <div>
              <h3 className="font-['Great_Vibes'] text-4xl mb-2 tracking-wide" style={{ color: 'var(--brand-gold)' }}>
                Basilico
              </h3>
              <p className="text-xs tracking-[0.3em] uppercase font-sans" style={{ color: 'var(--brand-text-muted)' }}>
                by Sara
              </p>
            </div>
            <p className="leading-relaxed font-sans" style={{ color: 'var(--brand-text-muted)' }}>
              Authentic Italian fine dining with a warm Mediterranean soul. Home to artisanal pasta, live-wheel Cacio e Pepe, and gourmet kitchen crafts.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/basilicobysara" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-105"
                style={{ borderColor: 'var(--brand-border)', color: 'var(--brand-gold)' }}
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com/basilicobysara" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-105"
                style={{ borderColor: 'var(--brand-border)', color: 'var(--brand-gold)' }}
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://basilicobysara.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Website"
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-105"
                style={{ borderColor: 'var(--brand-border)', color: 'var(--brand-gold)' }}
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4 font-sans">
            <h4 className="text-base font-semibold uppercase tracking-wider" style={{ color: 'var(--brand-gold)' }}>Explore</h4>
            <ul className="space-y-2.5" style={{ color: 'var(--brand-text-muted)' }}>
              <li><Link to="/menu" className="hover:underline transition-all">Dine-In Menu</Link></li>
              <li><Link to="/reservations" className="hover:underline transition-all">Table Reservations</Link></li>
              <li><Link to="/our-story" className="hover:underline transition-all">Our Story</Link></li>
              <li><Link to="/locations" className="hover:underline transition-all">Branch Hours</Link></li>
              <li><a href="https://basilicobysara.com" target="_blank" rel="noreferrer" className="hover:underline transition-all">Online Order (Delivery)</a></li>
            </ul>
          </div>

          {/* Col 3: General Contact */}
          <div className="space-y-4 font-sans" style={{ color: 'var(--brand-text-muted)' }}>
            <h4 className="text-base font-semibold uppercase tracking-wider" style={{ color: 'var(--brand-gold)' }}>Direct Concierge</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <Phone size={16} style={{ color: 'var(--brand-gold)' }} />
                <span>+92 329 9922245</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={16} style={{ color: 'var(--brand-gold)' }} />
                <span>info@basilicobysara.com</span>
              </p>
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--brand-gold)' }} />
                <span>Lahore, Punjab, Pakistan</span>
              </p>
            </div>
          </div>

          {/* Col 4: Operating Hours */}
          <div className="space-y-4 font-sans" style={{ color: 'var(--brand-text-muted)' }}>
            <h4 className="text-base font-semibold uppercase tracking-wider" style={{ color: 'var(--brand-gold)' }}>Hours of Service</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2 font-medium text-white">
                <Clock size={15} style={{ color: 'var(--brand-gold)' }} />
                <span>Monday – Sunday</span>
              </p>
              <p className="pl-6 text-xs">12:00 PM – 12:00 AM (Dine-In)</p>
              <div className="pt-2">
                <span className="inline-block px-2 py-0.5 text-[10px] uppercase tracking-widest rounded border" style={{ borderColor: 'var(--brand-gold)', color: 'var(--brand-gold)' }}>
                  Late Night Delivery
                </span>
                <p className="pl-1 pt-1 text-xs">Available until 4:30 AM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Live Interactive Map Section */}
        <div className="mt-16 pt-12 border-t" style={{ borderColor: 'var(--brand-border)' }}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h4 className="text-xl font-serif tracking-wide" style={{ color: 'var(--brand-gold)' }}>Find Us in Lahore</h4>
              <p className="text-xs font-sans mt-0.5" style={{ color: 'var(--brand-text-muted)' }}>Select a location to update live view</p>
            </div>

            {/* Switcher Pills */}
            <div className="flex p-1 rounded-lg border font-sans text-xs" style={{ backgroundColor: 'var(--brand-bg)', borderColor: 'var(--brand-border)' }}>
              {(Object.keys(branches) as BranchKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveBranch(key)}
                  className={`px-4 py-2 rounded-md font-medium transition-all ${
                    activeBranch === key ? 'shadow-sm' : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: activeBranch === key ? 'var(--brand-border)' : 'transparent',
                    color: activeBranch === key ? 'var(--brand-gold)' : 'var(--brand-text-muted)'
                  }}
                >
                  {branches[key].name.split(' ')[0]} Branch
                </button>
              ))}
            </div>
          </div>

          {/* Map & Card Flex */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 rounded-2xl border" style={{ backgroundColor: 'rgba(0,0,0,0.15)', borderColor: 'var(--brand-border)' }}>
            
            {/* Active Branch Meta */}
            <div className="lg:col-span-1 space-y-4 flex flex-col justify-between p-2 font-sans">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold" style={{ backgroundColor: 'var(--brand-border)', color: 'var(--brand-gold)' }}>
                  Active Location
                </span>
                <h5 className="text-lg font-serif tracking-wide pt-1 text-white">{current.name}</h5>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--brand-text-muted)' }}>{current.address}</p>
                <div className="pt-2 space-y-1 text-xs" style={{ color: 'var(--brand-text-muted)' }}>
                  <p><strong className="text-white font-medium">Dine-in:</strong> {current.timing}</p>
                  <p><strong className="text-white font-medium">Phone:</strong> {current.phone}</p>
                </div>
              </div>

              <a
                href={current.mapLink}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all hover:opacity-90"
                style={{ backgroundColor: 'var(--brand-gold)', color: '#000' }}
              >
                <Navigation size={14} />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Open Google Maps Iframe */}
            <div className="lg:col-span-2 h-64 sm:h-72 rounded-xl overflow-hidden relative border" style={{ borderColor: 'var(--brand-border)' }}>
              <iframe
                title={`Google Map location for Basilico by Sara ${current.name}`}
                src={`https://maps.google.com/maps?q=${current.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs border-t font-sans gap-4" style={{ borderColor: 'var(--brand-border)', color: 'var(--brand-text-muted)' }}>
          <p>© {new Date().getFullYear()} Basilico by Sara. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}