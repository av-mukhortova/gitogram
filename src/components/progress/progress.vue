<template>
  <div :class={active} class="c-progress">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  emits: ['onFinish'],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    emitOnFinish() {
      this.$emit('onFinish');
    },
  },
  mounted() {
    /* с nextTick полоса сразу зеленая, анимации нет =( */
    /* this.$nextTick(() => {
      this.active = true;
    }); */
    setTimeout(() => {
      this.active = true;
    }, 0);
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish);
  },
  beforeUnmount() {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish);
  },
};
</script>
<style lang="scss" src="./progress.scss" scoped></style>
