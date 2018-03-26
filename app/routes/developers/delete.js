import DeleteRoute from '../delete-route';

export default DeleteRoute.extend({
  model(params){
    return this.get('store').findRecord('developer',params.developer_id,{include:"projects"});
  },
  getRedirectRoute(){
    return "developers";
  }
});
