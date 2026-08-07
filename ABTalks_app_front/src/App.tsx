import { ThemeProvider } from './context/ThemeContext';
//import { LandingPage } from './pages/Landing_page';
import { Dashboard } from './pages/Dashboard';
function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;