/**
 * Created by marciomanske on 2017-02-14.
 */

var RestService = require("../services/RestService");


var RouterBuilder = function () {
    var restService = new RestService();

    return {

        executePost: function(url, body, response) {
            var serviceConfig = {url: url, body: body, method: "post"};
            restService.execute(serviceConfig, response);

        },

        build: function (router, baseServiceURL) {

            router.get("/list/:listParams", function (req, res) {

                if (req.params.listParams) {
                    var serviceConfig = {url: baseServiceURL + "/list", body: req.params.listParams, method: "post"};
                    restService.execute(serviceConfig, res);
                }

            });

            router.get("/:id", function (req, res) {


                var serviceConfig = {url: baseServiceURL + "/" + req.params.id, body: null, method: "get"};

                restService.execute(serviceConfig, res);

            });

            router.post("/new", function (req, res) {
                var serviceConfig = {url: baseServiceURL, body: req.body, method: "post"};

                restService.execute(serviceConfig, res);
            });

            router.put("/update", function (req, res) {
                var serviceConfig = {url: baseServiceURL, body: req.body, method: "put"};

                restService.execute(serviceConfig, res);
            });


        }

    }


};

module.exports = RouterBuilder;



