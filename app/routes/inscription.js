import Route from '@ember/routing/route';
import {get} from  '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
    model(){
        return RSVP.hash({
            genre           :['Masculin','Féminin'],
        });
    },
    actions:{
        save() {
            let model           = this.modelFor(this.routeName);
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
                    console.log("Succés");
                } else {
                    console.log('Les mots de passe ne correspondent pas');
                }
            } else {
                console.log('Tous les champs ne sont pas remplis');
            }
        }
    }
});
