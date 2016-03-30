import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import ENV from 'smart-client-app/config/environment';


export default Base.extend({
  tokenEndpoint: ENV.host + '/login',
  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate: function(options) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: this.tokenEndpoint,
        type: 'POST',
        data: JSON.stringify({
          login: {
            username: options.identification,
            password: options.password
          }
        }),
        contentType: 'application/json;charset=utf-8',
        dataType: 'json'
      }).then(function(response) {
        Ember.run(function() {
          localStorage.setItem('authToken', response.login.token);
          localStorage.setItem('loggedinUserId', response.login.id);
          resolve({
            token: response.login.token,
            loggedinUser: response.login.id
          });
        });
      }, function(xhr, status, error) {
        var response = xhr.responseText;
        Ember.run(function() {
          reject(response);
        });
      });
    });
  },

  invalidate: function() {
    console.log('invalidate...');
    return Ember.RSVP.resolve();
  }
});
