   // src/App.js
   import React from 'react';
   import { HashRouter as Router, Routes, Route } from 'react-router-dom';
   import Navbar from './components/Navbar';
   import Home from './pages/Home';
   import SobreNos from './pages/SobreNos';
   import Confirmacao from './pages/Confirmacao';
   import Local from './pages/Local';
   import './App.css';

   function App() {
     return (
       <Router>
         <div className="App">
           <Navbar />
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/sobre" element={<SobreNos />} />
             <Route path="/confirmacao" element={<Confirmacao />} />
             <Route path="/local" element={<Local />} />
           </Routes>
         </div>
       </Router>
     );
   }

   export default App;