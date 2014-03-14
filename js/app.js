window.App = Ember.Application.create();

/**
 * Router
 */
App.Router.map(function() {
    // this.resource('stories');
    // this.resource('story', { path: '/:id'});
    this.resource('stories', { path: '/'});
    this.resource('story', { path: ':story_id'});
});

/**
 * Routes
 */
App.ApplicationRoute = Ember.Route.extend({
  setupController: function() {
    this.controllerFor('report').set('model', this.store.findAll('report'));
  }
});

App.IndexRoute = Ember.Route.extend({
  // redirect: function() {
  //   this.transitionTo('stories');
  // },
  // model: function() {
  //     return App.STORIESDATA;
  // }
});

App.StoriesRoute = Ember.Route.extend({
  model: function() {
      return this.store.findAll('story');
  }
});

// App.StoryRoute = Ember.Route.extend({
//   model: function(params) {
//     return this.store.find('story', params.story_id);
//   }
// });


/**
 * Controllers
 */

// App.IndexController = Ember.ArrayController.extend({

// });

// App.StoriesController = Ember.ArrayController.extend({
//   // needs: [],
// });

App.ReportController = Ember.ArrayController.extend();

/**
 * Models
 */

/**
 * Data
 */
App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Story = DS.Model.extend({
  heading: DS.attr('string'),
  subheading: DS.attr('string'),
  teaserContent: DS.attr('string'),
  postedDate: DS.attr('date'),
  blogs: DS.hasMany('blog', {async: true}),
  reports: DS.hasMany('report', {async: true})
});


App.Story.FIXTURES = [
    {
        id: 1,
        heading: 'Story 1',
        subheading: 'Subheading 1',
        teaserContent: 'Teaser Content 1',
        postedDate: '01/07/2014',
        blogs: [100, 101],
        reports: [200, 201]
    },
    {
        id: 2,
        heading: 'Story 2',
        subheading: 'Subheading 2',
        teaserContent: 'Teaser Content 2',
        postedDate:'01/07/2014',
        blogs: [102, 103],
        reports: [202, 203]
    }
];

App.Blog = DS.Model.extend({
  name: DS.attr('string'),
  report: DS.hasMany('report', {async: true}),
  story: DS.belongsTo('story')
});

App.Blog.FIXTURES = [
    {
        id: 100,
        name: 'Kotaku',
        story: 1
    },
    {
        id: 101,
        name: 'Polygon',
        story: 1
    },
    {
        id: 102,
        name: 'Joystiq',
        story: 2
    },
    {
        id: 103,
        name: 'Gamespot',
        story: 2
    }
];

App.Report = DS.Model.extend({
  content: DS.attr('string'),
  postedDate: DS.attr('date'),
  blog: DS.belongsTo('blog'),
  story: DS.belongsTo('story')
});

App.Report.FIXTURES = [
    {
        id: 200,
        content: "This is awesome.",
        postedDate: '01/07/2014',
        blog: 100,
        story: 1
    },
    {
        id: 201,
        content: "This is cool.",
        postedDate: '01/07/2014',
        blog: 101,
        story: 1
    },
    {
        id: 202,
        content: "This is horrible.",
        postedDate: '01/07/2014',
        blog: 102,
        story: 2
    },
    {
        id: 203,
        content: "This is cats.",
        postedDate: '02/07/2014',
        blog: 103,
        story: 2
    }
]


// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
