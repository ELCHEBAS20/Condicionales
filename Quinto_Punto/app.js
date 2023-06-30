'use strict';

var ArrayNumber = [];

function main_program() {
  for (let index = 0; index < 2; ++index) {
    let numero_ingreso = parseInt(prompt(`¿Ingrese el numero por favor de la pos ${index + 1}`));
    ArrayNumber.push(numero_ingreso);
  }
}

function ValNumero_Menor(numero_array) {
  return numero_array[0] > numero_array[1] ? numero_array[1] : numero_array[0];
}

main_program();
alert("El numero menor es: " + ValNumero_Menor(ArrayNumber));

