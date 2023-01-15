<template>
  <button class="c-user-story" @click="$emit('onPress')">
    <div class="avatar">
      <img :src="require(`../../assets/${avatar}`)" class="img" alt="user avatar" />
    </div>
    <div class="username">{{ username }}</div>
  </button>
</template>

<script>

export default {
  name: 'UserStory',
  props: {
    avatar: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" src="./userStory.scss" scoped></style>
