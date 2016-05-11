import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  home_visit: DS.attr(),
  clinics: DS.hasMany('clinic', {async: true}),

  type: function() {
    if (this.get('home_visit')) {
      return "Visits";
    } else {
      return "Clinics"
    }
  }.property('home_visit')
});
