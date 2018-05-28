const fsmStart = (lifecycle)=>{

  //console.log('state:',lifecycle.transition,'from:',lifecycle.from,'to:',lifecycle.to);
  console.log('-> State machine ready...');

}

const fsmRecord = (lifecycle)=>{  
  
  global.creditsQeue[global.profile] = global.profile;
  console.log('-> Saved request in qeue.');  

}

const fsmAnalize = (fsm)=>{
  console.log('-> Analizing profile.'); 
}

const fsmFinish = (fsm)=>{
  console.log('->'); 
}

module.exports.onStart   = fsmStart;
module.exports.onRecord  = fsmRecord;
module.exports.onAnalize = fsmAnalize;
module.exports.onFinish  = fsmFinish;
