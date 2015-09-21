var express = require('express');
var app = express();
var MMDBReader = require('mmdb-reader');

// respond with "hello world" when a GET request is made to the homepage
app.get('/countries/:host.json', function(req, res) {
    var reader = new MMDBReader('./resources/GeoLite2-Country.mmdb');

    var data = reader.lookup(req.params.host);
    res.json(data);

});

app.listen(3000);