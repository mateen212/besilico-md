export const themes = {
  light: {
    // Background colors
    background: '#F8F3EA',
    backgroundAlt: '#FFFFFF',
    
    // Text colors
    text: '#1C1C1C',
    textMuted: '#6B6B6B',
    textLight: '#F8F3EA',
    
    // Brand colors
    primary: '#556B2F', // Olive
    accent: '#C8A96A', // Gold
    accentLight: '#E0BE84', // Light Gold
    
    // Admin specific
    sidebarBg: '#F8F3EA',
    cardBg: '#FFFFFF',
    
    // Shadows
    shadow: 'rgba(0, 0, 0, 0.05)',
    shadowHeavy: 'rgba(0, 0, 0, 0.1)',
  },
  dark: {
    // Background colors
    background: '#12110F', // Deep dark
    backgroundAlt: '#1B1917', // Card background
    
    // Text colors
    text: '#F3ECDD', // Cream text
    textMuted: '#B8B1A8', // Muted gray
    textLight: '#F3ECDD',
    
    // Brand colors
    primary: '#556B2F', // Olive (adjusted for dark)
    accent: '#C9A86A', // Warm gold
    accentLight: '#E0BE84', // Light gold
    
    // Additional dark mode colors
    deepOlive: '#3E4A33',
    wine: '#4B1F29', // Wine burgundy for accents
    
    // Admin specific
    sidebarBg: '#161513', // Luxury dark for sidebar
    cardBg: '#1B1917',
    
    // Shadows
    shadow: 'rgba(0, 0, 0, 0.4)',
    shadowHeavy: 'rgba(0, 0, 0, 0.6)',
  },
} as const;

export function getThemeColors(theme: 'light' | 'dark') {
  return themes[theme];
}

export type ThemeColors = typeof themes.light;
