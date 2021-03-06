'use strict';
const express = require('express');
const app = express();
const server = app.listen(4000);
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: API_KEY,
  apiSecret: API_SECRET
}, {debug: true});

const bodyParser = require('body-parser');
const ejs = require('ejs');

app.set('views', __dirname + '/../views');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  res.send(req.body);
  let toNumber = req.body.number;
  let text = req.body.text;

  nexmo.message.sendSms(NUMBER, toNumber, text, {type: 'unicode'}, (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      console.dir(responseData);
    }
  });
});
