import Ember from 'ember';

export default Ember.Controller.extend({
  selectedDate: moment().format("YYYY-MM-DD"),
  defaultDate: function () {
    var current_date = this.get('model.defaultDate');
    this.set('selectedDate', current_date.format('YYYY-MM-DD'));

    return current_date.format('YYYY-MM-DD')
  }.property('model.defaultDate'),

  next_weeks: function () {
    return this.get('model.nextWeeks');
  }.property('model.nextWeeks'),

  selectedDateFormatted: function () {
    return moment(this.get('selectedDate')).format("dddd, MMM Do")
  }.property('selectedDate'),

  actions: {
    dateChosen: function(date) {
    }
  }
});
