'use strict';

let numberStl = prompt('Ingrese el numero por favor').trim();


if (numberStl.length == 4) {
  if (numberStl.startsWith('1') && numberStl.endsWith('0')) {
    alert('Ganaste un premio');
  } else {
    alert('Lo sentimos, sigue participando')
  }
} else {
  alert('Lo sentimos, sigue participando')
}