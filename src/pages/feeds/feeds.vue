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
        <feed :feed="feed">
          <template #feedContent>
            <card :title="feed.title" :desc="feed.content" :stars="feed.stars" :forks="feed.forks"/>
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
import feeds from './feeds.json';
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
  data() {
    return {
      stories,
      feeds,
    };
  },
};
</script>
<style lang="scss" src="./feeds.scss" scoped></style>
