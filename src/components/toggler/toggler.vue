<template>
  <button
    :class="['button', { active: isOpened }]"
    @click="toggle"
  >
    <span class="text">{{ isOpened ? 'Hide issues' : 'View issues' }}</span>
    <span class="icon">
      <icon name="triangle" />
    </span>
  </button>
</template>

<script>
import { icon } from '../../icons';

export default {
  name: 'Toggler',
  emits: ['onToggle'],
  components: { icon },
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    toggle() {
      this.isOpened = !this.isOpened;
      this.$emit('onToggle', { isOpen: this.isOpened });
    },
  },
};
</script>
<style lang="scss" src="./toggler.scss" scoped></style>
