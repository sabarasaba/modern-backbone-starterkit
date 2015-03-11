import $ from 'jquery';
import Backbone from 'backbone';

import HelloView from './views/hello';


export default Backbone.Router.extend({

  routes: {
    '': 'dashboard',
    'about': 'about'
  },

  initialize: function() {
    $('body').append('<div id="js-app"></div>');
  },

  dashboard: function () {
    var helloView = new HelloView({
      template: _.template('Hello <%= name %> !')
    }).render();

    $('#js-app').empty().append(helloView.$el);
  },

  about: function() {
    var helloView = new HelloView({
      template: _.template('YO im the about page')
    }).render();

    $('#js-app').empty().append(helloView.$el);
  }

});
