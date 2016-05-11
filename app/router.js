import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard');

  // Service User
  this.route('search-patient');
  this.route('service-user', { path: '/service-user/:id' });

  // Appointment
  this.route('appointment-types');
  this.route('appointment-type', { path: '/appointment-types/:type' });
  this.route('appointments');
  this.route('service-option', { path: '/service-options/:id' });
  this.route('clinic', { path: 'clinic/:id' });
});

export default Router;
