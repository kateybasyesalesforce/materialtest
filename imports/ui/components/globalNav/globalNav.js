import './globalNav.html';



// Template.globalNav.onCreated(function globalNavOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

isActiveRoute = function(routeName) {
	const active = ActiveRoute.name(routeName)
    && FlowRouter.getRouteName() === routeName;
  return active && 'slds-is-active';
}

Template.globalNav.helpers({
  isActiveRouteHome() {
  	return isActiveRoute('App.home');
  },
  isActiveRouteComp() {
  	return isActiveRoute('App.component');
  },
  menuObjects(){
  	return ["Leads", "Tasks", "Files", "Accounts", "Contacts", "Campaigns", "Dashboards", "Reports", "Chatter", "Groups"];
  }
});

// Template.globalNav.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
