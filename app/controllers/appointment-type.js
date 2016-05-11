import Ember from 'ember';

export default Ember.Controller.extend({
  service_options: function() {
    return this.get('model.service_options').filterBy('home_visit', this.get('type') == "Visits");
  }.property('model.service_options'),

  type: function() {
    return this.get('model.type');
  }.property('model.type')
});
