import './pageHeader.html';

Template.pageHeader.helpers({
  pageHeaderFields: function(){
  	console.log(Session.get('pageHeader'))
		return Session.get('pageHeader');
  },
  opptyName: function(){
		return Session.get('opptyName');
  },
  isLink: function(label){
  	if(label == 'Account Name' || label == 'Owner') {
  		return true
  	}
  	else { return false }
  }
})


// Template.globalNav.onCreated(function globalNavOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.globalNav.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.globalNav.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
