import stats from './stats.vue';

export default {
  title: 'Stats',
  components: { stats },
  argTypes: {
    stars: '156k',
    forks: '4',
  },
};

const Template = (args) => ({
  components: { stats },
  data() {
    return { args };
  },
  template: '<stats v-bind="args"/>',
});

export const Stats = Template.bind({});

Stats.args = {
  stars: '156k',
  forks: '4',
};
