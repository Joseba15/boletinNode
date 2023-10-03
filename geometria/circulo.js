let area = (radio) =>  {

    if (radio <= 0) {
        return "El radio debe ser un valor positivo.";
    }
    
    const area = Math.PI * Math.pow(radio, 2);
    return area;
};


let circunferencia = (radio) => {

    if (radio <= 0) {
        return "El radio debe ser un valor positivo.";
    }
    
    const circunferencia  = 2 * Math.PI * radio;
    return circunferencia ;
};


module.exports={area,circunferencia}