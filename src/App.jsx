import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar';
import AudioPlayer from './components/AudioPlayer';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="background-overlay"></div>
        <Navbar />
        <AppRoutes />
        <AudioPlayer />
      </div>
    </Router>
  );
}

export default App;