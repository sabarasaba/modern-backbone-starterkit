import $ from 'jquery';
import Backbone from 'backbone';
import chai from 'chai';

let expect = chai.expect;

import Router from '../src/app/router';


describe('Integration tests', function() {
  const router = new Router();
  Backbone.history.start();

  let $app = $('#js-app');


  describe('Dashboard page sample testing', function() {
    it('should render hello world on first render', function() {
      expect($app.text()).to.equal('Hello world !');
    });
  });

  describe('About page sample testing', function() {
    it('should render Im the about page', function() {
      router.navigate('about', {trigger: true, replace: true});

      expect($app.text()).to.equal('Im the about page');
    });
  });

});