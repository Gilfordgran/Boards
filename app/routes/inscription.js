import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import Ember from 'ember';

export default Route.extend({
    model(){
        return RSVP.hash({
            notifications: Ember.inject.service('notification-messages'),
            genre:['Masculin','Féminin'],
            condition: "Ember.get(model, 'password') === Ember.get(model, 'passwordConfirm') " +
                "&& Ember.get(model, 'password') !== undefined " +
                "&& Ember.get(model, 'passwordConfirm') !== undefined"
        });
    },
    actions:{
        save() {
            let model   = this.modelFor(this.routeName);

            let dataDev = {
                "nom": Ember.get(model, 'nom'),
                "prenom": Ember.get(model, 'prenom'),
                "email": Ember.get(model, 'email'),
                "password": Ember.get(model, 'password'),
                "genre": Ember.get(model, 'genre'),
                "pseudo": Ember.get(model, 'pseudo'),
            };

            if(this.condition){
                let newDeveloper = this.get('store').createRecord('developer',dataDev);
                newDeveloper.save().then(()=>{this.transitionTo("developers");});
            } else {
                this.get('notifications').error('Les deux mots de passe ne correspondent pas');
            }
        }
    }
});
