/* -----------------------------
    Creado por Damián Cipolat
  ------------------------------ */

//Enum de estados.
const estados = {ENCENDIDO:true, APAGADO:false};

//Estado inicial.
let estadoInicial = estados.APAGADO;

//Temperatura.
let tempSensor = 0;

//Temperatura actual al azar.
const tempActualRandom = ()=>{

  let max = 100;
  let min = 10;

  return Math.round(Math.random()*(max-min)+min);

}

//Función de iteración.
const bucleCheck = ()=>{

  //Traigo la tempertaura actual.
  tempSensor = tempActualRandom();

  //Prender.
  if ((estadoInicial==estados.APAGADO)&&(tempSensor<50)){

    encender();
    estadoInicial = estados.ENCENDIDO;

  }

  //Apagar.
  if ((estadoInicial==estados.ENCENDIDO)&&(tempSensor>85)){

    apagar();
    estadoInicial = estados.APAGADO;
    
  }


}

//Funciones de cada transición.
const apagar = ()=>{

  console.log('---> Apagar!');

}

const encender = ()=>{

  console.log('---> Encender!');

}

//Bucle cada 3 segundos.
let bucle = setInterval(bucleCheck, 2000);

//Inicio.
console.log('> Ejemplo maquina de estado - sensor de tempertaura');
console.log('');
bucleCheck();