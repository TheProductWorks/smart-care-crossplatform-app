import DS from 'ember-data';

export default DS.Model.extend({
  estimated_delivery_date: DS.attr(),
  additional_info: DS.attr(),
  birth_mode: DS.attr(),
  perineum: DS.attr(),
  gestation: DS.attr(),
  anti_d: DS.attr(),
  feeding: DS.attr(),
  last_menstrual_period: DS.attr(),
  created_at: DS.attr(),
  baby_age: DS.attr(),
  babies: DS.hasMany('baby'),
  anti_d_histories: DS.hasMany('antiDHistory'),
  feeding_histories: DS.hasMany('feedingHistory'),
  // For some reason Notes are failing to retrrieve
  //pregnancy_notes: DS.hasMany('pregnancyNote', {async: false}),
  pregnancy_actions: DS.hasMany('pregnancyAction'),
  service_user: DS.belongsTo('serviceUser'),

  sorted_pregnancy_actions: function () {
    return this.get('pregnancy_actions').sortBy('created_at');
  }.property('pregnancy_actions.@each')
});
