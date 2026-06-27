import React from 'react';
import { useState } from 'react';
import { Bell, Calendar, ShoppingBag, AlertTriangle, MessageSquare, Check, CheckCheck, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

type NotifType = 'reservation' | 'order' | 'stock' | 'event' | 'message';

const notifications = [
  { id: 1, type: 'reservation' as NotifType, title: 'New Reservation Request', body: 'Elena Marchetti — 2 guests — Tonight 8:00 PM', time: '5 minutes ago', read: false, urgent: false },
  { id: 2, type: 'event' as NotifType, title: 'Event Inquiry Received', body: 'Fiat Corporate — 40 guests — July 18', time: '18 minutes ago', read: false, urgent: false },
  { id: 3, type: 'stock' as NotifType, title: 'Low Stock Alert', body: 'Black Truffle is running low (2 portions remaining)', time: '32 minutes ago', read: false, urgent: true },
  { id: 4, type: 'message' as NotifType, title: 'New Guest Message', body: 'Alessandro Romano: "Can we have a vegan option for..."', time: '1 hour ago', read: false, urgent: false },
  { id: 5, type: 'reservation' as NotifType, title: 'Reservation Confirmed', body: 'Bianchi x6 — confirmed for tonight 8:30 PM', time: '2 hours ago', read: true, urgent: false },
  { id: 6, type: 'order' as NotifType, title: 'Order Completed', body: 'Table 12 — €284 — 4 guests', time: '3 hours ago', read: true, urgent: false },
  { id: 7, type: 'stock' as NotifType, title: 'Ingredient Delivery Confirmed', body: 'San Marzano tomatoes — 15 kg delivered', time: '4 hours ago', read: true, urgent: false },
  { id: 8, type: 'event' as NotifType, title: 'Wedding Deposit Received', body: 'Rossi Wedding — €1,500 deposit confirmed', time: '5 hours ago', read: true, urgent: false },
  { id: 9, type: 'reservation' as NotifType, title: 'No-Show Alert', body: 'Costa x2 — 6:30 PM — marked as no-show', time: 'Yesterday', read: true, urgent: false },
];

const typeConfig: Record<NotifType, { icon: typeof Bell; color: string; bg: string }> = {
  reservation: { icon: Calendar, color: '#C9A86A', bg: 'rgba(201,168,106,0.15)' },
  order: { icon: ShoppingBag, color: '#5C7A38', bg: 'rgba(92,122,56,0.15)' },
  stock: { icon: AlertTriangle, color: '#9B2D3E', bg: 'rgba(155,45,62,0.15)' },
  event: { icon: Bell, color: '#E0BE84', bg: 'rgba(224,190,132,0.15)' },
  message: { icon: MessageSquare, color: '#B8B1A8', bg: 'rgba(184,177,168,0.15)' },
};

export function AdminNotifications() {
  const { isDark } = useTheme();
  const [notifs, setNotifs] = useState(notifications);
  const [filter, setFilter] = useState<'all' | 'unread' | NotifType>('all');

  const bgColor = isDark ? '#12110F' : '#F8F6F3';
  const cardBg = isDark ? '#1B1917' : '#FFFFFF';
  const textColor = isDark ? '#F3ECDD' : '#2D2D2D';
  const mutedText = isDark ? '#B8B1A8' : '#666666';
  const borderColor = isDark ? 'rgba(201,168,106,0.10)' : 'rgba(201,168,106,0.15)';

  const unreadCount = notifs.filter(n => !n.read).length;

  const markAllRead = () => setNotifs(n => n.map(x => ({ ...x, read: true })));
  const markRead = (id: number) => setNotifs(n => n.map(x => x.id === id ? { ...x, read: true } : x));
  const dismiss = (id: number) => setNotifs(n => n.filter(x => x.id !== id));

  const filtered = notifs.filter(n => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !n.read;
    return n.type === filter;
  });

  return (
    <div className="p-6 space-y-6 transition-colors" style={{ backgroundColor: bgColor, minHeight: '100%' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1 transition-colors" style={{ color: textColor, fontFamily: 'Playfair Display' }}>Notifications</h1>
          <p className="text-sm transition-colors" style={{ color: mutedText }}>{unreadCount} unread notifications</p>
        </div>
        {unreadCount > 0 && (
          <button onClick={markAllRead} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-colors" style={{ backgroundColor: isDark ? 'rgba(201,168,106,0.1)' : 'rgba(201,168,106,0.15)', color: '#C9A86A', border: `1px solid ${borderColor}` }}>
            <CheckCheck size={15} /> Mark all as read
          </button>
        )}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {([
          { key: 'all', label: 'All' },
          { key: 'unread', label: `Unread (${unreadCount})` },
          { key: 'reservation', label: 'Reservations' },
          { key: 'event', label: 'Events' },
          { key: 'stock', label: 'Stock Alerts' },
          { key: 'message', label: 'Messages' },
        ] as const).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className="px-4 py-2 rounded-xl text-sm transition-all"
            style={{
              backgroundColor: filter === key ? '#C9A86A' : 'rgba(201,168,106,0.08)',
              color: filter === key ? '#12110F' : '#B8B1A8',
              fontWeight: filter === key ? 500 : 400,
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Notifications list */}
      <div className="space-y-2">
        {filtered.length === 0 ? (
          <div className="rounded-2xl p-12 text-center" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201,168,106,0.10)' }}>
            <Bell size={32} className="mx-auto mb-3" style={{ color: 'rgba(201,168,106,0.3)' }} />
            <p className="text-sm" style={{ color: '#B8B1A8' }}>No notifications here</p>
          </div>
        ) : (
          filtered.map(notif => {
            const { icon: Icon, color, bg } = typeConfig[notif.type];
            return (
              <div
                key={notif.id}
                className="rounded-2xl p-4 flex items-start gap-4 transition-all group"
                style={{
                  backgroundColor: notif.read ? '#1B1917' : 'rgba(201,168,106,0.04)',
                  border: notif.urgent ? '1px solid rgba(155,45,62,0.3)' : notif.read ? '1px solid rgba(201,168,106,0.10)' : '1px solid rgba(201,168,106,0.2)',
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 relative" style={{ backgroundColor: bg }}>
                  <Icon size={18} style={{ color }} />
                  {notif.urgent && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full" style={{ backgroundColor: '#9B2D3E' }} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium" style={{ color: '#F3ECDD' }}>{notif.title}</span>
                    {!notif.read && <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#C9A86A' }} />}
                    {notif.urgent && <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(155,45,62,0.2)', color: '#9B2D3E' }}>Urgent</span>}
                  </div>
                  <p className="text-sm mt-0.5" style={{ color: '#B8B1A8' }}>{notif.body}</p>
                  <p className="text-xs mt-1.5" style={{ color: 'rgba(184,177,168,0.5)' }}>{notif.time}</p>
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  {!notif.read && (
                    <button onClick={() => markRead(notif.id)} className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ color: '#5C7A38', backgroundColor: 'rgba(92,122,56,0.1)' }}>
                      <Check size={14} />
                    </button>
                  )}
                  <button onClick={() => dismiss(notif.id)} className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ color: '#B8B1A8', backgroundColor: 'rgba(184,177,168,0.1)' }}>
                    <X size={14} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
