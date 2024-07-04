import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/DashboardPage';
import PrivateRoute from './Auth/PrivateRoute'; 
import LoginPage from './pages/LoginPage';
import TambahDataPage from './pages/TambahDataPage';
import EditDataPage from './pages/EditDataPage';
import StatistikPage from './pages/StatistikPage';
import SettingPage from './pages/SettingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path="/tambah-data" element={<PrivateRoute><TambahDataPage /></PrivateRoute>} />
        <Route path="/edit-data/:id" element={<PrivateRoute><EditDataPage /></PrivateRoute>} />
        <Route path="/statistik" element={<PrivateRoute><StatistikPage /></PrivateRoute>} />
        <Route path="/pengaturan" element={<PrivateRoute><SettingPage /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
