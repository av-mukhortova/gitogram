import comment from './comment.vue';

export default {
  title: 'Comment',
  components: { comment },
  argTypes: {
    text: 'Enable performance measuring in production, at the user\'s request',
    username: 'joshua_l',
  },
};

const Template = (args) => ({
  components: { comment },
  data() {
    return { args };
  },
  template: '<comment v-bind="args" />',
});

export const Comment = Template.bind({});

Comment.args = {
  text: 'Enable performance measuring in production, at the user\'s request',
  username: 'joshua_l',
};
