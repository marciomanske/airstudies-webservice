/**
 * Created by marciomanske on 2017-02-06.
 */

var express = require('express');
var router = express.Router();
var config = require("../config/config");
var BASE_SERVICE_URL = config.baseServiceUrlProperty + "/property";

var RestService = require("../services/RestService");
var restService = new RestService();


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

    restService.execute(serviceConfig, res);
});

router.put("/update", function(req, res) {
    var serviceConfig = {url: BASE_SERVICE_URL + "/update", body: req.body, method: "put"};

    restService.execute(serviceConfig, res);
});

module.exports = router;
