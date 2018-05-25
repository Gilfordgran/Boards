import DS from 'ember-data';
import { pluralize } from 'ember-inflector';

var Adapater=DS.RESTAdapter.extend({
  ajaxOptions: function(url, type, options) {
    var hash = this._super(url, type, options);
    if (type == 'POST' || type=='PUT') {
      hash.dataType = 'text';
    }
    return hash;
  },
  host:'http://127.0.0.1:8080',
  namespace: 'board',
  urlForDeleteRecord(id, modelName) {
    modelName=pluralize(modelName);
    return this.get('host')+'/'+this.get('namespace')+`/${modelName}/*?filter={_id:'${id}'}`;
  },
  shouldReloadRecord: function(store, snapshot) {
    return true;
  },

  shouldReloadAll: function(store, snapshot) {
    return true;
  },

  shouldBackgroundReloadRecord: function(store, snapshot) {
    return true;
  },

  shouldBackgroundReloadAll: function(store, snapshot) {
    return true;
  }
});

export default Adapater;
