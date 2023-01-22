import feed from './feed.vue';
import card from '../card/card.vue';

export default {
  title: 'Feed',
  components: { feed },
  subComponents: { card },
  argTypes: {
    username: 'Andrew',
    avatar: 'https://i.ibb.co/bvmSwqm/piter.png',
    title: 'Vue.js',
    desc: 'JavaScript framework for building interactive web applications',
    stars: '156k',
    forks: '4',
    author1: 'Author 1',
    comment1: 'Some comment 1',
    author2: 'Author 2',
    comment2: 'Some comment 2',
  },
};

const Template = (args) => ({
  components: { feed, card },
  data() {
    return {
      args,
      comments: [
        { id: '0', username: args.author1, content: args.comment1 },
        { id: '1', username: args.author2, content: args.comment2 },
      ],
    };
  },
  template: `<feed :feed="{avatar: args.avatar, username: args.username, comments: comments}">
               <template #feedContent>
                 <card v-bind="args"/>
               </template>
             </feed>`,
});

export const Feed = Template.bind({});

Feed.args = {
  username: 'Andrew',
  avatar: 'https://i.ibb.co/bvmSwqm/piter.png',
  title: 'Vue.js',
  desc: 'JavaScript framework for building interactive web applications',
  stars: '156k',
  forks: '4',
  author1: 'Author 1',
  comment1: 'Some comment 1',
  author2: 'Author 2',
  comment2: 'Some comment 2',
};
