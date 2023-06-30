'use strict';


let OpcionU = parseInt(prompt('A continuacion se mostrara los tres niveles de educacion superios: \n1.Course: $4999 MXN\n2.Carrera $3999 MXN\n3.Master: $2999 MXN'));
const Valores = [4999, 3999, 2999];
const Becas = [0.20, 0.15, 0.50];
const MesesTotal = [2, 6, 12];
var valorInicial = 0, descuento = 0, carrera = 0;

const Valor_MensualCarrera = () => {

  if (OpcionU >= 1 && OpcionU <= 3) {
    valorInicial += Valores[OpcionU - 1];
    const IsBeca = prompt('Cuenta con alguna beca: S/N');
    if (IsBeca == "S") {
      let BecaValor = parseInt(prompt('1.Beca Facebook\n2.Beca Google\n3.Beca Jesua'));
      let isFlag = false;
      while (!(isFlag)) {
        if (BecaValor >= 1 && BecaValor <= 3) {
          descuento += Becas[BecaValor - 1];
          carrera += MesesTotal[BecaValor - 1];
          isFlag = true;
          break;
        } else {
          alert('No es el valor adecuado');
          isFlag = true;
        }
      }
    }

    let TotalDescuento = valorInicial * descuento.toFixed(2);
    let Descuento_Total = TotalDescuento.toFixed(1);
    alert('El descuento es el siguiente: ' + Descuento_Total);

    return Descuento_Total * 2;
    // TotalDescuento.toFixed(1)
  } else {
    alert('Valor no admitido..por favor ingresa un valor aceptable.');
    valorInicial = 0;
  }

  return valorInicial;
}

alert('El valor mensual con descuento es: ' + Valor_MensualCarrera());


