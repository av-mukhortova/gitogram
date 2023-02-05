<template>
  <div
    class="spinner"
    :class="{
      spinner__primary: theme === 'primary',
      spinner__light: theme === 'light',
    }"
  ></div>
</template>

<script>

export default {
  name: 'Spinner',
  props: {
    theme: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style lang="scss" src="./spinner.scss" scoped></style>
