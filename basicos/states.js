const fsmStart = (lifecycle)=>{

  //console.log('state:',lifecycle.transition,'from:',lifecycle.from,'to:',lifecycle.to);
  console.log('-> State machine ready...');

}

const fsmRecord = (lifecycle)=>{  
  
  global.creditsQeue[global.profile] = global.profile;
  console.log('-> Saved request in qeue.');  

}

const fsmFinish = (fsm)=>{
  console.log('-> END'); 
}

const fsmAcept = (fsm)=>{
  console.log('->'); 
}

const fsmReject = (fsm)=>{
  console.log('->'); 
}

const fsmAnalizeCredit = (a,b)=>{
	
	console.log('-> Analizing profile.'); 
	console.log('*',a,b);
	return 'acept';

}

module.exports.onStart   = fsmStart;
module.exports.onRecord  = fsmRecord;
module.exports.onAnalize = fsmAnalizeCredit;
module.exports.onFinish  = fsmFinish;
module.exports.onAcept   = fsmAcept;
module.exports.onReject  = fsmReject;