import toggler from './toggler.vue';

export default {
  title: 'Toggler',
  component: toggler,
  argTypes: {
    onToggle: {
      action: 'onToggle',
    },
  },
};

const Template = (args) => ({
  components: { toggler },
  data() {
    return { args };
  },
  template: '<toggler @onToggle="args.onToggle"></toggler>',
});

export const Toggler = Template.bind({});
