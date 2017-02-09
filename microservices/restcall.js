/**
 * Created by marciomanske on 2016-12-19.
 */

var Client = require('node-rest-client').Client;

var RestCall = function(baseServiceUrl) {

    var client = new Client();

    return {
        executeCall: function(serviceConfig,callback) {

            var args = {};
            args.headers = {"Content-Type": " application/json; charset=utf-8"};

            if (serviceConfig.body) {
                args.data = serviceConfig.body;
            }

            if (serviceConfig.pathParam) {
                args.path = configRestWS.pathParam;
            }
            if (serviceConfig.requestTimeout) {
                args.requestTimeout = configRestWS.requestTimeout;
            }
            if (serviceConfig.responseTimeout) {
                args.responseTimeout = configRestWS.responseTimeout;
            }

            var fcn = client[serviceConfig.method];

            var req = fcn(serviceConfig.url, args, function(data, response) {
                if (data.status === 1) {
                    callback(null, data.obj);
                } else {
                    callback({message: data.message});
                }
            });


            req.on('requestTimeout',function(req){
                console.log('request has expired');
                req.abort();
                callback({message: "Request timeout to " + serviceConfig.url});
            });

            req.on('responseTimeout',function(res){
                console.log('response has expired');
                callback({message: "Response timeout to " + serviceConfig.url});
            });

            req.on('error', function(err){
                console.log('request error',err);
                callback(err);
            });



        }
    }

};

module.exports = RestCall;
