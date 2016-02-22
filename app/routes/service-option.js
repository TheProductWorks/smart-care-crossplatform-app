import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('serviceOption', params.service_option_id);
  }
});
