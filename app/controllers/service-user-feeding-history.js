export default Ember.Controller.extend({
  actions: {
    add_feeding_history() {
      var new_feeding = Ember.$("#add_feeding_select").val();

      var pregnancy = this.store.peekRecord('pregnancy', this.get('model.current_pregnancy.id'));

      pregnancy.set('feeding', new_feeding);
      pregnancy.save().then(function () {
        setTimeout(function () {
          var colorStr = '#DDDDFF';
          $("#feeding_history_list li:first").each(function (i,x) {
            $(this).css("background-color",colorStr);
            setTimeout(function(){
                $(x).css("background-color","#ffffff"); // reset background
            },3000);
          });
          Ember.$('#add_feeding_modal').modal('hide');
        }, 200);
      });
    }
  }
});
