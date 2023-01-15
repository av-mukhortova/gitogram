<template>
<div class="c-topline">
  <div class="x-container">
    <div class="headline">
      <slot name="headline"></slot>
    </div>
    <div class="content" v-if="$slots.content">
      <slot name="content"></slot>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Topline',
};
</script>

<style lang="scss" src="./topline.scss" scoped>
</style>
