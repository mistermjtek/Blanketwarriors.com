var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
	config.set({
		files: [
		  'test/client/**/*.js'
		],
		preprocessors: {
		  'test/**/*Spec.js': ['webpack']
		},
		browsers: ['Chrome'],
		frameworks: ['mocha', 'chai', 'sinon'],
		reporters: ['mocha'],
		singleRun: true,
		webpack: webpackConfig.default,
		webpackServer: {
		  noInfo: true
		},
		plugins: [
			'karma-chai',
			'karma-mocha',
			'karma-sinon',
			'karma-webpack',
			'karma-mocha-reporter',
			'karma-chrome-launcher'
		]
	});
}
