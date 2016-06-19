'use strict';
// var dotenv = require('dotenv');


// var SendGrid = require("sendgrid")("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");
// var toEmail = 'ysangy@gmail.com';

// var sendgrid = require("sendgrid")("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");
// var email = new sendgrid.Email();
//
// email.addTo("test@sendgrid.com");
// email.setFrom("you@youremail.com");
// email.setSubject("Sending with SendGrid is Fun");
// email.setHtml("and easy to do anywhere, even with Node.js");
//
// sendgrid.send(email);


exports.sendVerify = function() {

  // var sendgrid  = require('sendgrid').SendGrid(process.env.SENDGRID_JMS_API_KEY);
  //
  // sendgrid.send({
  //   to:       'example@example.com',
  //   from:     'other@example.com',
  //   subject:  'Hello World',
  //   text:     'My first email through SendGrid.'
  // }, function(err, json) {
  //   if (err) { return console.error(err); }
  //   console.log(json);
  // });

  let helper = require('sendgrid').mail;
  let from_email = new helper.Email("ysangy@gmail.com");
  let to_email = new helper.Email("ysangy@gmail.com");
  let subject = "subject";
  let content = new helper.Content("text/plain", "some text here");
  let mail = new helper.Mail(from_email, subject, to_email, content);

  let sg = require('sendgrid').SendGrid(process.env.SENDGRID_JMS_API_KEY);
  let requestBody = mail.toJSON();
  let request = sg.emptyRequest();
  request.method = 'POST';
  request.path = '/v3/mail;/send';
  request.body = requestBody;
  sg.API(request, function (response) {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  })

};
