import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-avav-согласие-l');
  this.route('i-i-s-avav-согласие-e',
  { path: 'i-i-s-avav-согласие-e/:id' });
  this.route('i-i-s-avav-согласие-e.new',
  { path: 'i-i-s-avav-согласие-e/new' });
  this.route('i-i-s-avav-сотрудники-l');
  this.route('i-i-s-avav-сотрудники-e',
  { path: 'i-i-s-avav-сотрудники-e/:id' });
  this.route('i-i-s-avav-сотрудники-e.new',
  { path: 'i-i-s-avav-сотрудники-e/new' });
});

export default Router;
