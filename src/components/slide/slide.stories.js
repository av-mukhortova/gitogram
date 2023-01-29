import slide from './slide.vue';

export default {
  title: 'Slide',
  component: slide,
  argTypes: {
    avatar: 'https://i.ibb.co/bvmSwqm/piter.png',
    username: 'React.reposit',
    content: '',
    active: false,
    loading: false,
    onNextSlide: {
      action: 'onNextSlide',
      description: 'goes to next slide',
    },
    onPrevSlide: {
      action: 'onPrevSlide',
      description: 'goes to prev slide',
    },
    onProgressFinish: {
      action: 'onProgressFinish',
      description: 'goes to next slide',
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'light', value: '#e5e5e5' },
      ],
    },
  },
};

const Template = (args) => ({
  components: { slide },
  data() {
    return { args };
  },
  template: `<slide
              :data="{userAvatar: args.avatar, username: args.username, content: args.content}"
              :active="args.active"
              :btnsShown="['next','prev']"
              :loading="args.loading"
              @onNextSlide="args.onNextSlide"
              @onPrevSlide="args.onPrevSlide"
              @onProgressFinish="args.onProgressFinish"
            />`,
});

export const Slide = Template.bind({});

Slide.args = {
  avatar: 'https://i.ibb.co/bvmSwqm/piter.png',
  username: 'React.reposit',
  content: '',
  active: true,
  loading: false,
};
