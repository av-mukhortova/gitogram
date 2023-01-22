import navMenu from './navMenu.vue';

export default {
  title: 'NavMenu',
  components: { navMenu },
  argTypes: {
    onPressHome: {
      action: 'onPressHome',
    },
    onPressProfile: {
      action: 'onPressProfile',
    },
    onPressLogout: {
      action: 'onPressLogout',
    },
  },
};

const Template = (args) => ({
  components: { navMenu },
  data() {
    return { args };
  },
  template: '<navMenu @onPressHome="args.onPressHome" @onPressProfile="args.onPressProfile" @onPressLogout="args.onPressLogout" />',
});

export const NavMenu = Template.bind({});
