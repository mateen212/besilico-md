import { useTheme } from '../../context/ThemeContext';
import { getThemeColors } from '../../styles/themes';

export function AdminAnalytics() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold" style={{ color: colors.text }}>
          Analytics
        </h1>
        <p style={{ color: colors.textMuted }}>View business insights and performance metrics</p>
      </div>

      <div
        className="p-12 rounded-2xl border text-center"
        style={{
          backgroundColor: colors.cardBg,
          borderColor: colors.shadow,
        }}
      >
        <p style={{ color: colors.textMuted }}>
          Analytics dashboard with charts and metrics coming soon. Will include revenue tracking, reservation trends, and customer insights.
        </p>
      </div>
    </div>
  );
}
