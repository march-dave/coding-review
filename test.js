'use strict';

require('dotenv').load();

var sendgrid = require('sendgrid')(process.env.SENDGRID_KEY);

sendgrid.send({
  to:'ysangy@gmail.com',
  from: 'cooapp@thefuture.com',
  subject:'SENDGRID_KEY',
  html:`
  <h1>HEY</h1>
  <h3>HEY</h3>
  <a href='http://google.com'>Google</a>
  `
}, (err, json) => {
  console.log('err', err);
  console.log('json', json);
});
