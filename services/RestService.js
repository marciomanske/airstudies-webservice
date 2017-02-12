/**
 * Created by marciomanske on 2017-02-08.
 */

var RestCall = require("../microservices/restcall");
var restCall = new RestCall();
var RestService = function() {

    return {
        execute: function(serviceConfig, response, cb) {
            restCall.executeCall(serviceConfig, function(error, result) {

                if (error) {
                    error.status = 2;
                    response.send(error);
                    if (cb) {
                        cb(error);
                    }
                    return;
                }

                var resp = null;
                if (result.hasOwnProperty("result")) {
                    resp = result;
                    resp.status = 1;
                } else {
                    resp = {status: 1, result: result};
                }
                response.send(resp);
                if (cb) {
                    cb(null, resp);
                }

            });
        },

        executeNoSendResponse: function(serviceConfig, response, cb) {
            restCall.executeCall(serviceConfig, function(error, result) {

                cb(error, result);

            });
        }
    }

};

module.exports = RestService;