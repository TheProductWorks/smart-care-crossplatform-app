import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';
export default Base.extend({
  authorize: function(jqXHR, requestOptions) {
    var accessToken = localStorage.authToken;
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
      jqXHR.setRequestHeader('Auth-Token', accessToken);
    }
  }
});
