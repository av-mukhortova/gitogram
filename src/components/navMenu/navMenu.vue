<template>
  <div class="c-menu">
    <button class="c-menu-home" @click="$emit('onPressHome')">
      <icon class="home" name="home" />
    </button>
    <button class="c-menu-profile" @click="$emit('onPressProfile')">
      <avatar v-if="avatar" :avatar="avatar" size="xs"></avatar>
      <icon v-else class="profile" name="profile" />
    </button>
    <button class="c-menu-logout" @click="logout">
      <icon class="logout" name="logout" />
    </button>
  </div>
</template>

<script>
import { icon } from '../../icons';
import { avatar } from '../avatar';

export default {
  name: 'NavMenu',
  emits: ['onPressHome', 'onPressProfile'],
  components: { icon, avatar },
  props: {
    avatar: {
      type: String,
      default: '',
    },
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      window.location.reload();
    },
  },
};
</script>
<style lang="scss" src="./navMenu.scss" scoped></style>
