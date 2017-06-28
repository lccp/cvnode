var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var path = require('path');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));


consign({
    cwd: process.cwd(),
    locale: 'en-us',
    logger: console,
    verbose: true,
    extensions: [ '.js', '.json', '.node' ],
    loggingType: 'info'
})
    .include('routes')
    .into(app);


module.exports = app;