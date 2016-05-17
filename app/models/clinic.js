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
  service_option: DS.belongsTo('service-option', {async: true}),

  // Calculate the default start date to the Clinic.
  // Start with the days it's open on
  defaultDate: function() {
    var daysOn = [],
        days = this.get('days');

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

    return current_date;
  }.property('days'),

  // Calculate the next available weeks for bookings based on the default date.
  nextWeeks: function() {
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
  }.property('days.@each')
});
