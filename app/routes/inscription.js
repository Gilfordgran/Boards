import Route from '@ember/routing/route';
import {get} from  '@ember/object';
import {inject as service} from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
    model(){
        return RSVP.hash({
            notifications   : service('notification-messages'),
            genre           :['Masculin','Féminin'],
        });
    },
    actions:{
        save() {
            let model           = this.modelFor(this.routeName);
            let notifications   = get(model,"notifications");

            let dataDev = {
                "nom"       : get(model, 'nom'),
                "prenom"    : get(model, 'prenom'),
                "email"     : get(model, 'email'),
                "password"  : get(model, 'password'),
                "genre"     : get(model, 'genre'),
                "pseudo"    : get(model, 'pseudo'),
            };

            if(get(model, 'nom') !== undefined && get(model, 'prenom') !== undefined && get(model, 'pseudo') !== undefined
                && get(model, 'email') !== undefined && get(model, 'password') !== undefined
                && get(model, 'passwordConfirm') !== undefined)
            {
                if(get(model, 'password') === get(model, 'passwordConfirm')){
                    let newDeveloper = this.get('store').createRecord('developer',dataDev);
                    newDeveloper.save().then(()=>{this.transitionTo("developers");});
                    notifications.success('Inscription réussite');
                } else {
                    notifications.error('Les mots de passe ne correspondent pas');
                }
            } else {
                notifications.error('Tous les champs ne sont pas remplis');
            }
        }
    }
});
