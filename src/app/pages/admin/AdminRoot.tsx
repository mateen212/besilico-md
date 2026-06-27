import React from 'react';
import { useState } from 'react';
import { Outlet, Link, useLocation, NavLink } from 'react-router';
import { ThemeProvider } from '../../contexts/ThemeContext';
import {
  LayoutDashboard, ShoppingBag, Calendar, Image, FolderOpen,
  Star, Tag, Edit3, Users, BarChart3, Bell, ChefHat, X, Menu,
  ExternalLink, Settings
} from 'lucide-react';

const navItems = [
  { path: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { path: '/admin/reservations', label: 'Reservations', icon: Calendar },
  { path: '/admin/products', label: 'Products', icon: ShoppingBag },
  { path: '/admin/categories', label: 'Categories', icon: Tag },
  { path: '/admin/events', label: 'Events', icon: Star },
  { path: '/admin/gallery', label: 'Gallery', icon: Image },
  { path: '/admin/media', label: 'Media Library', icon: FolderOpen },
  { path: '/admin/content', label: 'Content', icon: Edit3 },
  { path: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/admin/users', label: 'Users', icon: Users },
  { path: '/admin/notifications', label: 'Notifications', icon: Bell },
];

export function AdminRoot() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <ThemeProvider>
      <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#12110F', fontFamily: 'Inter' }}>
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 flex flex-col transition-all duration-300 lg:relative lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
          style={{ width: 260, backgroundColor: '#161513', borderRight: '1px solid rgba(201, 168, 106, 0.12)' }}
        >
          {/* Brand */}
          <div className="flex items-center justify-between px-6 py-6" style={{ borderBottom: '1px solid rgba(201, 168, 106, 0.12)' }}>
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201, 168, 106, 0.15)' }}>
                <ChefHat size={16} style={{ color: '#C9A86A' }} />
              </div>
              <div>
                <div className="font-['Great_Vibes'] text-xl leading-none" style={{ color: '#C9A86A' }}>Basilico</div>
                <div className="text-[10px] tracking-widest uppercase" style={{ color: '#B8B1A8' }}>Admin Panel</div>
              </div>
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden" style={{ color: '#B8B1A8' }}>
              <X size={20} />
            </button>
          </div>

          {/* Nav */}
          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
            {navItems.map(({ path, label, icon: Icon, exact }) => {
              const isActive = exact ? location.pathname === path : location.pathname.startsWith(path);
              return (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 text-sm"
                  style={{
                    backgroundColor: isActive ? 'rgba(201, 168, 106, 0.12)' : 'transparent',
                    color: isActive ? '#C9A86A' : '#B8B1A8',
                    fontWeight: isActive ? 500 : 400,
                  }}
                >
                  <Icon size={17} />
                  {label}
                  {label === 'Notifications' && (
                    <span className="ml-auto text-xs px-1.5 py-0.5 rounded-full" style={{ backgroundColor: '#9B2D3E', color: '#F3ECDD' }}>3</span>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="px-3 py-4 space-y-1" style={{ borderTop: '1px solid rgba(201, 168, 106, 0.12)' }}>
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200"
              style={{ color: '#B8B1A8' }}
            >
              <ExternalLink size={17} />
              View Website
            </Link>
            <button
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200"
              style={{ color: '#B8B1A8' }}
            >
              <Settings size={17} />
              Settings
            </button>
          </div>
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 lg:hidden bg-black/60" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Top bar */}
          <header className="flex items-center gap-4 px-6 py-4 flex-shrink-0" style={{ backgroundColor: '#1B1917', borderBottom: '1px solid rgba(201, 168, 106, 0.10)' }}>
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden" style={{ color: '#C9A86A' }}>
              <Menu size={22} />
            </button>
            <div className="flex-1 text-sm" style={{ color: '#B8B1A8' }}>
              {navItems.find(n => n.exact ? location.pathname === n.path : location.pathname.startsWith(n.path))?.label || 'Admin'}
            </div>
            <div className="flex items-center gap-3">
              <Link to="/admin/notifications" className="relative w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201, 168, 106, 0.1)', color: '#C9A86A' }}>
                <Bell size={17} />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ backgroundColor: '#9B2D3E' }} />
              </Link>
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold" style={{ backgroundColor: 'rgba(201, 168, 106, 0.2)', color: '#C9A86A' }}>
                SR
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
