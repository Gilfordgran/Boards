import Route from '@ember/routing/route';
import {get} from  '@ember/object';
import {inject as service} from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
    model(){
        return RSVP.hash({
            notifications   : service('notification-messages'),
        });
    },
    actions:{
        connexion() {
            let model           = this.modelFor(this.routeName);
            let notifications   = get(model,"notifications");

            let dataDev = {
                "pseudo"    : get(model, 'pseudo'),
                "password"  : get(model, 'password'),
            };

            if(get(model, 'pseudo') !== undefined && get(model, 'password') !== undefined) {
                if(get(model, 'pseudo') === get(model, 'password')){
                    notifications.success('Connexion réussite');
                } else {
                    notifications.error('Pseudo ou/et mot de passe incorrect');
                }
            } else {
                notifications.error('Tous les champs ne sont pas remplis');
            }
        }
    }
});