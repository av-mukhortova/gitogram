<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="topline-headline">
          <div class="logo">
            <logo />
          </div>
          <div class="menu">
            <navMenu />
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li
            class="stories-item"
            v-for="feed in feeds"
            :key="feed.id"
          >
            <userStory
              :avatar="feed.owner.avatar_url"
              :username="feed.owner.login.length > 18 ?
              `${feed.owner.login.substring(1,15)}...` :
              feed.owner.login"
              @onPress="$router.push({name: 'stories', params: {initialSlide: feed.id}})"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="newsline">
    <ul class="feeds">
      <li class="feeds-item" v-for="feed in feeds" :key="feed.id">
        <feed :feed="getFeedData(feed)">
          <template #feedContent>
            <card
              :title="feed.name"
              :desc="feed.description"
              :stars="feed.stargazers_count"
              :forks="feed.forks_count"
            />
          </template>
        </feed>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { topline } from '../../components/topline';
import { userStory } from '../../components/userStory';
import { logo } from '../../components/logo';
import { navMenu } from '../../components/navMenu';
import { feed } from '../../components/feed';
import { card } from '../../components/card';

export default {
  name: 'Feeds',
  components: {
    topline,
    logo,
    navMenu,
    userStory,
    feed,
    card,
  },
  computed: {
    ...mapState({
      feeds: (state) => state.trendings.data,
    }),
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
    }),
    getFeedData(item) {
      return {
        title: item.name,
        desc: item.description,
        username: item.owner.login,
        stars: item.stargazers_count,
        forks: item.forks_count,
        avatar: item.owner.avatar_url,
        comments: [],
      };
    },
  },
  async created() {
    this.fetchTrendings();
  },
};
</script>
<style lang="scss" src="./feeds.scss" scoped></style>
