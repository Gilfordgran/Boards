import DS from 'ember-data';

export default DS.Model.extend({
  identity: DS.attr('string'),
  nom:DS.attr('string'),
  prenom:DS.attr('string'),
  email:DS.attr('string'),
  password:DS.attr('string'),
  genre:DS.attr('string'),
  pseudo:DS.attr('string'),
  projects: DS.hasMany('project',{inverse:'owner'}),
  toString:function(){
    return this.get('identity');
  }
});
