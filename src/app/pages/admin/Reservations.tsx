import { useTheme } from '../../context/ThemeContext';
import { getThemeColors } from '../../styles/themes';

export function AdminReservations() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold" style={{ color: colors.text }}>
          Reservations
        </h1>
        <p style={{ color: colors.textMuted }}>Manage guest reservations and calendar</p>
      </div>

      <div
        className="p-12 rounded-2xl border text-center"
        style={{
          backgroundColor: colors.cardBg,
          borderColor: colors.shadow,
        }}
      >
        <p style={{ color: colors.textMuted }}>
          Reservation management interface with calendar and table management coming soon.
        </p>
      </div>
    </div>
  );
}
