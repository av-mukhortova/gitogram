<template>
  <div class="repos-header">
    <div class="title">Repositories</div>
    <div class="count">{{ repos.length }}</div>
  </div>
  <div class="loader" v-if="isLoading">
    <spinner />
  </div>
  <ul class="repos">
    <li class="repo" v-for="repo in repos" :key="repo.id">
      <card
        :title="repo.name"
        :desc="repo.description"
        :stars="repo.stargazers_count"
        :forks="repo.forks_count"
      />
    </li>
  </ul>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { card } from '../../components/card';
import { spinner } from '../../components/spinner';

export default {
  name: 'Repos',
  components: { card, spinner },
  setup() {
    const { state } = useStore();
    const repos = computed(() => state.repos.data);
    const isLoading = computed(() => state.repos.loading);

    return {
      isLoading,
      repos,
    };
  },
};
</script>

<style lang="scss" src="./repos.scss" scoped></style>
