//Door example by Damian Cipolat
const StateMachine = require('javascript-state-machine');

const fsm = new StateMachine({  
  init:'abierto',
  transitions: [
    { name: 'step', from: 'abierto',   to: 'cerrado' },
    { name: 'step', from: 'cerrado',   to: 'bloqueado' },
    { name: 'step', from: 'bloqueado', to: 'cerrado' },
    { name: 'step', from: 'cerrado',   to: 'abierto' }
  ],methods:{
    onAbierto   : ()=>{console.log('-> Abriendo puerta...');},
    onCerrado   : ()=>{console.log('-> Cerrando puerta...');},
    onBloqueado : ()=>{console.log('-> Bloqueando puerta...');}
  }
});

//If the door is open.
if (fsm.is('abierto'))
  fsm.step();

//If the door is closed.
if (fsm.is('cerrado'))
  fsm.step();

//If the door is locked.
if (fsm.is('bloqueado'))
  fsm.step();