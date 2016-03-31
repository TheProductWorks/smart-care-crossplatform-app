import DS from 'ember-data';

export default DS.Model.extend({
  appointment_id: DS.attr(),
  service_option_id: DS.attr()
});
