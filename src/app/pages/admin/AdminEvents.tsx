import { useState } from 'react';
import { Plus, Calendar, Users, MapPin, Euro, ChevronRight, Star } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

type EventStatus = 'Inquiry' | 'Quoted' | 'Confirmed' | 'Completed' | 'Cancelled';

const events = [
  { id: 1, name: 'Rossi Wedding Reception', type: 'Wedding', date: '2026-07-12', guests: 120, location: 'Basilico Private Hall', budget: 15000, status: 'Confirmed' as EventStatus, contact: 'Marco Rossi', phone: '+39 333 111 2222' },
  { id: 2, name: 'Fiat Corporate Dinner', type: 'Corporate', date: '2026-07-18', guests: 40, location: 'In-house', budget: 4800, status: 'Quoted' as EventStatus, contact: 'Anna Ferrari', phone: '+39 345 222 3333' },
  { id: 3, name: "Giulia's 50th Birthday", type: 'Birthday', date: '2026-06-28', guests: 30, location: 'In-house', budget: 3200, status: 'Confirmed' as EventStatus, contact: 'Luca Marchetti', phone: '+39 347 333 4444' },
  { id: 4, name: 'Private Wine Tasting', type: 'Private Dining', date: '2026-06-25', guests: 12, location: 'Wine Cellar', budget: 1800, status: 'Confirmed' as EventStatus, contact: 'Elena Bianchi', phone: '+39 350 444 5555' },
  { id: 5, name: 'Conti Anniversary Dinner', type: 'Anniversary', date: '2026-08-01', guests: 2, location: 'Chef\'s Table', budget: 400, status: 'Inquiry' as EventStatus, contact: 'Paolo Conti', phone: '+39 360 555 6666' },
  { id: 6, name: 'Bank Holiday Gala', type: 'Corporate', date: '2026-05-25', guests: 80, location: 'Terrace', budget: 9600, status: 'Completed' as EventStatus, contact: 'Sofia Romano', phone: '+39 370 666 7777' },
];

const statusColors: Record<EventStatus, { bg: string; text: string }> = {
  Inquiry: { bg: 'rgba(201,168,106,0.15)', text: '#C9A86A' },
  Quoted: { bg: 'rgba(92,122,56,0.15)', text: '#5C7A38' },
  Confirmed: { bg: 'rgba(92,122,56,0.25)', text: '#5C7A38' },
  Completed: { bg: 'rgba(184,177,168,0.15)', text: '#B8B1A8' },
  Cancelled: { bg: 'rgba(155,45,62,0.15)', text: '#9B2D3E' },
};

const packages = [
  { name: 'Antipasto Experience', price: '€45/person', min: '20 guests', icon: '🥂' },
  { name: 'Classic Italian Dinner', price: '€85/person', min: '15 guests', icon: '🍝' },
  { name: 'Luxury Wedding Menu', price: '€125/person', min: '50 guests', icon: '💍' },
  { name: 'Chef\'s Table Experience', price: '€200/person', min: '2 guests', icon: '👨‍🍳' },
];

export function AdminEvents() {
  const { isDark } = useTheme();
  const bgColor = isDark ? '#12110F' : '#F8F6F3';
  const cardBg = isDark ? '#1B1917' : '#FFFFFF';
  const textColor = isDark ? '#F3ECDD' : '#2D2D2D';
  const mutedText = isDark ? '#B8B1A8' : '#999999';
  const borderColor = isDark ? 'rgba(201,168,106,0.10)' : 'rgba(201,168,106,0.15)';
  const inputBg = isDark ? '#252320' : '#F5F5F5';
  const hoverBg = isDark ? 'rgba(201,168,106,0.08)' : 'rgba(201,168,106,0.1)';
  
  const [selected, setSelected] = useState<number | null>(null);
  const selectedEvent = events.find(e => e.id === selected);

  return (
    <div className="p-6 space-y-6" style={{ backgroundColor: bgColor, minHeight: '100%', transition: 'background-color 0.3s' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1" style={{ color: textColor, fontFamily: 'Playfair Display' }}>Events</h1>
          <p className="text-sm" style={{ color: mutedText }}>{events.filter(e => e.status !== 'Completed').length} active events</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#C9A86A', color: '#12110F' }}>
          <Plus size={15} /> New Event
        </button>
      </div>

      {/* Event packages */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {packages.map(pkg => (
          <div key={pkg.name} className="rounded-2xl p-4" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
            <div className="text-2xl mb-2">{pkg.icon}</div>
            <div className="text-sm font-medium mb-1" style={{ color: textColor }}>{pkg.name}</div>
            <div className="text-sm" style={{ color: '#C9A86A' }}>{pkg.price}</div>
            <div className="text-xs mt-1" style={{ color: mutedText }}>Min. {pkg.min}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Events list */}
        <div className="lg:col-span-2 space-y-3">
          {events.map(event => (
            <button
              key={event.id}
              onClick={() => setSelected(event.id === selected ? null : event.id)}
              className="w-full text-left rounded-2xl p-5 transition-all"
              style={{
                backgroundColor: selected === event.id ? 'rgba(201,168,106,0.08)' : '#1B1917',
                border: selected === event.id ? '1px solid rgba(201,168,106,0.3)' : '1px solid rgba(201,168,106,0.10)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex-shrink-0 flex flex-col items-center justify-center" style={{ backgroundColor: 'rgba(201,168,106,0.12)' }}>
                  <span className="text-xs" style={{ color: '#C9A86A' }}>{event.date.slice(5, 7)}/{event.date.slice(8)}</span>
                  <span className="text-xs" style={{ color: mutedText }}>{event.date.slice(0, 4)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium" style={{ color: textColor }}>{event.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: statusColors[event.status].bg, color: statusColors[event.status].text }}>
                      {event.status}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(201,168,106,0.08)', color: mutedText }}>{event.type}</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 flex-wrap">
                    <span className="flex items-center gap-1 text-xs" style={{ color: mutedText }}><Users size={12} />{event.guests} guests</span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: mutedText }}><MapPin size={12} />{event.location}</span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: '#5C7A38' }}><Euro size={12} />€{event.budget.toLocaleString()}</span>
                  </div>
                </div>
                <ChevronRight size={16} style={{ color: mutedText }} />
              </div>
            </button>
          ))}
        </div>

        {/* Detail */}
        <div>
          {selectedEvent ? (
            <div className="rounded-2xl p-5 sticky top-6" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: textColor, fontFamily: 'Playfair Display' }}>{selectedEvent.name}</h3>
              <div className="space-y-3 mb-5">
                {[
                  { icon: Star, label: 'Type', value: selectedEvent.type },
                  { icon: Calendar, label: 'Date', value: selectedEvent.date },
                  { icon: Users, label: 'Guests', value: `${selectedEvent.guests}` },
                  { icon: MapPin, label: 'Location', value: selectedEvent.location },
                  { icon: Euro, label: 'Budget', value: `€${selectedEvent.budget.toLocaleString()}` },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 text-sm">
                    <Icon size={15} style={{ color: '#C9A86A' }} />
                    <span style={{ color: mutedText }}>{label}:</span>
                    <span style={{ color: textColor }}>{value}</span>
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-xl mb-5" style={{ backgroundColor: 'rgba(201,168,106,0.06)', border: '1px solid rgba(201,168,106,0.12)' }}>
                <p className="text-xs mb-1" style={{ color: mutedText }}>Contact</p>
                <p className="text-sm font-medium" style={{ color: textColor }}>{selectedEvent.contact}</p>
                <p className="text-xs" style={{ color: mutedText }}>{selectedEvent.phone}</p>
              </div>
              <div className="space-y-2">
                <button className="w-full py-2.5 rounded-xl text-sm font-medium" style={{ backgroundColor: '#5C7A38', color: textColor }}>Confirm Event</button>
                <button className="w-full py-2.5 rounded-xl text-sm" style={{ backgroundColor: 'rgba(201,168,106,0.1)', color: '#C9A86A' }}>Send Quote</button>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
              <Star size={32} className="mx-auto mb-3" style={{ color: 'rgba(201,168,106,0.3)' }} />
              <p className="text-sm" style={{ color: mutedText }}>Select an event to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
