import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Confirmacao from './pages/Confirmacao';
import Local from './pages/Local';
import Presentes from './pages/Presentes';
import StatusConfirmacoes from './pages/StatusConfirmacoes';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="background-overlay"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/confirmacao" element={<Confirmacao />} />
          <Route path="/local" element={<Local />} />
          <Route path="/presentes" element={<Presentes />} />
          <Route path="/status-confirmacoes" element={<StatusConfirmacoes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;