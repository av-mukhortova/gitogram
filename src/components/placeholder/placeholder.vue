<template>
  <div class="c-placeholder">
    <div class="c-placeholder__img"></div>
    <ul>
      <li class="c-placeholder__paragraph" v-for="n in paragraphs" :key="n">
          <div class="c-placeholder__item"></div>
          <div class="c-placeholder__item"></div>
          <div class="c-placeholder__item"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Placeholder',
  props: {
    paragraphs: {
      type: Number,
      default: 2,
    },
  },
};
</script>

<style lang="scss" src="./placeholder.scss" scoped></style>
