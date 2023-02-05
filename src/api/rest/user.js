import { makeRequest } from '../requests';

export const getUserData = () => makeRequest({
  url: '/user',
});
