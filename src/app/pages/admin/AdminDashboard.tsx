import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Calendar, ShoppingBag, Users, Euro, Star, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const revenueData = [
  { month: 'Jan', revenue: 28400, covers: 312 },
  { month: 'Feb', revenue: 31200, covers: 344 },
  { month: 'Mar', revenue: 38700, covers: 418 },
  { month: 'Apr', revenue: 42100, covers: 462 },
  { month: 'May', revenue: 45800, covers: 498 },
  { month: 'Jun', revenue: 52300, covers: 571 },
  { month: 'Jul', revenue: 58900, covers: 632 },
  { month: 'Aug', revenue: 61200, covers: 668 },
  { month: 'Sep', revenue: 54600, covers: 591 },
  { month: 'Oct', revenue: 48200, covers: 524 },
  { month: 'Nov', revenue: 43800, covers: 476 },
  { month: 'Dec', revenue: 67400, covers: 734 },
];

const popularDishes = [
  { name: 'Tagliatelle al Tartufo', orders: 284 },
  { name: 'Risotto ai Porcini', orders: 241 },
  { name: 'Tiramisù della Nonna', orders: 198 },
  { name: 'Carbonara Tradizionale', orders: 176 },
  { name: 'Osso Buco', orders: 142 },
];

const categoryRevenue = [
  { name: 'Pasta', value: 38, color: '#C9A86A' },
  { name: 'Secondi', value: 27, color: '#5C7A38' },
  { name: 'Vini', value: 20, color: '#9B2D3E' },
  { name: 'Antipasti', value: 10, color: '#B8B1A8' },
  { name: 'Dolci', value: 5, color: '#E0BE84' },
];

const recentReservations = [
  { name: 'Alessandro Romano', time: '7:30 PM', guests: 4, status: 'Confirmed', date: 'Today' },
  { name: 'Elena Marchetti', time: '8:00 PM', guests: 2, status: 'Pending', date: 'Today' },
  { name: 'Marco Bianchi', time: '8:30 PM', guests: 6, status: 'Confirmed', date: 'Today' },
  { name: 'Sophia Conti', time: '6:00 PM', guests: 3, status: 'Arrived', date: 'Today' },
  { name: 'Luca Ferrari', time: '7:00 PM', guests: 2, status: 'Confirmed', date: 'Tomorrow' },
];

const statusColors: Record<string, string> = {
  Confirmed: '#5C7A38',
  Pending: '#C9A86A',
  Arrived: '#9B2D3E',
  Completed: '#B8B1A8',
};

const stats = [
  { label: "Today's Reservations", value: '24', change: '+12%', up: true, icon: Calendar, color: '#C9A86A' },
  { label: "Today's Revenue", value: '€3,840', change: '+8%', up: true, icon: Euro, color: '#5C7A38' },
  { label: 'Active Products', value: '48', change: '+2', up: true, icon: ShoppingBag, color: '#9B2D3E' },
  { label: 'Total Guests (Month)', value: '1,284', change: '-3%', up: false, icon: Users, color: '#E0BE84' },
  { label: 'Avg. Rating', value: '4.9', change: '+0.1', up: true, icon: Star, color: '#C9A86A' },
  { label: 'Pending Events', value: '7', change: '+3', up: true, icon: Clock, color: '#5C7A38' },
];

function StatCard({ stat }: { stat: typeof stats[0] }) {
  return (
    <div className="rounded-2xl p-6" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201, 168, 106, 0.10)' }}>
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${stat.color}18` }}>
          <stat.icon size={20} style={{ color: stat.color }} />
        </div>
        <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${stat.up ? 'bg-green-950/40' : 'bg-red-950/40'}`} style={{ color: stat.up ? '#5C7A38' : '#9B2D3E' }}>
          {stat.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {stat.change}
        </div>
      </div>
      <div className="text-2xl font-semibold mb-1" style={{ color: '#F3ECDD', fontFamily: 'Playfair Display' }}>{stat.value}</div>
      <div className="text-xs" style={{ color: '#B8B1A8' }}>{stat.label}</div>
    </div>
  );
}

const tooltipStyle = {
  backgroundColor: '#1B1917',
  border: '1px solid rgba(201, 168, 106, 0.2)',
  borderRadius: 12,
  color: '#F3ECDD',
  fontFamily: 'Inter',
  fontSize: 12,
};

export function AdminDashboard() {
  const { isDark } = useTheme();
  const bgColor = isDark ? '#12110F' : '#F8F6F3';
  const cardBg = isDark ? '#1B1917' : '#FFFFFF';
  const textColor = isDark ? '#F3ECDD' : '#2D2D2D';
  const mutedText = isDark ? '#B8B1A8' : '#999999';
  const borderColor = isDark ? 'rgba(201,168,106,0.10)' : 'rgba(201,168,106,0.15)';
  
  return (
    <div className="p-6 space-y-8 transition-colors" style={{ backgroundColor: bgColor, minHeight: '100%' }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1" style={{ color: '#F3ECDD', fontFamily: 'Playfair Display' }}>Buongiorno, Sara</h1>
          <p className="text-sm" style={{ color: '#B8B1A8' }}>Thursday, 19 June 2026 — Dinner service starts in 3 hours</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs mb-1" style={{ color: '#B8B1A8' }}>Tonight's occupancy</div>
            <div className="text-lg font-semibold" style={{ color: '#C9A86A', fontFamily: 'Playfair Display' }}>86%</div>
          </div>
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'conic-gradient(#C9A86A 86%, rgba(201,168,106,0.15) 0)' }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium" style={{ backgroundColor: '#161513', color: '#C9A86A' }}>86%</div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((s) => <StatCard key={s.label} stat={s} />)}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue */}
        <div className="lg:col-span-2 rounded-2xl p-6" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201, 168, 106, 0.10)' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold" style={{ color: '#F3ECDD', fontFamily: 'Playfair Display' }}>Revenue Overview</h2>
              <p className="text-xs mt-1" style={{ color: '#B8B1A8' }}>2026 — Monthly revenue & covers</p>
            </div>
            <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: '#5C7A38' }}>
              <TrendingUp size={16} />
              +24% YoY
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C9A86A" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#C9A86A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(201,168,106,0.08)" />
              <XAxis dataKey="month" tick={{ fill: '#B8B1A8', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#B8B1A8', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `€${(v / 1000).toFixed(0)}k`} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`€${v.toLocaleString()}`, 'Revenue']} />
              <Area type="monotone" dataKey="revenue" stroke="#C9A86A" strokeWidth={2} fill="url(#goldGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Category breakdown */}
        <div className="rounded-2xl p-6" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201, 168, 106, 0.10)' }}>
          <h2 className="text-lg font-semibold mb-1" style={{ color: '#F3ECDD', fontFamily: 'Playfair Display' }}>Revenue by Category</h2>
          <p className="text-xs mb-6" style={{ color: '#B8B1A8' }}>This month</p>
          <div className="flex justify-center mb-4">
            <PieChart width={160} height={160}>
              <Pie data={categoryRevenue} cx={80} cy={80} innerRadius={50} outerRadius={76} paddingAngle={3} dataKey="value">
                {categoryRevenue.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="space-y-2">
            {categoryRevenue.map((cat) => (
              <div key={cat.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span style={{ color: '#B8B1A8' }}>{cat.name}</span>
                </div>
                <span style={{ color: '#F3ECDD' }}>{cat.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular dishes */}
        <div className="rounded-2xl p-6" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201, 168, 106, 0.10)' }}>
          <h2 className="text-lg font-semibold mb-6" style={{ color: '#F3ECDD', fontFamily: 'Playfair Display' }}>Most Popular Dishes</h2>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={popularDishes} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(201,168,106,0.08)" horizontal={false} />
              <XAxis type="number" tick={{ fill: '#B8B1A8', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis dataKey="name" type="category" tick={{ fill: '#B8B1A8', fontSize: 11 }} axisLine={false} tickLine={false} width={130} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="orders" fill="#C9A86A" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent reservations */}
        <div className="rounded-2xl p-6" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201, 168, 106, 0.10)' }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold" style={{ color: '#F3ECDD', fontFamily: 'Playfair Display' }}>Recent Reservations</h2>
            <a href="/admin/reservations" className="text-xs" style={{ color: '#C9A86A' }}>View all →</a>
          </div>
          <div className="space-y-3">
            {recentReservations.map((r, i) => (
              <div key={i} className="flex items-center gap-3 py-2" style={{ borderBottom: i < recentReservations.length - 1 ? '1px solid rgba(201,168,106,0.08)' : 'none' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0" style={{ backgroundColor: 'rgba(201,168,106,0.15)', color: '#C9A86A' }}>
                  {r.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate" style={{ color: '#F3ECDD' }}>{r.name}</div>
                  <div className="text-xs" style={{ color: '#B8B1A8' }}>{r.date} · {r.time} · {r.guests} guests</div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: `${statusColors[r.status]}22`, color: statusColors[r.status] }}>
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
