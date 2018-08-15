  const Promise = require('bluebird');
  var exec = require('child_process').exec;

  module.exports = function (params){
	  
	var commande = params.deviceType.identifier;
	
    return Promise.resolve(commande)
	  
.then((commande) => {
			sails.log.debug('commande :' + commande);
			if((typeof commande != 'undefined') && commande != null)
				exec(commande);
			
    }).catch((err) => {sails.log.debug('erreur : ' + commande + ' identifier')});
}
