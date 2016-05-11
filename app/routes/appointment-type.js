import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      service_options: this.store.findAll('service-option'),
      type: params.type
    });
  },
});
