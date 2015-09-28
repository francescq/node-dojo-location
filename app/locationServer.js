var express = require('express');
var app = express();
var Serializer = require('./countries/serializer');
var serializer = new Serializer();
var Controller = require('./countries/controller');
var controller = new Controller(serializer);

app.get('/countries/:host.json', controller.get);

module.exports = app;