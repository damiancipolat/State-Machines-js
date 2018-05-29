//Door example by Damian Cipolat
const StateMachine = require('javascript-state-machine');

const fsm = new StateMachine({  
  init:'off',
  transitions: [
    { name: 'step', from: 'off', to: 'on' },
    { name: 'step', from: 'off', to: 'off' },
    { name: 'step', from: 'on',  to: 'off' },
    { name: 'step', from: 'on',  to: 'on' }
  ]
});