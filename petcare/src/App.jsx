import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CrudMascotas from './components/CrudMascotas';
import Footer from './components/Footer';

function App() {
  // Estado para controlar qué vista se muestra ('home' o 'crud')
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="App d-flex flex-column min-vh-100">
      {/* Pasamos la función setCurrentView al Navbar para que los botones funcionen */}
      <Navbar setCurrentView={setCurrentView} currentView={currentView} />
      
      {/* Contenido dinámico principal */}
      <div className="flex-grow-1">
        {currentView === 'home' ? <Home /> : <CrudMascotas />}
      </div>

      <Footer />
    </div>
  );
}

export default App;