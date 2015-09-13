var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
	config.set({
		files: [
		  'test/client/**/*.js'
		],
		preprocessors: {
		  'test/**/*.js': ['webpack']
		},
		browsers: ['Chrome'],
		frameworks: ['jasmine', 'sinon'],
		reporters: ['mocha'],
		singleRun: true,
		webpack: webpackConfig.default,
		webpackServer: {
		  noInfo: true
		},
		plugins: [
			'karma-sinon',
			'karma-jasmine',
			'karma-webpack',
			'karma-mocha-reporter',
			'karma-chrome-launcher'
		]
	});
}
