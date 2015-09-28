var MMDBReader = require('mmdb-reader');

var Controller = function(serializer){
  this.serializer = serializer;

  this.get = function(req, res) {
    var ips = req.params.host.split(',');
    var reader = new MMDBReader('./resources/GeoLite2-Country.mmdb');

    res.json(ips.map(function(ip){
      var data = reader.lookup(ip);

      if(!!data){
        return { country: serializer.dump(data), host: ip };
      } else {
        return {
          'host': ip,
          'error': "The addess " + ip + " is not on the database"
        };
      }
    }));
  };
};

module.exports = Controller;
