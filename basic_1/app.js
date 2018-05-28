const StateMachine = require('javascript-state-machine');
const states       = require('./states.js');

global.profile = {
  dni    : '33295515',
  salary : 10000,
  sex    : 'M',
  state  : 'init',
  amount : 3000
};

global.creditsQeue = [];

var fsm = new StateMachine({  
  init:'start',
  transitions: [
    { name: 'step',  from: 'start',   to: 'record' },
    { name: 'step',  from: 'record',  to: 'analize' },
    { name: 'step',  from: 'analize', to: 'acept' },
    { name: 'step',  from: 'analize', to: 'reject' }
  ],methods:{
    onStart   : states.onStart,
    onRecord  : states.onRecord,
    onAnalize : states.onAnalize,
    onFinish  : states.onFinish
  }
});



/*
            step                step                step
  Start ------------> Record ----------> Analize ----------> Acept
                                            |
                                            + -------------> Reject

*/

//When is the first state.
if (fsm.is('start'))
  fsm.step();

if (fsm.is('record'))
  fsm.step();