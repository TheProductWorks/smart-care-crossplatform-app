import DS from 'ember-data';
import ENV from 'smart-client-app/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.host,
  headers: {
    'Auth-Token': localStorage.getItem('authToken'),
    'Api-Key': ENV.api_key
  }
});
