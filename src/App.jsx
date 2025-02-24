import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Confirmacao from './pages/Confirmacao';
import Local from './pages/Local';
import Presentes from './pages/Presentes';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/confirmacao" element={<Confirmacao />} />
          <Route path="/local" element={<Local />} />
          <Route path="/presentes" element={<Presentes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;