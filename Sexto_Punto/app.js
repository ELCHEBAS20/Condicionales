'use strict';


const len = 3;
var ArrayNumber = [];

for (let index = 0; index < len; index++) {
  let numero_ingreso = parseInt(prompt(`¿Ingrese el numero por favor de la pos ${index + 1}`));

  if (ArrayNumber.includes(numero_ingreso)) {
    index--; // Si el numero esta incluido ya no podra hacer PUSH al array y se devolvera.
  } else {
    ArrayNumber.push(numero_ingreso);
  }
}

/**Metodo 1 */

/**Inicializamos con la primera pos */
let aux = ArrayNumber[0];
for (let index = 0; index < ArrayNumber.length; index++) {
  if (ArrayNumber[index] > aux) {
    aux = ArrayNumber[index]; // si la condiicon se cumple ya la pos 0 ya no seria si ya pasaria a los iteradores correspondientes.
  }
}
console.log('Metodo 1: ', aux);

/** */
ArrayNumber.sort(); // Ordenamos y tomamos la ultima pocision que seria el orden de los numeros.
console.log('Metodo 2: ', ArrayNumber[ArrayNumber.length - 1]);




