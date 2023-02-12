import * as api from '../../api';

export default {
  namespaced: true,
  state: {
    data: {},
    loading: false,
  },
  mutations: {
    SET_STARRED: (state, payload) => {
      state.data = payload.map((repo) => {
        repo.following = true;
        return repo;
      });
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
    SET_FOLLOWING: (state, payload) => {
      state.data = state.data.map((repo) => {
        const currentRepo = repo;
        if (payload.id === currentRepo.id) {
          currentRepo.following = payload.following;
        }
        return currentRepo;
      });
    },
    SET_LOADING: (state, payload) => {
      state.loading = payload;
    },
  },
  getters: {
    getRepoById: (state) => (id) => state.data.find((item) => item.id === id),
  },
  actions: {
    async fetchStarred({ commit }, payload) {
      commit('SET_LOADING', true);
      const { data } = await api.starred.getStarredRepos({ limit: payload?.limit });
      commit('SET_STARRED', data);
      commit('SET_LOADING', false);
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
    async starRepo({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id);
      await api.starred.starRepo({ owner: owner.login, repo });
      commit('SET_FOLLOWING', {
        id,
        following: true,
      });
    },
    async unstarRepo({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id);
      await api.starred.unStarRepo({ owner: owner.login, repo });
      commit('SET_FOLLOWING', {
        id,
        following: false,
      });
    },
  },
};
