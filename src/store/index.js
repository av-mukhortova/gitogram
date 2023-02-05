/* eslint-disable max-len */
import { createStore } from 'vuex';
import trendings from './modules/trendings';
import user from './modules/user';
import auth from './modules/auth';
import starred from './modules/starred';

export default createStore({
  getters: {
    getUnstarredOnly(state) {
      if (Object.keys(state.trendings.data).length) {
        return state.trendings.data.filter((trendingsRepo) => !state.starred.data.some((starredRepo) => trendingsRepo.id === starredRepo.id));
      }
      return null;
    },
  },
  modules: {
    trendings,
    user,
    auth,
    starred,
  },
});
