<template>
  <div class="c-slider">
    <div class="c-slider__header">
      <x-progress />
      <div class="c-slider__owner">
        <user :avatar="avatar" size="xs" :username="title"/>
      </div>
    </div>
    <div class="c-slider__content">
      <slot></slot>
    </div>
    <div class="c-slider__footer">
      <div class="c-slider__btn">
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
  name: 'Slider',
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
<style lang="scss" scoped src="./slider.scss"></style>
