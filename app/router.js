import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard');
  this.route('search-patient');
  this.route('service-user', { path: '/service-user/:id' });
});

export default Router;
