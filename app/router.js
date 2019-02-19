import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // two way to create a route, if its different name use this;
  this.route('about', {path:'about'}); 
  // if using the same name use this;
  this.route('contact');
  this.route('services');
  this.route('posts', {path:'/posts'}, function(){
    this.route('new');
    this.route('post', {path:':post_id'});
  })

});

export default Router;
