import { motion } from 'motion/react';
import { TrendingUp, Users, Calendar, Package, BarChart3, DollarSign } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { getThemeColors } from '../../styles/themes';

const stats = [
  { label: 'Total Orders', value: '324', trend: '+12%', icon: Package, color: '#C9A86A' },
  { label: 'Revenue', value: '$12,450', trend: '+8%', icon: DollarSign, color: '#556B2F' },
  { label: 'Reservations', value: '52', trend: '+24%', icon: Calendar, color: '#4B1F29' },
  { label: 'Active Customers', value: '1,247', trend: '+5%', icon: Users, color: '#3E4A33' },
];

export function AdminDashboard() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2" style={{ color: colors.text }}>
          Dashboard
        </h1>
        <p style={{ color: colors.textMuted }}>Welcome back to Basilico Admin</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border"
              style={{
                backgroundColor: colors.cardBg,
                borderColor: colors.shadow,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
                >
                  <Icon size={24} />
                </div>
                <span className="text-sm font-medium" style={{ color: stat.color }}>
                  {stat.trend}
                </span>
              </div>
              <p className="text-sm mb-1" style={{ color: colors.textMuted }}>
                {stat.label}
              </p>
              <p className="text-3xl font-bold" style={{ color: colors.text }}>
                {stat.value}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-8 rounded-2xl border"
        style={{
          backgroundColor: colors.cardBg,
          borderColor: colors.shadow,
        }}
      >
        <h2 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
          Recent Reservations
        </h2>
        <div className="space-y-4">
          {[
            { name: 'Marco Rossi', date: 'Today at 7:00 PM', guests: 4, status: 'Confirmed' },
            { name: 'Elena Bianchi', date: 'Tomorrow at 8:30 PM', guests: 2, status: 'Confirmed' },
            { name: 'Giovanni Ferrari', date: 'Sat, 6:00 PM', guests: 6, status: 'Pending' },
          ].map((reservation) => (
            <div
              key={reservation.name}
              className="flex items-center justify-between p-4 rounded-lg"
              style={{ backgroundColor: colors.background }}
            >
              <div>
                <p className="font-medium" style={{ color: colors.text }}>
                  {reservation.name}
                </p>
                <p className="text-sm" style={{ color: colors.textMuted }}>
                  {reservation.date} • {reservation.guests} guests
                </p>
              </div>
              <span
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: reservation.status === 'Confirmed' ? colors.accent : colors.wine || '#C9A86A40',
                  color: reservation.status === 'Confirmed' ? colors.text : colors.text,
                }}
              >
                {reservation.status}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl border text-left transition-colors"
          style={{
            backgroundColor: colors.cardBg,
            borderColor: colors.shadow,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.accent + '20';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = colors.cardBg;
          }}
        >
          <Package size={32} style={{ color: colors.accent, marginBottom: '16px' }} />
          <h3 className="font-bold text-lg mb-1" style={{ color: colors.text }}>
            Add New Product
          </h3>
          <p style={{ color: colors.textMuted }}>Create a new menu item</p>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl border text-left transition-colors"
          style={{
            backgroundColor: colors.cardBg,
            borderColor: colors.shadow,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.primary + '20';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = colors.cardBg;
          }}
        >
          <Calendar size={32} style={{ color: colors.primary, marginBottom: '16px' }} />
          <h3 className="font-bold text-lg mb-1" style={{ color: colors.text }}>
            View Calendar
          </h3>
          <p style={{ color: colors.textMuted }}>Manage reservations</p>
        </motion.button>
      </div>
    </div>
  );
}
