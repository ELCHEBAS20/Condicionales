'use strict';


let numero = parseInt(prompt('Ingrese numero: '));

if (ValidDivisible(numero)) {
  alert(`${numero} núm no es divisible entre 2`)
} else {
  alert(`${numero} núm  es divisible entre 2`)
}

function ValidDivisible(numero) {
  return numero % 2 != 0;
}