/**
 * Created by marciomanske on 2017-02-14.
 */


var express = require('express');
var router = express.Router();
var config = require("../config/config");
var BASE_SERVICE_URL = config.baseServiceUrlContract + "/contract";


var RouterBuilder = require("./RouterBuilder");
new RouterBuilder().build(router, BASE_SERVICE_URL);

module.exports = router;
