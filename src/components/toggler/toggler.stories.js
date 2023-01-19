import { action } from '@storybook/addon-actions';
import toggler from './toggler.vue';

const methods = {
  onToggle: action('toggle'),
};

export default {
  title: 'Toggler',
  component: toggler,
};

export const DefaultView = () => ({
  components: { toggler },
  template: '<toggler @onToggle="onToggle"></toggler>',
  methods,
});

DefaultView.story = {
  name: 'Стандартный вид',
};
