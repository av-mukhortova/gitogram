import { makeRequest } from '../requests';

export const getUserData = () => makeRequest({
  url: '/user',
});

export const getUserRepos = () => makeRequest({
  url: '/user/repos',
});
