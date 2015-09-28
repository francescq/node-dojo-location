var Serializer = function(){
  this.dump = function(data){
    return {
      language: 'en',
      name: data.country.names.en,
      geoname_id: data.country.geoname_id,
      iso_code: data.country.iso_code
    };
  }
}

module.exports = Serializer;