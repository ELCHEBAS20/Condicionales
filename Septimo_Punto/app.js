'use strict';

const Dias_Semana = [
  { dia: 'lunes' },
  { dia: 'martes' },
  { dia: 'miercoles' },
  { dia: 'jueves' },
  { dia: 'viernes' },
  { dia: 'sabado' },
  { dia: 'domingo' }
]

function MainProgram() {
  const strlDia = prompt('Ingresar un dia de la semana').toLowerCase();
  let rstFilter = Dias_Semana.filter(item => item.dia.toLowerCase() == strlDia);

  if (rstFilter.length != 0) {
    if (rstFilter[0].dia.toLowerCase() == 'lunes') {
      console.log('Hay que perezaaaaaaa!');
    } else if (rstFilter[0].dia.toLowerCase() == 'viernes') {
      console.log('Yupi llego fin de semana.');
    } else if (rstFilter[0].dia.toLowerCase() == 'sabado' || rstFilter[0].dia.toLowerCase() == 'domingo') {
      console.log('Bueno llego el FDS.');
    } else {
      console.log('Es un dia muy normal..');
    }
  } else {
    alert('No hay valores..');
  }


}

MainProgram();