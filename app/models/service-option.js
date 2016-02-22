import DS from 'ember-data';

var ServiceOption = DS.Model.extend({
  name: DS.attr('string'),
  clinics: DS.hasMany('clinic')
});

export default ServiceOption;
