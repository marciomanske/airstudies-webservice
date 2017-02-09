/**
 * Created by marciomanske on 2017-01-27.
 */
var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://airstudies.contact%40gmail.com:botafogo123@smtp.gmail.com');

var MailService = require("../services/MailService");

var mailService = new MailService();

mailService.getEmailRecoveryContent("Márcio Manske", "http://www.google.com.br", function(error, content) {

// setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Air Studies" <airstudies.contact@gmail.com>', // sender address
        to: 'mmanske@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ?', // plaintext body
        html: content // html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
});


