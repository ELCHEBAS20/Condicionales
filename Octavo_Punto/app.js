'use strict';

const notaFinal = parseInt(prompt('¿Ingresar nota final?'), 0);

/**Valido el rango con una exepcion pequeña. */
try {
  if (notaFinal >= 1 && notaFinal <= 10) {
    alert(validarNota(notaFinal));
  } else {
    throw Error('Numero de rango no valido.');
  }

} catch (err) {
  alert(err)
}

function validarNota(nota) {
  if (nota < 6) {
    return "Reprobado";
  } else if (nota >= 6 && nota <= 8) {
    return "Regular";
  } else if (nota == 9) {
    return "Bien";
  }
  return "Excelente!! ";
}