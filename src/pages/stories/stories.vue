<template>
  <div class="wrapper">
    <header class="header">
      <div class="x-container">
        <button class="logo" @click="$router.push('/')">
          <logo color="white" />
        </button>
        <button class="close-btn" @click="$router.push('/')">
          <icon class="close-icon" name="close" color="white" />
        </button>
      </div>
    </header>
    <div class="content">
      <slider :initialSlide="Number($route.params.initialSlide)"/>
    </div>
  </div>
</template>

<script>
import { logo } from '../../components/logo';
import { icon } from '../../icons';
import { slider } from '../../components/slider';

export default {
  components: { logo, icon, slider },
};
</script>

<style lang="scss" src="./stories.scss" scoped></style>
