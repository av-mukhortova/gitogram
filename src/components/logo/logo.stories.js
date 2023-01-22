import logo from './logo.vue';

export default {
  title: 'Logo',
  components: { logo },
};

const Template = () => ({
  components: { logo },
  template: '<div style="width: 174px;cursor: pointer;"><logo /></div>',
});

export const Logo = Template.bind({});
