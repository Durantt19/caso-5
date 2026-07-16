import React from 'react';

const FeaturesAccordion = () => {
  return (
    <section id="funciones" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Funciones Principales</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="featuresAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    Telemedicina Veterinaria
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#featuresAccordion">
                  <div className="accordion-body">
                    Realiza videollamadas con veterinarios certificados desde la comodidad de tu casa para consultas de rutina o dudas urgentes.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    Recordatorios de Vacunación
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                  <div className="accordion-body">
                    Nuestra app te enviará notificaciones automáticas cuando sea el momento de la próxima vacuna o desparasitación de tu mascota.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                    Directorio de Especialistas
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                  <div className="accordion-body">
                    Encuentra clínicas, hospitales 24 horas y especialistas (dermatólogos, cardiólogos) cerca de tu ubicación actual.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;