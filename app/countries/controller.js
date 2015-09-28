var MMDBReader = require('mmdb-reader');

var Controller = function(serializer){
  this.serializer = serializer;

  this.get = function(req, res) {
    var reader = new MMDBReader('./resources/GeoLite2-Country.mmdb');

    var data = reader.lookup(req.params.host);

    var country1 = serializer.dump(data);

    res.json([{
      country: country1,
      host: req.params.host
    }]);
  }
}

module.exports = Controller;