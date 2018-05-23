import Route from '@ember/routing/route';
import RSVP from 'rsvp';


/**
 * importe les données sélectionnées
 * possibilité de consulter les projets et leurs détails 
 */
export default Route.extend({
  model(){
    return RSVP.hash({
      projects:this.get('store').findAll('project'),
      fields:['Name','Description',{name:'sDate',caption:'Start date'},{name:'dDate',caption:'Due date'},{name:'owner.pseudo',caption:'Owner'}],
      operations:[{icon:'remove red',link:'projects.delete'},{icon:'edit',link:'projects.update'},{icon:'eye',link:'project'}]
    });
  }
});
