
precioTotal = 0;
const precios = [
  100,  // Precio de la máquina 1
  150,  // Precio de la máquina 2
  200,  // Precio de la máquina 3
  250,  // Precio de la máquina 4
  300,  // Precio de la máquina 5
  350   // Precio de la máquina 6
];




// Creamos un objeto que almacena la información de los contadores


const counters = [
    { id: 'contar', incrementId: 'incre', decrementId: 'decreme', compraId: 'compra', count: 0 },
    { id: 'contar2', incrementId: 'incre2', decrementId: 'decreme2', compraId: 'compra2', count: 0 },
    { id: 'contar3', incrementId: 'incre3', decrementId: 'decreme3', compraId: 'compra3', count: 0 },
    { id: 'contar4', incrementId: 'incre4', decrementId: 'decreme4', compraId: 'compra4', count: 0 },
    { id: 'contar5', incrementId: 'incre5', decrementId: 'decreme5', compraId: 'compra5', count: 0 },
    { id: 'contar6', incrementId: 'incre6', decrementId: 'decreme6', compraId: 'compra6', count: 0 },

  ];

  function calcularValorTotal() {
    let total = 0;
    counters.forEach((counter, index) => {
      total += precios[index] * counter.count;
    });
    return total;
  }
  
  // Función genérica para manejar el incremento y decremento de contadores
  function manejarContador(action, index) {
    const { count, id } = counters[index];
    const contadorElement = document.getElementById(id);
  
    if (action === 'incrementar') {
      counters[index].count++;
    } else if (action === 'decrementar' && count > 0) {
      counters[index].count--;
    }
  
    contadorElement.innerHTML = counters[index].count;

    contadorElement.innerHTML = counters[index].count;
    actualizarValorTotal();
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
        if (counters[index].count > 0) {
          mostrar(index);
        }
      });
    }
  });
  
  // agreagamos un switch para que cada comprarBoton me muestre un precio distinto en un modulo de html 
  function mostrar(index) {
    const precios = [100, 150, 200, 250, 300, 350];

    switch (index) {
        case 0:
            precioTotal = (precios[index] * counters[index].count) ;
            document.getElementById('resultado').innerHTML = `Precio Total es: ${precioTotal}`;
            document.getElementById('respuesta').style.display = "block";
            break;
        case 1:
            precioTotal = (precios[index] * counters[index].count) ;
            document.getElementById('resultado2').innerHTML = `Precio Total es: ${precioTotal}`;
            document.getElementById('respuesta2').style.display = "block";
            break;
        case 2:
            precioTotal = precios[index] * counters[index].count;
            document.getElementById('resultado3').innerHTML = `Precio Total es: ${precioTotal}`;
            document.getElementById('respuesta3').style.display = "block";
            break;
        case 3:
            precioTotal = (precios[index] * counters[index].count) ;
            document.getElementById('resultado4').innerHTML = `Precio Total es: ${precioTotal}`;
            document.getElementById('respuesta4').style.display = "block";
            break;
        case 4:
            precioTotal = (precios[index] * counters[index].count) ;
            document.getElementById('resultado5').innerHTML = `Precio Total es: ${precioTotal}`;
            document.getElementById('respuesta5').style.display = "block";
            break;
        case 5:
            precioTotal = precios[index] * counters[index].count;
            document.getElementById('resultado6').innerHTML = `Precio Total es: ${precioTotal}`;
            document.getElementById('respuesta6').style.display = "block";
            break;
        default:
            return 'No hay precio para este contador';
    }
}
function actualizarValorTotal() {
  const valorTotalElement = document.getElementById('valorTotal');
  const total = calcularValorTotal();
  valorTotalElement.innerHTML = `Valor Total: ${total}`;
}

const valorTotal = calcularValorTotal();
document.getElementById('valorTotal').innerHTML = `Valor Total: ${valorTotal}`;
