import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';

import template from './template.hbs';

export default Marionette.ItemView.extend({

  template: template,

  serializeData() {
    return {
      name: 'world'
    };
  }

});
