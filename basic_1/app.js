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
    { name: 'step',  from: 'analize', to: function(n){ return increaseCharacter(this.state, n || 1) }},
    { name: 'step',  from: 'acept',   to: 'finish' },
    { name: 'step',  from: 'reject',  to: 'finish' }
  ],methods:{
    onStart   : states.onStart,
    onRecord  : states.onRecord,
    onAcept   : states.onAcept,
    onReject  : states.onReject,
    onFinish  : states.onFinish
  }
});

function test(str, n) {
  console.log(str,n);
  return String.fromCharCode(str.charCodeAt(0) + n);
}

/*
            step                step                step
  Start ------------> Record ----------> Analize ----------> Acept  ----->
                                            |                            | -----> Finish
                                            + -------------> Reject ----->

*/

//When is the first state.
if (fsm.is('start'))
  fsm.step();

if (fsm.is('record'))
  fsm.step();

if (fsm.is('analize'))
  fsm.step();