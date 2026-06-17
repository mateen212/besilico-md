import { useTheme } from '../../context/ThemeContext';
import { getThemeColors } from '../../styles/themes';

export function AdminUsers() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold" style={{ color: colors.text }}>
          User Management
        </h1>
        <p style={{ color: colors.textMuted }}>Manage staff and user permissions</p>
      </div>

      <div
        className="p-12 rounded-2xl border text-center"
        style={{
          backgroundColor: colors.cardBg,
          borderColor: colors.shadow,
        }}
      >
        <p style={{ color: colors.textMuted }}>
          User management interface with role-based access control coming soon.
        </p>
      </div>
    </div>
  );
}
