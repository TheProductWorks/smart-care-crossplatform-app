import DS from 'ember-data';

export default DS.Model.extend({
  short_code: DS.attr(),
  description: DS.attr(),

  short_code_normalized: function () {
    return this.get('short_code').replace(/[\W_]+/g,'')
  }.property()
});
