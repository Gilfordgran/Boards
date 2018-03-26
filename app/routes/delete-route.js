import Route from '@ember/routing/route';

export default Route.extend({
  getRedirectRoute(){},
  actions:{
    cancelDeletion(){
      this.transitionTo(this.getRedirectRoute());
    },
    delete(object){
      object.destroyRecord();
      this.transitionTo(this.getRedirectRoute());
    }
  }
});
