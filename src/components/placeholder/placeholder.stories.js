import placeholder from './placeholder.vue';

export default {
  title: 'Placeholder',
  component: placeholder,
  argTypes: {
    paragraphs: 0,
  },
};

const Template = (args) => ({
  components: { placeholder },
  data() {
    return { args };
  },
  template: '<placeholder :paragraphs="args.paragraphs"/>',
});

export const Placeholder = Template.bind({});

Placeholder.args = {
  paragraphs: 1,
};
