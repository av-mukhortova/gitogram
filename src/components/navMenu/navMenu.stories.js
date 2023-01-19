import { action } from '@storybook/addon-actions';
import navMenu from './navMenu.vue';

const methods = {
  onPressHome: action('click on home button'),
  onPressProfile: action('click on profile button'),
  onPressLogout: action('click on logout button'),
};

export default {
  title: 'NavMenu',
  components: { navMenu },
};

export const DefaultView = () => ({
  components: { navMenu },
  template: '<navMenu @onPressHome="onPressHome" @onPressProfile="onPressProfile" @onPressLogout="onPressLogout" />',
  methods,
});

DefaultView.story = {
  name: 'Стандартный вид',
};
