import card from './card.vue';

export default {
  title: 'Card',
  components: { card },
  argTypes: {
    title: 'Vue.js',
    desc: 'JavaScript framework for building interactive web applications',
    stars: '156k',
    forks: '4',
  },
};

const Template = (args) => ({
  components: { card },
  data() {
    return { args };
  },
  template: '<card v-bind="args"/>',
});

export const Card = Template.bind({});

Card.args = {
  title: 'Vue.js',
  desc: 'JavaScript framework for building interactive web applications',
  stars: '156k',
  forks: '4',
};
