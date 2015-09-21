var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var nodejsLocation = require('../../app/locationServer');

describe('GET /api/countries/:host', function () {
    it('should respond with ', function (done) {
        var expected_response = [
            {
                country: {
                    language: "en",
                    name: "United States",
                    geoname_id: 6252001,
                    iso_code: "US"
                },
                host: "24.24.24.24"
            }
        ];
        request(nodejsLocation)
            .get('/countries/24.24.24.24.json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (error, response) {
                if (error) {
                    return done(error);
                }
                expect(response.body).to.be.an('Array');
                expect(response.body).to.deep.equal(expected_response)
                done();
            });
    });
});