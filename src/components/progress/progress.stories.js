import progress from './progress.vue';

export default {
  title: 'Progress',
  component: progress,
  argTypes: {
    active: false,
    onFinish: {
      action: 'onFinish',
      description: 'fires when progress reaches the end',
    },
  },
};

const Template = (args) => ({
  components: { xProgress: progress },
  data() {
    return { args };
  },
  template: '<x-progress :active="args.active" @onFinish="args.onFinish"/>',
});

export const Progress = Template.bind({});

Progress.args = {
  active: true,
};
