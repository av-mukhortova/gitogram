import { text, withKnobs } from '@storybook/addon-knobs';
import card from './card.vue';

export default {
  title: 'Card',
  components: { card },
  decorators: [withKnobs],
};

export const DefaultView = () => ({
  components: { card },
  props: {
    title: {
      default: text('Title', 'Vue.js'),
    },
    desc: {
      default: text('Description', 'JavaScript framework for building interactive web applications'),
    },
    stars: {
      default: text('Star', '156k'),
    },
    forks: {
      default: text('Fork', '4'),
    },
  },
  template: '<card :title="title" :desc="desc" :stars="stars" :forks="forks"/>',
});

DefaultView.story = {
  name: 'Стандартный вид',
};
