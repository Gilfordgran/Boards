import EmberObject,{observer} from '@ember/object';

export default EmberObject.extend({
  startDate: new Date(),
  startDateChanged: observer('startDate', function() {
    let nd=new Date();
    nd.setDate(this.get('startDate').getDate()+30);
    this.set('dueDate',nd);
  })
});
