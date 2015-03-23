import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';

export default Marionette.ItemView.extend({

  template: _.template('Hello <%= name %> !'),

  serializeData() {
    return {
      name: 'world'
    };
  }

});
