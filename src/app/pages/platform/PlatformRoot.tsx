import { Outlet } from 'react-router';
import { PlatformSidebar } from '../../components/platform/PlatformSidebar';
import { PlatformTopbar } from '../../components/platform/PlatformTopbar';
import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export function PlatformRoot() {
  const { isDark } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const bgColor = isDark ? '#0F0E0C' : '#F8F6F3';

  return (
    <div className="flex h-screen transition-colors" style={{ backgroundColor: bgColor }}>
      <PlatformSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <PlatformTopbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
