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
    "baseServiceUrlUser": "http://sample-env-1.m8xiavyed3.us-west-2.elasticbeanstalk.com",
    "baseServiceUrlSchool": "http://sample-env-3.p3aphvcist.us-west-2.elasticbeanstalk.com",
    "baseServiceUrlStudent": "http://sample-env-2.ucky8aifar.us-west-2.elasticbeanstalk.com",
    "baseServiceUrlProperty": "http://sample-env-4.qeuvwtig8f.us-west-2.elasticbeanstalk.com",
    "baseServiceUrlContract": "",
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
