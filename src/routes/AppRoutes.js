import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ChatbotPage from '../pages/ChatbotPage';
import AdminPanel from '../pages/AdminPanel';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/chat" element={<ChatbotPage />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
}
