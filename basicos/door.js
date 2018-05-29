//Door example by Damian Cipolat
const StateMachine = require('javascript-state-machine');

const fsm = new StateMachine({  
  init:'abierto',
  transitions: [
    { name: 'abrir',  from: 'abierto',   to: 'cerrado' },
    { name: 'cerrar', from: 'cerrado',   to: 'abierto' }
  ],methods:{
    onAbrir  : ()=>{console.log('-> Abriendo puerta');},
    onCerrar : ()=>{console.log('-> Cerrando puerta');}
  }
});

//If the door is open.
if (fsm.is('abierto'))
  fsm.abrir();

//If the door is closed.
if (fsm.is('cerrado'))
  fsm.cerrar();