'use strict';

exports.sendVerify = () => {

  let helper = require('sendgrid').mail;
  let from_email = new helper.Email("ysangy@gmail.com");
  let to_email = new helper.Email("ysangy@gmail.com");
  let subject = "I am subject";
  let content = new helper.Content("text/plain", "I am text");
  let mail = new helper.Mail(from_email, subject, to_email, content);

  let sg = require('sendgrid').SendGrid(process.env.SENDGRID_JMS_API_KEY);
  let requestBody = mail.toJSON();
  let request = sg.emptyRequest();
  request.method = 'POST';
  request.path = '/v3/mail/send';
  request.body = requestBody;
  sg.API(request, function (response) {
    // console.log(response.statusCode);
    // console.log(response.body);
    // console.log(response.headers);
  })

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

};
