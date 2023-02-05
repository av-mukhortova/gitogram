import * as api from '../../api';

export default {
  namespaced: true,
  state: {},
  actions: {
    async getToken(store, code) {
      const { data } = await api.auth.getTokenByCode(code);
      return data.token;
    },
  },
};
