import avatar from './avatar.vue';

export default {
  title: 'Avatar',
  component: avatar,
  argTypes: {
    size: {
      options: ['xs', 's', 'm', 'l'],
      control: { type: 'radio' },
    },
    avatar: 'https://i.ibb.co/bvmSwqm/piter.png',
  },
};

const Template = (args) => ({
  components: { avatar },
  data() {
    return { args };
  },
  template: '<avatar v-bind="args"/>',
});

export const Avatar = Template.bind({});

Avatar.args = {
  size: 's',
  avatar: 'https://i.ibb.co/bvmSwqm/piter.png',
};
