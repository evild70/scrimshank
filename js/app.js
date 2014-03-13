window.App = Ember.Application.create();

/**
 * Router
 */
App.Router.map(function() {
    this.resource('stories');
    this.resource('story', { path: '/stories/:id'});
    // this.resource('stories', function() {
    //   this.resource('story', { path: ':id'});
    // });

});

/**
 * Routes
 */
App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('stories');
  },
  model: function() {
      return App.STORIESDATA;
  }
});

App.StoriesRoute = Ember.Route.extend({
  model: function() {
      return App.STORIESDATA;
  }
});

App.StoryRoute = Ember.Route.extend({
  model: function(params) {
    return App.STORIESDATA.findBy('id', params.id);
  }
});


/**
 * Controllers
 */

App.IndexController = Ember.ArrayController.extend({

});

App.StoriesController = Ember.ArrayController.extend({
  // needs: [],
});


/**
 * Models
 */

App.STORIESDATA = [
    {
        id: '1',
        heading: 'Story 1',
        subheading: 'Subheading 1',
        teaserContent: 'Teaser Content 1',
        listOfSites: ['Kotaku', 'Polygon', 'Joystiq', 'Gamespot'],
        freshness: 1
    },
    {
        id: '2',
        heading: 'Story 2',
        subheading: 'Subheading 2',
        teaserContent: 'Teaser Content 2',
        listOfSites: ['Joystiq', 'Gamespot'],
        freshness: 2
    }
];






// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
