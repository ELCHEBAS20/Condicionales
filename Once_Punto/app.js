'use strict';


let Kilometro = parseFloat(prompt('Por favor ingresar la distancia recorrida de los kilometros del vehiculo: '));

let KmsRecorrido = 0, PrecioKilometro = 0, LtsConsumido = 0;
let TotalPagar = 0;

let GetTotalPagarAuto = (Km, Tipo) => {

  if (Tipo > 0 && Tipo <= 3) {
    if (Tipo == 1) {
      PrecioKilometro += 0.20;
    } else if (Tipo == 2) {
      PrecioKilometro += 0.10;
    } else if (Tipo == 3) {
      PrecioKilometro += 0.5;
    } else {
      PrecioKilometro = -1;
    }
  } else {
    return `valor no valido por ello todo queda en: ${TotalPagar}`;
  }

  if (PrecioKilometro != -1) {
    KmsRecorrido += Km;
    const Litros = parseInt(prompt('Por favor ingrese los litros'));

    if (Litros > 0 && Litros <= 100) {
      LtsConsumido += 5;
    } else if (Litros > 100) {
      LtsConsumido += 10;
    } else {
      return `valor no valido por ello todo queda en: ${TotalPagar}`;
    }
    TotalPagar = (PrecioKilometro * Kilometro) + LtsConsumido; // formular a realizar.
  }

  return TotalPagar;
}

if (Kilometro >= 1) {
  const TipoAutomovil = parseInt(prompt('1.Coche\n2.Moto\n3.Autobus'));
  console.log(GetTotalPagarAuto(Kilometro, TipoAutomovil));
  console.log('Mu bien')
} else {
  console.log('Valor de Km no valido,revisa por favor.');
}



