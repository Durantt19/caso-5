import React from 'react';

const Hero = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 mt-4 mt-lg-0 text-center text-lg-start">
            <h1 className="display-4 fw-bold text-dark mb-3">
              El cuidado de tu mascota, en la palma de tu mano
            </h1>
            <p className="lead text-secondary mb-4">
              Agenda citas veterinarias, lleva el control de vacunas y chatea con especialistas 24/7. PetCare es la app de salud integral para los consentidos del hogar.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <button className="btn btn-primary btn-lg rounded-pill">Descargar para iOS</button>
              <button className="btn btn-outline-primary btn-lg rounded-pill">Descargar para Android</button>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            {/* Simulando un video o imagen del Hero */}
            <img 
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop" 
              alt="Perro feliz con veterinario" 
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;