import * as api from '../../api';

export default {
  namespaced: true,
  state: {
    data: [],
    loading: false,
  },
  mutations: {
    SET_REPOS: (state, payload) => {
      state.data = payload;
    },
    SET_LOADING: (state, payload) => {
      state.loading = payload;
    },
  },
  actions: {
    async fetchRepos({ commit }) {
      commit('SET_LOADING', true);
      try {
        const { data } = await api.user.getUserRepos();
        commit('SET_REPOS', data);
      } catch (e) {
        throw e;
      }
      commit('SET_LOADING', false);
    },
  },
};
