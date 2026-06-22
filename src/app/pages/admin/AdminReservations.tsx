import { useState } from 'react';
import { Calendar, Users, Clock, Phone, Mail, ChevronLeft, ChevronRight, Search, Filter } from 'lucide-react';

type Status = 'Pending' | 'Confirmed' | 'Arrived' | 'Completed' | 'Cancelled' | 'No-show';

const reservations = [
  { id: 1, name: 'Alessandro Romano', email: 'a.romano@email.it', phone: '+39 333 111 2222', date: '2026-06-19', time: '7:30 PM', guests: 4, status: 'Confirmed' as Status, request: 'Anniversary dinner, flowers please', deposit: 0 },
  { id: 2, name: 'Elena Marchetti', email: 'elena.m@email.it', phone: '+39 345 222 3333', date: '2026-06-19', time: '8:00 PM', guests: 2, status: 'Pending' as Status, request: '', deposit: 0 },
  { id: 3, name: 'Marco Bianchi', email: 'marco.b@email.it', phone: '+39 347 333 4444', date: '2026-06-19', time: '8:30 PM', guests: 6, status: 'Confirmed' as Status, request: 'Vegetarian menu for 2 guests', deposit: 150 },
  { id: 4, name: 'Sophia Conti', email: 'sophia.c@email.it', phone: '+39 350 444 5555', date: '2026-06-19', time: '6:00 PM', guests: 3, status: 'Arrived' as Status, request: 'Gluten-free options', deposit: 0 },
  { id: 5, name: 'Luca Ferrari', email: 'luca.f@email.it', phone: '+39 360 555 6666', date: '2026-06-20', time: '7:00 PM', guests: 2, status: 'Confirmed' as Status, request: '', deposit: 0 },
  { id: 6, name: 'Giulia Ricci', email: 'giulia.r@email.it', phone: '+39 370 666 7777', date: '2026-06-20', time: '7:30 PM', guests: 8, status: 'Confirmed' as Status, request: 'Birthday celebration - surprise cake', deposit: 200 },
  { id: 7, name: 'Paolo Russo', email: 'p.russo@email.it', phone: '+39 380 777 8888', date: '2026-06-18', time: '8:00 PM', guests: 4, status: 'Completed' as Status, request: '', deposit: 0 },
  { id: 8, name: 'Federica Costa', email: 'f.costa@email.it', phone: '+39 390 888 9999', date: '2026-06-18', time: '6:30 PM', guests: 2, status: 'No-show' as Status, request: '', deposit: 0 },
];

const statusColors: Record<Status, { bg: string; text: string }> = {
  Confirmed: { bg: 'rgba(92,122,56,0.2)', text: '#5C7A38' },
  Pending: { bg: 'rgba(201,168,106,0.2)', text: '#C9A86A' },
  Arrived: { bg: 'rgba(201,168,106,0.3)', text: '#E0BE84' },
  Completed: { bg: 'rgba(184,177,168,0.15)', text: '#B8B1A8' },
  Cancelled: { bg: 'rgba(155,45,62,0.15)', text: '#9B2D3E' },
  'No-show': { bg: 'rgba(155,45,62,0.15)', text: '#9B2D3E' },
};

const statusList: Status[] = ['Pending', 'Confirmed', 'Arrived', 'Completed', 'Cancelled', 'No-show'];

export function AdminReservations() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<Status | 'All'>('All');
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = reservations.filter(r =>
    (filterStatus === 'All' || r.status === filterStatus) &&
    (r.name.toLowerCase().includes(search.toLowerCase()) || r.email.toLowerCase().includes(search.toLowerCase()))
  );

  const selectedRes = reservations.find(r => r.id === selected);

  const todayCount = reservations.filter(r => r.date === '2026-06-19').length;
  const pendingCount = reservations.filter(r => r.status === 'Pending').length;
  const totalGuests = reservations.filter(r => r.date === '2026-06-19').reduce((s, r) => s + r.guests, 0);

  return (
    <div className="p-6 space-y-6" style={{ backgroundColor: '#12110F', minHeight: '100%' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1" style={{ color: '#F3ECDD', fontFamily: 'Playfair Display' }}>Reservations</h1>
          <p className="text-sm" style={{ color: '#B8B1A8' }}>Managing {reservations.length} reservations</p>
        </div>
        <button className="px-4 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#C9A86A', color: '#12110F' }}>
          + New Reservation
        </button>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Today's Reservations", value: todayCount, icon: Calendar, color: '#C9A86A' },
          { label: 'Pending Confirmation', value: pendingCount, icon: Clock, color: '#9B2D3E' },
          { label: "Tonight's Guests", value: totalGuests, icon: Users, color: '#5C7A38' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="rounded-2xl p-4 flex items-center gap-4" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201,168,106,0.10)' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}18` }}>
              <Icon size={18} style={{ color }} />
            </div>
            <div>
              <div className="text-xl font-semibold" style={{ color: '#F3ECDD', fontFamily: 'Playfair Display' }}>{value}</div>
              <div className="text-xs" style={{ color: '#B8B1A8' }}>{label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* List */}
        <div className="lg:col-span-2 space-y-4">
          {/* Filters */}
          <div className="rounded-2xl p-4 space-y-3" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201,168,106,0.10)' }}>
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#B8B1A8' }} />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by name or email..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm focus:outline-none"
                style={{ backgroundColor: '#252320', color: '#F3ECDD', border: '1px solid rgba(201,168,106,0.12)' }}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {(['All', ...statusList] as const).map(s => (
                <button
                  key={s}
                  onClick={() => setFilterStatus(s as Status | 'All')}
                  className="px-3 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all"
                  style={{
                    backgroundColor: filterStatus === s ? '#C9A86A' : 'rgba(201,168,106,0.08)',
                    color: filterStatus === s ? '#12110F' : '#B8B1A8',
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {filtered.map(r => (
              <button
                key={r.id}
                onClick={() => setSelected(r.id === selected ? null : r.id)}
                className="w-full text-left rounded-2xl p-4 transition-all"
                style={{
                  backgroundColor: selected === r.id ? 'rgba(201,168,106,0.08)' : '#1B1917',
                  border: selected === r.id ? '1px solid rgba(201,168,106,0.3)' : '1px solid rgba(201,168,106,0.10)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-semibold" style={{ backgroundColor: 'rgba(201,168,106,0.15)', color: '#C9A86A' }}>
                    {r.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium" style={{ color: '#F3ECDD' }}>{r.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: statusColors[r.status].bg, color: statusColors[r.status].text }}>
                        {r.status}
                      </span>
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: '#B8B1A8' }}>{r.date} · {r.time} · {r.guests} guests</div>
                  </div>
                  {r.deposit > 0 && (
                    <span className="text-xs px-2 py-1 rounded-lg" style={{ backgroundColor: 'rgba(92,122,56,0.15)', color: '#5C7A38' }}>€{r.deposit} deposit</span>
                  )}
                </div>
                {r.request && (
                  <p className="text-xs mt-2 ml-13" style={{ color: '#B8B1A8', marginLeft: '52px' }}>"{r.request}"</p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        <div>
          {selectedRes ? (
            <div className="rounded-2xl p-5 sticky top-6" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201,168,106,0.10)' }}>
              <div className="text-center mb-5">
                <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-semibold" style={{ backgroundColor: 'rgba(201,168,106,0.15)', color: '#C9A86A' }}>
                  {selectedRes.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#F3ECDD', fontFamily: 'Playfair Display' }}>{selectedRes.name}</h3>
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: statusColors[selectedRes.status].bg, color: statusColors[selectedRes.status].text }}>
                  {selectedRes.status}
                </span>
              </div>
              <div className="space-y-3 mb-5">
                {[
                  { icon: Calendar, label: 'Date', value: selectedRes.date },
                  { icon: Clock, label: 'Time', value: selectedRes.time },
                  { icon: Users, label: 'Guests', value: `${selectedRes.guests} guests` },
                  { icon: Mail, label: 'Email', value: selectedRes.email },
                  { icon: Phone, label: 'Phone', value: selectedRes.phone },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 text-sm">
                    <Icon size={15} style={{ color: '#C9A86A' }} />
                    <span style={{ color: '#B8B1A8' }}>{label}:</span>
                    <span style={{ color: '#F3ECDD' }}>{value}</span>
                  </div>
                ))}
              </div>
              {selectedRes.request && (
                <div className="p-3 rounded-xl mb-5" style={{ backgroundColor: 'rgba(201,168,106,0.06)', border: '1px solid rgba(201,168,106,0.12)' }}>
                  <p className="text-xs mb-1" style={{ color: '#B8B1A8' }}>Special Request</p>
                  <p className="text-sm" style={{ color: '#F3ECDD' }}>{selectedRes.request}</p>
                </div>
              )}
              <div className="space-y-2">
                <button className="w-full py-2.5 rounded-xl text-sm font-medium" style={{ backgroundColor: '#5C7A38', color: '#F3ECDD' }}>Confirm</button>
                <button className="w-full py-2.5 rounded-xl text-sm" style={{ backgroundColor: 'rgba(201,168,106,0.1)', color: '#C9A86A' }}>Send Reminder</button>
                <button className="w-full py-2.5 rounded-xl text-sm" style={{ backgroundColor: 'rgba(155,45,62,0.1)', color: '#9B2D3E' }}>Cancel</button>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201,168,106,0.10)' }}>
              <Calendar size={32} className="mx-auto mb-3" style={{ color: 'rgba(201,168,106,0.3)' }} />
              <p className="text-sm" style={{ color: '#B8B1A8' }}>Select a reservation to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
