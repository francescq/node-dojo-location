var express = require('express');
var app = express();
var MMDBReader = require('mmdb-reader');

// respond with "hello world" when a GET request is made to the homepage
app.get('/countries/:host.json', function(req, res) {
    var reader = new MMDBReader('./resources/GeoLite2-Country.mmdb');

    var data = reader.lookup(req.params.host);

    var country1 = {
      language: 'en',
      name: data.country.names.en,
      geoname_id: data.country.geoname_id,
      iso_code: data.country.iso_code
    };

    res.json([{
      country: country1,
      host: req.params.host
    }]);
});

module.exports = app;