import React from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, Store, Users, ShoppingCart, BarChart3, Settings, 
  Bell, FileText, Zap, ChevronRight, Menu, X, Package, UserCheck, TrendingUp
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface PlatformSidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin', group: 'main' },
  { icon: Store, label: 'Brands', href: '/admin/brands', group: 'main' },
  { icon: Package, label: 'Products', href: '/admin/products', group: 'main' },
  { icon: UserCheck, label: 'Employees', href: '/admin/employees', group: 'main' },
  { icon: Users, label: 'Customers', href: '/admin/customers', group: 'main' },
  { icon: ShoppingCart, label: 'Orders', href: '/admin/orders', group: 'main' },
  { icon: BarChart3, label: 'Analytics', href: '/admin/analytics', group: 'main' },
  { icon: TrendingUp, label: 'Reports', href: '/admin/reports', group: 'other' },
  { icon: Bell, label: 'Notifications', href: '/admin/notifications', group: 'other' },
  { icon: Settings, label: 'Settings', href: '/admin/content', group: 'other' },
];

export function PlatformSidebar({ open, setOpen }: PlatformSidebarProps) {
  const location = useLocation();
  const { isDark } = useTheme();

  const bgColor = isDark ? '#12110F' : '#FFFFFF';
  const borderColor = isDark ? 'rgba(201,168,106,0.1)' : '#E5E5E5';
  const textColor = isDark ? '#F3ECDD' : '#2D2D2D';
  const mutedText = isDark ? '#B8B1A8' : '#999999';
  const activeBg = isDark ? 'rgba(201,168,106,0.15)' : 'rgba(201,168,106,0.1)';
  const activeColor = '#C9A86A';
  const hoverBg = isDark ? 'rgba(201,168,106,0.08)' : 'rgba(201,168,106,0.05)';

  const isActive = (href: string) => {
    if (href === '/admin' && location.pathname === '/admin') return true;
    if (href !== '/admin' && location.pathname.startsWith(href)) return true;
    return false;
  };

  const mainItems = sidebarItems.filter(item => item.group === 'main');
  const otherItems = sidebarItems.filter(item => item.group === 'other');

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        animate={{
          x: open ? 0 : '-100%',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed lg:relative z-40 h-screen w-64 border-r overflow-y-auto transition-colors"
        style={{ backgroundColor: bgColor, borderColor }}
      >
        <div className="sticky top-0 border-b p-4 flex items-center justify-between transition-colors" style={{ backgroundColor: bgColor, borderColor }}>
          <h1 className="text-xl font-bold transition-colors" style={{ color: textColor }}>Sara Group</h1>
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: textColor }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBg)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {/* Main Items */}
          <div>
            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider mb-3 transition-colors" style={{ color: mutedText }}>
              Navigation
            </p>
            <div className="space-y-1">
              {mainItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group"
                    style={{
                      backgroundColor: active ? activeBg : 'transparent',
                      color: active ? activeColor : textColor,
                    }}
                    onMouseEnter={(e) => {
                      if (!active) (e.currentTarget as HTMLElement).style.backgroundColor = hoverBg;
                    }}
                    onMouseLeave={(e) => {
                      if (!active) (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                    }}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                    {active && (
                      <ChevronRight
                        size={16}
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Other Items */}
          <div className="pt-6 border-t transition-colors" style={{ borderColor }}>
            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider mb-3 transition-colors" style={{ color: mutedText }}>
              Other
            </p>
            <div className="space-y-1">
              {otherItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group"
                    style={{
                      backgroundColor: active ? activeBg : 'transparent',
                      color: active ? activeColor : textColor,
                    }}
                    onMouseEnter={(e) => {
                      if (!active) (e.currentTarget as HTMLElement).style.backgroundColor = hoverBg;
                    }}
                    onMouseLeave={(e) => {
                      if (!active) (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                    }}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t transition-colors" style={{ backgroundColor: bgColor, borderColor }}>
          <div className="p-4 rounded-lg text-center transition-colors" style={{ backgroundColor: activeBg }}>
            <Zap size={20} className="mx-auto mb-2" style={{ color: activeColor }} />
            <p className="text-sm font-semibold transition-colors" style={{ color: textColor }}>Platform v1.0</p>
            <p className="text-xs transition-colors" style={{ color: mutedText }}>Multi-Brand SaaS</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
