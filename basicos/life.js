//Door example by Damian Cipolat
const StateMachine = require('javascript-state-machine');

const fsm = new StateMachine({  
  init:'work',
  transitions: [
    { name: 'step', from: 'work', to: 'home' },
    { name: 'step', from: 'home', to: 'work' },
    { name: 'step', from: 'home', to: 'bed' },
    { name: 'step', from: 'bed',  to: 'home' }
  ]
});