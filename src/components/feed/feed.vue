<template>
  <div class="c-feed">
    <div class="feed__author">
      <avatar :avatar="feed.avatar" />
      <span>{{ feed.username }}</span>
    </div>
    <div class="feed__content">
      <slot name="feedContent"></slot>
    </div>
    <div class="toggler">
      <toggler @onToggle="toggle" />
    </div>
    <div class="comments" v-if="shown && feed.issues.length > 0">
      <ul class="comments__list">
        <li class="comments__item" v-for="issue in feed.issues" :key="issue.id">
          <comment :text="issue.title" :username="issue.user.login" />
        </li>
      </ul>
    </div>
    <placeholder v-else-if="loading" :paragraphs="1" :image="false" />
  </div>
  <div class="feed__date">
    <span>{{ feed.date }}</span>
  </div>
</template>

<script>
import { toggler } from '../toggler';
import { comment } from '../comment';
import { avatar } from '../avatar';
import { placeholder } from '../placeholder';

export default {
  name: 'Feed',
  emits: ['onLoadIssues'],
  components: {
    toggler,
    comment,
    avatar,
    placeholder,
  },
  props: {
    feed: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      shown: false,
      loading: false,
    };
  },
  methods: {
    toggle(mode) {
      this.shown = mode.isOpen;
      const issuesLength = this.feed.issues ? this.feed.issues.length : 0;
      if (mode.isOpen && issuesLength === 0) {
        this.loading = true;
        this.$emit('onLoadIssues');
      } else {
        this.loading = false;
      }
    },
  },
};
</script>
<style lang="scss" src="./feed.scss" scoped></style>
