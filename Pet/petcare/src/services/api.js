// Simulación de un servicio para la suscripción al newsletter
export const apiSubscribe = (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, message: `Suscrito correctamente: ${email}` });
    }, 800);
  });
};