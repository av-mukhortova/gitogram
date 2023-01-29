import spinner from './spinner.vue';

export default {
  title: 'Spinner',
  component: spinner,
};

const Template = (args) => ({
  components: { spinner },
  data() {
    return { args };
  },
  template: '<spinner />',
});

export const Spinner = Template.bind({});
