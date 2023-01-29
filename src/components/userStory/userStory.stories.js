import userStory from './userStory.vue';

export default {
  title: 'UserStory',
  components: { userStory },
  argTypes: {
    username: 'Andrew',
    avatar: 'https://i.ibb.co/bvmSwqm/piter.png',
  },
};

const Template = (args) => ({
  components: { userStory },
  data() {
    return { args };
  },
  template: '<userStory v-bind="args" />',
});

export const UserStory = Template.bind({});

UserStory.args = {
  avatar: 'https://i.ibb.co/bvmSwqm/piter.png',
  username: 'Andrew',
};
