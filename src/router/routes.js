import { feeds } from '../pages/feeds';
import { stories } from '../pages/stories';

export default [{
  path: '/',
  name: 'home',
  component: feeds,
}, {
  path: '/stories',
  name: 'stories',
  component: stories,
}];
