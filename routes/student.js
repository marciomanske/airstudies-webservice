/**
 * Created by marciomanske on 2017-02-06.
 */

var express = require('express');
var router = express.Router();

var config = require("../config/config");
var BASE_SERVICE_URL = config.baseServiceUrlStudent + "/student";

var RouterBuilder = require("./RouterBuilder");
var routerBuilder = new RouterBuilder();
routerBuilder.build(router, BASE_SERVICE_URL);

router.get("/byname/:name", function(req, res) {

    var params = [{
        value: req.params.name,
        operation: 4,
        attributeName: "name",
        like: true
    }];

    routerBuilder.executePost(BASE_SERVICE_URL + "/list", params, res);

});

module.exports = router;
