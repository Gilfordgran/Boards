import Route from '@ember/routing/route';
import RSVP from 'rsvp';


export default Route.extend({
  model(){
    return RSVP.hash({
      projects:this.get('store').findAll('project'),
      fields:['Name','Description',{name:'sDate',caption:'Start date'},{name:'dDate',caption:'Due date'},{name:'owner.identity',caption:'Owner'}],
      operations:[{icon:'remove red',link:'projects.delete'},{icon:'edit',link:'projects.update'},{icon:'eye',link:'project'}]
    });
  }
});
