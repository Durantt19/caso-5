import React, { useState, useEffect } from 'react';

const CrudMascotas = () => {
  // Estado para la lista de mascotas
  const [mascotas, setMascotas] = useState([]);
  
  // Estado para el formulario
  const [formData, setFormData] = useState({ id: '', nombre: '', especie: '', edad: '' });
  
  // Estado para saber si estamos editando
  const [isEditing, setIsEditing] = useState(false);

  // Cargar datos iniciales (simulando una base de datos con localStorage)
  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem('mascotasPetCare'));
    if (datosGuardados && datosGuardados.length > 0) {
      setMascotas(datosGuardados);
    } else {
      // Datos de ejemplo
      setMascotas([
        { id: 1, nombre: 'Max', especie: 'Perro', edad: '3' },
        { id: 2, nombre: 'Luna', especie: 'Gato', edad: '2' }
      ]);
    }
  }, []);

  // Guardar en localStorage cada vez que el arreglo 'mascotas' cambie
  useEffect(() => {
    localStorage.setItem('mascotasPetCare', JSON.stringify(mascotas));
  }, [mascotas]);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Crear o Actualizar mascota
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.especie || !formData.edad) return; // Validación básica

    if (isEditing) {
      // Actualizar
      const mascotasActualizadas = mascotas.map((m) =>
        m.id === formData.id ? formData : m
      );
      setMascotas(mascotasActualizadas);
      setIsEditing(false);
    } else {
      // Crear
      const nuevaMascota = { ...formData, id: Date.now() }; // ID generado por timestamp
      setMascotas([...mascotas, nuevaMascota]);
    }
    // Limpiar formulario
    setFormData({ id: '', nombre: '', especie: '', edad: '' });
  };

  // Preparar edición
  const handleEdit = (mascota) => {
    setFormData(mascota);
    setIsEditing(true);
  };

  // Borrar mascota
  const handleDelete = (id) => {
    const mascotasFiltradas = mascotas.filter((m) => m.id !== id);
    setMascotas(mascotasFiltradas);
  };

  // Cancelar edición
  const handleCancel = () => {
    setFormData({ id: '', nombre: '', especie: '', edad: '' });
    setIsEditing(false);
  };

  return (
    <div className="container py-5 mt-5">
      <h2 className="fw-bold mb-4 text-center">Panel de Gestión de Mascotas</h2>
      
      <div className="row">
        {/* Formulario (Columna izquierda) */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">{isEditing ? 'Editar Mascota' : 'Registrar Nueva Mascota'}</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Especie</label>
                  <select className="form-select" name="especie" value={formData.especie} onChange={handleChange} required>
                    <option value="">Selecciona...</option>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                    <option value="Ave">Ave</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Edad (años)</label>
                  <input type="number" className="form-control" name="edad" value={formData.edad} onChange={handleChange} required />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className={`btn ${isEditing ? 'btn-success' : 'btn-primary'}`}>
                    {isEditing ? 'Guardar Cambios' : 'Registrar Mascota'}
                  </button>
                  {isEditing && (
                    <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                      Cancelar
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Tabla (Columna derecha) */}
        <div className="col-md-8">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title mb-3">Mis Mascotas Registradas</h5>
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Nombre</th>
                      <th>Especie</th>
                      <th>Edad</th>
                      <th className="text-end">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mascotas.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center text-muted">No hay mascotas registradas.</td>
                      </tr>
                    ) : (
                      mascotas.map((mascota) => (
                        <tr key={mascota.id}>
                          <td className="fw-bold">{mascota.nombre}</td>
                          <td>{mascota.especie}</td>
                          <td>{mascota.edad} años</td>
                          <td className="text-end">
                            <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(mascota)}>
                              Editar
                            </button>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(mascota.id)}>
                              Borrar
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrudMascotas;