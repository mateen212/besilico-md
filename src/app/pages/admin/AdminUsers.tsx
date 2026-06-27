import React from 'react';
import { useState } from 'react';
import { Plus, Shield, Eye, Edit2, Trash2, Lock, Activity } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

type Role = 'Admin' | 'Manager' | 'Chef' | 'Staff' | 'Reception';

const users = [
  { id: 1, name: 'Sara Rossi', email: 'sara@basilicobysara.it', role: 'Admin' as Role, avatar: 'SR', status: 'Active', lastLogin: '2026-06-19 09:32', twoFA: true, permissions: ['all'] },
  { id: 2, name: 'Marco Conti', email: 'marco@basilicobysara.it', role: 'Manager' as Role, avatar: 'MC', status: 'Active', lastLogin: '2026-06-19 08:15', twoFA: true, permissions: ['reservations', 'products', 'reports'] },
  { id: 3, name: 'Elena Ferrari', email: 'elena@basilicobysara.it', role: 'Reception' as Role, avatar: 'EF', status: 'Active', lastLogin: '2026-06-18 22:48', twoFA: false, permissions: ['reservations'] },
  { id: 4, name: 'Luca Bianchi', email: 'luca@basilicobysara.it', role: 'Chef' as Role, avatar: 'LB', status: 'Active', lastLogin: '2026-06-19 11:00', twoFA: false, permissions: ['products', 'orders'] },
  { id: 5, name: 'Giulia Romano', email: 'giulia@basilicobysara.it', role: 'Staff' as Role, avatar: 'GR', status: 'Inactive', lastLogin: '2026-06-10 14:20', twoFA: false, permissions: ['orders'] },
];

const roleColors: Record<Role, { bg: string; text: string }> = {
  Admin: { bg: 'rgba(155,45,62,0.2)', text: '#9B2D3E' },
  Manager: { bg: 'rgba(201,168,106,0.2)', text: '#C9A86A' },
  Chef: { bg: 'rgba(92,122,56,0.2)', text: '#5C7A38' },
  Staff: { bg: 'rgba(184,177,168,0.15)', text: '#B8B1A8' },
  Reception: { bg: 'rgba(224,190,132,0.15)', text: '#E0BE84' },
};

const activityLog = [
  { user: 'Sara Rossi', action: 'Updated product: Tagliatelle al Tartufo', time: '10 minutes ago' },
  { user: 'Marco Conti', action: 'Confirmed reservation: Romano x4', time: '32 minutes ago' },
  { user: 'Elena Ferrari', action: 'Created reservation: Marchetti x2', time: '1 hour ago' },
  { user: 'Luca Bianchi', action: 'Updated menu availability', time: '2 hours ago' },
  { user: 'Sara Rossi', action: 'Published new product: Gnocchi Special', time: '3 hours ago' },
];

export function AdminUsers() {
  const { isDark } = useTheme();
  const bgColor = isDark ? '#12110F' : '#F8F6F3';
  const cardBg = isDark ? '#1B1917' : '#FFFFFF';
  const textColor = isDark ? '#F3ECDD' : '#2D2D2D';
  const mutedText = isDark ? '#B8B1A8' : '#999999';
  const borderColor = isDark ? 'rgba(201,168,106,0.10)' : 'rgba(201,168,106,0.15)';
  const inputBg = isDark ? '#252320' : '#F5F5F5';
  const hoverBg = isDark ? 'rgba(201,168,106,0.08)' : 'rgba(201,168,106,0.1)';
  
  const [activeTab, setActiveTab] = useState<'users' | 'activity'>('users');

  return (
    <div className="p-6 space-y-6" style={{ backgroundColor: bgColor, minHeight: '100%', transition: 'background-color 0.3s' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1" style={{ color: textColor, fontFamily: 'Playfair Display' }}>User Management</h1>
          <p className="text-sm" style={{ color: mutedText }}>{users.length} users · {users.filter(u => u.status === 'Active').length} active</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#C9A86A', color: '#12110F' }}>
          <Plus size={15} /> Invite User
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 rounded-xl w-fit" style={{ backgroundColor: cardBg }}>
        {(['users', 'activity'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-5 py-2 rounded-lg text-sm capitalize flex items-center gap-2 transition-all"
            style={{ backgroundColor: activeTab === tab ? '#C9A86A' : 'transparent', color: activeTab === tab ? '#12110F' : '#B8B1A8', fontWeight: activeTab === tab ? 500 : 400 }}
          >
            {tab === 'users' ? <Shield size={14} /> : <Activity size={14} />}
            {tab === 'users' ? 'Team Members' : 'Activity Log'}
          </button>
        ))}
      </div>

      {activeTab === 'users' ? (
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(201,168,106,0.10)' }}>
                {['Member', 'Role', 'Status', '2FA', 'Last Login', ''].map(h => (
                  <th key={h} className="p-4 text-left text-xs uppercase tracking-wider" style={{ color: mutedText }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user.id} className="group" style={{ borderBottom: i < users.length - 1 ? '1px solid rgba(201,168,106,0.06)' : 'none' }}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0" style={{ backgroundColor: 'rgba(201,168,106,0.15)', color: '#C9A86A' }}>
                        {user.avatar}
                      </div>
                      <div>
                        <div className="text-sm font-medium" style={{ color: textColor }}>{user.name}</div>
                        <div className="text-xs" style={{ color: mutedText }}>{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: roleColors[user.role].bg, color: roleColors[user.role].text }}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: user.status === 'Active' ? '#5C7A38' : '#B8B1A8' }} />
                      <span className="text-sm" style={{ color: user.status === 'Active' ? '#5C7A38' : '#B8B1A8' }}>{user.status}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Lock size={13} style={{ color: user.twoFA ? '#5C7A38' : 'rgba(184,177,168,0.4)' }} />
                      <span className="text-xs" style={{ color: user.twoFA ? '#5C7A38' : '#B8B1A8' }}>{user.twoFA ? 'Enabled' : 'Off'}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-xs" style={{ color: mutedText }}>{user.lastLogin}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ color: mutedText, backgroundColor: 'rgba(184,177,168,0.1)' }}>
                        <Eye size={13} />
                      </button>
                      <button className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ color: '#C9A86A', backgroundColor: 'rgba(201,168,106,0.1)' }}>
                        <Edit2 size={13} />
                      </button>
                      {user.role !== 'Admin' && (
                        <button className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ color: '#9B2D3E', backgroundColor: 'rgba(155,45,62,0.1)' }}>
                          <Trash2 size={13} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="rounded-2xl p-5 space-y-3" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
          {activityLog.map((log, i) => (
            <div key={i} className="flex items-start gap-3 py-3" style={{ borderBottom: i < activityLog.length - 1 ? '1px solid rgba(201,168,106,0.06)' : 'none' }}>
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-semibold" style={{ backgroundColor: 'rgba(201,168,106,0.15)', color: '#C9A86A' }}>
                {log.user.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <span className="text-sm font-medium" style={{ color: '#C9A86A' }}>{log.user}</span>
                <span className="text-sm" style={{ color: mutedText }}> {log.action}</span>
                <p className="text-xs mt-1" style={{ color: 'rgba(184,177,168,0.5)' }}>{log.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
