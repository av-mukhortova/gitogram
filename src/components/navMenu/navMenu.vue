<template>
  <div class="c-menu">
    <button class="c-menu-home" @click="$emit('onPressHome')">
      <icon class="home" name="home" />
    </button>
    <button class="c-menu-profile" @click="$emit('onPressProfile')">
      <avatar v-if="avatar" :avatar="avatar" size="xs"></avatar>
      <icon v-else class="profile" name="profile" />
    </button>
    <button class="c-menu-logout" @click="$emit('onPressLogout')">
      <icon class="logout" name="logout" />
    </button>
  </div>
</template>

<script>
import { icon } from '../../icons';
import { avatar } from '../avatar';

export default {
  name: 'NavMenu',
  emits: ['onPressHome', 'onPressProfile', 'onPressLogout'],
  components: { icon, avatar },
  props: {
    avatar: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss" src="./navMenu.scss" scoped></style>
