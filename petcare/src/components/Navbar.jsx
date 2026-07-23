import React from 'react';

// Recibe las props desde App.jsx
const Navbar = ({ setCurrentView, currentView }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Al hacer clic en el logo, vuelve al Home */}
        <a 
          className="navbar-brand fw-bold text-primary" 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentView('home'); }}
        >
          🐾 PetCare
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Solo mostramos los enlaces del Home si estamos en la vista 'home' */}
            {currentView === 'home' && (
              <>
                <li className="nav-item"><a className="nav-link" href="#beneficios">Beneficios</a></li>
                <li className="nav-item"><a className="nav-link" href="#funciones">Funciones</a></li>
                <li className="nav-item"><a className="nav-link" href="#testimonios">Testimonios</a></li>
              </>
            )}
          </ul>
          <div className="d-flex gap-2">
            {/* Botón para alternar vistas */}
            <button 
              className={`btn ${currentView === 'crud' ? 'btn-primary' : 'btn-outline-primary'} rounded-pill px-4`}
              onClick={() => setCurrentView(currentView === 'home' ? 'crud' : 'home')}
            >
              {currentView === 'home' ? 'Ingresar (CRUD)' : 'Volver al Inicio'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;