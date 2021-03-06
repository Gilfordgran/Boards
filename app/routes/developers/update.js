import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

/**
 * permet de mettre à jour un développeur
 * peut aussi annuler l'action de la mise à jour
 */
export default Route.extend({
  model(params){
    return new RSVP.hash({
      dev: this.get('store').findRecord('developer',params.developer_id)
    });
  },
  afterModel(model){
    Ember.set(model,'data',EmberObject.create(JSON.parse(JSON.stringify(model.dev))));
  },
  actions:{
    save(dev,data){
     Ember.set(dev,'pseudo',data.pseudo);
     dev.save().then(()=>{
       this.transitionTo("developers");
     })
    },
    cancel(){
      this.transitionTo("developers");
    }
  }
});
