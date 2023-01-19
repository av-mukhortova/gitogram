import { text, withKnobs } from '@storybook/addon-knobs';
import comment from './comment.vue';

export default {
  title: 'Comment',
  components: { comment },
  decorators: [withKnobs],
};

export const DefaultView = () => ({
  components: { comment },
  props: {
    text: {
      default: text('Text', 'Some text'),
    },
    username: {
      default: text('Username', 'Some name'),
    },
  },
  template: '<comment :text="text" :username="username" />',
});

DefaultView.story = {
  name: 'Стандартный вид',
};
