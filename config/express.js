var express = require('express');
var consign = require('consign');
var path = require('path');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));



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