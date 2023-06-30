'use strict';

var opcion;
var salir = false;

do {

  opcion = parseInt(prompt('1.El helado sin topping.\n2.El topping de oreo .\n3.El topping de KitKat  15 MXN.\n4.El topping de brownie\n5.Salir del aplicativo.'));

  switch (opcion) {
    case 1:
      alert(getValorHelado('50 MXN'));
      break;
    case 2:
      alert(getValorHelado('10 MXN'));
      break;
    case 3:
      alert(getValorHelado('15 MXN'));
      break;
    case 4:
      alert(getValorHelado('20 MXN'));
      break;
    case 5:
      salir = true;
      alert('Adiossss,hasta una pronta ocasion.!');
      break;
    default:
      alert('no tenemos este topping, lo sentimos.');
      alert('Helado sin topping es: El helado sin topping cuesta 50 MXN ');
      break;
  }


} while (salir != true);


function getValorHelado(valor) {
  return valor;
}