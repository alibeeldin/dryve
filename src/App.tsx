import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TicketsPage from './pages/TicketsPage';
import SetsPage from './pages/SetsPage';
import JoinPage from './pages/JoinPage';
import EventPage from './pages/EventPage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import { useAuth } from './hooks/useAuth';

function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="alcatraz-pulse">
          <div className="alcatraz-heading text-4xl text-white text-glow">
            DRYVE
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/sets" element={<SetsPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/:eventNumber" element={<EventPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;