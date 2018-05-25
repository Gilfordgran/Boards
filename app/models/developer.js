import DS from 'ember-data';

export default DS.Model.extend({
  nom:DS.attr('string'),
  prenom:DS.attr('string'),
  email:DS.attr('string'),
  password:DS.attr('string'),
  genre:DS.attr('string'),
  pseudo:DS.attr('string'),
  projects: DS.hasMany('project', {inverse: 'developers'}),

  toString:function(){
    return this.get('pseudo');
  }
});
