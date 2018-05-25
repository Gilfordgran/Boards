import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model(){
        return RSVP.hash({
            fields:['nom','prenom','pseudo','email'],
            operations:[{icon:'red remove',link:'project.developers.delete'}]
        });
    }
});
