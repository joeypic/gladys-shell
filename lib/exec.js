const Promise = require('bluebird');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = function (params){
  
var command = params.deviceType.identifier;
if((typeof command != 'undefined') && command != null)

  return Promise.resolve(command)
  
.then((command) => {
    sails.log.debug('commande :' + command);
     return exec(command);
      exec(command);
    
  })
}
