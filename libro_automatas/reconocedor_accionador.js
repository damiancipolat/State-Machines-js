const tabla_trans = [
  [2,1,1],
  [2,3,3],
  [2,3,3],
  [3,3,3]  
];

const Columna = (c)=>{
  switch(c){
    case '+' : return 1;
               break;
    case '-' : return 2;
               break;    
    default  : return 0;
  }
}

const Valor = (s)=>{
  return (c-'0');
}

const AFD = (cadena) =>{

  let estado_actual = 0;
  let auxiliar      = 0;
  let signo         = 1;
  let pos           = 0;
  let run           = true;
  let caracter      = cadena[pos];

  while (run){
    estado_actual = tabla_trans[estado_actual][Columna(caracter)];

    //Este case agrega la capacidad de ejecutar acciones en cada estado.
    switch(estado_actual){
      case 1 : {
              if (caracter=='-')
                signo = -1;
            }
            break;
      case 2 : auxiliar = 10*auxiliar+valor(caracter);
               break;    
    }

    pos++;

    caracter = cadena[pos];

  }

  if (estado_actual==2)
    return 1;
  else
    return 0;

}

console.log(AFD('0001123'));    //1
console.log(AFD('11230000'));   //1
console.log(AFD('1123000F0'));  //0