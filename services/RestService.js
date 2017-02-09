/**
 * Created by marciomanske on 2017-02-08.
 */

var RestCall = require("../microservices/restcall");
var restCall = new RestCall();
var RestService = function() {

    return {
        execute: function(serviceConfig, response) {
            restCall.executeCall(serviceConfig, function(error, result) {

                if (error) {
                    error.status = 2;
                    response.send(error.message);
                    return;
                }
                response.json({status: 1, result: result});
            });
        }
    }

};


module.exports = RestService;