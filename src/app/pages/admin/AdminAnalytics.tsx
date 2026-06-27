import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, Users, Euro, ShoppingBag, Star } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const revenueData = [
  { week: 'W1', revenue: 12400, lastYear: 10200 },
  { week: 'W2', revenue: 13800, lastYear: 11500 },
  { week: 'W3', revenue: 15200, lastYear: 12800 },
  { week: 'W4', revenue: 14100, lastYear: 11900 },
  { week: 'W5', revenue: 16800, lastYear: 13200 },
  { week: 'W6', revenue: 18200, lastYear: 14800 },
  { week: 'W7', revenue: 17500, lastYear: 14200 },
  { week: 'W8', revenue: 19400, lastYear: 15600 },
];

const retentionData = [
  { month: 'Jan', new: 124, returning: 188 },
  { month: 'Feb', new: 132, returning: 212 },
  { month: 'Mar', new: 148, returning: 270 },
  { month: 'Apr', new: 156, returning: 306 },
  { month: 'May', new: 144, returning: 354 },
  { month: 'Jun', new: 168, returning: 403 },
];

const dishMetrics = [
  { name: 'Tagliatelle Tartufo', revenue: 9088, orders: 284, margin: 68 },
  { name: 'Risotto Porcini', revenue: 6748, orders: 241, margin: 72 },
  { name: 'Tiramisù', revenue: 2376, orders: 198, margin: 81 },
  { name: 'Carbonara', revenue: 3872, orders: 176, margin: 74 },
  { name: 'Osso Buco', revenue: 5396, orders: 142, margin: 58 },
];

const peakHours = [
  { hour: '12:00', covers: 18 }, { hour: '12:30', covers: 24 }, { hour: '13:00', covers: 32 }, { hour: '13:30', covers: 28 },
  { hour: '14:00', covers: 16 }, { hour: '19:00', covers: 22 }, { hour: '19:30', covers: 38 }, { hour: '20:00', covers: 48 },
  { hour: '20:30', covers: 52 }, { hour: '21:00', covers: 44 }, { hour: '21:30', covers: 36 }, { hour: '22:00', covers: 20 },
];

const tooltipStyle = { backgroundColor: '#1B1917', border: '1px solid rgba(201,168,106,0.2)', borderRadius: 12, color: '#F3ECDD', fontFamily: 'Inter', fontSize: 12 };

const kpis = [
  { label: 'Monthly Revenue', value: '€52,380', change: '+18.4%', up: true, icon: Euro },
  { label: 'Total Covers', value: '1,847', change: '+12.1%', up: true, icon: Users },
  { label: 'Avg Check Size', value: '€83.40', change: '+5.2%', up: true, icon: ShoppingBag },
  { label: 'Guest Rating', value: '4.9 / 5', change: '+0.1', up: true, icon: Star },
];

export function AdminAnalytics() {
  const { isDark } = useTheme();
  
  const bgColor = isDark ? '#12110F' : '#F8F6F3';
  const cardBg = isDark ? '#1B1917' : '#FFFFFF';
  const textColor = isDark ? '#F3ECDD' : '#2D2D2D';
  const mutedText = isDark ? '#B8B1A8' : '#666666';
  const borderColor = isDark ? 'rgba(201,168,106,0.10)' : 'rgba(201,168,106,0.15)';
  const gridColor = isDark ? 'rgba(201,168,106,0.08)' : 'rgba(201,168,106,0.1)';
  const tooltipBg = isDark ? '#1B1917' : '#FFFFFF';
  const tooltipText = isDark ? '#F3ECDD' : '#2D2D2D';

  return (
    <div className="p-6 space-y-8 transition-colors" style={{ backgroundColor: bgColor, minHeight: '100%' }}>
      <div>
        <h1 className="text-2xl font-semibold mb-1 transition-colors" style={{ color: textColor, fontFamily: 'Playfair Display' }}>Analytics</h1>
        <p className="text-sm transition-colors" style={{ color: mutedText }}>June 2026 — Real-time performance overview</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map(({ label, value, change, up, icon: Icon }) => (
          <div key={label} className="rounded-2xl p-5 transition-colors" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
            <div className="flex items-center justify-between mb-3">
              <Icon size={18} style={{ color: '#C9A86A' }} />
              <span className={`text-xs px-2 py-0.5 rounded-full flex items-center gap-1`} style={{ backgroundColor: up ? 'rgba(92,122,56,0.15)' : 'rgba(155,45,62,0.15)', color: up ? '#5C7A38' : '#9B2D3E' }}>
                {up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                {change}
              </span>
            </div>
            <div className="text-2xl font-semibold mb-1 transition-colors" style={{ color: textColor, fontFamily: 'Playfair Display' }}>{value}</div>
            <div className="text-xs transition-colors" style={{ color: mutedText }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Revenue chart */}
      <div className="rounded-2xl p-6 transition-colors" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold transition-colors" style={{ color: textColor, fontFamily: 'Playfair Display' }}>Weekly Revenue vs Last Year</h2>
            <p className="text-xs mt-1 transition-colors" style={{ color: mutedText }}>8-week rolling comparison</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2"><div className="w-6 h-0.5" style={{ backgroundColor: '#C9A86A' }} /><span style={{ color: mutedText }}>2026</span></div>
            <div className="flex items-center gap-2"><div className="w-6 h-0.5 border-t border-dashed" style={{ borderColor: '#5C7A38' }} /><span style={{ color: mutedText }}>2025</span></div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="week" tick={{ fill: mutedText, fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: mutedText, fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `€${(v / 1000).toFixed(0)}k`} />
            <Tooltip contentStyle={{ backgroundColor: tooltipBg, border: `1px solid ${borderColor}`, borderRadius: 12, color: tooltipText, fontFamily: 'Inter', fontSize: 12 }} formatter={(v: number) => [`€${v.toLocaleString()}`, '']} />
            <Line type="monotone" dataKey="revenue" stroke="#C9A86A" strokeWidth={2.5} dot={{ fill: '#C9A86A', r: 4 }} />
            <Line type="monotone" dataKey="lastYear" stroke="#5C7A38" strokeWidth={1.5} strokeDasharray="5 5" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer retention */}
        <div className="rounded-2xl p-6 transition-colors" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
          <h2 className="text-lg font-semibold mb-1 transition-colors" style={{ color: textColor, fontFamily: 'Playfair Display' }}>Customer Retention</h2>
          <p className="text-xs mb-5 transition-colors" style={{ color: mutedText }}>New vs Returning guests</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={retentionData}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis dataKey="month" tick={{ fill: mutedText, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: mutedText, fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: tooltipBg, border: `1px solid ${borderColor}`, borderRadius: 12, color: tooltipText, fontFamily: 'Inter', fontSize: 12 }} />
              <Bar dataKey="returning" fill="#C9A86A" radius={[4, 4, 0, 0]} name="Returning" stackId="a" />
              <Bar dataKey="new" fill="#5C7A38" radius={[4, 4, 0, 0]} name="New" stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Peak hours */}
        <div className="rounded-2xl p-6 transition-colors" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
          <h2 className="text-lg font-semibold mb-1 transition-colors" style={{ color: textColor, fontFamily: 'Playfair Display' }}>Peak Dining Hours</h2>
          <p className="text-xs mb-5 transition-colors" style={{ color: mutedText }}>Average covers by time slot</p>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={peakHours}>
              <defs>
                <linearGradient id="peakGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9B2D3E" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#9B2D3E" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis dataKey="hour" tick={{ fill: mutedText, fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: mutedText, fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: tooltipBg, border: `1px solid ${borderColor}`, borderRadius: 12, color: tooltipText, fontFamily: 'Inter', fontSize: 12 }} />
              <Area type="monotone" dataKey="covers" stroke="#9B2D3E" strokeWidth={2} fill="url(#peakGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top dishes */}
      <div className="rounded-2xl p-6 transition-colors" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
        <h2 className="text-lg font-semibold mb-5 transition-colors" style={{ color: textColor, fontFamily: 'Playfair Display' }}>Top Performing Dishes</h2>
        <div className="space-y-4">
          {dishMetrics.map((dish, i) => (
            <div key={dish.name} className="flex items-center gap-4">
              <span className="text-sm w-4 transition-colors" style={{ color: mutedText }}>{i + 1}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium transition-colors" style={{ color: textColor }}>{dish.name}</span>
                  <div className="flex items-center gap-4 text-xs">
                    <span style={{ color: '#C9A86A' }}>€{dish.revenue.toLocaleString()}</span>
                    <span style={{ color: mutedText }}>{dish.orders} orders</span>
                    <span style={{ color: '#5C7A38' }}>{dish.margin}% margin</span>
                  </div>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden transition-colors" style={{ backgroundColor: isDark ? 'rgba(201,168,106,0.12)' : 'rgba(201,168,106,0.2)' }}>
                  <div className="h-full rounded-full transition-all" style={{ width: `${(dish.orders / 284) * 100}%`, backgroundColor: i === 0 ? '#C9A86A' : i === 1 ? '#5C7A38' : '#9B2D3E' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
