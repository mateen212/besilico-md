import { useTheme } from '../../context/ThemeContext';
import { getThemeColors } from '../../styles/themes';
import { Plus } from 'lucide-react';

export function AdminProducts() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold" style={{ color: colors.text }}>
            Products
          </h1>
          <p style={{ color: colors.textMuted }}>Manage your menu items</p>
        </div>
        <button
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium"
          style={{
            backgroundColor: colors.accent,
            color: colors.text,
          }}
        >
          <Plus size={20} />
          Add Product
        </button>
      </div>

      <div
        className="p-12 rounded-2xl border text-center"
        style={{
          backgroundColor: colors.cardBg,
          borderColor: colors.shadow,
        }}
      >
        <p style={{ color: colors.textMuted }}>
          Product management interface coming soon. This will include a table view of all menu items with options to edit, delete, and bulk manage products.
        </p>
      </div>
    </div>
  );
}
