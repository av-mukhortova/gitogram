import { feeds } from '../pages/feeds';
import { stories } from '../pages/stories';
import { auth } from '../pages/auth';
import { profile } from '../pages/profile';
import { repos } from '../pages/repos';
import { following } from '../pages/following';

export default [{
  path: '/',
  name: 'home',
  component: feeds,
}, {
  path: '/stories',
  name: 'stories',
  component: stories,
}, {
  path: '/auth',
  name: 'auth',
  component: auth,
}, {
  path: '/profile',
  name: 'profile',
  component: profile,
  children: [{
    path: '',
    component: repos,
    name: 'repos',
    props: {
      title: 'Repositories',
    },
  }, {
    path: 'following',
    component: following,
    name: 'following',
    props: {
      title: 'Following',
    },
  }],
}];
