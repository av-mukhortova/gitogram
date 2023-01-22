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
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <userStory :avatar="story.avatar" :username="story.username" />
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
import { topline } from '../../components/topline';
import { userStory } from '../../components/userStory';
import stories from './data.json';
import { logo } from '../../components/logo';
import { navMenu } from '../../components/navMenu';
import { feed } from '../../components/feed';
// import feeds from './feeds.json';
import { card } from '../../components/card';
import * as api from '../../api';

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
  data() {
    return {
      stories,
      feeds: [],
    };
  },
  methods: {
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
    try {
      const { data } = await api.trandings.getTrendings();
      this.feeds = data.items;
    } catch (error) {
      // console.log(error);
    }
  },
};
</script>
<style lang="scss" src="./feeds.scss" scoped></style>
