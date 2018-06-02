const columna = (c)=>{

  switch(c){
    case '+': return 1;
              break;
    case '-': return 2;
              break;
    default : return 0;
              break;
  }

}

//Matriz de transiciones
const transiciones = [
  [2,1,1],
  [2,3,3],
  [2,3,3],
  [3,3,3]
];

const reconocedor = (cadena)=>{

  let estadoActual = 0;
  let caracter     = cadena[0];

  for (let i=0;i<=cadena.length-1;i++){
    estadoActual = transiciones[estadoActual][columna(caracter)];
    caracter     = cadena[i];
  }

  if (estadoActual==2)
    return 1;
  else
    return 0;

}

console.log('-1234454654654',reconocedor('-1234454654654'));// -> 1
console.log('+1234454654654',reconocedor('+1234454654654'));// -> 1
console.log('d1234454654654',reconocedor('d1234454654654'));// -> 0
console.log('f1234454654654',reconocedor('f1234454654654'));// -> 0