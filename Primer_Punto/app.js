'use strict';

let Pregunta = prompt('¿Eres bellisimo/a?');

function ValidarBelleza(Pregunta) {
  if (Pregunta == "SI") {
    return true;
  }
  return false;
}

if (ValidarBelleza(Pregunta)) {
  alert('Es bello el muchacho.');
} else {
  alert('No es bello el muchaacho');
}