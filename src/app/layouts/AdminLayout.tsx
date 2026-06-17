import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, LogOut, LayoutDashboard, Package, Image, BarChart3, Settings, Users, Calendar, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getThemeColors } from '../styles/themes';

const adminNavItems = [
  { path: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/admin/products', label: 'Products', icon: Package },
  { path: '/admin/media', label: 'Media', icon: Image },
  { path: '/admin/reservations', label: 'Reservations', icon: Calendar },
  { path: '/admin/events', label: 'Events', icon: FileText },
  { path: '/admin/users', label: 'Users', icon: Users },
  { path: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/admin/settings', label: 'Settings', icon: Settings },
];

export function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  return (
    <div className="flex h-screen" style={{ backgroundColor: colors.background }}>
      {/* Sidebar */}
      <AnimatePresence>
        {(isSidebarOpen || isMobileMenuOpen) && (
          <motion.div
            initial={{ x: isSidebarOpen ? 0 : '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className={`${isSidebarOpen ? 'w-64' : 'w-0'} hidden lg:flex flex-col fixed lg:relative h-full z-40 lg:z-0 border-r`}
            style={{ 
              backgroundColor: colors.sidebarBg,
              borderColor: colors.shadow,
            }}
          >
            {/* Logo */}
            <div className="p-6 border-b" style={{ borderColor: colors.shadow }}>
              <Link to="/admin" className="flex flex-col">
                <h1 className="font-['Great_Vibes'] text-2xl" style={{ color: colors.primary }}>
                  Basilico
                </h1>
                <p className="text-xs" style={{ color: colors.textMuted }}>Admin Panel</p>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="space-y-2">
                {adminNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200"
                      style={{
                        backgroundColor: isActive ? colors.accent : 'transparent',
                        color: isActive ? colors.text : colors.textMuted,
                      }}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t" style={{ borderColor: colors.shadow }}>
              <button
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors duration-200"
                style={{
                  color: colors.textMuted,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.shadow;
                  e.currentTarget.style.color = colors.text;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = colors.textMuted;
                }}
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 lg:hidden z-30"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header
          className="h-16 border-b flex items-center justify-between px-6"
          style={{
            backgroundColor: colors.cardBg,
            borderColor: colors.shadow,
          }}
        >
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="hidden lg:block p-2"
            style={{ color: colors.text }}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            style={{ color: colors.text }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="text-sm" style={{ color: colors.text }}>
            Admin Dashboard
          </div>

          <div className="w-10 h-10 rounded-full" style={{ backgroundColor: colors.accent }} />
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
