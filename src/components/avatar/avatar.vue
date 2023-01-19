<template>
  <div class="avatar" :style="avatarStyle">
    <img :src="require(`../../assets/${avatar}`)" alt="user avatar" />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    avatar: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 's',
    },
  },
  setup(props) {
    const style = {
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
}
</style>
