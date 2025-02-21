   // src/App.js
   import React, { useEffect } from 'react';
   import { HashRouter as Router } from 'react-router-dom';
   import AppRoutes from './AppRoutes';
   import './App.css';

   function App() {
     return (
       <Router>
         <div className="App">
           <AppRoutes />
         </div>
       </Router>
     );
   }

   export default App;