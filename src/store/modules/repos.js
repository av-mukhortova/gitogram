import * as api from '../../api';

export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    SET_REPOS: (state, payload) => {
      state.data = payload;
    },
  },
  actions: {
    async fetchRepos({ commit }) {
      try {
        const { data } = await api.user.getUserRepos();
        commit('SET_REPOS', data);
      } catch (e) {
        throw e;
      }
    },
  },
};
