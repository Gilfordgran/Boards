import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import Ember from 'ember';
import EmberObject from '@ember/object';

export default Route.extend({
  templateName: 'projects/frm',
  model(params){
    return RSVP.hash({
      oldProject: this.get('store').findRecord('project',params.project_id),
      developers: this.get('store').findAll('developer')
    });
  },
  afterModel(model){
    let newProject=EmberObject.create(JSON.parse(JSON.stringify(model.oldProject)));
    newProject.set('startDate',new Date(model.oldProject.get('startDate')));
    newProject.set('dueDate',new Date(model.oldProject.get('dueDate')));
    Ember.set(model,'newProject',newProject);
    Ember.set(model,'idDeveloper',model.oldProject.get('owner').get('id'));
  },
  actions: {
    save(oldProject,newProject) {
      let model = this.modelFor(this.routeName);
      oldProject.set('name',newProject.name);
      oldProject.set('description',newProject.description);
      oldProject.set('startDate',newProject.startDate);
      oldProject.set('dueDate',newProject.dueDate);
      let idDeveloper = Ember.get(model, 'idDeveloper');
      let dev = Ember.get(model, 'developers').find(dev => dev.id == idDeveloper);
      oldProject.set('owner', dev);
      oldProject.save().then(
        ()=>{this.transitionTo("projects");});
    },
    cancel(){
      this.transitionTo("projects");
    }
  }
});
