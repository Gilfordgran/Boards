import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
export default Route.extend({
  model(){
    return EmberObject.create();
  },
  actions:{
    save:function(oldValue,newValue){
      let developer=this.get('store').createRecord('developer',JSON.parse(JSON.stringify(newValue)));
      developer.save().then(()=>{this.transitionTo("developers");}).
      catch((error)=>console.log(error));
    },
    cancel(){
      this.transitionTo("developers");
    }
  }
});
