window.App = Ember.Application.create({
  VERSION: '0.0.1',
  LOG_TRANSITIONS: true,
  rootElement: '#body',
  ready: function() {

  }
});

/**
 * Router
 */
App.Router.map(function() {
    this.resource("story");
});

/**
 * Routes
 */
App.IndexRoute = Em.Route.extend({
  model: function() {
      return;
  }
});

App.StoryRoute = Em.Route.extend({
  model: function() {
      return ;
  }
});


/**
 * Controllers
 */

App.IndexController = Em.ObjectController.extend({
    title: 'SCRIMSHANK'
});

/**
 * Models
 */
// App.Index = DS.Model.extend({
//   title: DS.attr('string')
// });






// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
