import { text, withKnobs } from '@storybook/addon-knobs';
import stats from './stats.vue';

export default {
  title: 'Stats',
  components: { stats },
  decorators: [withKnobs],
};

export const DefaultView = () => ({
  components: { stats },
  props: {
    stars: {
      default: text('Star', '156k'),
    },
    forks: {
      default: text('Fork', '4'),
    },
  },
  template: '<stats :stars="stars" :forks="forks"/>',
});

DefaultView.story = {
  name: 'Стандартный вид',
};
