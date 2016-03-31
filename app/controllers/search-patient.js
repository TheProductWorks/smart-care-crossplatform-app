import Ember from 'ember';

export default Ember.Controller.extend({
  serviceUsers: [],
  actions: {
    searchServiceUser: function() {
      var self = this;
      var dob;
      if (this.get('dobDay')) {
        dob = this.get('dobYear') + "-" + this.get('dobMonth') + "-" + this.get('dobDay');
      }
      this.store.query('service-user', { name: this.get('name'), dob: dob, hospital_number: this.get('hospitalNumber') } ).then(function(results) {
        self.set('serviceUsers', results);
      });
    }
  }
});
