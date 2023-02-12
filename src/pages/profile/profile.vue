<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="topline-headline">
          <div class="logo">
            <logo @click="$router.push({ name: 'home' })" />
          </div>
          <div class="menu">
            <navMenu
              :avatar="user.avatar_url"
              @onPressLogout="logout"
              @onPressHome="$router.push({ name: 'home' })"
              @onPressProfile="$router.push({ name: 'repos' })"
            />
          </div>
        </div>
      </template>
    </topline>
    <div class="x-container">
      <div class="content">
        <div class="left-side">
          <h2 class="user-title">My profile</h2>
          <user :avatar="user.avatar_url" size="l">
            <div class="user-info">
              <span class="user-login">{{ user.login }}</span>
              <div v-if="!isLoading" class="user-links">
                <div>
                  <router-link :to="{ name: 'repos' }" class="repos-link">
                    <span class="link-value">{{ user.public_repos }}</span>
                    <span class="link-desc">repositories</span>
                  </router-link>
                </div>
                <div>
                  <router-link :to="{ name: 'following' }" class="following-link">
                    <span class="link-value">{{ followings }}</span>
                    <span class="link-desc">following</span>
                  </router-link>
                </div>
              </div>
              <div v-else class="placeholder"></div>
            </div>
          </user>
        </div>
        <div class="right-side">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref, computed, onMounted } from 'vue';
import { topline } from '../../components/topline';
import { logo } from '../../components/logo';
import { navMenu } from '../../components/navMenu';
import { user } from '../../components/user';

export default {
  name: 'ProfilePage',
  components: {
    topline,
    logo,
    navMenu,
    user,
  },
  setup() {
    const { dispatch, state } = useStore();
    const isLoading = ref(false);

    onMounted(() => {
      isLoading.value = true;
      dispatch('user/getUser');
      dispatch('starred/fetchStarred').then(() => {
        isLoading.value = false;
      });
    });
    return {
      user: computed(() => state.user.data),
      followings: computed(() => state.starred.data.length),
      isLoading,
    };
  },
};
</script>

<style lang="scss" src="./profile.scss" scoped></style>
