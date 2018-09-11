const Promise = require('bluebird');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = function (params) {

    var command = params.deviceType.identifier;

    if ((typeof command === 'undefined') || command === null || command === '') {
        return Promise.reject(new Error('gladys-shell: This device does not have any command to execute.'));
    } else {
        sails.log.debug('gladys-shell: Executing command ' + command);
        return exec(command);
    }
}
