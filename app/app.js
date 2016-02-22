import Ember from 'ember';
import Resolver from './resolver';
import Pretender from 'pretender';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

// Pretender

var CLINICS = {
    "1": {
      data: {
        type: "clinic",
        id: 1,
        attributes: {
          name: "National Maternity Hospital",
          address: "Holles Street",
          serviceOption: 1
        }
      }
    },
    "2": {
      data: {
        type: "clinic",
        id: 2,
        attributes: {
          name: "Tempelogue",
          address: "Terenure Road",
          serviceOption: 1
        }
      }
    },
    "3": {
      data: {
        type: "clinic",
        id: 3,
        attributes: {
          name: "Bray GP",
          address: "Main Street",
          serviceOption: 2
        }
      }
    },
    "4": {
      data: {
        type: "clinic",
        id: 4,
        attributes: {
          name: "Greystones Clinic",
          address: "Bray Road",
          serviceOption: 2
        }
      }
    },
    "5": {
      data: {
        type: "clinic",
        id: 5,
        attributes: {
          name: "Mater",
          address: "Parnell Square",
          serviceOption: 3
        }
      }
    }
};

var SERVICEOPTIONS = {
    "1": {
      data: {
        type: "service_option",
        id: 1,
        attributes: {
          name: "Dublin Domino"
        }
      }
    },
    "2": {
      data: {
        type: "service_option",
        id: 2,
        attributes: {
          name: "Wicklow South"
        }
      }
    },
    "3": {
      data: {
        type: "service_option",
        id: 3,
        attributes: {
          name: "ETH"
        }
      }
    }
};

var server = new Pretender(function(){
  this.get('/service-options', function(request){
    var all =  {
      data: [
        {
          type: "service_option",
          id: 1,
          attributes: {
            name: "Dublin Domino"
          },
          relationships: {
            clinics: {
              data: [{id: 1, type: "clinic"}, {id: 2, type: "clinic"}]
            }
          }
        },
        {
          type: "service_option",
          id: 2,
          attributes: {
            name: "Wicklow South"
          },
          relationships: {
            clinics: {
              data: [{id: 3, type: "clinic"}, {id: 4, type: "clinic"}]
            }
          }
        },
        {
          type: "service_option",
          id: 3,
          attributes: {
            name: "ETH"
          },
          relationships: {
            clinics: {
              data: [{id: 5, type: "clinic"}]
            }
          }
        }
      ]
    };
      return [200, {"Content-Type": "application/json"}, JSON.stringify(all)]
  });

  this.get('/service-options/:id', function(request){
    return [200, {"Content-Type": "application/json"}, JSON.stringify(SERVICEOPTIONS[request.params.id])]
  });

  this.get('/clinics/:id', function(request){
    return [200, {"Content-Type": "application/json"}, JSON.stringify(CLINICS[request.params.id])]
  });
});
