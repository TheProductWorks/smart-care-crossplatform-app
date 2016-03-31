import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchServiceUser: function() {
      console.log(this.get('name'));
    }
  }
});
