import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth';
  if (authRoute) {
    next();
    return;
  }
  try {
    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    });
    if (response.status === 401) throw new Error();
    next();
  } catch (error) {
    next({ name: 'auth' });
  }
});

export default router;
