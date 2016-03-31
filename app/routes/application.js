import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import ENV from 'smart-client-app/config/environment';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service('session'),
  actions: {
    invalidateSession: function() {
      var accessToken = localStorage.authToken;
      var tokenEndpoint = ENV.host + '/logout';
      Ember.$.ajax({
        url: tokenEndpoint,
        type: 'POST',
        beforeSend: function (xhr) {
           xhr.setRequestHeader('Auth-Token', accessToken);
           xhr.setRequestHeader('Api-Key', ENV.api_key);
        }
      });
      this.get('session').invalidate();
    }
  }
});
