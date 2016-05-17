import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['selectedDate', 'clinic_id'],
  selectedDate: moment(),
  clinic_id: null,

  clinic: function() {
    return this.get('store').findRecord('clinic', this.get('clinic_id'));
  }.property('clinic_id'),

  appointments: function () {
    return this.get('store').query('appointment', {
      clinic_id: this.get('clinic_id'),
      date: this.get('selectedDate')
    });
  }.property('selectedDate', 'forceToggle'),

  service_providers: function() {
     return this.get('store').find('service_provider');
  }.property(),

  selectedDateFormatted: function () {
    return moment(this.get('selectedDate')).format("dddd, MMM Do")
  }.property('selectedDate'),

  times: function () {
    var self = this,
        times = [],
        apts = this.get('appointments'),
        model = this.get('clinic'),
        range = moment().range(
          moment(this.get('selectedDate') + "T" + model.get('opening_time')),
          moment(this.get('selectedDate') + "T" + model.get('closing_time'))
        );
        var interval = model.get('appointment_interval');

    range.by('minutes', function (mom) {
      if (mom.minute() % interval == 0 || mom.minute() == 0) {
        times.push(Ember.Object.create({
          time: mom.format("HH:mm")
        }));
      }
    });

    apts.forEach(function (apt) {
      times.forEach(function (time, index) {
        var cal_time = moment(self.get('selectedDate') + "T" + time.time),
            apt_time = moment(self.get('selectedDate') + "T" + apt.get('time'));

        if (cal_time.isSame(apt_time)) {
          apt.get('service_user').then(function () {
            times[index].set('service_user', apt.get('service_user'))
          })
          times[index].set('appointment', apt)
        }
      });
    });

    return times;
  }.property('appointments.@each'),

  actions: {
    dateForward: function() {
      var next_week = moment(this.get('selectedDate'), "YYYY-MM-DD").subtract(1, 'week').format('YYYY-MM-DD')
      this.set('selectedDate', next_week);
    },
    dateBackward: function() {
      var previous_week = moment(this.get('selectedDate'), "YYYY-MM-DD").add(1, 'week').format('YYYY-MM-DD')
      this.set('selectedDate', previous_week);
    },
    dateChosen: function (date) {
      this.set('selectedDate', date)
    },
    openAppointmentModal: function (appointment) {
      var selected_time = moment("2010-12-12T" + appointment.get('time')).format("HH:mm");

      this.sendAction('openModal', 'components/appointment-modal', SmartClientApp.AppointmentModalComponent.create({
        store: this.get('store'),
        model: appointment,
        selected_sp: appointment.get('service_provider'),
        selected_time: selected_time,
        aptComponent: this,
        service_providers: this.get('service_providers'),
        times: this.get('times'),
        weeks: this.get('next_weeks'),
      }));
    },
    openBookingModal: function (time) {
      this.sendAction('openModal', 'components/booking-modal', SmartClientApp.BookingModalComponent.create({
        store: this.get('store'),
        model: this.get('model'),
        aptComponent: this,
        selectedDate: this.get('selectedDate'),
        time: time,
        service_user: this.get('service_user'),
        clinic: this.get('clinic')
      }));
    },

    closeModal: function () {
      this.sendAction('closeModal')
    },
    toggleAttended: function (appointment_id) {
      this.get('store').findRecord('appointment', appointment_id).then(function (ap) {
        ap.toggleProperty('attended');
        ap.save();
      });
    }
  }
});
