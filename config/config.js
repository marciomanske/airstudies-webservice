/**
 * Created by marciomanske on 2016-12-19.
 */

//tokenLife -> Time in minutes to invalidate a token

//Local
/*
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
    "createPasswordURL": "http://localhost:4200/createpassword",
    "email" : {
        "user": "airstudies.contact",
        "password": "botafogo123",
        "host":    "smtp.gmail.com",
        "port":    465,
        "ssl":     true
    }
};
*/
//AWS
module.exports = {
    "baseUrl": "/airstudies/services",
    //"baseServiceUrlUser": "http://sample-env-1.m8xiavyed3.us-west-2.elasticbeanstalk.com",
    "baseServiceUrlUser": "http://104.236.9.163:8080",
    "baseServiceUrlSchool": "http://104.236.9.163:8080",
    "baseServiceUrlStudent": "http://104.236.9.163:8080",
    "baseServiceUrlProperty": "http://104.236.9.163:8080",
    "baseServiceUrlContract": "http://104.236.9.163:8080",
    "secret": "AirStudiesSecretConfigFile8592",
    "tokenLife": 5,
    "tokenLifeForRecovery": 4320,
    "recoveryURL": "http://localhost:4200/lostpassword",
    "createPasswordURL": "http://localhost:4200/createpassword",
    "email" : {
        "user": "airstudies.contact",
        "password": "botafogo123",
        "host":    "smtp.gmail.com",
        "port":    465,
        "ssl":     true
    }
};
