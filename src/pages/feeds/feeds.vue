<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="topline-headline">
          <div class="logo">
            <logo />
          </div>
          <div class="menu">
            <navMenu
              :avatar="user.avatar_url"
              @onPressHome="$router.push({ name: 'home' })"
              @onPressProfile="$router.push({ name: 'repos' })"
            />
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li
            class="stories-item"
            v-for="feed in getUnstarredOnly"
            :key="feed.id"
          >
            <userStory
              :avatar="feed.owner.avatar_url"
              :username="cutUsername(feed.owner.login)"
              @onPress="
                $router.push({
                  name: 'stories',
                  params: { initialSlide: feed.id },
                })
              "
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="newsline">
    <ul class="feeds">
      <li class="feeds-item" v-for="feed in starred" :key="feed.id">
        <feed
          :feed="getFeedData(feed)"
          @onLoadIssues="fetchIssues({ id: feed.id, owner: feed.owner.login, repo: feed.name })"
        >
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
import { mapState, mapActions, mapGetters } from 'vuex';
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
      user: (state) => state.user.data,
      starred: (state) => state.starred.data,
    }),
    ...mapGetters(['getUnstarredOnly']),
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchStarred: 'starred/fetchStarred',
      getUser: 'user/getUser',
      fetchIssues: 'starred/fetchIssues',
    }),
    getFeedData(item) {
      return {
        title: item.name,
        desc: item.description,
        username: item.owner.login,
        stars: item.stargazers_count,
        forks: item.forks_count,
        avatar: item.owner.avatar_url,
        issues: item.issues,
        date: new Date(item.created_at).toLocaleString('en-EN', { month: 'short', day: 'numeric' }),
      };
    },
    cutUsername(name) {
      return name.length > 18 ? `${name.substring(1, 15)}...` : name;
    },
  },
  async created() {
    this.getUser();
    this.fetchTrendings();
    this.fetchStarred({ limit: 10 });
  },
};
</script>
<style lang="scss" src="./feeds.scss" scoped></style>
