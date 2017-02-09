/**
 * Created by marciomanske on 2016-12-19.
 */
var jwt = require("jwt-simple");
var config = require("../config/config");

var TokenUtil = function() {
    var readToken = function(token) {
        var obj = jwt.decode(token, config.secret);
        if (obj) {
            return obj;
        }
        return null;
    };

    return {

        createToken: function(object) {
            object.lastUpdate = new Date().getTime();
            var token = jwt.encode(object, config.secret);

            return token;
        },

        validateToken: function(token,isPasswordRecovery, callback) {
            var obj = readToken(token);
            if (obj) {
                var lastUpdate = new Date(obj.lastUpdate);
                var now = new Date();
                var tokenLifeInMillis = config.tokenLife * 60 * 1000;
                if (isPasswordRecovery) {
                    tokenLifeInMillis = config.tokenLifeForRecovery * 60 * 1000;
                }
                if (now.getTime() - tokenLifeInMillis < lastUpdate.getTime()) {
                    callback(null, obj);
                    return;
                }
                callback({message: "Token expired"});
            } else {
                callback({message: "Invalid token"});
            }

        }

    }

};

module.exports = TokenUtil;
