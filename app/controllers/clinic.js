import Ember from 'ember';

export default Ember.Controller.extend({
  selectedDate: moment().format("YYYY-MM-DD"),
  defaultDate: function () {
    var daysOn = [],
        days = this.get('model.days');

    for (var day in days) {
      var on = days[day]

      if (on) {
        daysOn.push(day)
      }
    }

    var current_date = moment().day(daysOn[0]);
    // Adjust the day if we've already passed it in the current week.
    if (current_date < moment()) {
      current_date = current_date.add(1, 'week');
    }

    this.set('selectedDate', current_date.format('YYYY-MM-DD'));

    return current_date.format('YYYY-MM-DD')
  }.property('model.days'),

  next_weeks: function () {
    var collection = [],
        currentWeekDate = moment(this.get('defaultDate')).add(1, 'week');

    for (var i = 0;i < 6;i++) {
      collection.push({
        weekName: i + 1,
        date: currentWeekDate.format("YYYY-MM-DD"),
        formattedDate: currentWeekDate.format("dd, MMM Do")
      });

      currentWeekDate = currentWeekDate.add(1, 'week');
    }

    return collection;
  }.property('model.days.@each'),

  selectedDateFormatted: function () {
    return moment(this.get('selectedDate')).format("dddd, MMM Do")
  }.property('selectedDate'),

  actions: {
    dateChosen: function(date) {
    }
  }
});
