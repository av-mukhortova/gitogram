<template>
  <div class="c-menu">
    <button class="c-menu-home" @click="$emit('onPressHome')">
      <icon class="home" name="home" />
    </button>
    <button class="c-menu-profile" @click="$emit('onPressProfile')">
      <icon class="profile" name="profile" />
    </button>
    <button class="c-menu-logout" @click="$emit('onPressLogout')">
      <icon class="logout" name="logout" />
    </button>
  </div>
</template>

<script>
import { icon } from '../../icons';

export default {
  name: 'NavMenu',
  components: { icon },
};
</script>
<style lang="scss" src="./navMenu.scss" scoped></style>
