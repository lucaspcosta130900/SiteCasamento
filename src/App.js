   // src/App.js
   import React, { useEffect } from 'react';
   import { HashRouter as Router } from 'react-router-dom';
   import AppRoutes from './AppRoutes';
   import './App.css';

   function App() {
     useEffect(() => {
       // Adiciona ou remove a classe no-scroll-home baseado na rota
       const handleRouteChange = () => {
         const isHome = window.location.hash === '#/' || window.location.hash === '';
         document.body.classList.toggle('no-scroll-home', isHome);
       };

       // Verifica na montagem do componente
       handleRouteChange();

       // Adiciona listener para mudanças na rota
       window.addEventListener('hashchange', handleRouteChange);

       return () => {
         window.removeEventListener('hashchange', handleRouteChange);
       };
     }, []);

     return (
       <Router>
         <div className="App">
           <AppRoutes />
         </div>
       </Router>
     );
   }

   export default App;