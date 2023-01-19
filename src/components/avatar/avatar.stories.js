import avatar from './avatar.vue';

export default {
  title: 'Avatar',
  components: { avatar },
};

export const SmallSize = () => ({
  components: { avatar },
  template: '<avatar avatar="andrew.png" size="s"/>',
});

SmallSize.story = {
  name: 'Маленький размер',
};

export const MediumSize = () => ({
  components: { avatar },
  template: '<avatar avatar="andrew.png" size="m"/>',
});

MediumSize.story = {
  name: 'Средний размер',
};

export const LargeSize = () => ({
  components: { avatar },
  template: '<avatar avatar="andrew.png" size="l"/>',
});

LargeSize.story = {
  name: 'Большой размер',
};
