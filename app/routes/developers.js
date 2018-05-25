import Route from '@ember/routing/route';
import RSVP from 'rsvp';

/**
 * récapitulatif des dev et de leurs données
 */
export default Route.extend({
  model(){
    return RSVP.hash({
      developers:this.get('store').findAll('developer',{include:"projects"}),
      fields:['nom','prenom','pseudo','email'],
      operations:[{icon:'red remove',link:'developers.delete'},{icon:'edit',link:'developers.update'}]
    });
  }
});
