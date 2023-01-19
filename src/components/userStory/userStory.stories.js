import { text, withKnobs } from '@storybook/addon-knobs';
import userStory from './userStory.vue';

export default {
  title: 'UserStory',
  components: { userStory },
  decorators: [withKnobs],
};

export const DefaultView = () => ({
  components: { userStory },
  props: {
    username: {
      default: text('Username', 'Some name'),
    },
  },
  template: '<userStory avatar="andrew.png" :username="username" />',
});

DefaultView.story = {
  name: 'Стандартный вид',
};
