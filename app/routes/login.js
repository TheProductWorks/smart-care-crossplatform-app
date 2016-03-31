import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  redirect: function() {
    // Ensures the user is authenticated
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('dashboard');
    }
  }
});
