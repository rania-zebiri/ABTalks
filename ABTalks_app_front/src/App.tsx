import { ThemeProvider } from './context/ThemeContext';
import { LandingPage } from './pages/Landing_page';

function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;