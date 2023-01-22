<template>
  <div class="c-user">
    <avatar :avatar="avatar" :size="size" />
    <span>{{ username }}</span>
  </div>
</template>

<script>
import { avatar } from '../avatar';

export default {
  name: 'User',
  components: { avatar },
  props: {
    avatar: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 's',
    },
    username: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped src="./user.scss"></style>
