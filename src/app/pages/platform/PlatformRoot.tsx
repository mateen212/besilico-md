import { Outlet } from 'react-router';
import { PlatformSidebar } from '../../components/platform/PlatformSidebar';
import { PlatformTopbar } from '../../components/platform/PlatformTopbar';
import { useState } from 'react';

export function PlatformRoot() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-950">
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
