import { useTheme } from '../../context/ThemeContext';
import { getThemeColors } from '../../styles/themes';

export function AdminSettings() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold" style={{ color: colors.text }}>
          Settings
        </h1>
        <p style={{ color: colors.textMuted }}>Configure restaurant settings and preferences</p>
      </div>

      <div
        className="p-12 rounded-2xl border text-center"
        style={{
          backgroundColor: colors.cardBg,
          borderColor: colors.shadow,
        }}
      >
        <p style={{ color: colors.textMuted }}>
          Settings interface for restaurant information, hours, pricing, and system configuration coming soon.
        </p>
      </div>
    </div>
  );
}
