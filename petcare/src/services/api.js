const API_URL = '/api/mascotas';

// Cabeceras estrictas obligatorias por el servidor OpenResty de Inacode
const headersConfig = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

// 1. LEER TODAS LAS RESERVAS (CON CORRECCIÓN DE FORMATO ASÍNCRONO)
export const getReservasAPI = async () => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: headersConfig
    });
    
    if (!response.ok) throw new Error(`Error en el servidor: ${response.status}`);
    
    const resJSON = await response.json();
    console.log("🔍 Datos crudos recibidos de la API:", resJSON);
    
    // Si la API devuelve el arreglo directamente: [ {...}, {...} ]
    if (Array.isArray(resJSON)) {
      return resJSON;
    } 
    // Si la API lo devuelve envuelto en una propiedad "datos": { datos: [...] }
    else if (resJSON && resJSON.datos && Array.isArray(resJSON.datos)) {
      return resJSON.datos;
    }
    
    // Si la respuesta tiene otra estructura, intentamos buscar algún arreglo interno
    const posibleArreglo = Object.values(resJSON).find(val => Array.isArray(val));
    if (posibleArreglo) return posibleArreglo;

    return []; 
  } catch (error) {
    console.error("❌ Error al obtener datos de la API:", error);
    return [];
  }
};

// 2. CREAR UNA NUEVA RESERVA
export const createReservaAPI = async (payload) => {
  try {
    console.log("📤 Enviando datos de registro:", payload);
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: headersConfig,
      body: JSON.stringify(payload)
    });
    
    const data = await response.json();
    console.log("📥 Respuesta del servidor al crear:", data);
    
    if (!response.ok) {
      console.error("El servidor rechazó la creación:", data);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error("❌ Fallo de red al conectar con la API (Crear):", error);
    return null;
  }
};

// 3. ACTUALIZAR UNA RESERVA EXISTENTE
export const updateReservaAPI = async (id, payload) => {
  try {
    console.log(`✏️ Enviando actualización para el ID: ${id}`, payload);
    
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: headersConfig,
      body: JSON.stringify(payload)
    });
    
    const data = await response.json();
    console.log("📥 Respuesta del servidor al actualizar:", data);
    
    if (!response.ok) {
      console.error("El servidor rechazó la actualización:", data);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error("❌ Fallo de red al conectar con la API (Actualizar):", error);
    return null;
  }
};

// 4. ELIMINAR UNA RESERVA
export const deleteReservaAPI = async (id) => {
  try {
    console.log(`🗑️ Enviando solicitud de eliminación para el ID: ${id}`);
    
    const response = await fetch(`${URL_RESERVA || API_URL}/${id}`, {
      method: 'DELETE',
      headers: headersConfig
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ Error al conectar con la API (Eliminar):", error);
    return null;
  }
};

// 5. SIMULACIÓN REQUERIDA PARA EL COMPONENTE NEWSLETTER
export const apiSubscribe = (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, message: `Suscrito correctamente: ${email}` });
    }, 800);
  });
};