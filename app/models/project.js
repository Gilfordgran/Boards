import DS from 'ember-data';
import {computed} from '@ember/object';

export default DS.Model.extend({
  name:DS.attr('string'),
  description:DS.attr('string'),
  startDate:DS.attr('date'),
  dueDate:DS.attr('date'),
  owner:DS.belongsTo('developer'),
  stories:DS.hasMany('story'),
  sDate: computed('startDate',function(){
    if(this.get('startDate'))
      return this.get('startDate').toLocaleDateString();
  }),
  dDate: computed('dueDate',function(){
    if(this.get('dueDate'))
      return this.get('dueDate').toLocaleDateString();
  })
});
