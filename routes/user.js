var express = require('express');
var router = express.Router();


var config = require("../config/config");
var TokenUtil = require("../microservices/tokenutil");
var RestCall = require("../microservices/restcall");
var MailService = require("../services/MailService");
var restCall = new RestCall();
var fs = require("fs");

var tokenUtil = new TokenUtil();

var BASE_SERVICE_URL = config.baseServiceUrlUser + "/user";

var RestService = require("../services/RestService");
var restService = new RestService();



//User authentication
router.post("/authenticate", function(req, res) {

  var serviceConfig = {url: BASE_SERVICE_URL + "/authenticate", body: req.body, method: "post"};

  restCall.executeCall(serviceConfig, function(error, result) {

    if (error) {
      error.status = 2;
      res.send(error);
      return;
    }
    var token = tokenUtil.createToken(result);
    res.json({status: 1, token: token, user: result});

  });


});

router.post("/validatetoken", function(req, res) {

  if (req.body.token) {
      var isPasswordRecovery = false;
      if (req.body.isPasswordRecovery) {
          isPasswordRecovery = req.body.isPasswordRecovery;
      }
      tokenUtil.validateToken(req.body.token,isPasswordRecovery, function(error, result) {
        if (error) {
            error.status = 2;
            res.send(error)
        } else {
            delete result.password;
            var token = tokenUtil.createToken(result);
            res.json({status: 1, token: token, user: result});
        }
      });
      return;
  }
  res.send({status: 2, message: "Invalid token"});


});


router.get("/list/:listParams", function(req, res) {

    if (req.params.listParams) {

        var serviceConfig = {url: BASE_SERVICE_URL + "/list", body: req.params.listParams, method: "post"};

        restService.execute(serviceConfig, res);
    }

});

router.get("/:id", function(req, res) {


    var serviceConfig = {url: BASE_SERVICE_URL + "/" + req.params.id, body: null, method: "get"};

    restService.execute(serviceConfig, res);

});


router.post("/new", function(req, res) {
    var serviceConfig = {url: BASE_SERVICE_URL + "/new", body: req.body, method: "post"};

    restService.execute(serviceConfig, res, function(error, result) {
        if (!error) {
            var mailService = new MailService();
            var token = tokenUtil.createToken({id: result.result.id, name: result.result.name, username: result.result.username});
            mailService.getEmailCreatePasswordContent(result.result.name, config.recoveryURL+"?token="+token, function(error, content) {
                var emailConfig = {to: result.result.email,
                    from: "airstudies.contact@gmail.com",
                    subject: "Create Password",
                    text: null,
                    attachment: [
                        {data: content, alternative:true, type: "text/html"},
                        {path: __dirname+"/../html/logoAS.png", type:"image/png", headers:{"Content-ID":"<logoAS>"}}
                    ]};

                mailService.sendEmail(emailConfig, function(err, result) {
                    if (err) {
                        console.log(err.message);
                    }
                });

            });
        }
    });
});

router.put("/update", function(req, res) {
    var serviceConfig = {url: BASE_SERVICE_URL + "/update", body: req.body, method: "put"};

    restService.execute(serviceConfig, res);
});



router.put("/updatePassword", function(req, res) {
    var serviceConfig = {url: BASE_SERVICE_URL + "/updatePassword", body: req.body, method: "put"};

    restService.execute(serviceConfig, res);
});

router.post("/recoverpassword/:email", function(req, res) {

    if (req.params.email) {

        var params = [{value: req.params.email,
            operation: 1,
            attributeName: "email",
            like: false}];



        var serviceConfig = {url: BASE_SERVICE_URL + "/list", body: params, method: "post"};

        restService.executeNoSendResponse(serviceConfig, res, function(error, result) {

            if (error) {
                console.log(error);
                error.status = 2;
                res.send(error);
                return;
            }

            if (result.length === 0) {
                res.json({status: 2, message: "User not found!"});
                return;
            }
            var user = result[0];
            if (user.active === 0) {
                res.json({status: 2, message: "User is not active!"});
                return;

            }
            var token = tokenUtil.createToken({id: user.id, name: user.name, username: user.username});

            var mailService = new MailService();

            mailService.getEmailRecoveryContent(user.name, config.recoveryURL+"?token="+token, function(error, content) {
                var emailConfig = {to: user.email,
                    from: "airstudies.contact@gmail.com",
                    subject: "Password Recovery",
                    text: null,
                    attachment: [
                        {data: content, alternative:true, type: "text/html"},
                        {path: __dirname+"/../html/logoAS.png", type:"image/png", headers:{"Content-ID":"<logoAS>"}}
                    ]};

                mailService.sendEmail(emailConfig, function(error, result) {
                    if (error) {
                        res.send(error.message);
                    } else {
                        res.json(result);
                    }
                });

            });



            //res.json({status: 1, result: {id: user.id, name: user.name, username: user.username}});


        });
    }

});


module.exports = router;
