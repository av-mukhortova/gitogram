<template>
  <button
    :class="['c-button', `theme-${theme}`, `size-${size}`, { 'hover-text': withHoverText }]"
    :data-hover-text="hoverText"
  >
    <div v-if="loading" class="c-button__loader">
      <spinner theme="light"></spinner>
    </div>
    <span v-else class="btn-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { spinner } from '../spinner';

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Button',
  components: { spinner },
  props: {
    hoverText: {
      type: String,
      default: undefined,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'green',
    },
    size: {
      type: String,
      default: 's',
    },
  },
  computed: {
    withHoverText() {
      return this.hoverText?.length;
    },
  },
};
</script>
<style lang="scss" scoped src="./button.scss"></style>
