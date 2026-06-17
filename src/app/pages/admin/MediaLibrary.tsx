import { useTheme } from '../../context/ThemeContext';
import { getThemeColors } from '../../styles/themes';
import { Upload } from 'lucide-react';

export function AdminMediaLibrary() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold" style={{ color: colors.text }}>
            Media Library
          </h1>
          <p style={{ color: colors.textMuted }}>Manage all your images and files</p>
        </div>
        <button
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium"
          style={{
            backgroundColor: colors.accent,
            color: colors.text,
          }}
        >
          <Upload size={20} />
          Upload Media
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
          Media library interface coming soon. This will feature a masonry grid layout with upload, preview, and management capabilities for all your restaurant photos.
        </p>
      </div>
    </div>
  );
}
