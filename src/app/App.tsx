import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ThemeProvider } from './context/ThemeContext';
import { BranchProvider } from './context/BranchContext';

export default function App() {
  return (
    <ThemeProvider>
      <BranchProvider>
        <RouterProvider router={router} />
      </BranchProvider>
    </ThemeProvider>
  );
}
