import { makeRequest } from '../requests';
import env from '../../../env';

export const getTokenByCode = (code) => makeRequest({
  url: 'https://webdev-api.loftschool.com/github',
  method: 'post',
  data: {
    code,
    clientId: env.clientId,
    clientSecret: env.clientSecret,
  },
});
