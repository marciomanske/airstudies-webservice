/**
 * Created by marciomanske on 2017-01-27.
 */
var fs = require("fs");

var email = require("emailjs/email");
var config = require("../config/config");

var server = email.server.connect({

    user:    config.email.user,
    password:config.email.password,
    host:    config.email.host,
    port:    config.email.port,
    ssl:     config.email.ssl

});


var MailService = function() {


  return {
      //{to, from, subject, text, attachment
      sendEmail: function(mailConfig, cb) {
          server.send(
             mailConfig
          , function(err, message) {
              if(err) {
                  cb(err);
              }
              else {
                  cb(null, {status: 1, msg: 'Mail Sent'});
              }
          });
      },
      getEmailRecoveryContent: function(fullName, link, cb) {
          var template = __dirname+"/../html/lostpasswordemailtemplate.html";
          fs.readFile(template,"utf-8", function(error, emailContent) {


              if (error) {
                  cb(error);
                  return;
              }



              String.prototype.replaceAll = function(search, replacement) {
                  var target = this;
                  return target.replace(new RegExp(search, 'g'), replacement);
              };

              var newContent = emailContent.replace(new RegExp(":UserFullName", 'g'), fullName);
              newContent = newContent.replace(new RegExp(":Link", 'g'), link);

              cb(null, newContent);

          });

      }
  }

};


module.exports = MailService;