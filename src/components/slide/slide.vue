<template>
  <div class="c-slide">
    <div class="c-slide__header">
      <x-progress />
      <div class="c-slide__owner">
        <user :avatar="avatar" size="xs" :username="title"/>
      </div>
    </div>
    <div class="c-slide__content">
      <slot></slot>
    </div>
    <div class="c-slide__footer">
      <div class="c-slide__btn">
        <x-button hover-text="Unfollow">Follow</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { progress as xProgress } from '../progress';
import { button as xButton } from '../button';
import { user } from '../user';

export default {
  name: 'Slide',
  components: { xProgress, xButton, user },
  props: {
    avatar: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped src="./slide.scss"></style>
