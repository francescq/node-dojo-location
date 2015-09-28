var MMDBReader = require('mmdb-reader');

var Controller = function(serializer){
  this.serializer = serializer;

  this.get = function(req, res) {
    var ip = req.params.host;
    var reader = new MMDBReader('./resources/GeoLite2-Country.mmdb');

    var data = reader.lookup(ip);

    if(!!data){
      var country1 = serializer.dump(data);

      res.json([{
        country: country1,
        host: ip
      }]);
    } else {
      res.status(404);
      res.json({
        'host': ip,
        'error': "The addess " + ip + " is not on the database"
      });
    }
  };
};

module.exports = Controller;