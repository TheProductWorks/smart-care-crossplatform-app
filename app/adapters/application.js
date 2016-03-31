import DS from 'ember-data';
import ENV from 'smart-client-app/config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.host,
  pathForType: function(type) {
    return Ember.Inflector.inflector.pluralize(Ember.String.underscore(type));
  },
  headers: Ember.computed(function() {
    return {
      'Auth-Token': localStorage.getItem('authToken'),
      'Api-Key': ENV.api_key
    };
  }).volatile()
});
