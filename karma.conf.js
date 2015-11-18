var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
	config.set({
		files: [
		  'tests.webpack.js'
		],
		preprocessors: {
		  'tests.webpack.js': ['webpack', 'sourcemap']
		},
		browsers: ['Chrome'],
		frameworks: ['mocha', 'chai', 'sinon'],
		reporters: ['mocha'],
		singleRun: true,
		webpack: webpackConfig.test,
		webpackServer: {
		  noInfo: true
		},
		plugins: [
			'karma-chai',
			'karma-mocha',
			'karma-sinon',
			'karma-webpack',
			'karma-mocha-reporter',
			'karma-chrome-launcher',
			'karma-sourcemap-loader'
		]
	});
}
