const moment = require('moment');

// con este paquete podemos hacer varias funcionalidades con las fechas. En este caso, vamos a obtener el dia de una semana 

let obtenerDia = () => {
    const fecha = moment('2023-10-31');
    const diaSemana = fecha.format('dddd'); 
    console.log(diaSemana) 
}

module.exports={obtenerDia}