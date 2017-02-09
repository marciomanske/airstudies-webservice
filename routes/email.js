/**
 * Created by marciomanske on 2017-01-27.
 */

var express = require('express');
var router = express.Router();
var MailService = require("../services/MailService");

var mailService = new MailService();

router.post("/sendmail", function(req, res) {

    var emailConfig = {to: req.body.mailTo,
        from: "airstudies.contact@gmail.com",
        subject: req.body.subject,
        text: req.body.message,
        attachment: req.body.attachment};

    mailService.sendEmail(emailConfig, function(error, result) {
        if (error) {
            res.send(error.message);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;