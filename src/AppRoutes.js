import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Confirmacao from './pages/Confirmacao';
import Local from './pages/Local';

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/local" element={<Local />} />
        <Route path="/sobre" element={<SobreNos />} />
        <Route path="/confirmacao" element={<Confirmacao />} />
      </Routes>
    </>
  );
}

export default AppRoutes; 