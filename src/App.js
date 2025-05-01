import { BrowserRouter } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
