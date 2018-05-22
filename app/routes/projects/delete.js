import DeleteRoute from '../delete-route';

/**
 * supprimer un projet
 */
export default DeleteRoute.extend({
  getRedirectRoute(){
    return "projects";
  }
});
