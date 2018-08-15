  const Promise = require('bluebird');
  var exec = require('child_process').exec;
  module.exports = function (params){
	  console.log('params', params) 
	var cmd = params.deviceType.identitifer;
    return Promise.resolve()
	  
.then((cmd) => {
			sails.log.debug('commande :' + cmd);
			if((typeof cmd != 'undefined') && cmd != null)
				exec(cmd);
			
    }).catch((err) => {sails.log.debug('erreur : ' + cmd + ' identifier')});
}
