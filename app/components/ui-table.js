import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  classNames: ['ui single line table'],
  tagName: 'table',
  fields:[],
  operations:[],
  size: computed('fields.length','operations.length',function(){
    let size=this.get('fields').length;
    if(this.get('operations').length)
      size+=1;
    return size;
  }),
  didReceiveAttrs() {
    this._super(...arguments);
    const fields = this.get('fields');
    let newFields=[];
    fields.forEach(field=>{
      if(typeof field=='string'){
        newFields.push({name:field.charAt(0).toLowerCase() + field.slice(1),caption:field.charAt(0).toUpperCase() + field.slice(1)});
      }else
        newFields.push(field);
    });
    this.set('fields',newFields);
  }
});
