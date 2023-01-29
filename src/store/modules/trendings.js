import * as api from '../../api';

export default {
  namespaced: true,
  state: {
    data: {},
  },
  mutations: {
    SET_TRENDINGS: (state, payload) => {
      state.data = payload;
    },
    SET_README: (state, payload) => {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.readme = payload.content;
        }
        return repo;
      });
    },
  },
  getters: {
    getRepoById: (state) => (id) => state.data.find((item) => item.id === id),
  },
  actions: {
    async fetchTrendings({ commit }) {
      const { data } = await api.trandings.getTrendings();
      commit('SET_TRENDINGS', data.items);
    },
    async fetchReadme({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id);
      if (curRepo.readme !== undefined) return;
      const { data } = await api.readme.getReadme({ owner, repo });
      commit('SET_README', { id, content: data });
    },
  },
};
