var webpack = require('webpack');

var configSettings = {
  'normal': {},
  'uglified': {
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
};

module.exports = function(config) {
  config.set({

  basePath: '',

  frameworks: ['mocha'],

  files: [
    'tests/index.js'
  ],

  preprocessors: {
    'tests/*': ['webpack']
  },

  webpack: {
    module: {
      loaders : [
          { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' }
      ]
    }
  },

  webpackMiddleware: {
    stats: {
      colors: true
    },
    quiet: true
  },

  reporters: ['progress'],

  port: 9876,

  colors: true,

  logLevel: config.LOG_DISABLE,

  autoWatch: true,

  browsers: ['Chrome'],

  captureTimeout: 60000,

  singleRun: false,

  plugins: [
    require('karma-webpack'),
    require('karma-mocha'),
    require('karma-spec-reporter'),
    require('karma-chrome-launcher')
  ]
  });
};