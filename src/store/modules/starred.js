import * as api from '../../api';

export default {
  namespaced: true,
  state: {
    data: {},
  },
  mutations: {
    SET_STARRED: (state, payload) => {
      state.data = payload;
    },
    SET_ISSUES: (state, { id, data }) => {
      state.data = state.data.map((repo) => {
        const currentRepo = repo;
        if (repo.id === id) {
          currentRepo.issues = data.issues;
        }
        return currentRepo;
      });
    },
  },
  getters: {
    getRepoById: (state) => (id) => state.data.find((item) => item.id === id),
  },
  actions: {
    async fetchStarred({ commit }, payload) {
      const { data } = await api.starred.getStarredRepos({ limit: payload.limit });
      commit('SET_STARRED', data);
    },
    async fetchIssues({ commit }, { id, owner, repo }) {
      commit('SET_ISSUES', {
        id,
        data: {
          issues: [],
          loading: true,
          error: '',
        },
      });
      try {
        const { data } = await api.issues.getIssues({ owner, repo });
        commit('SET_ISSUES', {
          id,
          data: {
            issues: data,
            loading: false,
            error: '',
          },
        });
      } catch (e) {
        commit('SET_ISSUES', {
          id,
          data: {
            issues: [],
            loading: false,
            error: 'Error!!!',
          },
        });
      }
    },
  },
};
