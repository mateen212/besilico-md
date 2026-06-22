import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ThemeProvider } from '../contexts/ThemeContext';

export function Root() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
