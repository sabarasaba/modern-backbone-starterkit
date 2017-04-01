import 'babel-polyfill'
import 'isomorphic-fetch'
import 'normalize.css'
import 'flexboxgrid/dist/flexboxgrid.min.css'
import 'jquery'
import Backbone from 'backbone'

import '../styles/index.css'

import Router from './router'

// eslint-disable-next-line
new Router()

Backbone.history.start()
