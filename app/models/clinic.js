import DS from 'ember-data';

var Clinic = DS.Model.extend({
  name: DS.attr('string'),
  serviceOption: DS.belongsTo('serviceOption'),
  address: DS.attr('string')
});

export default Clinic;
