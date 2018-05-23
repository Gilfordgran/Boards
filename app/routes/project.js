import Route from '@ember/routing/route';

/**
 * retourne le projet sélectionné
 */
export default Route.extend({
  model(params) {
    return this.get('store').findRecord('project', params.project_id);
  }
});
