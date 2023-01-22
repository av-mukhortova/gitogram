import button from './button.vue';

export default {
  title: 'Button',
  component: button,
  argTypes: {
    hoverText: 'Unfollow',
  },
};

const Template = (args) => ({
  components: { xButton: button },
  data() {
    return { args };
  },
  template: '<x-button v-bind="args">Follow</x-button>',
});

export const Button = Template.bind({});

Button.args = {
  hoverText: 'Unfollow',
};
