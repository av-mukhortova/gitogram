<template>
  <feeds>
    <template v-slot:header>
      <topline />
    </template>
  </feeds>
</template>

<script>
import { feeds } from './pages/feeds';
import { topline } from './components/topline';

export default {
  name: 'App',
  components: {
    feeds,
    topline,
  },
};
</script>

<style src="./global.scss" lang="scss"></style>
