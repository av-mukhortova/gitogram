<template>
  <div class="c-slide" :class="{ active }">
    <div class="c-slide__header">
      <x-progress :active="active" @onFinish="$emit('onProgressFinish')" />
      <div class="c-slide__owner">
        <user :avatar="data.userAvatar" size="xs" :username="data.username" />
      </div>
    </div>
    <div class="c-slide__content">
      <div class="loader" v-if="loading">
        <spinner />
      </div>
      <div v-else class="info">
        <div
          v-if="data.content?.length"
          class="content-text"
          v-html="data.content"
        ></div>
        <placeholder v-else :paragraphs="2" />
      </div>
    </div>
    <div class="c-slide__footer">
      <div class="c-slide__btn">
        <x-button hover-text="Unfollow">Follow</x-button>
      </div>
    </div>
    <template v-if="active">
      <button
        v-if="btnsShown.includes('prev')"
        class="btn btn-prev"
        @click="$emit('onPrevSlide')"
      >
        <span class="icon">
          <icon name="arrow" />
        </span>
      </button>
      <button
        v-if="btnsShown.includes('next')"
        class="btn btn-next"
        @click="$emit('onNextSlide')"
      >
        <span class="icon">
          <icon name="arrow" />
        </span>
      </button>
    </template>
  </div>
</template>

<script>
import { progress as xProgress } from '../progress';
import { button as xButton } from '../button';
import { user } from '../user';
import { spinner } from '../spinner';
import { placeholder } from '../placeholder';
import { icon } from '../../icons';

export default {
  name: 'Slide',
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish'],
  components: {
    xProgress,
    xButton,
    user,
    spinner,
    placeholder,
    icon,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator(value) {
        return value.every((item) => item === 'next' || item === 'prev');
      },
    },
    data: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped src="./slide.scss"></style>
