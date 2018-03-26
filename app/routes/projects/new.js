import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import Ember from 'ember';
import projectBase from '../../utils/project-base';

export default Route.extend({
  templateName: 'projects/frm',
  model(){
    return RSVP.hash({
      newProject: projectBase.create(),
      developers: this.get('store').findAll('developer'),
      isNew:true
    });
  },
  actions: {
    save(oldProject,newProject) {
      let model = this.modelFor(this.routeName);
      newProject = this.get('store').createRecord('project',{name: newProject.name,description:newProject.description,dueDate:newProject.dueDate,startDate:new Date(newProject.startDate)});
      let idDeveloper = Ember.get(model, 'idDeveloper');
      let dev = Ember.get(model, 'developers').find(dev => dev.id == idDeveloper);
      newProject.set('owner', dev);
      newProject.save().then(
        ()=>{this.transitionTo("projects");});
    },
    cancel(){
      this.transitionTo("projects");
    }
  }
});
