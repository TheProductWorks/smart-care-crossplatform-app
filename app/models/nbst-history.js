import DS from 'ember-data';

export default DS.Model.extend({
  nbst: DS.attr(),
  created_at: DS.attr(),
  baby: DS.belongsTo('baby'),
  service_provider: DS.belongsTo('serviceProvider'),

  formatted_time: function () {
    return moment(this.get('created_at')).format('HH:mm, DD/MM/YYYY')
  }.property()
});
