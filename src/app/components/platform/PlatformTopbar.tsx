import { Menu, Bell, Search, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface PlatformTopbarProps {
  onMenuClick: () => void;
}

export function PlatformTopbar({ onMenuClick }: PlatformTopbarProps) {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const bgColor = isDark ? '#12110F' : '#FFFFFF';
  const borderColor = isDark ? 'rgba(201,168,106,0.1)' : '#E5E5E5';
  const textColor = isDark ? '#F3ECDD' : '#2D2D2D';
  const hoverBg = isDark ? 'rgba(201,168,106,0.08)' : '#F5F5F5';
  const inputBg = isDark ? '#1B1917' : '#F8F6F3';

  return (
    <div className="sticky top-0 z-30 border-b transition-colors" style={{ backgroundColor: bgColor, borderColor }}>
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: textColor, backgroundColor: 'transparent' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBg)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>

          {showSearchInput ? (
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              onBlur={() => setShowSearchInput(false)}
              className="hidden md:block px-4 py-2 rounded-lg border transition-colors"
              style={{
                backgroundColor: inputBg,
                borderColor,
                color: textColor,
              }}
            />
          ) : (
            <button
              onClick={() => setShowSearchInput(true)}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
              style={{ backgroundColor: inputBg, color: textColor }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBg)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = inputBg)}
            >
              <Search size={18} />
              <span className="text-sm">Search...</span>
            </button>
          )}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors"
            style={{ color: textColor }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBg)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          <button
            className="relative p-2 rounded-lg transition-colors"
            style={{ color: textColor }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBg)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-semibold cursor-pointer hover:from-amber-600 hover:to-amber-700 transition-all">
            SA
          </div>
        </div>
      </div>
    </div>
  );
}
