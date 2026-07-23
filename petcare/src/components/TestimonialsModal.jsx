import React from 'react';

const TestimonialsModal = () => {
  return (
    <section id="testimonios" className="py-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Lo que dicen nuestros usuarios</h2>
        <p className="lead mb-4">Más de 10,000 mascotas felices y dueños tranquilos.</p>
        
        {/* Botón que dispara el modal */}
        <button type="button" className="btn btn-primary btn-lg rounded-pill" data-bs-toggle="modal" data-bs-target="#testimonialModal">
          Ver Testimonios
        </button>

        {/* Modal */}
        <div className="modal fade" id="testimonialModal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold" id="modalLabel">Testimonios de Usuarios</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-start">
                <div className="mb-4">
                  <p className="fst-italic">"PetCare salvó a mi gato en una emergencia de madrugada. La videollamada fue rápida y precisa."</p>
                  <small className="text-primary fw-bold">- María y su gato 'Michi'</small>
                </div>
                <hr />
                <div>
                  <p className="fst-italic">"Nunca más olvido las vacunas de mi perro. La app lo hace todo por mí."</p>
                  <small className="text-primary fw-bold">- Carlos y su perro 'Rex'</small>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsModal;