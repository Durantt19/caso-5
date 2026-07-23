import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} PetCare. Todos los derechos reservados.</p>
        <p className="small text-secondary mb-0">
          Desarrollado para evaluación de React y Bootstrap.
        </p>
      </div>
    </footer>
  );
};

export default Footer;