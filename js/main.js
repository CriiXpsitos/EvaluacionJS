// Creamos un objeto que almacena la información de los contadores
const counters = [
  { id: 'contar', incrementId: 'incre', decrementId: 'decreme', compraId: 'compra', count: 0, precio:1500},
  { id: 'contar2', incrementId: 'incre2', decrementId: 'decreme2', compraId: 'compra2', count: 0, precio:1500},
  { id: 'contar3', incrementId: 'incre3', decrementId: 'decreme3', compraId: 'compra3', count: 0, precio:1500 },
  { id: 'contar4', incrementId: 'incre4', decrementId: 'decreme4', compraId: 'compra4', count: 0, precio:1500 },
  { id: 'contar5', incrementId: 'incre5', decrementId: 'decreme5', compraId: 'compra5', count: 0, precio:1500 },
  { id: 'contar6', incrementId: 'incre6', decrementId: 'decreme6', compraId: 'compra6', count: 0, precio:1500 },

];

// Función genérica para manejar el incremento y decremento de contadores
function manejarContador(action, index) {
  const { count, id } = counters[index];
  const contadorElement = document.getElementById(id);

  if (action === 'incrementar') {


    counters[index].count++;
    counters[index].precio *= counters[index].count;



  
  } else if (action === 'decrementar' && count > 0) {

    counters[index].count--;
    counters[index].precio /= counters[index].count-- ;


  }


  contadorElement.innerHTML = counters[index].count;
}

// Agregamos event listeners para todos los contadores
counters.forEach((counter, index) => {
  const incrementButton = document.getElementById(counter.incrementId);
  const decrementButton = document.getElementById(counter.decrementId);
  const compraButton = document.getElementById(counter.compraId);

  incrementButton.addEventListener('click', () => manejarContador('incrementar', index));
  decrementButton.addEventListener('click', () => manejarContador('decrementar', index));

  // Agrega lógica para el botón de compra si es necesario
  if (compraButton) {
    compraButton.addEventListener('click', () => {
      // Lógica para la acción de compra
      console.log(`Compra realizada para contador ${index + 1}`);
    });
  }
});
  


        
