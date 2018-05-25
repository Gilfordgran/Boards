import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';
import Ember from 'ember';


export default Route.extend({
    model(){
        return RSVP.hash({
        });
    },
    actions: {
        save() {

        },
        cancel() {
            this.transitionTo("project.developers");
        }
    }
});
