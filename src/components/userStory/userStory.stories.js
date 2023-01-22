import userStory from './userStory.vue';

export default {
  title: 'UserStory',
  components: { userStory },
  argTypes: {
    username: 'Andrew',
    avatar: {
      options: ['andrew.png', 'camille.png', 'can.png', 'diself.png', 'josh.png'],
      control: { type: 'select' },
    },
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
  avatar: 'andrew.png',
  username: 'Andrew',
};
