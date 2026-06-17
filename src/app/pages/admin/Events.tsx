import { useTheme } from '../../context/ThemeContext';
import { getThemeColors } from '../../styles/themes';

export function AdminEvents() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold" style={{ color: colors.text }}>
          Events
        </h1>
        <p style={{ color: colors.textMuted }}>Manage private events and catering requests</p>
      </div>

      <div
        className="p-12 rounded-2xl border text-center"
        style={{
          backgroundColor: colors.cardBg,
          borderColor: colors.shadow,
        }}
      >
        <p style={{ color: colors.textMuted }}>
          Events management interface for private dining and catering bookings coming soon.
        </p>
      </div>
    </div>
  );
}
