/**
 * Created by marciomanske on 2017-02-14.
 */


var express = require('express');
var router = express.Router();
var config = require("../config/config");
var BASE_SERVICE_URL = config.baseServiceUrlContract + "/contract";
var RestService = require("../services/RestService");
var restService = new RestService();



var RouterBuilder = require("./RouterBuilder");
new RouterBuilder().build(router, BASE_SERVICE_URL);

router.post("/reservation", function(req, res) {
    var serviceConfig = {url: BASE_SERVICE_URL+"/reservation", body: req.body, method: "post"};
    restService.execute(serviceConfig, res);
});

router.put("/reservation", function(req, res) {
    var serviceConfig = {url: BASE_SERVICE_URL+"/reservation", body: req.body, method: "put"};
    restService.execute(serviceConfig, res);
});

router.get("/:contractId/:reservationId", function (req, res) {


    var serviceConfig = {url: BASE_SERVICE_URL+"/reservation" + "/" + req.params.contractId + "/" + req.params.reservationId, body: null, method: "get"};

    restService.execute(serviceConfig, res);

});


module.exports = router;
