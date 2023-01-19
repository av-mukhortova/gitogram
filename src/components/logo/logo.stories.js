import logo from './logo.vue';

export default {
  title: 'Logo',
  components: { logo },
};

export const DefaultView = () => ({
  components: { logo },
  template: '<div style="width: 174px;cursor: pointer;"><logo /></div>',
});

DefaultView.story = {
  name: 'Стандартный вид',
};
