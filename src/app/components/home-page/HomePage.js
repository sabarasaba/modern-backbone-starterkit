import Marionette from 'backbone.marionette'

import template from './HomePage.hbs'

export default Marionette.View.extend({
  template,

  serializeData() {
    return {
      name: 'Modern Backbone Starterkit'
    }
  }
})
