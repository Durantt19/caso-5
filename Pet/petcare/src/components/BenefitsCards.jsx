import React from 'react';

const BenefitsCards = () => {
  const benefits = [
    { title: "Atención 24/7", desc: "Consultas de emergencia en cualquier momento del día.", icon: "🩺" },
    { title: "Historial Médico", desc: "Lleva el registro de vacunas y tratamientos en la nube.", icon: "📋" },
    { title: "Comunidad", desc: "Conecta con otros dueños de mascotas cerca de ti.", icon: "🐶" }
  ];

  return (
    <section id="beneficios" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Beneficios de PetCare</h2>
        <div className="row g-4">
          {benefits.map((b, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0 text-center p-4">
                <div className="card-body">
                  <div className="display-4 mb-3">{b.icon}</div>
                  <h5 className="card-title fw-bold">{b.title}</h5>
                  <p className="card-text text-muted">{b.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsCards;