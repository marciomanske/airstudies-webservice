/**
 * Created by marciomanske on 2016-12-19.
 */

//tokenLife -> Time in minutes to invalidate a token
module.exports = {
    "baseUrl": "/airstudies/services",
    "baseServiceUrlUser": "http://localhost:3334",
    "baseServiceUrlSchool": "http://localhost:3336",
    "baseServiceUrlStudent": "http://localhost:3337",
    "baseServiceUrlProperty": "http://localhost:3338",
    "secret": "AirStudiesSecretConfigFile8592",
    "tokenLife": 5,
    "tokenLifeForRecovery": 4320,
    "recoveryURL": "http://localhost:4200/lostpassword",
    "email" : {
        "user": "airstudies.contact",
        "password": "botafogo123",
        "host":    "smtp.gmail.com",
        "port":    465,
        "ssl":     true
    }
};