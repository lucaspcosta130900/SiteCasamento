import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Confirmacao from './pages/Confirmacao';
import Local from './pages/Local';
import Presentes from './pages/Presentes';
import Trajes from './pages/Trajes';
import StatusConfirmacoes from './pages/StatusConfirmacoes';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-nos" element={<SobreNos />} />
      <Route path="/confirmacao" element={<Confirmacao />} />
      <Route path="/local" element={<Local />} />
      <Route path="/presentes" element={<Presentes />} />
      <Route path="/trajes" element={<Trajes />} />
      <Route path="/status-confirmacoes" element={<StatusConfirmacoes />} />
    </Routes>
  );
}

export default AppRoutes; 