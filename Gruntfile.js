module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-curl');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('default', ['jshint', 'mochaTest']);
	grunt.registerTask('test', ['mochaTest']);
	grunt.registerTask('bootstrap', ['curl:geolite', 'shell:unzip_geolite']);

	grunt.initConfig({
		watch: {
			scripts: {
				files: ['*.js', 'lib/*.js', 'test/*.js'],
				tasks: ['default'],
				options: {spawn: false}
			}
		},

		jshint: {
			all: ['*.js', 'app/*.js', 'app/**/*.js', 'test/*.js']
		},

		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
				},
				src: ['test/**/*.js']
			}
		},

		curl: {
			geolite: {
				dest: 'resources/GeoLite2-Country.mmdb.gz',
				src: 'http://geolite.maxmind.com/download/geoip/database/GeoLite2-City.mmdb.gz'
			}
		},

		shell: {
			unzip_geolite: {command: 'gunzip resources/GeoLite2-Country.mmdb.gz'}
		}
	});
};

