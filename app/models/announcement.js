import DS from 'ember-data';

export default DS.Model.extend({
  note: DS.attr(),
  date: DS.attr(),
  blocking: DS.attr(),
  clinic: DS.belongsTo('clinic')
});
