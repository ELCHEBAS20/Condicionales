'use strict';


let numero = parseInt(prompt('Ingrese numero: '));

if (ValidDivisible(numero)) {
  alert(`${numero} núm  es par `)
} else {
  alert(`${numero} núm no es par entre 2`)
}

function ValidDivisible(numero) {
  return numero % 2 == 0;
}