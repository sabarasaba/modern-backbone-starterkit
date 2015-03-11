# Modern Backbone Starter-kit

[![Build Status](http://img.shields.io/travis/sabarasaba/modern-backbone-starterkit/master.svg?style=flat)](http://travis-ci.org/sabarasaba/modern-backbone-starterkit)

[![Dependency Status](http://david-dm.org/sabarasaba/modern-backbone-starterkit.svg?style=flat)](https://david-dm.org/sabarasaba/modern-backbone-starterkit)

[![Tips](http://img.shields.io/gratipay/sabarasaba.svg?style=flat)](https://gratipay.com/sabarasaba)
[![Gitter](http://img.shields.io/badge/chat-online-brightgreen.svg?style=flat)](https://gitter.im/sabarasaba/modern-backbone-starterkit)

> This project provides a prepared development environment based on [Gulp](http://gulpjs.com/), [Backbone](http://backbonejs.org/), [Babel](https://babeljs.io/) and [Webpack](http://webpack.github.io/). You can  use it to quickly bootstrap your web application projects. All the parts of this project template are easily replaceable.



**Demo**: [http://sabarasaba.me/modern-backbone-starterkit](http://sabarasaba.me/modern-backbone-starterkit)

### Getting Started

Just [clone](github-windows://openRepo/https://github.com/sabarasaba/modern-backbone-starterkit) or [fork](https://github.com/sabarasaba/modern-backbone-starterkit/fork) the repo and start hacking:

```shell
$ git clone -o upstream https://github.com/sabarasaba/modern-backbone-starterkit.git AwesomeApp && cd $_
$ npm install -g gulp karma-cli     # Install Gulp task runner and Karma test runner globally
$ npm install                       # Install Node.js components listed in ./package.json
```

### Development
Builds the application and starts a webserver with livereload. By default the webserver starts at port 1337.

```shell
$ gulp
```

By default, it builds in debug mode.

* If you need to build in release mode, add `--type production` flag.
* You can define a port with `--port 3333` flag.


### Build
Builds a minified version of the application in the dist folder.

```shell
$ $ gulp build --type production
```

### How to Update

You can always fetch and merge the recent changes from this repo back into
your own project:

```shell
$ git checkout master
$ git fetch upstream
$ git merge upstream/master
$ npm install
```

### How to Test

Run unit tests and integration tests are powered by [Karma](http://karma-runner.github.io/0.12/index.html), [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/):

```shell
$ karma start
```

### Learn More

 * [Backbone.js](http://backbonejs.org/)
 * [Marionette.js](http://marionettejs.com/)
 * [Karma - Spectacular test runner](http://karma-runner.github.io/0.12/index.html)
 * [Webpack](http://webpack.github.io/)
 * [Babel - Use next generation JavaScript, today](https://babeljs.io/)

### Support

Have feedback, feature request or need help? Create an issue !

### Copyright

Licensed under MIT License (MIT). See [LICENSE.txt](./LICENSE.txt)