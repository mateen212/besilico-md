import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, Store, Users, ShoppingCart, BarChart3, Settings, 
  Bell, FileText, Zap, ChevronRight, Menu, X, Package, UserCheck, TrendingUp
} from 'lucide-react';

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
        className="fixed lg:relative z-40 h-screen w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 overflow-y-auto"
      >
        <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Sara Group</h1>
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {/* Main Items */}
          <div>
            <p className="px-3 py-2 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
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
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${
                      active
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                    }`}
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
          <div className="pt-6 border-t border-gray-200 dark:border-slate-700">
            <p className="px-3 py-2 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
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
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${
                      active
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                    }`}
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
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
            <Zap size={20} className="mx-auto mb-2 text-blue-600 dark:text-blue-400" />
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Platform v1.0</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Multi-Brand SaaS</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
