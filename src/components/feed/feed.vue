<template>
  <div class="c-feed">
    <div class="feed__author">
      <avatar :avatar="feed.avatar" />
      <span>{{ feed.username }}</span>
    </div>
    <div class="feed__content">
      <slot name="feedContent"></slot>
    </div>
    <toggler @onToggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="comments__list">
        <li
          class="comments__item"
          v-for="comment in feed.comments"
          :key="comment.id"
        >
          <comment :text="comment.content" :username="comment.username" />
        </li>
      </ul>
    </div>
  </div>
  <div class="feed__date">
    <span>{{ feed.date }}</span>
  </div>
</template>

<script>
import { toggler } from '../toggler';
import { comment } from '../comment';
import { avatar } from '../avatar';

export default {
  name: 'Feed',
  components: { toggler, comment, avatar },
  props: {
    feed: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      shown: false,
    };
  },
  methods: {
    toggle(mode) {
      this.shown = mode.isOpen;
    },
  },
};
</script>
<style lang="scss" src="./feed.scss" scoped></style>
