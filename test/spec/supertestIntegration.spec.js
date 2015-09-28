var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var nodejsLocation = require('../../app/locationServer');

describe('GET /api/countries/:host', function () {
    describe('when it can find the host', function(){
        it('should respond with data', function (done) {
        var host = '24.24.24.24';
        var expected_response = [
            {
                country: {
                    language: "en",
                    name: "United States",
                    geoname_id: 6252001,
                    iso_code: "US"
                },
                host: host
            }
        ];
        request(nodejsLocation)
            .get('/countries/' + host + '.json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (error, response) {
                if (error) {
                    return done(error);
                }
                expect(response.body).to.be.an('Array');
                expect(response.body).to.deep.equal(expected_response);
                done();
            });
        });
    })

    describe('when it can not find the host', function(){
        it('should respond with a 404 and error', function(){
            var host = 'blah';

            var expected_response = [{
                host: host,
                error: "The addess " + host + " is not on the database"
            }];

            request(nodejsLocation)
            .get('/countries/' + host + '.json')
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

    describe('when a collection of ips is requested', function(){
        it('should respond with a 404 and error', function(){
            var host = host_1 + ',' + host_2;
            var host_1 = '192.0.0.1';
            var host_2 = '24.24.24.24';

            var expected_response = [
                {
                    host: host,
                    error: "The addess " + host + " is not on the database"
                },
                {
                    country: {
                        language: "en",
                        name: "United States",
                        geoname_id: 6252001,
                        iso_code: "US"
                    },
                    host: host
                }
            ];

            request(nodejsLocation)
            .get('/countries/' + host + '.json')
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
});
