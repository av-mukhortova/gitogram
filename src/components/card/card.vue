<template>
  <div class="card">
    <div class="class__title_wrap">
      <h2 class="card__title">{{ title }}</h2>
    </div>
    <div class="card__desc_wrap">
      <div class="card__desc">
        <span v-html="desc"></span>
      </div>
    </div>
    <div class="card__stats">
      <stats :stars="stars" :forks="forks"/>
    </div>
  </div>
</template>
<script>
import { stats } from '../stats';

export default {
  name: 'Card',
  components: { stats },
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: '',
    },
    stars: {
      type: [Number, String],
      default: 0,
    },
    forks: {
      type: [Number, String],
      default: 0,
    },
  },
};
</script>
<style lang="scss" src="./card.scss" scoped></style>
