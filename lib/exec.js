const Promise = require('bluebird');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = function (params){
  
var commande = params.deviceType.identifier;
if((typeof commande != 'undefined') && commande != null)

  return Promise.resolve(commande)
  
.then((commande) => {
    sails.log.debug('commande :' + commande);
     return exec(command);
      exec(commande);
    
  })
}
