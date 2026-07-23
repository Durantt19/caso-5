import React, { useState, useEffect } from 'react';
import { apiSubscribe } from '../services/api'; // Importamos el servicio simulado

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Hook useEffect: Limpiar el mensaje de éxito después de 4 segundos
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación de formulario
    if (!email) {
      setError('El correo electrónico es requerido.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, ingresa un correo válido.');
      return;
    }

    // Si pasa validación:
    setError('');
    
    // Simulamos la llamada a un servicio
    const response = await apiSubscribe(email);
    if (response.status === 200) {
      setSuccess(true);
      setEmail('');
    }
  };

  return (
    <section className="py-5 bg-primary text-white text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <h2 className="fw-bold mb-3">Únete a nuestro Newsletter</h2>
            <p className="mb-4">Recibe consejos semanales sobre el cuidado y nutrición de tu mascota.</p>
            
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
              <div className="input-group mb-2">
                <input 
                  type="text" 
                  className={`form-control ${error ? 'is-invalid' : ''}`} 
                  placeholder="Tu correo electrónico" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-dark px-4" type="submit">Suscribirme</button>
              </div>
              {error && <div className="text-warning small text-start w-100">{error}</div>}
              {success && <div className="text-light fw-bold small text-start w-100 mt-2">¡Gracias por suscribirte!</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;