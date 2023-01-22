<template>
  <div class="avatar" :style="avatarStyle">
    <img v-show="avatar" :src="avatar" alt="user avatar" />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    avatar: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 's',
    },
  },
  setup(props) {
    const style = {
      xs: {
        width: '32px',
        height: '32px',
      },
      s: {
        width: '44px',
        height: '44px',
      },
      m: {
        width: '72px',
        height: '72px',
      },
      l: {
        width: '90px',
        height: '90px',
      },
    };
    const avatarStyle = style[props.size];
    return { avatarStyle };
  },
};
</script>
<style lang="scss" scoped>
.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 100px;
}
</style>
