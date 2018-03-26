import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';
import Ember from 'ember';


export default Route.extend({
  model(params){
    return RSVP.hash({
      story: EmberObject.create(),
      project: this.get('store').findRecord('project',params.project_id),
      developers: this.get('store').findAll('developer'),
      idDeveloper:[],
      idTags:[],
      tags: this.get('store').findAll('tag'),
      colors:['black','blue','green','orange','pink','purple','red','teal','yellow','positive','negative'],
      tag: EmberObject.create({})
    });
  },
  actions:{
    didTransition() {
      Ember.run.next(this, 'initUI');
    },
    save(oldStory, story){
      let model = this.modelFor(this.routeName);
      let project=Ember.get(model,'project');
      story = this.get('store').createRecord('story',{code: story.code, description:story.description,project:project});
      let idDeveloper = Ember.get(model, 'idDeveloper');
      let dev = Ember.get(model, 'developers').find(dev => dev.id == idDeveloper);
      story.set('developer', dev);

      let idTags=Ember.get(model,'idTags');
      let tags=Ember.get(model,'tags').filter((item, index, self) => idTags.includes(item.id));
      story.set('tags',tags);
      let self=this;
      story.save().then(()=>{
        project.save().then(()=>{self.transitionTo("project",project);});
      });
    },
    cancel(){
      let model = this.modelFor(this.routeName);
      let project=Ember.get(model,'project');
      this.transitionTo("project",project);
    },
    newTag(tag){
      tag=this.get('store').createRecord('tag',{title:tag.title,color:tag.color});
      let self=this;
      tag.save().then(()=>{
        let model = self.modelFor(this.routeName);
        Ember.$('#ddTags').dropdown('set selected',tag.id);
        Ember.set(model,'tag',EmberObject.create({}));
      });
    }
  },
  initUI() {
    Ember.$('.ui.dropdown').dropdown();
    }
});
