import user from './user.vue';

export default {
  title: 'User',
  component: user,
  argTypes: {
    avatar: 'https://i.ibb.co/bvmSwqm/piter.png',
    username: 'React.reposit',
    size: {
      options: ['xs', 's', 'm', 'l'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => ({
  components: { user },
  data() {
    return { args };
  },
  template: '<user v-bind="args"></user>',
});

export const User = Template.bind({});

User.args = {
  avatar: 'https://i.ibb.co/bvmSwqm/piter.png',
  username: 'React.reposit',
  size: 'xs',
};
