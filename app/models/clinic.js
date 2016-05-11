import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  address: DS.attr(),
  opening_time: DS.attr(),
  closing_time: DS.attr(),
  recurrence: DS.attr(),
  type: DS.attr(),
  appointment_interval: DS.attr(),
  days: DS.attr(),
  appointments: DS.hasMany('appointment'),
  announcements: DS.hasMany('announcement',  {async: true }),
  service_option: DS.belongsTo('service-option')
});
