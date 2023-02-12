<template>
  <div class="following-header">
    <div class="title">Following</div>
    <div class="count">{{ starred.length }}</div>
  </div>
  <div class="loader" v-if="isLoading">
    <spinner />
  </div>
  <ul class="following">
    <li class="following-item" v-for="item in starred" :key="item.id">
      <user
        :avatar="item.owner.avatar_url"
        :username="item.owner.login"
        size="m"
      ></user>
      <x-button
        :theme="item.following ? 'green' : 'grey'"
        :hoverText="item.following ? 'Unfollowed' : 'Following'"
        @click="clickBtn(item)"
      >
        {{ item.following ? 'Following' : 'Unfollowed' }}
      </x-button>
    </li>
  </ul>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { spinner } from '../../components/spinner';
import { user } from '../../components/user';
import { button as xButton } from '../../components/button';

export default {
  name: 'Following',
  components: { spinner, user, xButton },
  setup() {
    const { dispatch, state } = useStore();

    const clickBtn = (item) => {
      if (item.following) dispatch('starred/unstarRepo', item.id);
      else dispatch('starred/starRepo', item.id);
    };

    return {
      starred: computed(() => state.starred.data),
      clickBtn,
      isLoading: computed(() => state.starred.loading),
    };
  },
};
</script>

<style lang="scss" src="./following.scss" scoped></style>
