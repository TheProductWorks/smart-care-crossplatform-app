import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  //this.route('service-option', { path: "service-option/:service_option_id" });
  //this.route('clinic', { path: "clinic/:clinic_id" });
});

export default Router;
