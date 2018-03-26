import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  tagName: 'div',
  classNames: ['ui selection dropdown'],
  selected:'',
  attributeBindings: ['placeholder','name'],

  name: '',
  placeholder: '',
  selectedElements: Ember.computed('selected', function() {
    let selectedIds=this.get('selected');
    debugger
    selectedIds=selectedIds.split(',');
    return selectedIds.map((id) => {
      return this.get('elements').findBy('id', id);
    });
  }),
  didRender() {
    this._super(...arguments);
    this.$().dropdown();
  }
});
