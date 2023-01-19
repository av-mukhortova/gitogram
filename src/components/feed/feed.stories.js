import { text, array, withKnobs } from '@storybook/addon-knobs';
import feed from './feed.vue';

export default {
  title: 'Feed',
  components: { feed },
  decorators: [withKnobs],
};

export const DefaultView = () => ({
  components: { feed },
  props: {
    username: {
      default: text('Username', 'Andrew'),
    },
    author1: {
      default: text('Author 1', 'Author 1'),
    },
    comment1: {
      default: text('Comment 1', 'Some comment 1'),
    },
    author2: {
      default: text('Author 2', 'Author 2'),
    },
    comment2: {
      default: text('Comment 2', 'Some comment 1'),
    },
  },
  data() {
    return {
      comments: [{ id: '0', username: this.author1, content: this.comment1 },
        { id: '1', username: this.author2, content: this.comment2 }],
    };
  },
  template: `<feed :feed="{avatar: 'andrew.png', username: username, comments: comments}">
               <template #feedContent>Содержимое блока новостей</template>
             </feed>`,
});

DefaultView.story = {
  name: 'Стандартный вид',
};
